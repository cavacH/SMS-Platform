import java.util.*;

import edu.stanford.nlp.tagger.maxent.MaxentTagger;
import edu.stanford.nlp.util.Pair;
import java.sql.*;

public class TermExtractor {
    private MaxentTagger tagger;
    private Connection conn;
    private HashMap<String, String> dict;
    private FuzzyStringMatcher matcher;
    private int tolerance;
    
    public TermExtractor() {
        this.tagger = new MaxentTagger(Config.get("taggerPath"));
        this.dict = new HashMap<String, String>();
        Set<String> source = new HashSet<String>();
        
        try {
        	Class.forName("com.mysql.cj.jdbc.Driver");
    		String URI = String.format("jdbc:mysql://%s:3306/%s", Config.get("host"), Config.get("db"));
    		this.conn = DriverManager.getConnection(URI, Config.get("user"), Config.get("passwd"));
    		Statement stmt = conn.createStatement();
    		ResultSet rs = stmt.executeQuery("select * from terms");
    		while(rs.next()) {
    			String term = rs.getString(1);
    			String def = rs.getString(2);
    			source.add(term);
    			this.dict.put(term, def);
    		}
        } catch(Exception e) {
        	System.out.println(e);
        }
        
        this.matcher = new FuzzyStringMatcher(source);
        this.tolerance = Integer.parseInt(Config.get("maxAllowedEditDistance"));
    }
    
    public List<Pair<String, String>> query(String sentence) {
        String[] tagged = this.tagger.tagString(sentence).split("\\s+");
        List<Pair<String, String>> info = new ArrayList<Pair<String, String>>();
        for(String entry : tagged) {
            String[] parsed = entry.split("_");
            info.add(new Pair<String, String>(parsed[0], parsed[1]));
        }
        List<String> candidates = new ArrayList<String>();
        for(int i = info.size() - 1; i >= 0; i--) {
            Pair<String, String> word = info.get(i);
            if(word.second.startsWith("NN")) {
                List<String> adjectives = new ArrayList<String>();
                adjectives.add(word.first);
                int curIndex = i - 1;
                while(curIndex >= 0 && adjectives.size() < 4) {
                    Pair<String, String> adjCandidate = info.get(curIndex);
                    if(adjCandidate.second.startsWith("NN")) {
                        adjectives.add(adjCandidate.first);
                        curIndex--;
                    }
                    else break;
                }
                while(curIndex >= 0 && adjectives.size() < 4) {
                    Pair<String, String> adjCandidate = info.get(curIndex);
                    if(adjCandidate.second.equals("JJ")) {
                        adjectives.add(adjCandidate.first);
                        curIndex--;
                    }
                    else break;
                }
                Collections.reverse(adjectives);
                String prefix = "";
                for(int j = 0; j < adjectives.size(); j++) {
                    prefix += adjectives.get(j);
                    if(j < adjectives.size() - 1) {
                        prefix += ' ';
                    }
                }
                candidates.add(prefix.toLowerCase());
                i = curIndex + 1;
            }
        }
        Set<String> uniqueCand = new HashSet<String>(candidates);
        List<Pair<String, String>> ans = new ArrayList<Pair<String, String>>();
        for(String x : uniqueCand) {
        	if(this.dict.containsKey(x)) {
        		ans.add(new Pair<String, String>(x, this.dict.get(x)));
        	}
            else {
                List<String> res = this.matcher.query(x, this.tolerance);
                for(String y : res) {
                    String fuzzyDef = this.dict.get(y);
                    assert(fuzzyDef != null);
                    ans.add(new Pair<String, String>(y, fuzzyDef));
                }
            }
        }
        return ans;
    }
}

package termExtractor;
import java.io.FileNotFoundException;
import java.util.*;
import edu.stanford.nlp.util.Pair;
import java.sql.*;

public class Test {
    public static void main(String args[]) {
        // initialize configurations with config file path
        Config.init("configs/settings.conf");	
     
        // TermExtractor.query(String)
        // Input: a sentence to be queried
        // Output: a list of pair of extracted terms and corresponding definitions(not simplified)
        // Support fuzzy matching
        TermExtractor extractor = new TermExtractor();
        List<Pair<String, String>> out = extractor.query("tell me what is the definition of vyrus");
        for(Pair<String, String> x : out) {
            System.out.println(x);
        }
    }
}

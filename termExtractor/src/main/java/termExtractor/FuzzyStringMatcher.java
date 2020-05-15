package termExtractor;
import java.util.*;

public class FuzzyStringMatcher {
    private BKTree tree;
    public FuzzyStringMatcher(Set<String> source) {
        this.tree = new BKTree();
        for(String word : source) {
            this.tree.add(word);
        }
    }
    public List<String> query(String candidate, int tolerance) {
        List<String> res = this.tree.query(candidate, tolerance);
        res.sort((String x, String y) -> this.tree.editDistance(x, candidate) - this.tree.editDistance(y, candidate));
        return res.subList(0, Math.min(res.size(), Integer.parseInt(Config.get("maxSuggestedCandidates"))));
    }
}

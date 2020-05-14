import java.util.*;

public class BKTree {
	
	private class BKTreeNode {
		private String data;
		private HashMap<Integer, BKTreeNode> childs;
		public BKTreeNode(String _data) {
			this.data = _data;
			this.childs = new HashMap<Integer, BKTreeNode>();
		}
	}
	
	private BKTreeNode root;
	
	public BKTree() {
		this.root = null;
	}
	
	public void add(String word) {
		if(this.root == null) {
			this.root = new BKTreeNode(word);
			return;
		}
		addTo(this.root, word);
	}
	
	public List<String> query(String candidate, int tolerance) {
		List<String> ans = new ArrayList<String>();
		queryTo(this.root, candidate, tolerance, ans);
		return ans;
	}
	
	private void queryTo(BKTreeNode subroot, String candidate, int tolerance, List<String> ans) {
		if(subroot == null) {
			return;
		}
		int curDist = editDistance(subroot.data, candidate);
		if(curDist <= tolerance) {
			ans.add(subroot.data);
		}
		for(int avaiDist = Math.max(1, curDist - tolerance); avaiDist <= curDist + tolerance; avaiDist++) {
			if(subroot.childs.containsKey(avaiDist)) {
				BKTreeNode next = subroot.childs.get(avaiDist);
				queryTo(next, candidate, tolerance, ans);
			}
		}
	}
	
	private void addTo(BKTreeNode subroot, String word) {
		int curDist = editDistance(subroot.data, word);
		if(!subroot.childs.containsKey(curDist)) {
			subroot.childs.put(curDist, new BKTreeNode(word));
			return;
		}
		BKTreeNode next = subroot.childs.get(curDist);
		addTo(next, word);
	}
	
	public int editDistance(String a, String b) {
		int n = a.length(), m = b.length();
		int[][] dp = new int[n + 1][m + 1];
		for(int i = 0; i <= n; i++) {
			dp[i][0] = i;
		}
		for(int i = 0; i <= m; i++) {
			dp[0][i] = i;
		}
		for(int i = 1; i <= n; i++) {
			for(int j = 1; j <= m; j++) {
				if(a.charAt(i - 1) == b.charAt(j - 1)) {
					dp[i][j] = dp[i - 1][j - 1];
				}
				else {
					dp[i][j] = Math.min(dp[i - 1][j], Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
				}
			}
		}
		return dp[n][m];
	}
}

//Java Solution

class Solution {
    
    List<List<Integer>> result = new ArrayList<>();
    public List<List<Integer>> levelOrderBottom(TreeNode root) {
        int maxDepth = getMaxDepth(root, -1);
        for (int i = 0; i <= maxDepth; i++) {
            result.add(new ArrayList<Integer>());
        }
        dfs(root, maxDepth);
        
        return result;
    }
    
    public int getMaxDepth(TreeNode root, int level) {
        if (root == null) {
            return level;
        }
        
        return Math.max(getMaxDepth(root.left, level + 1), getMaxDepth(root.right, level + 1));
    }
    
    public void dfs(TreeNode node, int depth) {
        if (node == null) {
            return;
        }
        
        result.get(depth).add(node.val);
        
        dfs(node.left, depth - 1);
        dfs(node.right, depth - 1);
    }
}
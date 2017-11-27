public class Solution {

    public boolean validTree(int n, int[][] edges) {
        // write your code here
        if (n == 0) {
            return false;
        }
        
        if (edges.length != n - 1) {
            return false;
        }
        
        Map<Integer, Set<Integer>> graph = initilizeGraph(n, edges);
        
        Queue<Integer> q = new LinkedList<Integer>();
        Set<Integer> s = new HashSet<Integer>();
        q.offer(0);
        s.add(0);
        
        while (!q.isEmpty()) {
            int node = q.poll();
            for (Integer neighbor : graph.get(node)) {
                if (s.contains(neighbor)) {
                    continue;
                }
                s.add(neighbor);
                q.offer(neighbor);
                
            }
        }
        
        return (s.size() == n);
    }
    
    private Map<Integer, Set<Integer>> initilizeGraph (int n, int[][] edges) {
         Map<Integer, Set<Integer>> graph = new HashMap<>();
         for(int i = 0; i < n; i++) {
             graph.put(i, new HashSet<Integer>());
         }
         for(int i = 0; i < edges.length; i++) {
             int v = edges[i][0];
             int u = edges[i][1];
             graph.get(u).add(v);
             graph.get(v).add(u);
         }
         
         return graph;
    }
}
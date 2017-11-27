/**
 * Definition for undirected graph.
 * class UndirectedGraphNode {
 *     int label;
 *     ArrayList<UndirectedGraphNode> neighbors;
 *     UndirectedGraphNode(int x) { label = x; neighbors = new ArrayList<UndirectedGraphNode>(); }
 * };
 */


public class Solution {
    /*
     * @param node: A undirected graph node
     * @return: A undirected graph node
     */
    public UndirectedGraphNode cloneGraph(UndirectedGraphNode node) {
        // write your code here 
        if (node == null) {
            return node;
        }
        
        // get all nodes
        ArrayList<UndirectedGraphNode> nodes = getNodes(node);
        
        // copy nodes, store the old->new mapping information in a hash map
        Map<UndirectedGraphNode, UndirectedGraphNode> mapping = new HashMap<>();
        for (UndirectedGraphNode n : nodes) {
            mapping.put(n , new UndirectedGraphNode(n.label));
        }

        // copy neighbors(edges)
        for (UndirectedGraphNode n : nodes) {
            UndirectedGraphNode newNode = mapping.get(n);
            for (UndirectedGraphNode neighbor : n.neighbors) {
                UndirectedGraphNode newNeighbor = mapping.get(neighbor);
                newNode.neighbors.add(newNeighbor);
            }
        }
        return mapping.get(node);
    } 
    
    private ArrayList<UndirectedGraphNode> getNodes(UndirectedGraphNode node) {
        Queue<UndirectedGraphNode> q = new LinkedList<>();
        Set<UndirectedGraphNode> s = new HashSet<>();
        q.offer(node);
        s.add(node);
        
        while (!q.isEmpty()) {
            UndirectedGraphNode head = q.poll();
            for(UndirectedGraphNode neighbor : head.neighbors) {
                if (s.contains(neighbor)) {
                    continue;
                }
                s.add(neighbor);
                q.offer(neighbor);
            }
        }
        
        return new ArrayList<UndirectedGraphNode>(s);
    }
}
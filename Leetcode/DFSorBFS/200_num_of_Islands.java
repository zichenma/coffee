// https://www.youtube.com/watch?v=XSmgFKe-XYU
// Time O(nm) Space: O(nm)
// Ideas: (DFS) For every land, visit its neighbor lands using DFS until
// there is no such island, mark every visited node as 0.
// Steps:
// 1. Edege case
// 2. loop the matrix if ele == '1', res++
// 3. dfs
// 4. return res
// 5. dfs: 1.check boundary 2.check 4 neighbors

// DFS
class Solution1 {
    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) return 0;
        int row = grid.length, col = grid[0].length, res = 0;
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == '1') {
                    res ++;
                    dfs (grid, i, j, row, col);
                }
            }           
        }
        return res;
    }
    
    private void dfs (char[][] grid, int i, int j, int row, int col) {
        if (i < 0 || j < 0 || i >= row || j >= col || grid[i][j] == '0') return;
        grid[i][j] = '0';
        dfs(grid, i + 1, j, row, col);
        dfs(grid, i - 1, j, row, col);
        dfs(grid, i, j + 1, row, col);
        dfs(grid, i, j - 1, row, col);
    }
}
class Solution2 {

    private final int[] xDir = {1, 0, -1, 0};
    private final int[] yDir = {0, -1, 0, 1};

    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int row = grid.length;
        int col = grid[0].length;
        int result = 0;

        boolean[][] visited = new boolean[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == '0' || visited[i][j]) {
                    continue;
                }
                this.explore(i, j, row, col, grid, visited);
                result++;
            }
        }
        return result;
    }

    private void explore(int x, int y, int row, int col, char[][] grid, boolean[][] visited) {
        if (!shouldExplore(x, y, row, col, grid, visited)){
            return;
        }

        visited[x][y] = true;

        for (int i = 0; i < 4; i++) {
            this.explore(x + xDir[i], y + yDir[i], row, col, grid, visited);
        }
    }

    private boolean shouldExplore(int x, int y, int row, int col, char[][] grid, boolean[][] visited) {
        if (x >=0 && x < row && y >=0 && y < col && grid[x][y] == '1' && !visited[x][y]) {
            return true;
        }
        return false;
    }
}

// BFS
class Solution3 {

    private final int[] xDir = {1, 0, -1, 0};
    private final int[] yDir = {0, -1, 0, 1};

    public class Block {
        public int x;
        public int y;

        public Block (int x, int y) {
            this.x = x;
            this.y = y;
        }
    }

    public int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0 || grid[0].length == 0) {
            return 0;
        }
        int row = grid.length;
        int col = grid[0].length;
        int result = 0;

        boolean[][] visited = new boolean[row][col];
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (grid[i][j] == '0' || visited[i][j]) {
                    continue;
                }
                this.explore(i, j, row, col, grid, visited);
                result++;
            }
        }
        return result;
    }

    private void explore(int x, int y, int row, int col, char[][] grid, boolean[][] visited) {
        if (!shouldExplore(x, y, row, col, grid, visited)){
            return;
        }

        visited[x][y] = true;
        Queue<Block> queue = new LinkedList<Block>();

        queue.offer(new Block(x, y));

        while (queue.isEmpty()) {

            Block b = queue.poll();

            for (int i = 0; i < 4; i++) {
                int newX = b.x + xDir[i];
                int newY = b.y + yDir[i];

                if (this.shouldExplore(newX, newY, row, col, grid, visited)) {
                    visited[newX][newY] = true;
                    queue.offer(new Block(newX, newY));
                }
            }
        }
    }

    private boolean shouldExplore(int x, int y, int row, int col, char[][] grid, boolean[][] visited) {
        if (x >=0 && x < row && y >=0 && y < col && grid[x][y] == '1' && !visited[x][y]) {
            return true;
        }
        return false;
    }
}
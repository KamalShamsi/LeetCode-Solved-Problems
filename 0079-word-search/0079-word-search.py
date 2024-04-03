from typing import List

class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        if not board:
            return False

        m, n = len(board), len(board[0])

        def dfs(i, j, k):
            if k == len(word):
                return True
            if i < 0 or i >= m or j < 0 or j >= n or word[k] != board[i][j]:
                return False

            temp, board[i][j] = board[i][j], '/'  # Mark as visited
            res = (dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or 
                   dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1))
            board[i][j] = temp  # Reset the mark before returning
            return res

        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0):  # Start DFS from each cell
                    return True
        return False

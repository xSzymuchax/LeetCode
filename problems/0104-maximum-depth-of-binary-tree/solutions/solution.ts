/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    function DFS(node: TreeNode | null, depth: number): void {
        if (node == null) return;

        maxDepth = Math.max(depth, maxDepth);
        DFS(node.left, depth+1);
        DFS(node.right, depth+1);
    }

    let maxDepth = 0;
    DFS(root, 1);

    return maxDepth;
};

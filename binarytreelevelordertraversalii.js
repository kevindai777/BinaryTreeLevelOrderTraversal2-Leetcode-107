//Objective is the same as 'Binary Tree Level Order Traversal' except to 
//return the levels backwards

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(1)
tree.addLeftNode(tree.root, 2)
tree.addRightNode(tree.root, 5)
tree.addLeftNode(tree.root.left, 3)
tree.addRightNode(tree.root.right, 6)
tree.addRightNode(tree.root.left, 4)


//O(n) solution that does a preorder traversal over the tree

let result = []

//In this preorder function, we make a new array every single time we reach a new 'level'
//Every time we go left or right, we need to increase the 'level' by one
function dfs(node, level) {
    if (!node) {
        return
    }

    //If the level is unvisited, create an empty array to push values into
    let arr = result[level]
    if (!arr) {
        arr = []
        result[level] = arr
    }
    arr.push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
}
dfs(tree.root, 0)

return result.reverse()
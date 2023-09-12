class Node {
    constructor(val, neighbors) {
        this.val = val;
        this.neighbors = neighbors ? neighbors : [];
    }
}

function cloneGraph(node, visited = new Map()) {
    // Base case: if node is null
    if (!node) return null;

    // If the node was already visited, then return the clone from the visited map.
    if (visited.has(node)) return visited.get(node);

    // Create a clone for the given node and add it to the visited map.
    const cloneNode = new Node(node.val);
    visited.set(node, cloneNode);

    // Iterate through the neighbors to generate their clones and prepare a list of cloned neighbors to be added to the cloned node.
    for (let neighbor of node.neighbors) {
        cloneNode.neighbors.push(cloneGraph(neighbor, visited));
    }

    return cloneNode;
}

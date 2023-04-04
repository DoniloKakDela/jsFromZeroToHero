class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class List {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  addNode(value, i = null) {
    let currentNode = this.root;
    let index = 0;

    while (currentNode.next && (i === null || index < i)) {
      currentNode = currentNode.next;
      index++;
    }

    if (i !== null && index < i) {
      return false;
    }

    const newNode = new Node(value);
    newNode.next = currentNode.next;
    currentNode.next = newNode;

    return true;
  }

  removeNode(i = null) {
    if (!this.root.next) {
      return false;
    }

    let currentNode = this.root;
    let previousNode = null;
    let index = 0;

    while (currentNode.next && (i === null || index < i)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      index++;
    }

    if (i !== null && index < i) {
      return false;
    }

    if (i === null || index === i) {
      previousNode.next = currentNode.next;
      return true;
    }

    return false;
  }

  print() {
    let currentNode = this.root;
    const values = [];

    while (currentNode) {
      values.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(values.join(', '));
  }
}

const list = new List(1);

list.addNode(2);
list.addNode(4, 1);
list.addNode(3, 1);
list.removeNode(2);
list.addNode(5);

list.print(); // Output: 1, 2, 4, 5
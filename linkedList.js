export default class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let tail = this.getTail();
    tail.nextNode = new Node(value);
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    const oldHead = this.head;
    this.head = new Node(value, oldHead);
  }

  getSize() {
    let sizeCounter = 0;
    let currNode = this.getHead();
    while (currNode !== null) {
      currNode = currNode.nextNode;
      sizeCounter++;
    }

    return sizeCounter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    let tail = this.getHead();
    while (tail.nextNode !== null) {
      tail = tail.nextNode;
    }
    return tail;
  }

  at(index) {
    let currNode = this.getHead();
    for (let i = 0; i < index; i++) {
      currNode = currNode.nextNode;
    }

    return currNode ? currNode : null;
  }

  pop() {
    const secondToLastNode = this.at(this.getSize() - 2);
    if (!secondToLastNode) {
      return null;
    }

    secondToLastNode.nextNode = null;
  }

  contains(value) {
    let currNode = this.getHead();

    while (currNode !== null) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.nextNode;
    }

    return false;
  }

  find(value) {
    let currNode = this.getHead();
    let index = 0;
    while (currNode !== null) {
      if (currNode.value === value) {
        return index;
      }

      index++;
      currNode = currNode.nextNode;
    }

    return null;
  }

  toString() {
    let currNode = this.getHead();
    let result = "";
    while (currNode !== null) {
      if (currNode === this.getTail()) {
        result += `( ${currNode.value} ) -> null`;
      } else {
        result += `( ${currNode.value} ) -> `;
      }

      currNode = currNode.nextNode;
    }
    return result;
  }

  insertAt(value, index) {
    const lastIndex = this.getSize() - 1;
    if (index <= 0 || index > lastIndex) {
      return null;
    }

    const nodeBefore = this.at(index - 1);
    const nodeAfter = this.at(index);

    const newNode = new Node(value);
    nodeBefore.nextNode = newNode;
    newNode.nextNode = nodeAfter;
    return;
  }

  removeAt(index) {
    const lastIndex = this.getSize() - 1;
    if (index < 0 || index > lastIndex) {
      return;
    }

    const nodeAfter = this.at(index + 1);
    if (index === 0) {
      this.head = nodeAfter;
      return;
    }

    const nodeBefore = this.at(index - 1);
    nodeBefore.nextNode = nodeAfter;
    return;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.headNode) {
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    return this.headNode ? this.headNode.value : undefined;
  }

  tail() {
    if (!this.headNode) return undefined;

    let current = this.headNode;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0) return undefined;

    let current = this.headNode;
    let i = 0;

    while (current) {
      if (i === index) return current.value;
      current = current.nextNode;
      i++;
    }
    return undefined;
  }

  pop() {
    if (!this.headNode) return undefined;

    if (!this.headNode.nextNode) {
      const value = this.headNode.value;
      this.headNode = null;
      return value;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode) {
      current = current.nextNode;
    }

    const value = current.nextNode.value;
    current.nextNode = null;
    return value;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return false;
  }

  findIndex(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }
    return -1;
  }

  toString() {
    if (!this.headNode) return "";

    let result = "";
    let current = this.headNode;

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    return result + "null";
  }


  insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    let current = this.headNode;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    let next = current.nextNode;
    for (const value of values) {
      const newNode = new Node(value);
      current.nextNode = newNode;
      current = newNode;
    }
    current.nextNode = next;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    current.nextNode = current.nextNode.nextNode;
  }
}




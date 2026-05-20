

class Node {
  constructor(value){
    this.data = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  // helper method which creates a new node to
  // inserted and calls insertNode
  insert(data) {

    // Creating a node and initializing with data
    const newNode = new Node(data)

    // root is null, then node will be added to the tree and made root
    if(this.root === null)
      this.root = newNode
    else
      // find the correct position in the tree
      // and add the node
      this.insertNode(this.root, newNode)
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the code
    // data move left of the tree
    if(newNode.data < node.data)
    {
      // if left is null insert node here
      if(node.left === null)
        node.left = newNode
      else
        //if left is not null recur until null is found
        this.insertNode(node.left, newNode)
    }
    // if the data is more than the no
    // data move right of the tree
    else
    {
      // if right is null insert node here
      if(node.right === null)
        node.right = newNode
      else
        //if right is not null recur until null is found
        this.insertNode(node.right, newNode)
    }

  }

  // helper method that calss the removeNode with a give data
  remove(data) {
    // root is re-initialized  with
    // root of a modified tree
    this.root = this.removeNode(this.root, data)
  }

  // Method to remove node with a given data
  // it recur over the tree to find the data and removes it
  removeNode(node, key){
    // if the root is null then tree is empty
    if(node === null){
      return null
    }
    // if data to be delete is less than root data then move to left subtree
    else if(key < node.data)
    {
      node.left = this.removeNode(node.left, key)
      return node
    }
    // if data to be deleted is greater than root data then move to right subtree
    else if (key > node.data)
    {
      node.right = this.removeNode(node.right, key)
      return node
    }
    // if data is similar to the root's data then delete this node
    else
    {
      // deleting node with no children
      if(node.left === null && node.right === null){
        node = null
        return  node
      }

      // deleting node with on children
      if(node.left === null)
      {
        node = node.right;
        return node
      }
      else if(node.right === null)
      {
        node = node.left;
        return node
      }

      // deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      const aux = this.findMinNode(node.right)
      node.data = aux.data

      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node)
  {
    // if left of a node is null
    // then it must be minimum node
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }
}

import { faker } from '@faker-js/faker';

const bst = new BinarySearchTree()
for (let i = 1; i < 100; i++) {
  bst.insert(i)
  bst.insert(i -1 )

  if (i === 5)
    bst.remove(i)
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  //
  // const toBeRemoved = faker.number.int({ max: 100 })
  // bst.insert(toBeRemoved)
  //
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // bst.insert(faker.number.int({ max: 100 }))
  // console.log(bst)
  //
  // bst.remove(toBeRemoved)
  // console.log(bst)

}

console.log(bst)

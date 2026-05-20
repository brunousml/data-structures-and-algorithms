// Contructor to initialize a new node with data
class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null
    }
}

class NodeList {
    head = null;

    constructor(_head) {
        this.head = _head
    }

    printOut() {
        // print linked list
        let temp = this.head;
        while (temp != null) {
            console.log(temp.data);
            temp = temp.next;
        }
    }

    traverseList() {
        while (this.head != null) {
            process.stdout.write(this.head.data.toString());
            if(this.head.next !== null) {
                process.stdout.write(" -> ");
            }

            this.head = this.head.next
        }

        console.log();
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode
        return newNode
    }
}

function printLinkedList(head) {
    // print linked list
    let temp = head;
    while (temp != null) {
        console.log(temp.data);
        temp = temp.next;
    }

}

// Function to traverse and print the singly linked list
function traverseList(head) {
    while (head != null) {
        process.stdout.write(head.data.toString());
        if(head.next !== null) {
            process.stdout.write(" -> ");
        }

        head = head.next
    }

    console.log();
}

function recursiveTraverseList(head) {

    // base condition is when the head is null
    if (head == null) {
        console.log();
        return;
    }

    // printing the current node data
    process.stdout.write(head.data.toString());

    // print arrow if not the last node
    if(head.next !== null)
        process.stdout.write(" -> ");

    // moving to the next node
    recursiveTraverseList(head.next)
}

// Create the first node (head of the list)
let head = new Node(10);
// Link the second node
head.next = new Node(20);
// Link the third node
head.next.next = new Node(30);
// Link the fourth node
head.next.next.next = new Node(40);


const nodeList = new NodeList(head)
// printLinkedList(head)
// traverseList(head)
nodeList.traverseList()
console.log(nodeList.insertAtBeginning(50))
nodeList.traverseList()


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class LinkedList:
    def __init__(self):
        self.head = None

    def insert_at_begin(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        else:
            new_node.next = self.head
            self.head = new_node

    def insert_at_index(self, data, index):
        if index == 0:
            self.insert_at_begin(data)
            return

        position = 0
        current_node = self.head
        while current_node is not None and position+1 is not index:
            position = position+1
            current_node = current_node.next

        if current_node is not None:
            new_node = Node(data)
            new_node.next = current_node.next
            current_node.next = new_node
        else:
            print("Index not found")

    def insert_at_end(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return

        current_node = self.head
        while current_node.next:
            current_node = current_node.next

        current_node.next = new_node

    def update_node(self, val, index):
        current_node = self.head
        position = 0
        if position == index:
            current_node.data = val
            return

        while current_node is not None and position+1 is not index:
            position += 1
            current_node = current_node.next

        if current_node is not None:
            current_node.data = val
        else:
            print("Index not found")

    def remove_first_node(self):
        if self.head is None:
            return
        self.head = self.head.next

    def remove_last_node(self):
        if self.head is None:
            return

        current_node = self.head
        while current_node.next is not None and current_node.next.next is not None:
            current_node = current_node.next
        current_node.next = None

    def remove_at_index(self, index):
        if self.head is None:
            return

        if index == 0:
            self.remove_first_node()
            return

        position = 0
        current_node = self.head
        while current_node is not None and position < index - 1:
            position += 1
            current_node = current_node.next

        if current_node is not None or current_node.next is not None:
            print("Index not found")
        else:
            current_node.next = current_node.next.next


    def remove_node(self, data):
        current_node = self.head

        if current_node == data:
            self.remove_first_node()
            return

        while current_node is not None and current_node.next.data != data:
            current_node = current_node.next

        if current_node is not None:
            current_node.next = current_node.next.next

    def print_ll(self):
        current_node = self.head
        while current_node is not None:
            print(current_node.data)
            current_node = current_node.next

    def size_of_ll(self):
        size = 0
        if self.head:
            current_node = self.head
            while current_node:
                size += 1
                current_node = current_node.next
            return size

        return 0


# create a new linked list
llist = LinkedList()

# add nodes to the linked list
llist.insert_at_end('a')
llist.insert_at_end('b')
llist.insert_at_begin('c')
llist.insert_at_end('d')
llist.insert_at_index('g', 2)

# print the linked list
print("Node Data:")
llist.print_ll()

# remove nodes from the linked list
print("\nRemove First Node:")
llist.remove_first_node()
llist.print_ll()

print("\nRemove Last Node:")
llist.remove_last_node()
llist.print_ll()

print("\nRemove Node at Index 1:")
llist.remove_at_index(1)
llist.print_ll()

# print the linked list after all removals
print("\nLinked list after removing a node:")
llist.print_ll()

print("\nUpdate node Value at Index 0:")
llist.update_node('z', 0)
llist.print_ll()

print("\nSize of linked list:", llist.size_of_ll())

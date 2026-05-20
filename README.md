# Data Structures and Algorithms Study Repository

Welcome to the **Data Structures and Algorithms Study Repository**! This project serves as a comprehensive collection of my studies and practice with various data structures, algorithms, and architectural principles.

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Data Structures Covered](#data-structures-covered)
- [Algorithms Covered](#algorithms-covered)
- [SOLID Principles](#solid-principles)
- [How to Use](#how-to-use)

## Introduction

This repository is a personal study guide for mastering data structures, algorithms, and SOLID principles. It includes implementations, explanations, and examples of various concepts, primarily focused on technical interview preparation and clean code practices.

## Technologies Used

- **Programming Languages:** Python, JavaScript, TypeScript
- **Tools:** Node.js, Pytest, Tox, Mypy, Black

## Project Structure

```text
├── algorithms/
│   ├── basics/           # Basic logic and loops
│   ├── codility/         # Codility platform challenges (TS)
│   ├── search/           # Binary search, binary trees, linked lists (JS/Py)
│   └── sort/             # Bubble sort, insertion sort (JS)
├── architechture/
│   └── solid/            # SOLID principles exercises and examples (Python)
├── data_structures/
│   └── linked_list/      # Foundational linked list implementations
├── docs/                 # Additional documentation
└── tests/                # Automated tests
```

## Data Structures Covered

- **Linked Lists** (Singly Linked List)
- **Binary Trees**

## Algorithms Covered

- **Searching Algorithms:** Binary Search
- **Sorting Algorithms:** Bubble Sort, Insertion Sort
- **Challenges:** Codility (Binary Gap, Frog Jump, Cyclic Rotation, etc.)

## SOLID Principles

The repository includes a dedicated section for studying SOLID principles via practical exercises:
- **S**ingle Responsibility Principle
- **O**pen/Closed Principle
- **L**iskov Substitution Principle
- **I**nterface Segregation Principle
- **D**ependency Inversion Principle

## How to Use

### JavaScript / TypeScript
1. Ensure you have [Node.js](https://nodejs.org/) installed.
2. Run a script:
   ```sh
   node algorithms/search/javascript/binary_tree.mjs
   ```

### Python
1. Ensure you have [Python 3.9+](https://www.python.org/) installed.
2. Run a script:
   ```sh
   python data_structures/linked_list/python/linked_list.py
   ```
3. For SOLID exercises, you can use `tox` to run linting and tests:
   ```sh
   cd architechture/solid/linkedin-learning/.../
   tox
   ```

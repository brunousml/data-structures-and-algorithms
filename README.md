# Data Structures and Algorithms Study Repository

Welcome to the **Data Structures and Algorithms Study Repository**! This project serves as a comprehensive collection of my studies and practice with various data structures, algorithms, and architectural principles.

---

## 🗺️ Navigation

### 📂 Modules
- **[🚀 Algorithms](./algorithms/)**
    - [Basics](./algorithms/basics/) | [Codility](./algorithms/codility/javascript/) | [Search](./algorithms/search/) | [Sort](./algorithms/sort/)
- **[📐 Architecture & SOLID](./architechture/solid/)**
    - [Exercises](./architechture/solid/linkedin-learning/Learning-SOLID-Programming-Principles/Ex_Files_Learning_SOLID_Programming_Principles/Exercise%20Files/)
- **[🏗️ Data Structures](./data_structures/)**
    - [Linked List](./data_structures/linked_list/python/)
- **[📝 Documentation](./docs/)** | **[🧪 Tests](./tests/)**

### 📑 Quick Links
[Introduction](#introduction) | [Technologies](#technologies-used) | [Project Structure](#project-structure) | [How to Use](#how-to-use)

---

## Introduction

This repository is a personal study guide for mastering data structures, algorithms, and SOLID principles. It includes implementations, explanations, and examples of various concepts, primarily focused on technical interview preparation and clean code practices.

[↑ Back to Top](#navigation)

## Technologies Used

- **Programming Languages:** Python, JavaScript, TypeScript
- **Tools:** Node.js, Pytest, Tox, Mypy, Black

[↑ Back to Top](#navigation)

## Project Structure

```text
├── algorithms/           # Searching, sorting and platform challenges
├── architechture/        # Architectural patterns and SOLID principles
├── data_structures/      # Foundational data structure implementations
├── docs/                 # Detailed documentation and studies
└── tests/                # Automated tests
```

[↑ Back to Top](#navigation)

## Detailed Content

### 🚀 Algorithms
- **Searching:** Binary Search, Binary Trees.
- **Sorting:** Bubble Sort, Insertion Sort.
- **Challenges:** Codility (Binary Gap, Frog Jump, Cyclic Rotation, etc.).
- [Explore Algorithms Folder](./algorithms/)

### 🏗️ Data Structures
- **Linked Lists:** Singly Linked List implementations.
- [Explore Data Structures Folder](./data_structures/)

### 📐 SOLID Principles
Practical exercises covering:
- Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion.
- [Explore SOLID Folder](./architechture/solid/)

[↑ Back to Top](#navigation)

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
   cd architechture/solid/linkedin-learning/Learning-SOLID-Programming-Principles/Ex_Files_Learning_SOLID_Programming_Principles/Exercise\ Files/
   tox
   ```

[↑ Back to Top](#navigation)

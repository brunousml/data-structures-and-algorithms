# Gemini Project Instructions: Data Structures and Algorithms Study

This repository is a comprehensive collection of studies and implementations of data structures, algorithms, and architectural principles (SOLID).

## Project Overview

- **Purpose:** Personal study guide and practice for technical interviews and real-world application of DSA and SOLID principles.
- **Main Languages:** Python and JavaScript.
- **Core Modules:**
    - `algorithms/`: Searching and sorting algorithm implementations.
    - `data_structures/`: Foundational data structures (e.g., Linked Lists).
    - `architechture/solid/`: Exercises based on SOLID programming principles (Python-focused).

## Technical Stack

- **Python:** 3.9+
    - Tooling: `pytest`, `tox`, `mypy`, `black`, `toml`.
- **JavaScript:** Node.js environment (ES Modules).

## Building and Running

### Python
- **Run a script:** `python path/to/script.py`
- **Run tests (root):** `pytest tests/` (Note: `tests/` directory is currently empty).
- **SOLID Exercises:** Navigate to the specific exercise directory and use:
    ```sh
    tox
    ```
    This will run `black`, `doctest`, `pytest`, and `mypy` as configured in `pyproject.toml`.

### JavaScript
- **Run a script:** `node path/to/script.mjs`

## Development Conventions

- **Python Style:** Adheres to PEP 8. Use `black` for formatting.
- **Type Safety:** Use `mypy` for static type checking in Python where applicable.
- **Documentation:** Follow the existing pattern of including explanations and comments within the scripts or in the `docs/` directory.
- **Testing:** New implementations should ideally be accompanied by tests in the `tests/` directory or as doctests within the script.

## Key Files

- `README.md`: General overview of the repository.
- `architechture/solid/.../pyproject.toml`: Configuration for SOLID exercises (linting, testing).
- `GEMINI.md`: (This file) Instructional context for Gemini CLI.

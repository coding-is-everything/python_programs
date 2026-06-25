# 💰 Expense Tracker CLI

A lightweight, modular command-line application to manage daily expenses. This project was built to demonstrate foundational Python concepts including in-memory data structures, CRUD operations, and the separation of concerns.

## ✨ Features

- **Add Expenses:** Log new expenses with an amount, category, and description.
- **View Expenses:** Display a cleanly formatted tabular list of all recorded expenses.
- **Update Expenses:** Modify existing expense records using their unique ID.
- **Delete Expenses:** Remove obsolete or incorrect expense entries.
- **Input Validation:** Prevents program crashes by safely handling incorrect user inputs (e.g., typing letters instead of numbers for amounts).

## 🧠 Concepts Applied

This project serves as a practical implementation of several core Python concepts:

- **Variables & Data Types:** Managing strings, integers, and floats.
- **Data Structures:** Using **Lists** as an in-memory database and **Dictionaries** to structure individual expense records.
- **CRUD Operations:** Create, Read, Update, and Delete logic.
- **Modular Architecture:** Separating the User Interface (`main.py`) from the Business Logic (`expense_manager.py`).
- **Error Handling:** Using `try...except` blocks for safe type-casting.

## 📁 Project Structure

```text
expense_tracker/
│
├── main.py               # The entry point and User Interface (CLI)
├── expense_manager.py    # The core business logic and CRUD operations
└── README.md             # Project documentation
```

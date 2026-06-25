from typing import List, Dict, Optional

expenses: List[Dict] = []

_next_id: int = 1

def add_expense(amount: float, category: str, description: str) -> Dict:
    """Creates a new expense and adds it to the list."""
    global _next_id

    expense = {
        "id": _next_id,
        "amount": amount,
        "category": category.capitalize(),
        "description": description
    }

    expenses.append(expense)
    _next_id += 1
    return expense

def get_all_expenses() -> List[Dict]:
    """Reads and returns all current expenses."""
    return expenses

def get_expense_by_id(expense_id: int) -> Optional[Dict]:
    """Helper function to find an expense by its unique ID"""
    for expense in expenses:
        if expense["id"] == expense_id:
            return expense
        
    return None

def update_expense(expense_id: int, new_amount: float, new_category: str, new_desc: str) -> bool:
    """Updates an existing expense. Returns True if successful, False if not found."""
    expense = get_expense_by_id(expense_id)

    if expense:
        expense["amount"] = new_amount
        expense["category"] = new_category.capitalize()
        expense["description"] = new_desc
        return True
    return False

def delete_expense(expense_id: int) -> bool:
    expense = get_expense_by_id(expense_id)

    if expense:
        expenses.remove(expense)
        return True
    return False
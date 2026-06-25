import expense_manager

def display_menu() -> None:
    """Prints the main menu options."""
    print("\n--- Expense Tracker CLI ---")
    print("1. Add an Expense")
    print("2. View All Expenses")
    print("3. Update an Expense")
    print("4. Delete an Expense")
    print("5. Exit")
    print("----------------------------")

def view_expenses() -> None:
    """Fetches and formats the list of expenses."""
    expenses = expense_manager.get_all_expenses()

    if not expenses:
        print("\nNo expenses found. Start spending!")
        return
    
    print("\nID | Amount | Category | Description")
    print("-" * 40)
    for exp in expenses:
        print(f"{exp['id']:<2} | ${exp['amount']:<6.2f} | {exp['category']:<8} | {exp['description']}")

def main() -> None:
    """The main application loop."""
    while True:
        display_menu()
        choice = input("Enter your choice (1-5): ")

        if choice == '1':
            try:
                amount = float(input("Enter amount: $"))
                category = input("Enter category (e.g., Food, Travel): ")
                desc = input("Enter brief description: ")

                expense_manager.add_expense(amount, category, desc)
                print("Expense added successfully!")
            except ValueError:
                print("Invalid input. Amount must be a number.")
        
        elif choice == '2':
            view_expenses()

        elif choice == '3':
            view_expenses()
            try:
                exp_id = int(input("Enter the ID of the expense to update: "))
                amount = float(input("Enter new amount: $"))
                category = input("Enter new category: ")
                desc = input("Enter new description: ")

                if expense_manager.update_expense(exp_id, amount, category, desc):
                    print("Expense updated successfully!")
                else:
                    print("Expense ID Not found.")
            except ValueError:
                print("Invalid input. IDs and Amounts must be numbers.")
        
        elif choice == '4':
            view_expenses()
            try:
                exp_id = int(input("Enter the ID of the expense to delete: "))
                if expense_manager.delete_expense(exp_id):
                    print("Expense deleted successfully!")
                else:
                    print("Expense ID not found.")
            except ValueError:
                print("Input input. ID must be a number.")
        
        elif choice == '5':
            print("Goodbye! Keep an eye on those finances.")
            break

        else:
            print("Invalid choice. Please select a number from 1 to 5.")

if __name__ == "__main__":
    main()
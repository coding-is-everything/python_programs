# 🐍 Python Practice Log

A running collection of Python projects and exercises, organized by topic and built up on a daily basis. Each subfolder is a self-contained project with its own `README.md` describing what it does and which concepts it covers.

## 📁 Structure

Every project lives in its own top-level folder:

```text
pythons/
│
├── expense_tracker/      # CLI app for tracking daily expenses (CRUD, modular design)
├── password_manager/     # CLI password manager with Fernet encryption (in progress)
├── gta6-website/         # Static HTML/CSS/JS landing page (non-Python, front-end demo)
├── <next_project>/       # ...
└── README.md             # This file — index of all projects
```

## 📚 Projects

| Project | Description | Key Concepts |
|---|---|---|
| [expense_tracker](expense_tracker/README.md) | CLI app to add, view, update, and delete expenses | Lists, dictionaries, CRUD, modular architecture, error handling |
| [password_manager](password_manager/README.md) | CLI password manager that encrypts and stores credentials (in progress) | Symmetric encryption (`cryptography`/Fernet), key management, file I/O, modular architecture |
| [gta6-website](gta6-website/index.html) | Static fan-made landing page for a fictional game launch — not a Python project, kept here as a front-end practice piece | HTML5, CSS animations/layout, vanilla JS (nav, scroll, loader) |

> New projects are added here as they're created — each row links to that project's own README for details.

## 🛠️ Conventions

- Each project gets its own folder named in `snake_case`.
- Each project folder includes its own `README.md` with a features list, concepts applied, and structure.
- This root README is updated with a new table row whenever a project is added.

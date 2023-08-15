# Project Documentation: Commit and Branch Naming Conventions

Welcome to our awesome-twitter-app project! To ensure clarity and consistency in our codebase, we follow specific naming conventions for branches and commits. This document provides guidelines to ensure that everyone on the team is on the same page.

## 1. **Branch Naming Conventions**

Ensure your branch names are descriptive and concise. We follow the conventions mentioned below:

- **Feature Branches**: Use these for new features or enhancements.
    - Format: `feature/short-feature-description`
    - Example: `feature/login-authentication`

- **Bugfix Branches**: For addressing bugs in the codebase.
    - Format: `bugfix/short-bug-description`
    - Example: `bugfix/header-alignment-issue`

- **Hotfix Branches**: For immediate and critical fixes.
    - Format: `hotfix/short-fix-description`
    - Example: `hotfix/critical-login-bug`

- **Release Branches**: For releases and associated tweaks.
    - Format: `release/vX.X.X` or `release/short-release-description`
    - Example: `release/v1.2.3` or `release/september-update`

- **Chore Branches**: For routine and non-feature tasks.
    - Format: `chore/update-dependencies`

- **Docs Branches**: Exclusively for documentation changes.
    - Format: `docs/update-readme`

## 2. **Commit Message Conventions**

We adhere to the commit message convention proposed by [Conventional Commits](https://www.conventionalcommits.org/). Ensure your commits follow this structure:

```
<type>(<scope>): <short description>

[optional body]

[optional footer]
```

**Components**:

- **Type**: Reflects the change's nature.
    - Examples: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `perf`, `test`.

- **Scope**: (Optional) Specifies where the change occurs, like `auth`, `header`.

- **Description**: Briefly state the change. Use present tense (e.g., "add" instead of "added").

- **Body**: (Optional) Provides a detailed explanation.

- **Footer**: (Optional) Denotes breaking changes or issue references.

**Commit Examples**:

- `feat(auth): implement two-factor authentication`
- `fix(header): adjust alignment for mobile`
- `docs(readme): update setup details`

## 3. **Best Practices**

- **Use Present Tense**: Ensure your commit messages are in the present tense: "add", "fix", not "added", "fixed".

- **Descriptive Messages**: Avoid vague messages like "fix bug". Always provide a clear description of your change.

- **Atomic Commits**: Every commit should encapsulate a single logical change for easy comprehension and potential reverting.

- **Reference Issues**: If using an issue tracker, include the issue number, e.g., `fix(auth): resolve login bug, closes #123`.

---

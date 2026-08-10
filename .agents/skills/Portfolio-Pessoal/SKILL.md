```markdown
# Portfolio-Pessoal Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches the core development patterns and conventions used in the Portfolio-Pessoal repository, a TypeScript-based personal portfolio built with Next.js. It covers file naming, import/export styles, commit message conventions, and testing patterns to ensure consistency and maintainability across the codebase.

## Coding Conventions

### File Naming
- Use **camelCase** for file and directory names.
  - Example: `userProfile.tsx`, `projectList.ts`

### Import Style
- Use **alias imports** rather than relative paths.
  - Example:
    ```typescript
    import { Button } from '@/components/Button'
    ```

### Export Style
- Prefer **named exports** over default exports.
  - Example:
    ```typescript
    // Good
    export const Header = () => { ... }

    // Avoid
    // export default Header
    ```

### Commit Messages
- Follow **Conventional Commits** with the `feat` prefix for features.
  - Example:
    ```
    feat: add user profile section to homepage
    ```

## Workflows

### Adding a New Feature
**Trigger:** When implementing a new feature or component  
**Command:** `/add-feature`

1. Create a new file using camelCase naming in the appropriate directory.
2. Use alias imports for dependencies.
3. Export your component or function using named exports.
4. Write a commit message starting with `feat:`, followed by a concise description.
5. (Optional) Add a corresponding test file named `*.test.ts` or `*.test.tsx`.

### Refactoring Code
**Trigger:** When improving or restructuring existing code  
**Command:** `/refactor`

1. Rename files/directories to camelCase if necessary.
2. Update import statements to use aliases.
3. Ensure all exports are named.
4. Update related tests if applicable.
5. Commit with a conventional message, e.g., `refactor: improve project list rendering`.

## Testing Patterns

- Test files use the pattern: `*.test.ts` or `*.test.tsx`.
- Place test files alongside the code they test or in a dedicated `__tests__` directory.
- Testing framework is unspecified; follow the existing test file structure.

  Example:
  ```typescript
  // userProfile.test.ts
  import { render } from '@testing-library/react'
  import { UserProfile } from '@/components/userProfile'

  test('renders user name', () => {
    // ...
  })
  ```

## Commands
| Command        | Purpose                                      |
|----------------|----------------------------------------------|
| /add-feature   | Guide for adding a new feature or component  |
| /refactor      | Steps for refactoring code                   |
```

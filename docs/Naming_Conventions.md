## **Naming Conventions**

### **General Guidelines**:

1. Use clear and descriptive names for all files and folders to indicate their purpose or functionality.
2. Stick to the established conventions in the project to maintain consistency.

### **File & Folder Naming**:

1. **React Components**:
    - Use `PascalCase` for React component filenames (e.g., `UserAvatar.tsx`, `TweetActions.tsx`).
    - Each component should reside in its own directory.

2. **Services, Hooks, Stores, and Utilities**:
    - Use `PascalCase` for primary files (e.g., `TweetService.ts`, `useTweets.ts`).
    - Additional files associated with a primary file should use the primary file's name as a base.

3. **Special File Types**:
    - Styles: Append `.styles.ts` to the component or module's name (e.g., `LeftSideBar.styles.ts`).
    - Types/Interfaces: Append `.types.ts` (e.g., `TweetService.types.ts`).
    - Utilities/Helpers: Append `.utils.ts` (e.g., `TweetService.utils.ts`).
    - Tests: Append `.test.tsx` or `.test.ts` depending on whether the test involves JSX (e.g., `LeftSideBar.test.tsx`).

4. **Entry Files**: Use `index.tsx` or `index.ts` for the primary file within a module or component's directory.

### **Component Organization**:

1. **Atomic Design**:
    - Components should be categorized as `atoms`, `molecules`, or `organisms` based on the atomic design methodology.
    - `atoms`: Smallest building blocks of the UI (e.g., `Button`, `UserAvatar`).
    - `molecules`: Groups of UI elements functioning together as a unit (e.g., `TweetActions`).
    - `organisms`: Relatively complex UI components composed of groups of molecules and/or atoms (e.g., `LeftSideBar`).

2. **Component Files**:
    - Each component should have an `index.tsx` file.
    - If the component has associated styles, types, tests, or stories, they should be co-located within the component's directory.

### **Functional Organization**:

1. **Hooks**: All custom hooks should be placed within the `hooks` directory.
2. **Containers**: Higher-order components or components connected to data sources or context should be in the `containers` directory.
3. **Services**: All service-related logic should be in the `services` directory.
4. **Store**: State management-related files should be in the `store` directory.
5. **Assets**: Store static files like images in the `assets` directory.
6. **Pages**: Main application views or routes should reside within the `pages` directory.

### **Tests**:

1. **Component Tests**: Should be co-located with their associated component using the `.test.tsx` extension.
2. **Service and Store Tests**: Should be co-located with their associated service or store using the `.test.ts` or `.test.tsx` extension.

### **Miscellaneous**:

1. **Placeholder Files**: Use `.gitkeep` for committing and preserving empty directories in the Git repository.
2. **Configuration and Environment**: Files like `react-app-env.d.ts` are for configuration or environment-specific settings.

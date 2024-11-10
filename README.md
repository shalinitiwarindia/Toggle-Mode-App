![Screenshot 2024-11-10 202744](https://github.com/user-attachments/assets/fd922d3b-908b-470d-aed4-6efdcce2bf47)
![Screenshot 2024-11-10 202648](https://github.com/user-attachments/assets/c25929a6-65d4-47e3-89ae-fc201305509d)
![Screenshot 2024-11-10 202843](https://github.com/user-attachments/assets/28590e6a-3761-4e23-9498-fc1797766750)
![Screenshot 2024-11-10 202531](https://github.com/user-attachments/assets/c6615cde-0a7e-404c-b68d-fc566c55ccef)
### Overview

This `ThemeToggle` component provides a button that allows users to switch between light and dark modes in the application. It uses a theme context, `useTheme`, from a `ThemeProvider` to manage and access the current theme state (`isDarkMode`) and toggle functionality (`toggleTheme`). 

### Key Elements

1. **Styled Button**:
   - `ToggleButton` is styled with `styled-components` to dynamically change its colors based on the current theme.
   - When `isDarkMode` is true, the button displays a dark theme with a blue background (`#0000FF`) and light text (`#ddd`). In light mode, the button has a lighter background (`#ddd`) and darker text (`#444`).
   - A transition effect of 0.3 seconds smooths the color change, enhancing user experience.
   - The hover state adjusts the button's background color slightly for a subtle feedback effect.

2. **Toggle Functionality**:
   - The `ThemeToggle` component consumes the `isDarkMode` boolean and `toggleTheme` function from the `ThemeProvider`.
   - When clicked, the button calls `toggleTheme`, which switches the theme mode.

3. **Dynamic Label**:
   - The button label changes based on the theme state, displaying either "Switch to Light Mode" or "Switch to Dark Mode" depending on the current mode.

### Purpose

This component enables a simple, user-friendly interface to toggle the app’s theme mode, allowing the app to dynamically respond to the user’s preference for a light or dark interface.

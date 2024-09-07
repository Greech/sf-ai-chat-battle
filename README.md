# Password Strength Checker Component

This repository contains the source code for a **Password Strength Checker Component** built with Angular with 3 chat bots:

- Gemini
- ChatGPT
- Claude

The component provides users with a way to set a password, check its strength, and verify if the entered passwords match.

## Features

- **Password Strength Validation:**
  - Checks for the presence of uppercase letters, lowercase letters, digits, special characters, and enforces a minimum length of 10 characters.
  - Displays password strength as:
    - Słabe (Weak)
    - Średnie (Medium)
    - Silne (Strong)
    - Bardzo silne (Very Strong)

- **Password Confirmation:**
  - Validates if the password and its confirmation match.
  - Provides real-time feedback on password match.

- **Dynamic Feedback:**
  - Password strength and match information is displayed in real-time as users type.

## Installation

To install and run this project locally:

- npm install -g @angular/cli

- npm install

Run the app:
- ng serve


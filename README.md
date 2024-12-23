# Starter Project for Next JS Projects @ eoss

This Starter Project acts as a base for all Next JS projects @ eoss. The Starter Project provides:

- Linting and Formatting Rules
- Folder Structure and Organization
- Styling and Components Library
- Forms
- ORM
- Database Setup [pending]
- Auth Setup [pending]
- Stripe Payments [pending]
- Emails [pending]
- Docker Setup [pending]

## eslint and prettier Rules

- Kebap Case Files and Folders: to prevent issues with Windows OS, all files and folders should be kebap cased.
- we prefer Arrow Functions when possible
- we use template strings when possible

- All Imports are sorted automatically
- All Tailwind Classes are ordered according to specifity

We provide editor settings for VS Code, please setup to auto format and fix on save if you dont use VS Code.

## Folder and Project Structure

## Styling and Components

We use Tailwind, react-feather and shadcn as styling tools and component library. To install a new shadcn component, use the cli command:

`npx shadcn@latest add button`

to add a button for example.

To use iconst import what ever you need from react-feather.

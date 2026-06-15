# Playwright Staging Automation Framework

## Project Overview

This project is a Playwright-based UI Automation Framework developed using JavaScript and follows the Page Object Model (POM) design pattern.

The framework is designed to provide:

* Reusable automation code
* Centralized test data management
* Environment configuration management
* HTML reporting
* Screenshot, video, and trace capture on failure
* Easy maintenance and scalability

---

# Tech Stack

* Playwright
* JavaScript
* Node.js
* Git
* GitHub

---

# Project Structure

```text
Playwright_Staging
│
├── config
│   └── environments.js
│
├── fixtures
│
├── pages
│   └── LoginPage.js
│
├── reports
│
├── test-data
│   └── loginData.js
│
├── test-results
│
├── tests
│   └── Login.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.js
```

---

# Framework Components

## 1. Environment Configuration

File:

```text
config/environments.js
```

Purpose:

* Stores environment URLs
* Avoids hardcoded URLs
* Supports multiple environments

Example:

```javascript
const environments = {

    staging: {
        baseUrl: 'https://stage2.centrim.com.au'
    }

};

module.exports = environments;
```

---

## 2. Test Data Management

File:

```text
test-data/loginData.js
```

Purpose:

* Stores test data separately
* Avoids hardcoded values
* Improves reusability

Available Data:

```javascript
validUser
invalidUsername
invalidPassword
invalidCredentials
blankUsername
blankPassword
```

---

## 3. Page Object Model

File:

```text
pages/LoginPage.js
```

Purpose:

* Stores locators
* Stores reusable page methods
* Reduces code duplication

Implemented Methods:

```javascript
enterUsername()
clickNext()
enterPassword()
clickLogin()
login()
clickShowHidePassword()
clickForgotPassword()
clickReset()
clickBackToLogin()
```

---

# Playwright Configuration

File:

```text
playwright.config.js
```

Features:

```javascript
Headless Mode: false

Screenshot:
only-on-failure

Video:
retain-on-failure

Trace:
retain-on-failure

HTML Reporter:
reports/html-report
```

---

# Login Test Cases Automated

## TC01

Verify user can login with valid username and valid password

Validation:

```text
Dashboard page displayed
```

---

## TC02

Verify login fails with invalid username

Validation:

```text
Please enter valid username or email
```

---

## TC03

Verify login fails with invalid password

Validation:

```text
Invalid Credentials.
You have X attempts left
```

---

## TC04

Verify login fails with blank username

Validation:

```text
Email or username cannot be empty
```

Additional Validation:

```text
Please enter valid username or email
```

---

## TC05

Verify login fails with blank password

Validation:

```text
Please enter valid password
```

---

## TC06

Verify login accepts username with leading and trailing spaces

Validation:

```text
Application trims spaces
Password page opens successfully
```

---

## TC07

Verify password masking

Validation:

```text
Password textbox type=password
```

---

## TC08

Verify show/hide password functionality

Validation:

```text
Password hidden initially
Password visible after clicking eye icon
Password hidden again after clicking eye icon
```

---

## TC09

Verify forgot password navigation

Flow:

```text
Username
→ Next
→ Forgot Password
```

Validation:

```text
User redirected to:

/password/reset
```

---

## TC10

Verify reset password request submission

Flow:

```text
Username
→ Next
→ Forgot Password
→ Reset Password Page
→ Click Reset
```

Validation:

```text
Success

An email has been sent to your registered email.
```

---

## TC11

Verify user can navigate back to login page

Flow:

```text
Username
→ Next
→ Forgot Password
→ Back To Login
```

Validation:

```text
Username textbox displayed
```

---

# Running Tests

Run all tests:

```bash
npx playwright test
```

List all tests:

```bash
npx playwright test --list
```

Run specific file:

```bash
npx playwright test tests/Login.spec.js
```

---

# View HTML Report

After execution:

```bash
npx playwright show-report reports/html-report
```

---

# Failure Artifacts

Framework automatically captures:

```text
Screenshot on failure
Video on failure
Trace on failure
```

Location:

```text
test-results/
```

---

# GitHub Setup Performed

Steps completed:

1. Created GitHub Repository
2. Created .gitignore
3. Initialized Git Repository
4. Added project files
5. Created initial commit
6. Configured Git username
7. Configured Git email
8. Connected GitHub remote repository
9. Renamed branch to main
10. Pushed framework to GitHub

---

# .gitignore

```text
node_modules/
reports/
test-results/
playwright-report/
allure-results/
allure-report/
```

Purpose:

* Prevent unnecessary files from being pushed
* Reduce repository size
* Follow industry standards

---

# Learning Outcomes

Through this framework implementation, the following concepts were learned:

* Playwright Basics
* Page Object Model
* Locator Strategies
* Test Data Management
* Environment Configuration
* Assertions
* HTML Reporting
* Screenshot Capture
* Video Capture
* Trace Capture
* Negative Testing
* Positive Testing
* Git Fundamentals
* GitHub Integration
* Automation Framework Design
* Reusable Automation Coding Practices

---

# Current Status

Framework Version: 1.0

Module Completed:

```text
Login Module
```

Automated Test Cases:

```text
TC01 – TC11
```

Repository Status:

```text
Successfully pushed to GitHub
```

# Contributing to This Project

Thank you for your interest in contributing! This guide will help you get started.

***

## Code of Conduct[​](#code-of-conduct "Direct link to Code of Conduct")

By participating in this project, you agree to follow our Code of Conduct. Please be respectful and constructive in all interactions.

***

## Development Setup[​](#development-setup "Direct link to Development Setup")

1. Clone the repository:

   ```
   git clone https://github.com/OBMS-Open-Business-Management-Software/core.git
   ```

2. Install Dependencies:

   ```
   composer install
   ```

   ```
   npm install
   ```

3. Configure Environment:

   ```
   cp .env.example .env
   ```

4. Start the Docker containers:

   ```
   ./vendor/bin/sail up -d
   ```

5. Generate required keys:

   ```
   ./vendor/bin/sail artisan key:generate
   ```

   ```
   ./vendor/bin/sail artisan passport:keys
   ```

6. Migrate the database:

   ```
   ./vendor/bin/sail artisan migrate --no-interaction --force
   ```

7. Generate set of OAUTH clients needed for API authentication:

   ```
   ./vendor/bin/sail artisan passport:install --no-interaction
   ```

***

## How to Contribute[​](#how-to-contribute "Direct link to How to Contribute")

### Reporting Issues[​](#reporting-issues "Direct link to Reporting Issues")

* Before creating an issue, please check if a similar issue already exists

* Use the issue template when available

* Provide as much detail as possible, including:

  <!-- -->

  * Steps to reproduce the issue
  * Expected behavior
  * Actual behavior
  * Error messages and screenshots if applicable
  * Your environment details (Docker version, OS, etc.)

### Submitting Pull Requests[​](#submitting-pull-requests "Direct link to Submitting Pull Requests")

1. Fork the repository

2. Create a new branch from `main`:

   <!-- -->

   ```
   git checkout -b feat/your-feature-name
   ```

3. Make your changes

4. Write or update tests as needed

5. Ensure all tests pass

6. Commit your changes using clear commit messages

7. Push to your fork

8. Create a Pull Request

#### Pull Request Guidelines[​](#pull-request-guidelines "Direct link to Pull Request Guidelines")

* Follow the existing code style and conventions
* Include tests for new features
* Update documentation as needed
* One pull request per feature/fix
* Keep pull requests focused and small

### Commit Message Guidelines[​](#commit-message-guidelines "Direct link to Commit Message Guidelines")

We follow [Conventional Commits](https://www.conventionalcommits.org/). Use these types:

* `feat:` - New features
* `fix:` - Bug fixes
* `docs:` - Documentation changes
* `style:` - Code style changes (formatting, etc.)
* `refactor:` - Code refactoring
* `test:` - Adding or modifying tests
* `chore:` - Maintenance tasks

Example:

```
git commit -m "feat: add new authentication feature"
```

***

## Docker Development Notes[​](#docker-development-notes "Direct link to Docker Development Notes")

* The development environment uses Laravel Sail for Docker containerization
* By default, Laravel Sail containers are used for database and Redis cache
* External database and Redis connections can be configured if needed
* Do not use development containers in production

***

## Code Review Process[​](#code-review-process "Direct link to Code Review Process")

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged

***

## Questions?[​](#questions "Direct link to Questions?")

If you have questions, feel free to open an issue or contact the maintainers.

Thank you for contributing! 🎉

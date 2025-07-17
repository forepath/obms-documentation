# Bare-Metal Installation

## Introduction[​](#introduction "Direct link to Introduction")

This guide will walk you through setting up the application directly on your machine, without containerization, ensuring full control over the environment and resource allocation.

Running on bare metal allows for direct hardware access, optimized performance, and customization tailored to your infrastructure needs. This method is ideal for scenarios where virtualization overhead must be minimized or when deploying on dedicated hardware.

***

## Step-by-Step[​](#step-by-step "Direct link to Step-by-Step")

### Clone Repository[​](#clone-repository "Direct link to Clone Repository")

Clone the GIT repository of the OBMS core application to the machine.

```
git clone https://github.com/OBMS-Open-Business-Management-Software/core.git
```

### Configure Webserver[​](#configure-webserver "Direct link to Configure Webserver")

Please visit the [Laravel Documentation](https://laravel.com/docs/11.x/deployment) for an extensive guide on how to deploy Laravel applications to a webserver.

### Install Dependencies[​](#install-dependencies "Direct link to Install Dependencies")

Install the Composer dependencies.

```
composer install
```

Install the NodeJS package dependencies.

```
npm install
```

### Configure Environment[​](#configure-environment "Direct link to Configure Environment")

Copy and modify the environment variables. A valid database and redis cache connection need to be provided.

```
cp .env.example .env
```

### Generate the Application Keys[​](#generate-the-application-keys "Direct link to Generate the Application Keys")

Generate an encryption key.

```
php artisan key:generate
```

Generate a keypair for Laravel Passport (needed for OAUTH clients to work).

```
php artisan passport:keys
```

> **NOTE:** The keypair for Laravel Passport can be set per instance by overriding the parameters `passport.private_key` and `passport.public_key` within the admin UI.

### Migrate Database[​](#migrate-database "Direct link to Migrate Database")

Migrate the database schema.

```
php artisan migrate --no-interaction --force
```

### Generate OAUTH Clients[​](#generate-oauth-clients "Direct link to Generate OAUTH Clients")

Generate set of OAUTH clients needed for API authentication.

```
php artisan passport:install --no-interaction
```

### Deploy Workers[​](#deploy-workers "Direct link to Deploy Workers")

Please visit the [Laravel Horizon Documentation](https://laravel.com/docs/11.x/horizon#deploying-horizon) for an extensive guide on how to deploy Laravel Horizon to a server.

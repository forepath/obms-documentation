# Docker Installation

## Introduction[​](#introduction "Direct link to Introduction")

This guide will walk you through setting up and running the application in a Dockerized environment, ensuring a consistent and reproducible deployment process.

Using Docker, you can easily package all dependencies and configurations into a container, eliminating compatibility issues and simplifying deployment across different environments. Whether you are running the application on a local machine, staging server, or production environment, Docker provides an efficient and scalable solution.

***

## Available Docker Images[​](#available-docker-images "Direct link to Available Docker Images")

OBMS provides two public Docker images for running the application. These images are tailored for different tasks, making it easy to deploy both the core application and background processes efficiently. The `app` image is used for handling web requests, while the `worker` image is designed for background processing tasks.

| Image Name                                                   | Purpose                                                |
| ------------------------------------------------------------ | ------------------------------------------------------ |
| `ghcr.io/obms-open-business-management-software/core-app`    | The main application container, handling web requests. |
| `ghcr.io/obms-open-business-management-software/core-worker` | The worker container for processing background jobs.   |

By default, the `latest` tag should be used for both the `obms-open-business-management-software/core-app` and `obms-open-business-management-software/core-worker` images to ensure you’re always using the most recent version. If you require an older version, you can access previous releases by specifying their semantic version tags (e.g., `obms-open-business-management-software:v1.8.2`).

***

## Step-by-Step (Development)[​](#step-by-step-development "Direct link to Step-by-Step (Development)")

This will create containers referencing the local version of the application. **Do not use in production**, as it may lead to instability or unintended changes. Always use properly built and tested images for deployment.

### Clone Repository[​](#clone-repository "Direct link to Clone Repository")

Clone the GIT repository of the OBMS core application to the machine.

```
git clone https://github.com/OBMS-Open-Business-Management-Software/core.git
```

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

Copy and modify the environment variables.

```
cp .env.example .env
```

> **NOTE:** If needed, an external database and redis cache connection can be provided. By default the Laravel Sail containers will be used.

### Start the Containers[​](#start-the-containers "Direct link to Start the Containers")

Start the docker containers.

```
./vendor/bin/sail up -d
```

### Generate the Application Keys[​](#generate-the-application-keys "Direct link to Generate the Application Keys")

Generate an encryption key.

```
./vendor/bin/sail artisan key:generate
```

Generate a keypair for Laravel Passport (needed for OAUTH clients to work).

```
./vendor/bin/sail artisan passport:keys
```

> **NOTE:** The keypair for Laravel Passport can be set per instance by overriding the parameters `passport.private_key` and `passport.public_key` within the admin UI.

### Migrate Database[​](#migrate-database "Direct link to Migrate Database")

Migrate the database schema.

```
./vendor/bin/sail artisan migrate --no-interaction --force
```

### Generate OAUTH Clients[​](#generate-oauth-clients "Direct link to Generate OAUTH Clients")

Generate set of OAUTH clients needed for API authentication.

```
./vendor/bin/sail artisan passport:install --no-interaction
```

***

## Step-by-Step (Production)[​](#step-by-step-production "Direct link to Step-by-Step (Production)")

This will build and deploy stable, production-ready Docker images. Ensure that all images have been thoroughly tested and validated before deployment. Only use properly built and verified images in a production environment to guarantee stability, security, and performance. Using untested or improperly configured containers in production can lead to unexpected behavior, downtime, and potential security vulnerabilities. Always follow best practices for Docker image creation, versioning, and deployment when working in production.

### Clone Repository[​](#clone-repository-1 "Direct link to Clone Repository")

Clone the GIT repository of the OBMS core application to the machine.

```
git clone https://github.com/OBMS-Open-Business-Management-Software/core.git
```

### Install Dependencies[​](#install-dependencies-1 "Direct link to Install Dependencies")

Install the Composer dependencies.

```
composer install
```

Install the NodeJS package dependencies.

```
npm install
```

### Configure Environment[​](#configure-environment-1 "Direct link to Configure Environment")

Copy and modify the environment variables.

```
cp .env.example .env
```

> **NOTE:** If needed, an external database and redis cache connection can be provided. By default the bundled containers will be used.

### Start the Containers[​](#start-the-containers-1 "Direct link to Start the Containers")

Start the docker containers.

```
docker-compose -f docker-compose.production.yml up -d
```

This will build the containers from the local Dockerfile. However, if you prefer to use the public images instead, you can modify the `docker-compose.production.yml` file to reference the appropriate image tags (e.g., `obms-open-business-management-software/core-app:latest` or a specific version).

### Generate the Application Key[​](#generate-the-application-key "Direct link to Generate the Application Key")

Generate an application key.

```
docker-compose -f docker-compose.production.yml exec app php artisan key:generate
```

### Migrate Database[​](#migrate-database-1 "Direct link to Migrate Database")

Migrate the database schema.

```
docker-compose -f docker-compose.production.yml exec app php artisan migrate --no-interaction --force
```

### Generate OAUTH Clients[​](#generate-oauth-clients-1 "Direct link to Generate OAUTH Clients")

Generate set of OAUTH clients needed for API authentication.

```
docker-compose -f docker-compose.production.yml exec app php artisan passport:install --no-interaction
```

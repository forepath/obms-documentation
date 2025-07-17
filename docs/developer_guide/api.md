# REST API

## Introduction[​](#introduction "Direct link to Introduction")

The OpenAPI Specification (OAS) provides a standard way to describe the RESTful APIs used in OBMS. This specification defines the endpoints, request parameters, response formats, authentication methods, and other important details to help developers integrate with OBMS seamlessly. The OpenAPI Spec serves as a comprehensive guide for interacting with OBMS APIs and automating integration with external systems.

***

## OpenAPI Specification[​](#openapi-specification "Direct link to OpenAPI Specification")

Below is the OpenAPI Specification for OBMS, detailing all the available API endpoints and their usage.

***

## Download[​](#download "Direct link to Download")

You can download the full OpenAPI Specification in JSON format for further reference:

[Download OpenAPI Specification](https://api.getobms.com/api-docs-latest.json)

***

## Regenerating the OpenAPI Specification[​](#regenerating-the-openapi-specification "Direct link to Regenerating the OpenAPI Specification")

To regenerate the OpenAPI Specification for OBMS, you can use the `l5-swagger:generate` Artisan command. This command will automatically generate the latest OpenAPI spec based on your defined routes and annotations.

```
php artisan l5-swagger:generate
```

For more details on customizing the generation process or to explore additional options, refer to the [L5-Swagger documentation](https://github.com/DarkaOnLine/L5-Swagger/wiki/Installation-&-Configuration).

The generated specification will become available under `/api/documentation`.

> **NOTE:** For security reasons you will need to log in as an employee or administrator to view the API documentation.

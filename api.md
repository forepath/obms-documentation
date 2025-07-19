[Skip to main content](#__docusaurus_skipToContent_fallback)

[![OBMS Logo](/img/logo-full.svg)![OBMS Logo](/img/logo-full.svg)](/index.md)

[Documentation](/docs/intro.md)[API](/api.md)[Enterprise Support](/enterprise-support.md)

[GitHub](https://github.com/forepath/obms)[Discord](https://discord.gg/5wFMuVvQZM)

Search...

* Authentication
  * postAuthenticate user

* Contract Usage Trackers

  * getGet all contract usage trackers
  * postCreate a new contract usage tracker
  * getGet a contract usage tracker by ID
  * putUpdate a contract usage tracker by ID
  * delDelete a contract usage tracker by ID

* Contract Usage Tracker Instances

  * getGet all contract usage tracker instances
  * postCreate a new contract usage tracker instance
  * getGet a contract usage tracker instance by ID
  * putUpdate a contract usage tracker instance by ID
  * delDelete a contract usage tracker instance by ID

* Contract Usage Tracker Items

  * getGet all contract usage tracker items
  * postCreate a new usage tracker item
  * getGet a usage tracker item by ID
  * putUpdate a usage tracker item by ID
  * delDelete a usage tracker item by ID

[API docs by Redocly](https://redocly.com/redoc/)

# OBMS API Documentation<!-- --> (<!-- -->v1.0.1<!-- -->)

Download OpenAPI specification<!-- -->:[Download](https://documents.obms.one/api-docs-latest.json)

E-mail

<!-- -->

:

<!-- -->

<support@getobms.com>

<!-- -->

License:

<!-- -->

[BSL 1.1](https://getobms.com/docs/license/)

OBMS Swagger API documentation

## [](#tag/Authentication)Authentication

Endpoints for user authentication

## [](#tag/Authentication/operation/8ab3faed13bd5ce8bffeb8ba52aabb4d)Authenticate user<!-- -->

Authenticate user and return a token

##### Request Body schema: application/json

|          |        |
| -------- | ------ |
| email    | string |
| password | string |

### Responses

**200<!-- -->**

User login successful.

**403<!-- -->**

Forbidden

post/api/login

https\://documents.obms.one/api/login

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"email": "user@example.com",
"password": "password"
}`

### <!-- -->Response samples<!-- -->

* 200
* 403

Content type

application/json

Copy

Expand all  Collapse all

`{
"success": true,
"data": {
"token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI3IiwianRpIjoiZjYzY2NlMjMyMGI0NjQ4ZTQzYzZlNDY3YzhmZWVkNDI3ODJjMDhjZGUzNWZlNWZkZWE5MmYzNDdmNWY2ZWMxYmMxM2NjNzVhMDVlMGJhNzMiLCJpYXQiOjE3NDA3Nzk0MDAuMjM1NzY1LCJuYmYiOjE3NDA3Nzk0MDAuMjM1NzY4LCJleHAiOjE3NzIzMTU0MDAuMjA5NDU5LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.cZfYgJ22uOjLsRLrbXr1eN0kXys3PPllVaQd27LyvLT_eoFTKZMEeBgnzI9DEar73HOc61t2FnokC2Y5X1fvUluN2N-K5M4BH-10cwK0I7Ch6NXHKrLww0B7lsPKoIu7nSvDWiydCY0HkzRWq-UpdODTafp6HIisF_T60sVfwKa1PxwkH4eTZ96HDo17wbIWnkHs5WX4e6z0GzxJ8QCavoZL3JzR2MUWUCGM52BICppe5EZorxW9iWHyWKs0sufUZgBLLFLqz5_Tz4RTnMAMkcimX41o-XBQeMmz1juJlRZ3LtlpOwFhy1Ixj9rkNtNz1UxMPq8fgqbMhYSgUHL1aTFT1qzrn6s0HP38bnnAsWj2V1OW4vftZF9jasvzn6yWl59Hfym4H1nUSf8iyFF9MxYZOJVFjqEwpNPZvL1zEYGETtAKeHyVzpL6ytj9xUE71LAqbTchwBLVUgCvLob1hhSkxg3-CBjHXKX_Az8nvOXiF62iw3Y1U7hjZLpYzU1HioqOkTsdwtbTyssqHYdU3OM_xr4lQkdwpHcFliwthUBdxzMWybtVxTRQUwQ-EjuJt3GRN4xKlWfkuDEHPWGxXr8Huz3lEtFc1q5fMex9i1fD0egS6wHw6BEBxAqJxDCfpbo7swRtrnvdDKBrsMId6dn6wxEQJNBqOvp_HnKqmEI",
"name": "API"
}
}`

## [](#tag/Contract-Usage-Trackers)Contract Usage Trackers

Contract Usage Trackers

## [](#tag/Contract-Usage-Trackers/operation/4d18a150d799a1658eed7d2928bae080)Get all contract usage trackers<!-- -->

Get all contract usage trackers

##### Authorizations:

*bearerAuth*

### Responses

**200<!-- -->**

Contract usage tracker retrieved successfully.

**403<!-- -->**

Forbidden

get/api/contracts/usage-trackers

https\://documents.obms.one/api/contracts/usage-trackers

### <!-- -->Response samples<!-- -->

* 200
* 403

Content type

application/json

Copy

Expand all  Collapse all

`{
"success": true,
"message": "Contract usage tracker retrieved successfully.",
"data": [
{
"id": 1,
"name": "Usage Tracker",
"description": "Usage Tracker Description",
"vat_type": "VAT Type",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
]
}`

## [](#tag/Contract-Usage-Trackers/operation/dd9fcf67c1c756acb980ec2983e698b3)Create a new contract usage tracker<!-- -->

Create a new contract usage tracker

##### Authorizations:

*bearerAuth*

##### Request Body schema: application/json

|             |        |
| ----------- | ------ |
| name        | string |
| description | string |
| vat\_type   | string |

### Responses

**201<!-- -->**

Contract usage tracker created successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

post/api/contracts/usage-trackers

https\://documents.obms.one/api/contracts/usage-trackers

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "Contract Usage Tracker",
"description": "Contract usage tracker description",
"vat_type": "VAT type"
}`

### <!-- -->Response samples<!-- -->

* 201
* 403
* 422

Content type

application/json

Copy

Expand all  Collapse all

`{
"success": true,
"message": "Contract usage tracker created successfully.",
"data": {
"id": 1,
"name": "Usage Tracker",
"description": "Usage Tracker Description",
"vat_type": "VAT Type",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}`

## [](#tag/Contract-Usage-Trackers/operation/006930a8fb463395780abb4011d22280)Get a contract usage tracker by ID<!-- -->

Get a contract usage tracker by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                     |
| ---------- | ----------------------------------- |
| idrequired | anyID of the contract usage tracker |

### Responses

**200<!-- -->**

Contract usage tracker retrieved successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

get/api/contracts/usage-trackers/{id}

https\://documents.obms.one/api/contracts/usage-trackers/{id}

### <!-- -->Response samples<!-- -->

* 200
* 403
* 404

Content type

application/json

Copy

Expand all  Collapse all

`{
"success": true,
"message": "Contract usage tracker retrieved successfully.",
"data": {
"id": 1,
"name": "Usage Tracker",
"description": "Usage Tracker Description",
"vat_type": "VAT Type",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}`

## [](#tag/Contract-Usage-Trackers/operation/96023acba874a89a2159acaaf3f46496)Update a contract usage tracker by ID<!-- -->

Update a contract usage tracker by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                     |
| ---------- | ----------------------------------- |
| idrequired | anyID of the contract usage tracker |

##### Request Body schema: application/json

|             |        |
| ----------- | ------ |
| name        | string |
| description | string |
| vat\_type   | string |

### Responses

**200<!-- -->**

Contract usage tracker updated successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

put/api/contracts/usage-trackers/{id}

https\://documents.obms.one/api/contracts/usage-trackers/{id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"name": "Contract Usage Tracker",
"description": "Contract usage tracker description",
"vat_type": "VAT type"
}`

### <!-- -->Response samples<!-- -->

* 200
* 403
* 422

Content type

application/json

Copy

Expand all  Collapse all

`{
"success": true,
"message": "Contract usage tracker updated successfully.",
"data": {
"id": 1,
"name": "Usage Tracker",
"description": "Usage Tracker Description",
"vat_type": "VAT Type",
"created_at": "2021-01-01 00:00:00",
"updated_at": "2021-01-01 00:00:00",
"deleted_at": "2021-01-01 00:00:00"
}
}`

## [](#tag/Contract-Usage-Trackers/operation/8fa3c60e2ad1a806a9327bc0a7b64edc)Delete a contract usage tracker by ID<!-- -->

Delete a contract usage tracker by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                     |
| ---------- | ----------------------------------- |
| idrequired | anyID of the contract usage tracker |

### Responses

**200<!-- -->**

Contract usage tracker deleted successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

delete/api/contracts/usage-trackers/{id}

https\://documents.obms.one/api/contracts/usage-trackers/{id}

### <!-- -->Response samples<!-- -->

* 200
* 403
* 404

Content type

application/json

Copy

`{
"success": true,
"message": "Contract usage tracker deleted successfully."
}`

## [](#tag/Contract-Usage-Tracker-Instances)Contract Usage Tracker Instances

Contract Usage Tracker Instances

## [](#tag/Contract-Usage-Tracker-Instances/operation/ef85469e8ae2f13e3b22477da7318ff7)Get all contract usage tracker instances<!-- -->

Get all contract usage tracker instances

##### Authorizations:

*bearerAuth*

### Responses

**200<!-- -->**

Contract usage tracker instance retrieved successfully.

**403<!-- -->**

Forbidden

get/api/contracts/usage-trackers/instances

https\://documents.obms.one/api/contracts/usage-trackers/instances

### <!-- -->Response samples<!-- -->

* 403

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Instances/operation/523123231bc0ad8aff5821d21d3a8cb0)Create a new contract usage tracker instance<!-- -->

Create a new contract usage tracker instance

##### Authorizations:

*bearerAuth*

##### Request Body schema: application/json

|                        |         |
| ---------------------- | ------- |
| contract\_id           | integer |
| tracker\_id            | integer |
| contract\_position\_id | integer |

### Responses

**201<!-- -->**

Contract usage tracker instance created successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

post/api/contracts/usage-trackers/instances

https\://documents.obms.one/api/contracts/usage-trackers/instances

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"contract_id": 1,
"tracker_id": 1,
"contract_position_id": 1
}`

### <!-- -->Response samples<!-- -->

* 403
* 422

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Instances/operation/ed7463c40e140043915937cc67b98289)Get a contract usage tracker instance by ID<!-- -->

Get a contract usage tracker instance by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                              |
| ---------- | -------------------------------------------- |
| idrequired | anyID of the contract usage tracker instance |

### Responses

**200<!-- -->**

Contract usage tracker instance retrieved successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

get/api/contracts/usage-trackers/instances/{id}

https\://documents.obms.one/api/contracts/usage-trackers/instances/{id}

### <!-- -->Response samples<!-- -->

* 403
* 404

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Instances/operation/9e060ade1d341cc9644e28da3e5dce64)Update a contract usage tracker instance by ID<!-- -->

Update a contract usage tracker instance by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                              |
| ---------- | -------------------------------------------- |
| idrequired | anyID of the contract usage tracker instance |

##### Request Body schema: application/json

|                        |         |
| ---------------------- | ------- |
| contract\_id           | integer |
| tracker\_id            | integer |
| contract\_position\_id | integer |

### Responses

**200<!-- -->**

Contract usage tracker instance updated successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

put/api/contracts/usage-trackers/instances/{id}

https\://documents.obms.one/api/contracts/usage-trackers/instances/{id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"contract_id": 1,
"tracker_id": 1,
"contract_position_id": 1
}`

### <!-- -->Response samples<!-- -->

* 403
* 422

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Instances/operation/5466c3e4a57ba72d35bea6f30c955265)Delete a contract usage tracker instance by ID<!-- -->

Delete a contract usage tracker instance by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                              |
| ---------- | -------------------------------------------- |
| idrequired | anyID of the contract usage tracker instance |

### Responses

**200<!-- -->**

Contract usage tracker instance deleted successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

delete/api/contracts/usage-trackers/instances/{id}

https\://documents.obms.one/api/contracts/usage-trackers/instances/{id}

### <!-- -->Response samples<!-- -->

* 200
* 403
* 404

Content type

application/json

Copy

`{
"success": true,
"message": "Contract usage tracker instance deleted successfully."
}`

## [](#tag/Contract-Usage-Tracker-Items)Contract Usage Tracker Items

Contract Usage Tracker Items

## [](#tag/Contract-Usage-Tracker-Items/operation/50b09fb3343f87f9bb4f500d59b2243c)Get all contract usage tracker items<!-- -->

Get all contract usage tracker items

##### Authorizations:

*bearerAuth*

### Responses

**200<!-- -->**

Usage tracker item retrieved successfully.

**403<!-- -->**

Forbidden

get/api/contracts/usage-trackers/items

https\://documents.obms.one/api/contracts/usage-trackers/items

### <!-- -->Response samples<!-- -->

* 403

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Items/operation/cd328b360eeaf2f64d5d79bca58ba887)Create a new usage tracker item<!-- -->

Create a new usage tracker item

##### Authorizations:

*bearerAuth*

##### Request Body schema: application/json

|             |         |
| ----------- | ------- |
| tracker\_id | integer |
| type        | string  |
| process     | string  |
| round       | string  |
| step        | integer |
| amount      | number  |

### Responses

**201<!-- -->**

Usage tracker item created successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

post/api/contracts/usage-trackers/items

https\://documents.obms.one/api/contracts/usage-trackers/items

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"tracker_id": 1,
"type": "type",
"process": "equals",
"round": "none",
"step": 1,
"amount": 100
}`

### <!-- -->Response samples<!-- -->

* 403
* 422

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Items/operation/6dd69ab770666cfb61f4529d68eeca32)Get a usage tracker item by ID<!-- -->

Get a usage tracker item by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                 |
| ---------- | ------------------------------- |
| idrequired | anyID of the usage tracker item |

### Responses

**200<!-- -->**

Usage tracker item retrieved successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

get/api/contracts/usage-trackers/items/{id}

https\://documents.obms.one/api/contracts/usage-trackers/items/{id}

### <!-- -->Response samples<!-- -->

* 403
* 404

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Items/operation/418eef1ee7ae7c2daad8afb88b5bf901)Update a usage tracker item by ID<!-- -->

Update a usage tracker item by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                 |
| ---------- | ------------------------------- |
| idrequired | anyID of the usage tracker item |

##### Request Body schema: application/json

|             |         |
| ----------- | ------- |
| tracker\_id | integer |
| type        | string  |
| process     | string  |
| round       | string  |
| step        | integer |
| amount      | number  |

### Responses

**200<!-- -->**

Usage tracker item updated successfully.

**403<!-- -->**

Forbidden

**422<!-- -->**

Validation error

put/api/contracts/usage-trackers/items/{id}

https\://documents.obms.one/api/contracts/usage-trackers/items/{id}

### <!-- -->Request samples<!-- -->

* Payload

Content type

application/json

Copy

`{
"tracker_id": 1,
"type": "type",
"process": "equals",
"round": "none",
"step": 1,
"amount": 100
}`

### <!-- -->Response samples<!-- -->

* 403
* 422

Content type

application/json

Copy

`{
"success": false,
"message": "Forbidden"
}`

## [](#tag/Contract-Usage-Tracker-Items/operation/f7a6375d21fbabe0cafef481bcedb2f9)Delete a usage tracker item by ID<!-- -->

Delete a usage tracker item by ID

##### Authorizations:

*bearerAuth*

##### path<!-- --> Parameters

|            |                                 |
| ---------- | ------------------------------- |
| idrequired | anyID of the usage tracker item |

### Responses

**200<!-- -->**

Usage tracker item deleted successfully.

**403<!-- -->**

Forbidden

**404<!-- -->**

Not found

delete/api/contracts/usage-trackers/items/{id}

https\://documents.obms.one/api/contracts/usage-trackers/items/{id}

### <!-- -->Response samples<!-- -->

* 200
* 403
* 404

Content type

application/json

Copy

`{
"success": true,
"message": "Usage tracker item deleted successfully."
}`

Resources

* [Documentation](/docs/intro.md)
* [API](/api.md)
* [Enterprise Support](/enterprise-support.md)

Community

* [GitHub](https://github.com/forepath/obms)
* [Discord](https://discord.gg/5wFMuVvQZM)

Legal

* [Legal Disclosure](/legal-disclosure.md)
* [Privacy Policy](/privacy-policy.md)

Copyright © 2025 IPvX UG (haftungsbeschränkt)

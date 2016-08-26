![a harpy](https://raw.githubusercontent.com/buchenberg/harpi/master/modules/core/client/img/brand/logo.png "Harpi")

# Harpi

Harpi is an HTTP Archive pipeline. It helps in analysing web API's by converting HTTP Archive files to OpenAPI (Swagger) documentation. It will eventually produce UML class and activity diagrams.


## Status

Harpi is far from complete. Most of the work is being done at the API level now. Here is what is supported so far:

* Create projects and upload har files to the project.
* Generate a distinct URL report on project HAR files.
* Convert Har file to Swagger (API only).

## Goals

* Har to UML Class Diagram
* Har to UML Activity Diagram
* Add metadata to HAR like x-swagger-definition
* Take advantage of versioning for the Swagger specs

## REST API

Verb | Path | Description
---|---|---
GET | /api/projects/{projectId} | Get project by id
GET | /api/projects | List projects
POST | /api/projects | Create project
PUT | /api/projects | Update project
DELETE | /api/projects/{projectId}  | Delete project by id
GET | /api/hars/{harId} | Get har by id
GET | /api/hars | List hars
POST | /api/hars | Create har
POST | /api/hars/{harId}/specs | Create new spec from har by id and add ref to har
PUT | /api/hars/{harId} | Update har by id
DELETE | /api/hars/{harId} | Delete har by id
GET | /api/specs/{specId} | Get spec by id
GET | /api/specs | List specs
POST | /api/specs | Create spec
PUT | /api/specs/{specId} | Update spec by id
DELETE | /api/specs/{specId} | Delete spec by id

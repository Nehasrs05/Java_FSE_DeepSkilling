# Week 3 - REST Get Country Based on Country Code

## Objective

Create a REST API that returns a country based on its ISO country code.

## Technologies Used

- Java
- Spring Boot
- Spring REST
- Spring Core
- Maven

## Endpoint

**Method:** GET

```
http://localhost:8083/countries/{code}
```

Example:

```
http://localhost:8083/countries/in
```

## Sample Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Description

This exercise demonstrates how to use **@GetMapping** and **@PathVariable** in Spring REST. The service performs a **case-insensitive** search for the country code using a Java Stream and Lambda expression and returns the matching Country object.

## Concepts Covered

- REST API
- @RestController
- @GetMapping
- @PathVariable
- Spring Service
- Lambda Expressions
- Java Streams
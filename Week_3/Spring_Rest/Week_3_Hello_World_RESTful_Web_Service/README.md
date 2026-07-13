# Week 3 - Hello World RESTful Web Service

## Objective

Create a simple RESTful web service using Spring Boot that returns the message **"Hello World!!"**.

## Files

- HelloController.java
- SpringLearnApplication.java
- application.properties
- pom.xml

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Maven

## Endpoint

**Method:** GET

**URL:**

```
http://localhost:8083/hello
```

## Response

```
Hello World!!
```

## Description

This exercise demonstrates how to create a basic REST API using Spring Boot. The `HelloController` exposes a GET endpoint `/hello` and returns the text **"Hello World!!"**. Logging statements are included at the beginning and end of the request handling method.

## Expected Output

```
Start
End
```

Response:

```
Hello World!!
```
# Week 3 - REST Country Web Service

## Objective

Create a REST service that returns the details of India from a Spring XML configuration file.

## Files

- Country.java
- CountryController.java
- SpringLearnApplication.java
- country.xml
- application.properties
- pom.xml

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Spring Core
- Maven

## Endpoint

**Method:** GET

**URL**

```
http://localhost:8083/country
```

## Response

```json
{
  "code": "IN",
  "name": "India"
}
```

## Description

This exercise demonstrates how to create a REST API that loads a Spring bean from an XML configuration file using `ApplicationContext` and returns it as a JSON response. Spring Boot automatically converts the `Country` object into JSON using Jackson.

## Expected Output

```
Start
End
```

Response:

```json
{
  "code": "IN",
  "name": "India"
}
```
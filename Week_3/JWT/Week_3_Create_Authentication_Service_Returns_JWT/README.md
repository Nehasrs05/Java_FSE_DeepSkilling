# Week 3 - Create Authentication Service that Returns JWT

## Objective

Create a REST authentication service that authenticates a user using HTTP Basic Authentication and returns a JWT token.

## Technologies Used

- Java
- Spring Boot
- Spring Security
- JWT (JJWT)
- Maven

## Endpoint

**GET**

```
http://localhost:8090/authenticate
```

## Sample Request

```bash
curl -s -u user:pwd http://localhost:8090/authenticate
```

## Sample Response

```json
{
  "token":"eyJhbGciOiJIUzI1NiJ9..."
}
```

## Files

- AuthenticationController.java
- JwtUtil.java
- SecurityConfig.java
- SpringLearnApplication.java
- application.properties
- pom.xml

## Concepts Covered

- Spring Security
- HTTP Basic Authentication
- JWT Token Generation
- REST Controller
- Security Configuration
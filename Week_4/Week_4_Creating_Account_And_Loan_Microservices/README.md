# Week 4 - Creating Account and Loan Microservices

## Objective

Create two independent Spring Boot REST microservices:

- Account Microservice
- Loan Microservice

Each service exposes its own REST endpoint and runs on a different port.

---

## Technologies Used

- Java
- Spring Boot
- Spring Web
- Maven

---

## Account Microservice

### Endpoint

GET

```
/accounts/{number}
```

Example

```
http://localhost:8080/accounts/00987987973432
```

Response

```json
{
  "number":"00987987973432",
  "type":"Savings",
  "balance":234343
}
```

---

## Loan Microservice

### Endpoint

GET

```
/loans/{number}
```

Example

```
http://localhost:8081/loans/H00987987972342
```

Response

```json
{
  "number":"H00987987972342",
  "type":"Car",
  "loan":400000,
  "emi":3258,
  "tenure":18
}
```

---

## Ports Used

| Microservice | Port |
|--------------|------|
| Account | 8080 |
| Loan | 8081 |

---

## Concepts Covered

- Microservices Architecture
- Spring Boot REST API
- @RestController
- @GetMapping
- @PathVariable
- Running multiple services on different ports
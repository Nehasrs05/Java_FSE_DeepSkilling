# Week 2 - Spring Data JPA Quick Example

## Objective

Create a simple Spring Boot application using Spring Data JPA and MySQL to retrieve country details.

## Files

- pom.xml
- application.properties
- country.sql
- Country.java
- CountryRepository.java
- CountryService.java
- OrmLearnApplication.java

## Technologies Used

- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## Description

This exercise demonstrates a basic Spring Data JPA application by creating a Country entity, Repository, and Service. The application retrieves all countries stored in the MySQL database using JpaRepository.

## Database

Schema: ormlearn

Table: country

Sample Records:

- IN - India
- US - United States of America

## Expected Output

```
Inside main
Start
Countries: [IN - India, US - United States of America]
End
```
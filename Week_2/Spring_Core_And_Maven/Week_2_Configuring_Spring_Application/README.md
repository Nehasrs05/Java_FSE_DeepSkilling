# Week 2 - Configuring a Basic Spring Application

## Objective

Configure a basic Spring application using Spring Core and Maven with XML-based bean configuration.

## Project Name

LibraryManagement

## Files

- pom.xml
- applicationContext.xml
- BookRepository.java
- BookService.java
- MainApp.java

## Technologies Used

- Java
- Spring Core
- Maven
- XML Configuration

## Description

This exercise demonstrates how to configure a basic Spring application using XML configuration. Beans for `BookRepository` and `BookService` are defined in `applicationContext.xml`. The application loads the Spring container, retrieves the `BookService` bean, and invokes its method to verify that dependency injection works correctly.

## Expected Output

```
Book Service is working.
Book Repository is working.
```
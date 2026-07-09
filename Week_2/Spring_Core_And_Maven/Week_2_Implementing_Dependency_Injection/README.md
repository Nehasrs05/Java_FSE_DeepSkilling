# Week 2 - Implementing Dependency Injection

## Objective
Implement Dependency Injection (DI) using Spring IoC Container.

## Files
- BookRepository.java
- BookService.java
- LibraryManagementApplication.java
- applicationContext.xml
- pom.xml

## Technologies Used
- Java
- Spring Core
- Maven
- XML Configuration

## Description
This exercise demonstrates Spring's Dependency Injection using setter injection. The `BookRepository` bean is injected into the `BookService` bean through the XML configuration file (`applicationContext.xml`). The main application loads the Spring container and retrieves the `BookService` bean.

## Expected Output

```
Book Service is working.
Book Repository is working.
```
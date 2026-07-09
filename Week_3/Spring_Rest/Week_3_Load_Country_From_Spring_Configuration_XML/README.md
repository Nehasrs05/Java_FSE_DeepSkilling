# Week 3 - Spring Core - Load Country from Spring Configuration XML

## Objective

Load a Country bean from a Spring XML configuration file and display its details.

## Files

- Country.java
- SpringLearnApplication.java
- country.xml
- pom.xml

## Technologies Used

- Java
- Spring Core
- Spring XML Configuration
- Maven
- SLF4J

## Description

This exercise demonstrates how to configure a Spring bean using an XML configuration file (`country.xml`). The application loads the bean using `ClassPathXmlApplicationContext` and displays the configured country details.

## Configured Country

| Code | Name |
|------|------|
| IN | India |

## Expected Output

```
Starting Application
Inside Country Constructor.
Inside setCode()
Inside setName()
Country : Country [code=IN, name=India]
```

## Concepts Covered

- Spring Bean Configuration
- ApplicationContext
- ClassPathXmlApplicationContext
- Dependency Injection
- XML-based Configuration
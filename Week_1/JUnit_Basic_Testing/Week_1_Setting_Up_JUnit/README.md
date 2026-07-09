# Week 1 - Setting Up JUnit

## Objective

Set up JUnit in a Java project to enable unit testing.

## Files

- pom.xml
- SampleTest.java

## JUnit Dependency

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.13.2</version>
    <scope>test</scope>
</dependency>
```

## Test Description

The sample test verifies that the addition of two numbers returns the expected result using JUnit's `assertEquals()` method.
# Week 1 - Verifying Interactions using Mockito

## Objective

Learn how to verify interactions between a service class and its mocked dependency using Mockito.

## Files

- ExternalApi.java
- MyService.java
- MyServiceTest.java

## Concepts Covered

- Mockito
- Mock Objects
- verify()
- Interaction Testing

## Description

This exercise demonstrates how to verify that a specific method (`getData()`) of a mocked external API is invoked when the service method (`fetchData()`) is executed. Mockito's `verify()` method is used to confirm the interaction.
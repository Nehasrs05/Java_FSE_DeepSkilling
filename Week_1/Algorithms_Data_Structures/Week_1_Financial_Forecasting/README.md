# Week 1 - Financial Forecasting

## Objective
Develop a financial forecasting tool using recursion to predict future values based on past growth rates.

## Files
- FinancialForecast.java
- ForecastTest.java

## Concept of Recursion

Recursion is a programming technique in which a method calls itself until a base condition is met. It simplifies problems that can be divided into smaller, similar subproblems.

## Algorithm

Future Value = Current Value × (1 + Growth Rate)

The recursive function repeatedly applies the growth rate until the required number of years becomes zero.

## Time Complexity

- Recursive Solution: **O(n)**

where **n** is the number of years.

## Space Complexity

- **O(n)** due to the recursive call stack.

## Optimization

The recursive solution creates one function call for each year.

To avoid excessive computation:
- Use **iteration (loop)** for simple repeated calculations.
- Use **Dynamic Programming (Memoization)** if recursive calls solve overlapping subproblems.

## Output

Current Value : ₹10000.0
Growth Rate   : 10.0%
Years         : 5
Future Value  : ₹16105.10
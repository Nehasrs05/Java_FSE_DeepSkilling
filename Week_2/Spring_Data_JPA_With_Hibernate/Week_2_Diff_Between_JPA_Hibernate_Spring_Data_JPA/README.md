# Week 2 - Difference Between JPA, Hibernate and Spring Data JPA

## Objective

Understand the differences between JPA, Hibernate, and Spring Data JPA.

## JPA (Java Persistence API)

- JPA is a Java specification (JSR 338) for object-relational mapping (ORM).
- It defines interfaces and annotations for persisting Java objects.
- JPA itself does not provide an implementation.

## Hibernate

- Hibernate is a popular ORM framework.
- It is one of the implementations of the JPA specification.
- It provides features like caching, transaction management, and HQL.

### Hibernate Example

```java
public Integer addEmployee(Employee employee) {
    Transaction tx = null;
    Integer employeeId = null;

    try {
        tx = session.beginTransaction();
        employeeId = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null)
            tx.rollback();
    } finally {
        session.close();
    }

    return employeeId;
}
```

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It reduces boilerplate code.
- It automatically provides CRUD operations using JpaRepository.
- Transaction management is simplified using `@Transactional`.

### Spring Data JPA Example

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

## Comparison

| JPA | Hibernate | Spring Data JPA |
|-----|-----------|-----------------|
| Specification | ORM Framework | Spring abstraction over JPA |
| No implementation | Implements JPA | Uses JPA implementations like Hibernate |
| Defines standards | Provides ORM features | Reduces boilerplate code |
| Vendor independent | Hibernate specific | Repository-based development |

## Technologies Used

- Java
- JPA
- Hibernate
- Spring Data JPA

## Conclusion

JPA defines the persistence standard, Hibernate implements that standard, and Spring Data JPA simplifies database operations by reducing the amount of code developers need to write.
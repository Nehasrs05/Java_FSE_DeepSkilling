import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;

public class HibernateExample {

    private Session session;

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

            e.printStackTrace();

        } finally {

            session.close();

        }

        return employeeId;

    }

}
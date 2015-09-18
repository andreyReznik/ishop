package ua.sourceit.ishop.core.entity;


import javax.persistence.*;
import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * Watches order
 *
 * @author: areznik
 */

@Entity
@Table(name="`order`")
public class Order implements Serializable {

    private int id;
    private int userId;
    private List<OrderProduct> orderProducts;
    private Timestamp created;


    public Order() {
        created = new Timestamp(new Date().getTime());
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_order", unique=true, nullable=false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Transient
    public List<OrderProduct> getOrderProducts() {
        return orderProducts;
    }
    public void setOrderProducts(List<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }

    @Column(name="created", nullable = false)
    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }
    @Column(name="id_user", nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Order)) return false;

        Order order = (Order) o;

        if (id != order.id) return false;
        if (userId != order.userId) return false;
        if (!orderProducts.equals(order.orderProducts)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + userId;
        result = 31 * result + orderProducts.hashCode();
        return result;
    }
}

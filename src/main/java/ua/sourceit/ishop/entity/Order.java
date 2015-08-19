package ua.sourceit.ishop.entity;


import javax.persistence.*;
import java.io.Serializable;
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
    private Date created;


    public Order() {
        created = new Date();
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

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created", nullable = false)
    public Date getCreated() {
        return created;
    }

    public void setCreated(Date created) {
        this.created = created;
    }
    @Column(name="id_user", nullable = false)
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}

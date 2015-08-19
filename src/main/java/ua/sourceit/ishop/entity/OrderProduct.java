package ua.sourceit.ishop.entity;

/**
 * @author: areznik
 */

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="order_product")
public class OrderProduct implements Serializable {

    private int id;
    private int orderId;
    private int watchId;
    private int count;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_order_product", unique=true, nullable=false)
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "count", nullable = false)
    public int getCount() {
        return count;
    }
    public void setCount(int count) {
        this.count = count;
    }

    @Column(name = "id_order", nullable = false)
    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    @Column(name = "id_product", nullable = false)
    public int getWatchId() {
        return watchId;
    }

    public void setWatchId(int watchId) {
        this.watchId = watchId;
    }
}

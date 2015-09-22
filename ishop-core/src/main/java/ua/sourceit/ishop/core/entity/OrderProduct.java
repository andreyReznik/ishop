package ua.sourceit.ishop.core.entity;

/**
 * Product for Order
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof OrderProduct)) return false;

        OrderProduct that = (OrderProduct) o;

        if (count != that.count) return false;
        if (id != that.id) return false;
        if (orderId != that.orderId) return false;
        if (watchId != that.watchId) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + orderId;
        result = 31 * result + watchId;
        result = 31 * result + count;
        return result;
    }
}

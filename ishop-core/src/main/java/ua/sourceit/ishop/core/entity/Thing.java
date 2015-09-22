package ua.sourceit.ishop.core.entity;

import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.codehaus.jackson.annotate.JsonIgnore;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import java.io.Serializable;
import java.sql.Timestamp;

/**
 * Base class for entity which can be active,
 * can be updated and store created time
 * @author: areznik
 */
@MappedSuperclass
public abstract class Thing implements Serializable {

    private Timestamp created;
    private Timestamp updated;
    private boolean active;

    @Column(name="created", nullable = false)
    @JsonIgnore
    public Timestamp getCreated() {
        return created;
    }

    public void setCreated(Timestamp created) {
        this.created = created;
    }

    @Column(name="updated")
    @JsonIgnore
    public Timestamp getUpdated() {
        return updated;
    }

    public void setUpdated(Timestamp updated) {
        this.updated = updated;
    }


    @Override
    public String toString() {
        return new ToStringBuilder(this, ToStringStyle.SHORT_PREFIX_STYLE).toString();
    }

    @Column(name="active")
    public boolean isActive() {
        return active;
    }

    public Thing setActive(boolean active) {
        this.active = active;
        return this;
    }


}

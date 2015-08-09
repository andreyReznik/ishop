package ua.sourceit.ishop.model;

/**
 * @author: areznik
 */

public abstract class Thing {

    private long created;
    private long updated;
    private boolean active;

    public long getCreated() {
        return created;
    }

    public void setCreated(long created) {
        this.created = created;
    }

    public long getUpdated() {
        return updated;
    }

    public void setUpdated(long updated) {
        this.updated = updated;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }


}

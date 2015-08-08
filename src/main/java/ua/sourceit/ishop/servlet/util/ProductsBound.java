package ua.sourceit.ishop.servlet.util;

/**
 * Class for getting product bounds (limit and offset) while requesting list of product
 *
 * @author: areznik
 */

public class ProductsBound {
    private int limit;
    private int offset;

    public ProductsBound(int offset, int limit) {
        this.limit = limit;
        this.offset = offset;
    }

    public int getLimit() {
        return limit;
    }

    public int getOffset() {
        return offset;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        ProductsBound that = (ProductsBound) o;

        if (limit != that.limit) return false;
        if (offset != that.offset) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = limit;
        result = 31 * result + offset;
        return result;
    }
}

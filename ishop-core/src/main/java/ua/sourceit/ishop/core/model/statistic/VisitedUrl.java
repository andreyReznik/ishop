package ua.sourceit.ishop.core.model.statistic;

/**
 *
 * @author: areznik
 */

public class VisitedUrl {

    private String url;
    private int count;

    public VisitedUrl(String url, int count) {
        this.url = url;
        this.count = count;
    }

    public String getUrl() {
        return url;
    }

    public int getCount() {
        return count;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof VisitedUrl)) return false;

        VisitedUrl that = (VisitedUrl) o;

        if (count != that.count) return false;
        if (!url.equals(that.url)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = url.hashCode();
        result = 31 * result + count;
        return result;
    }
}

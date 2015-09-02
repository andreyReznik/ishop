package ua.sourceit.ishop.core.model.statistic;

/**
 * Statistic class witch represent client ip, site url and visiting count.
 * immutable
 * @author: areznik
 */

public class VisitedResource {

    private String ip;
    private String url;
    private int count;

    public VisitedResource(String ip, String url, int count) {
        this.ip = ip;
        this.url = url;
        this.count = count;
    }

    public String getIp() {
        return ip;
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
        if (!(o instanceof VisitedResource)) return false;

        VisitedResource that = (VisitedResource) o;

        if (count != that.count) return false;
        if (!ip.equals(that.ip)) return false;
        if (!url.equals(that.url)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ip.hashCode();
        result = 31 * result + url.hashCode();
        result = 31 * result + count;
        return result;
    }


}

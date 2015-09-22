package ua.sourceit.ishop.core.model.statistic;

import java.util.List;

/**
 * Statistic class witch represent client ip, url and visiting count.
 * immutable
 * @author: areznik
 */

public class VisitedResource  {

    private String ip;
    private List<VisitedUrl> visitedUrls;

    public VisitedResource(String ip, List<VisitedUrl> visitedUrls) {
        this.ip = ip;
        this.visitedUrls = visitedUrls;
    }

    public String getIp() {
        return ip;
    }

    public List<VisitedUrl> getVisitedUrls() {
        return visitedUrls;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof VisitedResource)) return false;

        VisitedResource that = (VisitedResource) o;

        if (!ip.equals(that.ip)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return ip.hashCode();
    }
}

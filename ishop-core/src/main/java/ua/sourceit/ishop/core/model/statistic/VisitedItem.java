package ua.sourceit.ishop.core.model.statistic;

import org.apache.commons.lang3.StringUtils;

/**
 * Base class of statistic item
 * @author: areznik
 */

public class VisitedItem {

    private String ip;
    private String url;

    public VisitedItem(String ip, String url) {
        this.ip = ip;
        this.url = url;
    }

    public boolean isValid(){
        return !(StringUtils.isBlank(ip) || StringUtils.isBlank(url));
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof VisitedItem)) return false;

        VisitedItem that = (VisitedItem) o;

        if (!ip.equals(that.ip)) return false;
        if (!url.equals(that.url)) return false;

        return true;
    }

    @Override
    public int hashCode() {
        int result = ip.hashCode();
        result = 31 * result + url.hashCode();
        return result;
    }
}

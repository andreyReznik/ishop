<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<div class="row">
    <div class="large-4 medium-4 columns small">
        <label>Date</label>
        <input id="date" type="text"  placeholder="YYYYMMDD"/>
    </div>
    <div class="large-4 medium-4 columns small">
        <a type="button" href="#" class="button small" onclick="adminOperationsHelper.getStatistic('${apiHost}','${apiVersion}')">Show</a>
    </div>
</div>

<div class="row" id="chart-container">
    <div id="chartContainer" class="chart" ></div>
</div>

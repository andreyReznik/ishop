<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="col2-set product-bottom-col2-set">
    <div class="col-1">
        <div class="product-collateral">
            <dl  id="collateral-tabs" class="collateral-tabs tab-list collateral-tabs-style" name="collateral-tabs">
                <dt  class="tab first active" id="tab-details">
                    <span>Details</span>
                </dt>
                <dd class="tab-container" id="tab-container-details">
                    <div class="tab-content">
                        <div class="product-description">
                            <div class="std">${watch.details}</div>
                        </div>
                        <div class="product-attributes">
                            <div class="attribute-group">
                                <h3>Information</h3>
                                <ul class="attribute-list" id="attribute-list-203">
                                    <li class="first odd">
                                        <label class="label">Brand<span class="prd-tab-colon">:</span></label>
                                        <div class="attribute-data">
                                            <span class="data">${watch.brand.name}</span>
                                        </div>
                                    </li>
                                    <li class="odd">
                                        <label class="label">Model<span class="prd-tab-colon">:</span></label>
                                        <div class="attribute-data">
                                            <span class="data">${watch.model}</span>
                                        </div>
                                    </li>
                                    <li class="even">
                                        <label class="label">Gender<span class="prd-tab-colon">:</span></label>
                                        <div class="attribute-data">
                                            <span class="data">${watch.gender.name}</span>
                                        </div>
                                    </li>
                                    <li class="last odd">
                                        <label class="label">Movement<span class="prd-tab-colon">:</span></label>
                                        <div class="attribute-data">
                                            <span class="data">${watch.movement.name}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    </div>
</div>


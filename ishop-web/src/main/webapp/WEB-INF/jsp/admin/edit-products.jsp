<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="im" tagdir="/WEB-INF/tags" %>
<div class="row">

    <div class="large-12 medium-12 columns">
        <h5>Product details</h5>
        <form>
            <div class="row">
                <div class="large-4 medium-4 columns">
                    <input id="active" type="checkbox">
                    <label for="active">isActive</label>
                </div>
            </div>
            <div class="row">
                <div class="large-4 medium-4 small-4 columns">
                    <label>Brand</label>
                    <select id="brand">
                        <c:forEach var="brand" items="${brands}">
                        <option value="${brand.id}">${brand.name}</option>
                        </c:forEach>
                    </select>
                </div>
                <div class="large-4 medium-4 small-4 columns">
                    <label>Movements</label>
                    <select id="movement">
                        <c:forEach var="movement" items="${movements}">
                            <option value="${movement.id}">${movement.name}</option>
                        </c:forEach>
                    </select>
                </div>
                <div class="large-4 medium-4 small-4 columns">
                    <label>Gender</label>
                    <select id="gender">
                        <c:forEach var="gender" items="${genders}">
                            <option value="${gender.id}">${gender.name}</option>
                        </c:forEach>
                    </select>
                </div>
            </div>

            <div class="row">
                <div class="large-4 medium-4 columns">
                    <label>ID</label>
                    <input id="id" type="text" placeholder="id"/>
                </div>

                <div class="large-4 medium-4 columns">
                    <label>Model No</label>
                    <input id="model" type="text" placeholder="model" />
                </div>

                <div class="large-4 medium-4 columns">
                    <label>Price</label>
                    <input id="price" type="text" placeholder="price" />
                </div>
            </div>

            <div class="row">
                <div class="large-12 columns">
                    <label>Info</label>
                    <textarea id="info" placeholder="product details"></textarea>
                </div>
            </div>

            <div class="row">
                <div class="large-12 columns">
                    <label>Details</label>
                    <textarea id="details" placeholder="product details"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="large-4 medium-4 columns">
                    <im:img id="mainImage" classes="mainImage"  src="" alt="" />
                </div>
                <div class="large-8 medium-8 columns">
                    <div class="row">
                        <label>Main image</label>
                        <input id="mainImageInput" type="file" accept="image/jpeg, image/png" placeholder="photo" />
                    </div>
                    <div class="row">
                        <c:forEach var="i" begin="0" end="5">
                            <div class="large-2 medium-2 columns">
                                <label>Small image</label>
                                <input id="smallImageInput-${i}" type="file" accept="image/jpeg, image/png" placeholder="photo" />
                                <im:img classes="smallImage" id="smallImage-${i}" />
                            </div>
                        </c:forEach>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="large-6 medium-6 columns small">
                    <div class="row">
                        <div class="large-4 medium-4 columns small">
                            <label>offset</label>
                            <input id="offset" type="text" value="1"/>
                        </div>
                        <div class="large-4 medium-4 columns small">
                            <label>limit</label>
                            <input id="limit" type="text" value="20" />
                        </div>
                        <div class="large-4 medium-4 columns small">
                            <a type="button" href="#" class="button small" onclick="adminOperationsHelper.getProducts()">refresh</a>
                        </div>
                    </div>
                </div>
                <div class="large-6 medium-6 columns small">
                    <div class="row">
                        <div class="large-6 medium-6 columns">
                            <a type="button" href="#" class="button small right" onclick="adminOperationsHelper.doAddOrUpdateNewProduct('PUT')">Update</a>
                        </div>
                        <div class="large-6 medium-6 columns">
                            <a type="button" href="#" class="button small right" onclick="adminOperationsHelper.doAddOrUpdateNewProduct('POST')">Add</a>
                        </div>
                    </div>
                </div>
            </div>
        </form>
        <div class="row">
            <h5>Products:</h5>
            <jsp:include page="table-products.jsp"></jsp:include>
        </div>
    </div>
</div>




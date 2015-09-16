var adminOperationsHelper  = {
    getProductDataForEdit: function(url,productId){
        $.getJSON(url+'?id='+productId,
            function(json) {
                $("select#brand option").each(function() { this.selected = (this.text == json.brand); });
                $("select#gender option").each(function() { this.selected = (this.text == json.gender); });
                $("select#movement option").each(function() { this.selected = (this.text == json.movement); });
                $("#active").prop('checked', json.active);
                $("#mainImage").prop('src', json.mainImage);
                $("#id").val(json.id);
                $("#info").val(json.info);
                $("#details").val(json.details);
                $("#price").val(json.price);
                $("#model").val(json.model);
                $("img.smallImage").each(function() {
                    $(this).removeAttr("src");
                });
                $.each(json.watchImages,function(index,obj){
                    $("#smallImage-"+index).prop('src',json.watchImages[index].bigImage);
                });
            }
        );
    },

    getProducts : function (url){
        var offset = $(":input#offset").val();
        var limit =$(":input#limit").val();
        $.ajax({
            url :url+'?offset='+offset+'&limit='+limit,
            dataType: 'html',
            type: 'get',
            statusCode: {
                200: function (data) {
                    if (jQuery('#table-products')) {
                        jQuery('#table-products').replaceWith(data);
                    }
                },
                400: function (data) {
                    alert(data);
                }
            },
            error: function (data) {
                adminOperationsHelper.onError(data);
            }

        });
    },

    deleteProduct: function(url, productId){
        if  (confirm('Remove this item from database?')){
            $.ajax({
                url :url+'?id='+productId,
                dataType: 'text',
                type: 'delete',
                statusCode: {
                    200: function (data) {
                        adminOperationsHelper.getProducts('/admin/products');
                    },
                    404: function (data) {
                        alert(data);
                    }
                },
                error: function (data) {
                    adminOperationsHelper.onError(data);
                }

            });

        }
    },

    changeProductActive: function(productId, value){

    },

    getProductFromForm : function(){
        var smallImagesList = [];
        $( "input[id^='smallImage']" ).each(function(index){
            var imgSrc = $(this).next().attr('src');
            if (typeof imgSrc !== typeof undefined && imgSrc !== false) {
                smallImagesList.push($(this).next().attr('src'));
            }
        });

        return  {
            id: $("#id").val(),
            active:$("#active").prop('checked'),
            brandName: $("#brand option:selected").text(),
            model: $("#model").val(),
            info: $("#info").val(),
            price: $("#price").val(),
            details: $("#details").val(),
            genderName: $("#gender option:selected").text(),
            movementName: $("#movement option:selected").text(),
            mainImage: $('#mainImage').attr('src'),
            smallImages:  smallImagesList
        }
    },

    doAddOrUpdateNewProduct: function(url,type){
        $.ajax({
                url:url,
                type: type,
                data: JSON.stringify(adminOperationsHelper.getProductFromForm() ),
                dataType: 'text',
                contentType: 'application/json',
                statusCode: {
                    200: function (data) {
                        alert(data);
                    },
                    400: function (data) {
                        alert(data);
                    }
                },
                error: function (data) {
                    adminOperationsHelper.onError(data);
                }
            });
    },

    readUrl: function(input, idAttrName){
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#'+idAttrName).attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
        }

    },
    onError : function(data){
        alert('Operation failed. Reason:'+data.responseText);
    }
}

$("#mainImageInput").change(function(){
    adminOperationsHelper.readUrl(this,'mainImage');
});
$( "input[id^='smallImage']" ).each(function(index){
    $(this).change(function(){
        adminOperationsHelper.readUrl(this,$(this).next().attr('id'));
    })
});




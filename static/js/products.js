var base_url = $.environmentVar(
    'https://apibodegas.ondev.today/',
    'https://apibodegas.ondev.today/',
    'https://apibodegas.loadingplay.com/');
var checkout_url = $.environmentVar(
    'https://pay.loadingplay.com',
    'https://lpcheckout.ondev.today',
    'https://pay.loadingplay.com');
var app_public = $.environmentVar(69,69,69);
var site_name = $.environmentVar('vitrineate', 'vitrineate', 'vitrineate');

/**
 * set badges for a product box
 *
 * badges such as sale price or out of stock
 * @param  {obj} product the json object of a product
 */
var setBadges = function(product)
{
    if(product.tags.indexOf("nuevo") > -1)
    {
        $(".letrero-new."+product.id).removeClass("hidden");
    }

    if(product.promotion_price == 0)
    {
        $(".producto."+product.id).html("");
        $(".sku-prod."+product.sku).css("font-weight", "bold");
        $(".producto."+product.id).css("font-size","12px");
    }
    else
    {
        $(".letrero-sale."+product.promotion_price).removeClass("hidden");
        $(".producto."+product.id).html($(".escondido."+product.id).html());
        $(".sku-prod."+product.sku).html($(".promocion."+product.id).html());
        $(".sku-prod."+product.sku).css("font-weight", "bold");
        $(".producto."+product.id).css("font-size","12px");
        $(".producto."+product.id).css("text-decoration", "line-through");
        $(".add-to-cart."+product.sku).attr("product-price", product.promotion_price);
    }

    if(product.in_stock == false)
    {
        $(".shape."+product.sku).removeClass("hidden");
        $(".aa."+product.sku).removeClass("hidden");
        $(".overlay."+product.id).addClass("overlay-agotado");
        $(".overlay."+product.id).html('<div class="text">AGOTADO</div>');
        $(".add-to-cart."+product.sku).html("AGOTADO");
        $(".add-to-cart."+product.sku).attr("disabled", true);
    }

    $.get(base_url
        + "v1/variant/"
        + product.sku
        + "/combination?site_name=vitrineate&sku="
        + product.sku,
        function(data)
        {
            var aux = data.combinations[0].sku.split("-");
            if(data.combinations[0].sku.indexOf("-") == -1)
            {
                if(data.combinations.length == 1)
                {
                    $("."+aux[0].toString()+".comprar-btn").removeClass("hidden");
                }
            }
        });

}

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
    if(products[x].tags.indexOf("nuevo") > -1)
    {
        $(".letrero-new."+products[x].id).removeClass("hidden");
    }

    if(products[x].promotion_price == 0)
    {
        $(".producto."+products[x].id).html("");
        $(".sku-prod."+products[x].sku).css("font-weight", "bold");
        $(".producto."+products[x].id).css("font-size","12px");
    }
    else
    {
        $(".letrero-sale."+products[x].promotion_price).removeClass("hidden");
        $(".producto."+products[x].id).html($(".escondido."+products[x].id).html());
        $(".sku-prod."+products[x].sku).html($(".promocion."+products[x].id).html());
        $(".sku-prod."+products[x].sku).css("font-weight", "bold");
        $(".producto."+products[x].id).css("font-size","12px");
        $(".producto."+products[x].id).css("text-decoration", "line-through");
    }

    if(products[x].in_stock == false)
    {
        $(".shape."+products[x].sku).removeClass("hidden");
        $(".aa."+products[x].sku).removeClass("hidden");
        $(".overlay."+products[x].id).addClass("overlay-agotado");
        $(".overlay."+products[x].id).html('<div class="text">AGOTADO</div>');
        $(".add-to-cart."+products[x].sku).html("AGOTADO");
        $(".add-to-cart."+products[x].sku).attr("disabled", true);
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

/* global $ */
/* global Utils */
/* global unescape */
/* global document */
/* export config */
'use strict';

var getIncludeParameters = function()
{
    var scripts = document.getElementsByTagName('script');
    var myScript = scripts[ scripts.length - 6 ];
    // var scripts = document.getElementsByTagName('script');
    // var myScript = scripts[ scripts.length - 1 ];

    var queryString = myScript.src.replace(/^[^\?]+\??/,'');

    var params = parseQuery( queryString );

    function parseQuery ( query ) {
        var Params = new Object ();
        if ( ! query ) return Params; // return empty object
        var Pairs = query.split(/[;&]/);
        for ( var i = 0; i < Pairs.length; i++ ) {
            var KeyVal = Pairs[i].split('=');
            if ( ! KeyVal || KeyVal.length != 2 ) continue;
            var key = unescape( KeyVal[0] );
            var val = unescape( KeyVal[1] );
            val = val.replace(/\+/g, ' ');
            Params[key] = val;
        }
        return Params;
    }

    return params;
};

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

$(document).ready(function()
{
    var params = getIncludeParameters();
    var tag = '';

    try
    {
        tag = Utils.getUrlParameter('tag');
        tag = tag.replaceAll("%20", " ");
    }
    catch(ex)
    {
        tag = '';
    }


    $("#"+tag).addClass("active");
    if (tag === undefined || tag === 'todos'){
        $("#todos").addClass("active");
    }
        var base_url = $.environmentVar(
          /*'https://apibodegas.loadingplay.com/',*    <- para poder probar en ondev*/
          'https://apibodegas.ondev.today/',
          'https://apibodegas.ondev.today/',
          'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
          /*'https://lpcheckout.ondev.today/',    <- para poder probar en ondev*/
          'https://pay.loadingplay.com',
          'https://lpcheckout.ondev.today',
          'https://pay.loadingplay.com');
        var app_public = $.environmentVar(69,69,69);
        var site_name = $.environmentVar('vitrineate', 'vitrineate', 'vitrineate');

    var random_seed = 'random('+ Math.random() +')';

    var config = {



        'app_public': app_public,
        'base_url': base_url,
        'products_per_page' : 8,
        'tag': tag,
        'ignore_stock': true,
        'infinite_scroll': false,
        //'maxProducts': 150,
        'checkout_url': checkout_url,
        'operator' :'or',
        'site_name': site_name,
        'column': 'position',
        'direction' : 'asc',
        'onLoad': function(products)
        {
            for(x in products)
            {
                var prod = products[x].sku;

                $.get( config.base_url+"v1/variant/"+prod+"/combination?site_name=vitrineate&sku="+prod, function(data)
                {
                    var aux = data.combinations[0].sku.split("-");
                    if(data.combinations.length == 1)
                    {
                        $("."+aux[0].toString()+".comprar-btn").removeClass("hidden");
                    }
                });
            }
            banners(tag);
            for(var x=0; x<products.length; x++)
            {
                if(products[x].tags.indexOf("oferta") > -1)
                {
                    $(".letrero-sale."+products[x].promotion_price).removeClass("hidden");
                    $(".overlay."+products[x].id).addClass("overlay-sale");
                    $(".fufi."+products[x].id).addClass("fufi-sale");
                }

                if(products[x].tags.indexOf("nuevo") > -1)
                {
                    $(".letrero-new."+products[x].id).removeClass("hidden");
                    $(".overlay."+products[x].id).addClass("overlay-new");
                    $(".fufi."+products[x].id).addClass("fufi-new");
                }

                if(products[x].tags.indexOf("nuevo") > -1 && products[x].tags.indexOf("oferta") > -1)
                {
                    $(".fufi."+products[x].id).addClass("fufi-ambos");
                    $(".fufi."+products[x].id).removeClass("fufi-sale");
                    $(".overlay."+products[x].id).addClass("overlay-ambos");
                    $(".overlay."+products[x].id).removeClass("overlay-sale");
                    $(".letrero-sale."+products[x].promotion_price).removeClass("hidden");
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
                    $(".producto."+products[x].id).html($(".escondido."+products[x].id).html());
                    $(".sku-prod."+products[x].sku).html($(".promocion."+products[x].id).html());
                    $(".sku-prod."+products[x].sku).css("font-weight", "bold");
                    $(".producto."+products[x].id).css("font-size","12px");
                    $(".producto."+products[x].id).css("text-decoration", "line-through");
                }
            }
        }
    };

    $(document).ecommerce(config);

    $(document).on("click", ".subcateg", function(ev){
        ev.preventDefault();
        // $(".subcateg").css("border-bottom", "");
        // $(this).css("border-bottom", "dashed 1px rgba(0, 0, 0, 0.33)");

        // if (tag === $(this).attr('tag')){
        //     config.tag=tag;
        //     config.operator = "or";
        // }else{
        //     var multiple_tag = tag+", "+$(this).attr('tag');
        //     config.tag=multiple_tag;
        //     config.operator = "and";
        // }
        config.tag=$(this).attr('tag');
        // console.log(config);

        // facade.page = 1; // o 1 no estoy seguro
        $(".products").html("");
        $(document).ecommerce('destroy');
        $(document).ecommerce(config);

            // alert($(this).attr("tag"));
    });
});

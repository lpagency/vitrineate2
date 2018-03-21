/* global $ */
'use strict';

$(document).ready(function() 
{
        var base_url = $.environmentVar(
          /*'https://apibodegas.ondev.today/',*    <- para poder probar en ondev*/ 
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/',
          'https://apibodegas.loadingplay.com/');
        var checkout_url = $.environmentVar(
          /*'https://lpcheckout.ondev.today/',    <- para poder probar en ondev*/ 
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com',
          'https://pay.loadingplay.com');
        var app_public = $.environmentVar(69,69,69);
        var site_name = $.environmentVar('vitrineate', 'vitrineate', 'vitrineate');

    // functions 
    // productos relacionados
    var related = function(tag) 
    {
        var config = {
            'app_public': app_public,
            'base_url': base_url,
            //'maxProducts': 8,
            'templateOrigin': '#product_template',
            'tag': tag,
            'ignore_stock': true
        };

        $('.product-related').ecommerce('product_box', config);
    };

    //cambia imagenes pequeñas en detalle de producto 
    $(document).on("click", '.little', function(){
        $("#img_detail").attr("src", $(this).attr('src'));
    });

});

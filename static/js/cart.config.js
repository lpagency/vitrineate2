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
            $(document).on("click", ".add-to-cart, .remove-from-cart, .remove-one, .add-one", function()
            {
                units(config);
            });

            $(".link-marca").each(function()
              {
                var link = $(this).attr("href");
                var aux = $(this).attr("marca");
                switch(aux)
                {
                  case "Paula Mar":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=paula_mar");
                  break;

                  case "Dionea":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=dionea");
                  break;

                  case "Rossaria Scarinci":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=rossaria_scarinci");
                  break;

                  case "Pili Saenz Joyas":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=pili_saenz_joyas");
                  break;

                  case "Lisantino":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=lisantino");
                  break;

                  case "Kuyen":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=kuyen");
                  break;

                  case "A Mi Me Viste Mi Mami":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=a_mi_me_viste_mi_mami");
                  break;

                  case "Stoff":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=stoff");
                  break;

                  case "Yambo":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=yambo");
                  break;

                  case "Mora":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=mora");
                  break;

                  case "Villagran Villagran":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=villagran_villagran");
                  break;

                  case "Amelie Lingerie":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=amelie_lingerie");
                  break;

                  case "Ttani":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=ttani");
                  break;

                  case "Sr. Vittorio":
                    $(this).attr("href", "{{ site_base }}/listado_productos?tag=srvittorio");
                  break;
                }
              });

            banners(tag);
            for(var x=0; x<products.length; x++)
            {
                setBadges(products[x]);
            }
        }
    };

    $(document).ecommerce(config);

    units(config);

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

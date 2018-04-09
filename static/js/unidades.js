var units = function(config)
{
	var cookie = getCookie("shopping-cart");
	$.get( config.base_url+"v1/cart/"+cookie, function(data)
	{
		var cant = 0;
		for(x in data.cart.items)
		{
			cant = cant + data.cart.items[x].quantity;
		}

		if(cant != 0)
		{
			$(".unidades").html(cant);
			$(".unidades").removeClass("hidden");
		}
	});
}

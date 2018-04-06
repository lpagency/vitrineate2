var units = function(config)
{
	var cookie = getCookie("shopping-cart");
	$.get( config.base_url+"v1/cart/"+cookie, function(data)
	{
		console.log(data.cart.items);
		var cant = 0;
		for(x in data.cart.items)
		{
			console.log(data.cart.items[x].quantity);
			cant = cant + data.cart.items[x].quantity;
		}
		console.log("resultado: "+cant);

		if(cant != 0)
		{
			$(".unidades").html(cant);
			$(".unidades").removeClass("hidden");
		}
	});
}
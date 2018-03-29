$(window).load(function()
{
	$(".link-marca").each(function()
	{
		var test = $(this).attr("href").split("listado_productos?tag=");
		test = test[1].toLowerCase().replace(" ","_").replace(" ","_").replace(" ","_").replace(" ","_").replace(" ","_");

		$(this).attr("href", window.location.href+"/listado_productos?tag="+test);
		console.log($(this).attr("href"));
	});
});
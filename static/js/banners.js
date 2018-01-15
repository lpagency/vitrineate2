function banners(tag)
{
	switch(tag)
	{
		case "cat1_hombre":
		case "cat2_poleras_h":
		case "cat2_chaqueta_h":
		case "cat2_pantalon_h":
		case "cat2_camisa_h":
		case "cat2_short_h":
		case "cat2_corbatas_h":
			$(".listado_productos_hombre").removeClass("hidden");
		break;

		case "cat1_mujer":
		case "cat2_polera_m":
        case "cat2_chaqueta_m":
        case "cat2_pantalon_m":
        case "cat2_falda":
        case "cat2_short_m":
        case "cat2_vestido":
        case "cat2_zapatos_m":
        case "cat2_ropa_interior_m":
        case "cat2_pijama_m":
			$(".listado_productos_mujer").removeClass("hidden");
		break;

		case "cat1_traje_bano":
		case "cat2_bano_m" :
		case "cat2_bano_h" :
		case "cat2_bano_n" :
			$(".listado_productos_traje").removeClass("hidden");
		break;

		case "cat1_accesorios":
		case "cat2_aros":
		case "cat2_collares":
		case "cat2_cinturon":
		case "cat2_calcetines":
		case "cat2_carteras":
			$(".listado_productos_accesorios").removeClass("hidden");
		break;

		case "cat1_marca":
			$(".listado_productos_marcas").removeClass("hidden");
		break;

		case "cat1_ninos":
		case "cat2_ropa_guagua":
        case "cat2_ninos":
        case "cat2_accesorios_n":
			$(".listado_productos_ninos").removeClass("hidden");
		break;

		case "rosaria_scarini":
			$(".listado_productos_marca1").removeClass("hidden");
		break;

		case "ana_bolena":
			$(".listado_productos_marca2").removeClass("hidden");
		break;

		case "cork_design":
			$(".listado_productos_marca3").removeClass("hidden");
		break;

		case "la_pijameria":
			$(".listado_productos_marca4").removeClass("hidden");
		break;

		case "antonima":
			$(".listado_productos_marca5").removeClass("hidden");
		break;

		case "pili_saenz_joyas":
			$(".listado_productos_marca6").removeClass("hidden");
		break;
		
		case "cat1_oferta":
			$(".listado_productos_oferta").removeClass("hidden");
		break;
	}
}
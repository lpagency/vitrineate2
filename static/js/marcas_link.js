var marcas_link = function()
{

    $(".link-marca").each(function()
    {
        var aux = $(this).attr("marca");

        switch(aux)
        {
            case "Paula Mar":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=paula_mar");
            break;

            case "Dionea":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=dionea");
            break;

            case "Rossaria Scarinci":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=rossaria_scarinci");
            break;

            case "Pili Saenz Joyas":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=pili_saenz_joyas");
            break;

            case "Lisantino":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=lisantino");
            break;

            case "Kuyen":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=kuyen");
            break;

            case "Amimevistemimami":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=a_mi_me_viste_mi_mami");
            break;

            case "A Mi Me Viste Mi Mami":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=a_mi_me_viste_mi_mami");
            break;

            case "Stoff":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=stoff");
            break;

            case "Yambo":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=yambo");
            break;

            case "Mora":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=mora");
            break;

            case "Villagran Villagran":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=villagran_villagran");
            break;

            case "Amelie Lingerie":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=amelie_lingerie");
            break;

            case "Ttanti":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=ttanti");
            break;

            case "Sr. Vittorio":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=srvittorio");
            break;
        }
    });
}

var marcas_link = function()
{

    $(".link-marca").each(function()
    {
        var aux = $(this).attr("marca").toLowerCase();

        switch(aux)
        {
            case "paula mar":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=paula_mar");
            break;

            case "dionea":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=dionea");
            break;

            case "rossaria scarinci":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=rossaria_scarinci");
            break;

            case "pili saenz joyas":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=pili_saenz_joyas");
            break;

            case "lisantino":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=lisantino");
            break;

            case "kuyen":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=kuyen");
            break;

            case "amimevistemimami":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=a_mi_me_viste_mi_mami");
            break;

            case "a mi me viste mi mami":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=a_mi_me_viste_mi_mami");
            break;

            case "stoff":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=stoff");
            break;

            case "yambo":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=yambo");
            break;

            case "mora":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=mora");
            break;

            case "villagran villagran":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=villagran_villagran");
            break;

            case "amelie lingerie":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=amelie_lingerie");
            break;

            case "ttanti":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=ttanti");
            break;

            case "sr. vittorio":
                $(this).attr("href", window.location.origin+"/listado_productos?tag=srvittorio");
            break;
        }
    });
}

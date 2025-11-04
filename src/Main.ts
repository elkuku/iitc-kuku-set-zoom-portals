import * as Plugin from "iitcpluginkit";


class IitcKukuSetZoomPortals implements Plugin.Class {

    init() {
        console.log("IitcKukuSetZoomPortals " + VERSION);

        

        // FILL ME
    }

}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.IitcKukuSetZoomPortals)
 */
export const main = new IitcKukuSetZoomPortals();
Plugin.Register(main, "IitcKukuSetZoomPortals");

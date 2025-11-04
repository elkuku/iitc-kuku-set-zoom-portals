import * as Plugin from 'iitcpluginkit'
import icon from './icon.svg'

class KukuSetZoomPortals implements Plugin.Class {

    init() {
        console.log(`KukuSetZoomPortals ${VERSION}`)

        const toolbarGroup = $('<div>', {class: 'leaflet-bar leaflet-control'})
            .append(
                $('<a>')
                    .addClass('leaflet-bar-part')
                    .css('background-image', `url("${icon}")`)
                    .css('background-size', '24px')
                    .on('click', () => window.map.setZoom(15))
            )

        const parent = $('.leaflet-top.leaflet-left', window.map.getContainer())
        parent.append(toolbarGroup)
    }
}

/**
 * use "main" to access you main class from everywhere
 * (same as window.plugin.IitcKukuSetZoomPortals)
 */
export const main = new KukuSetZoomPortals()
Plugin.Register(main, 'KukuSetZoomPortals')

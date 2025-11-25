import * as Plugin from 'iitcpluginkit'
import icon from './icon.svg'

class KukuSetZoomPortals implements Plugin.Class {
    init() {
        const toolbarGroup = document.createElement('div')
        toolbarGroup.className = 'leaflet-bar leaflet-control'

        const a = document.createElement('a')
        a.classList.add('leaflet-bar-part')
        a.style.backgroundImage = `url("${icon}")`
        a.style.backgroundSize = '24px'
        a.title = 'Set the zoom level to "portals"'
        a.addEventListener(
            'click', () =>
                window.map.setZoom(15)
        )

        toolbarGroup.appendChild(a)

        window.map.getContainer().querySelector('.leaflet-top.leaflet-left')!
            .appendChild(toolbarGroup)
    }
}

Plugin.Register(new KukuSetZoomPortals(), 'KukuSetZoomPortals')

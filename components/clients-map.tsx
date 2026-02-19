'use client'

import { useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import { fromLonLat } from 'ol/proj'
import 'ol/ol.css'

export default function MapComponent() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new XYZ({
            url: `https://api.maptiler.com/maps/streets-v2-dark/{z}/{x}/{y}.png?key=${process.env.NEXT_PUBLIC_MAPTILER_KEY}`,
            tileSize: 512,
            maxZoom: 20,
          }),
        }),
      ],
      view: new View({
        center: fromLonLat([-43.1729, -22.9068]),
        zoom: 12,
      }),
    })

    return () => map.setTarget(undefined)
  }, [])

  return <div ref={mapRef} style={{ width: '100%', height: '245px' }} />
}

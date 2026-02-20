'use client'

import { useEffect, useRef } from 'react'
import Map from 'ol/Map'
import View from 'ol/View'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import Feature from 'ol/Feature'
import Point from 'ol/geom/Point'
import { fromLonLat } from 'ol/proj'
import { Style, Circle, Fill, Stroke, Text } from 'ol/style'
import 'ol/ol.css'
import { Location } from '@/types/dashboard'

type Props = {
  locations?: Location[]
  center?: [number, number]
  zoom?: number
}

export default function MapComponent({
  locations = [],
  center = [-34.8717, -8.0631],
  zoom = 13,
}: Props) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mapRef.current) return

    const features = locations.map((loc) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat(loc.coordinates)),
        ...loc,
      })

      feature.setStyle(
        new Style({
          image: new Circle({
            radius: 10,
            fill: new Fill({ color: loc.color }),
            stroke: new Stroke({ color: '#ffffff', width: 2 }),
          }),
          text: new Text({
            text: loc.name,
            offsetY: -20,
            fill: new Fill({ color: '#ffffff' }),
            stroke: new Stroke({ color: '#000000', width: 3 }),
            font: '12px sans-serif',
          }),
        }),
      )

      return feature
    })

    const vectorLayer = new VectorLayer({
      source: new VectorSource({ features }),
    })

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
        vectorLayer,
      ],
      view: new View({
        center: fromLonLat(center),
        zoom,
      }),
    })

    return () => map.setTarget(undefined)
  }, [locations, center, zoom])

  return <div ref={mapRef} style={{ width: '100%', height: '245px' }} />
}

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import markerRetina from 'leaflet/dist/images/marker-icon-2x.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerRetina,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function MyMap({
  center = [34.85105122992866, 5.7250491499152],
  zoom = 15,
  markers = [
    {
      position: [34.85107916175379, 5.725037753076873],
      label: 'زقاق بن رمضان بسكرة',
    },
  ],
}) {
  return (
    <div className='map'
      style={{
        position: 'relative',
        zIndex: 0,
        height: '360px',
        width: '100%',
        borderRadius: '10px',
        overflow: 'hidden',
      }}
    >
      <MapContainer
        center={center}
        zoom={zoom}
        style={{
          height: '100%',
          width: '100%',
          position: 'relative',
          zIndex: 0,
        }}
        className="leaflet-container"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position}>
            <Popup>{marker.label}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MyMap;
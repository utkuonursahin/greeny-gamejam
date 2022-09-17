import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import * as L from "leaflet";
function Location() {
  const icon = L.icon({
    iconUrl: "assets/icon-location.svg",
    iconSize: [36, 46],
    iconAnchor: [18, 46]
  })
  return (
    <section className="location">
      <MapContainer center={[40.0035119, 32.8948606]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[40.0035119, 32.8948606]} icon={icon}>
          <Popup>
            GameJamin gerçekleşeceği yer işte tam burası...
          </Popup>
        </Marker>
      </MapContainer>
      <div className="location__info">
        <h2 className="location__info-heading">Adres Tarifi :</h2>
        <p>
          Etap Rekreasyon Alanı, Yeşiltepe Mahallesi Günebakan Sokak 2, Küme Evleri No: 5, 06010 Keçiören / Ankara
        </p>
      </div>
    </section>
  );
}

export default Location;
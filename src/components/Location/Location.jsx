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
      <MapContainer center={[39.888189, 32.6568321]} zoom={14} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[39.8882997, 32.6557593]} icon={icon}>
          <Popup>
            GameJamin gerçekleşeceği yer işte tam burası... Başkent Üniversitesi!
          </Popup>
        </Marker>
      </MapContainer>
      <div className="location__info">
        <h2 className="location__info-heading">Adres Tarifi</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Facilis fugiat magni minus quis sint soluta tenetur vitae? Adipisci perferendis, sunt.
        </p>
      </div>
    </section>
  );
}

export default Location;
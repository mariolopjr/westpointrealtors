import React from "react"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps"
import { geocodeByAddress, getLatLng } from "react-places-autocomplete"

class MapContainer extends React.Component {
  state = { coords: { lat: 28.9267856, lng: -82.4614073 } }

  render() {
    if (
      this.state.coords.lat === 28.9267856 &&
      this.state.coords.lng === -82.4614073
    ) {
      geocodeByAddress(this.props.address)
        .then(results => getLatLng(results[0]))
        .then(({ lat, lng }) => this.setState({ coords: { lat, lng } }))
    }

    return (
      <GoogleMap className="map" zoom={18} center={this.state.coords}>
        {this.props.isMarkerShown && <Marker position={this.state.coords} />}
      </GoogleMap>
    )
  }
}

export default withScriptjs(withGoogleMap(MapContainer))

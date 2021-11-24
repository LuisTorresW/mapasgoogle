import React, { Component } from "react";
import GoogleMaps from "simple-react-google-maps";
export default class Maps extends Component {
  render() {
    return (
      <div className="container">
        <GoogleMaps
          apiKey={"AIzaSyAnAA0HBfHN8fzBCB-vmvT-oPHX16dkN4E"}
          style={{ height: "500px", width: "370px" }}
          zoom={10}
          center={{
            lat: 40.423765,
            lng: -3.664428,
          }}
          markers={[
            { lat: 11.423765, lng: -1.664428 },
            { lat: 40.423765, lng: -3.664428 },
          ]}
        />
      </div>
    );
  }
}

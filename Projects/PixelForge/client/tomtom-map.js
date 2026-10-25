import { TomTomConfig } from "@tomtom-org/maps-sdk/core";
import { TomTomMap } from "@tomtom-org/maps-sdk/map";
import { Marker, Popup, setWorkerUrl } from "maplibre-gl";

import mapLibreWorkerUrl from "maplibre-gl/dist/maplibre-gl-worker.mjs?url";
import "maplibre-gl/dist/maplibre-gl.css";

// Configure the MapLibre worker
setWorkerUrl(mapLibreWorkerUrl);

// Get map elements
const container = document.getElementById("listing-map");
const status = document.getElementById("listing-map-status");

if (container) {
  const longitude = Number(container.dataset.longitude);
  const latitude = Number(container.dataset.latitude);
  const apiKey = import.meta.env.VITE_TOMTOM_API_KEY;

  // Validate property coordinates
  const validCoordinates =
    container.dataset.longitude !== "" &&
    container.dataset.latitude !== "" &&
    Number.isFinite(longitude) &&
    Number.isFinite(latitude) &&
    longitude >= -180 &&
    longitude <= 180 &&
    latitude >= -90 &&
    latitude <= 90;

  if (!validCoordinates) {
    if (status) {
      status.textContent = "Property coordinates are invalid.";
    }
  } else if (!apiKey) {
    if (status) {
      status.textContent = "TomTom API key is not configured.";
    }
  } else {
    // Configure TomTom
    TomTomConfig.instance.put({
      apiKey,
      language: "en-US",
    });

    // Initialize the map
    const map = new TomTomMap({
      style: "streetLight",
      mapLibre: {
        container: "listing-map",
        center: [longitude, latitude],
        zoom: 14,
      },
    });

    // Add red marker and popup after map loads
    map.mapLibreMap.on("load", () => {
      
const popup = new Popup({
  offset: 24,
  closeButton: true,
  closeOnClick: false,
  maxWidth: "280px",
}).setHTML(`
  <div class="property-map-popup">
    <strong>Property location</strong>
    <p>The exact location will be revealed after booking.</p>
  </div>
`);


      new Marker({
        color: "#E53935",
      })
        .setLngLat([longitude, latitude])
        .setPopup(popup)
        .addTo(map.mapLibreMap);

      if (status) {
        status.textContent = "";
      }
    });

    // Handle map errors
    map.mapLibreMap.on("error", (event) => {
      console.error("TomTom map error:", event.error);

      if (status) {
        status.textContent =
          "Unable to load the map. Check the API key and connection.";
      }
    });
  }
}

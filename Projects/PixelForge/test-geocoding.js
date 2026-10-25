require("dotenv").config();

async function testGeocoding() {
  const apiKey = process.env.TOMTOM_API_KEY;

  if (!apiKey) {
    throw new Error("TOMTOM_API_KEY is missing from .env");
  }

  const address = "Belagavi, Karnataka, India";

  const url = new URL(
    `https://api.tomtom.com/search/2/geocode/${encodeURIComponent(address)}.json`,
  );

  url.searchParams.set("key", apiKey);
  url.searchParams.set("limit", "1");
  url.searchParams.set("countrySet", "IN");

  const response = await fetch(url);

  console.log("HTTP status:", response.status);

  if (!response.ok) {
    throw new Error(`TomTom request failed: ${response.status}`);
  }

  const data = await response.json();
  const result = data.results?.[0];

  if (!result?.position) {
    console.log("No matching location returned.");
    return;
  }

  console.log("Matched address:", result.address?.freeformAddress);
  console.log("Longitude:", result.position.lon);
  console.log("Latitude:", result.position.lat);

  console.log("GeoJSON:", {
    type: "Point",
    coordinates: [result.position.lon, result.position.lat],
  });
}

testGeocoding().catch((error) => {
  console.error("Geocoding test failed:", error.message);
  process.exitCode = 1;
});

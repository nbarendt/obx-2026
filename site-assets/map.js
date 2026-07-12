/* OBX Family Guide — interactive orientation map.
   Leaflet 1.9.4 + OpenStreetMap tiles (both loaded from CDN in head.html).

   Privacy note: there is deliberately NO marker on our rental house. A precise
   lat/lon is equivalent to publishing the street address. The Ocean Bay Blvd
   beach access (a public landmark at MP 8.5) stands in for our stretch of beach.
   Only places with a public, listed coordinate get a pin — nothing is guessed. */

(function () {
  "use strict";

  var el = document.getElementById("obx-map");
  if (!el || typeof L === "undefined") return; // no map container (e.g. print) → do nothing

  var markers = [
    {
      name: "Ocean Bay Blvd Beach Access (MP 8.5)",
      coords: [35.9985, -75.6635],
      popup: "Our stretch of beach. Bathhouse, lifeguards, and free beach wheelchairs. (Location approximate.)"
    },
    {
      name: "Wright Brothers National Memorial",
      coords: [36.020659, -75.66761],
      popup: "Museum, 1903 flyer replica, and the hilltop monument — in Kill Devil Hills. Also the kite-festival venue."
    },
    {
      name: "Jockey's Ridge State Park",
      coords: [35.9637835, -75.632629],
      popup: "Tallest dunes on the East Coast, free. Best early or at sunset — midday sand is scorching."
    },
    {
      name: "Nags Head Woods Preserve",
      coords: [35.9897899, -75.664526],
      popup: "Shaded maritime-forest trails (one wheelchair-accessible), free. Bring bug spray."
    },
    {
      name: "Jennette's Pier",
      coords: [35.9100671, -75.5955845],
      popup: "NC-Aquariums-run pier (MP 16.5): aquarium tanks in the pier house, plus fishing and a bathhouse."
    },
    {
      name: "Bodie Island Lighthouse",
      coords: [35.8185355, -75.563321],
      popup: "Climbable (~200 steps, ~$10) with a marsh boardwalk at the base — about 20 min south."
    },
    {
      name: "Currituck Beach Lighthouse",
      coords: [36.3766481, -75.830705],
      popup: "Climbable (~$13) up in Corolla, ~45 min north. Pair it with a wild-horse 4×4 tour."
    },
    {
      name: "Roanoke Island Festival Park (Manteo)",
      coords: [35.910467, -75.668916],
      popup: "Living-history village and the Elizabeth II ship, on the Manteo waterfront across the sound."
    }
  ];

  var map = L.map(el, { scrollWheelZoom: false });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var latlngs = [];
  markers.forEach(function (m) {
    latlngs.push(m.coords);
    L.marker(m.coords)
      .addTo(map)
      .bindPopup("<strong>" + m.name + "</strong><br>" + m.popup);
  });

  map.fitBounds(latlngs, { padding: [30, 30] });
})();

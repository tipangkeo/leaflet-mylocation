// let tes = {
//   lat: 45,
//   len: 112,
// };

// console.log(tes);

// definisikan map untuk ditampilkan ke elemen html
const myMap = L.map('my-location').setView([0, 0], 1);

// definisikan icon map
const myIconMap = L.icon({
  iconUrl: 'my-icon-map.PNG',
  iconSize: [150, 150],
  iconAnchor: [25, 16],
});

// masukan icon map ke layar map
// definisikan marker dgn lat dan longi titik center bumi
const marker = L.marker([0, 0], { icon: myIconMap }).addTo(myMap);

// atribut copyrigt streetmap
const attribution =
  'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

// mengambil gambar bumi
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

// mendefinisikan atribut ke layar map
const tiles = L.tileLayer(tileURL, { attribution });

// tambahkan tile ke layar map
tiles.addTo(myMap);

// data API satelit ISS
const apiURL = 'https://api.wheretheiss.at/v1/satellites/25544';

// ambil data API satelit ISS
async function getMyLocation() {
  const response = await fetch(apiURL);
  const data = await response.json();
  const { latitude, longitude } = data;
  //   console.log(data);
  //   console.log(data.latitude);
  //   console.log(data.longitude);

  //   L.marker([latitude, longitude]).addTo(myMap);
  // set latitude dan longitude ke marker
  // marker.setLatLng([latitude, longitude]);
  marker.setLatLng([-2.27986037, 114.00733578]);

  document.getElementById('latitude').textContent = 'Latitude:' + latitude;
  document.getElementById('longitude').textContent = 'Longitude: ' + longitude;
}

getMyLocation();

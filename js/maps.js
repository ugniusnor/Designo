var canadaMap = L.map('canadaMap').setView([43.6532, -79.3832], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWdubm9yIiwiYSI6ImNrazZxY3o4YTA1M3gydm1oOTBwa2J2aTMifQ.Q_ZxFHKHy0qcF-stC5S1og', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(canadaMap);

L.marker([43.6532, -79.3832],{
markerColor:'red',
}).addTo(canadaMap)
.bindPopup('Our Central Office')
.openPopup();


var australiaMap = L.map('australiaMap').setView([-33.865143, 151.2093], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWdubm9yIiwiYSI6ImNrazZxY3o4YTA1M3gydm1oOTBwa2J2aTMifQ.Q_ZxFHKHy0qcF-stC5S1og', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(australiaMap);

L.marker([-33.865143, 151.2093],{
markerColor:'red',
}).addTo(australiaMap)
.bindPopup('Our Australia Office')
.openPopup();

var ukMap = L.map('ukMap').setView([51.509865, -0.118092], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidWdubm9yIiwiYSI6ImNrazZxY3o4YTA1M3gydm1oOTBwa2J2aTMifQ.Q_ZxFHKHy0qcF-stC5S1og', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'your.mapbox.access.token'
}).addTo(ukMap);

L.marker([51.509865, -0.118092],{
markerColor:'red',
}).addTo(ukMap)
.bindPopup('Our London Office')
.openPopup();


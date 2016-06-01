// *** WATS 1020 ADD A MAP *** //

//Set script to run after document load
$(document).ready(function() {
    
    
    //Draw a map in map-container
    var map = L.map('map-container').setView([37.331850, -122.029623], 8);
	
    
	var osmUrl='http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    
    
    //Add map layers 
    var osm = new L.TileLayer(osmUrl, {minZoom: 8, maxZoom: 18, attribution: osmAttrib});

    var satLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var drawLayer = L.tileLayer( 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright" title="OpenStreetMap"   target="_blank">OpenStreetMap</a> contributors | Tiles Courtesy of <a     href="http://www.mapquest.com/" title="MapQuest" target="_blank">MapQuest</a> <img  src="http://developer.mapquest.com/content/osm/mq_logo.png" width="16" height="16">',
        subdomains: ['otile1','otile2','otile3','otile4']
});

    var mapLayers = {
        "Satellite": satLayer,
        "Map View": drawLayer,
        "Open Street Maps": osm
};

    L.control.layers(mapLayers).addTo(map);
        satLayer.addTo(map);
    

    //show markers with popups at no fewer than 3 interesting locations.
    var marker = L.marker([37.331850, -122.029623]).addTo(map);
        marker.bindPopup('<b>Apple HQ</b><br>One Infinite Loop, Apple headquarters. <br><a href="https://en.wikipedia.org/wiki/Apple_Campus">Read More!</a>');
    
    var marker = L.marker([46.845757, -121.767565]).addTo(map);
        marker.bindPopup('<b>Point Success</b><br>Elevation: 14,164 feet (4,300 m)');
    
    var marker = L.marker([46.869047, -121.517128]).addTo(map);
        marker.bindPopup('<b>Tipsoo Lake</b><br>Elevation: 5,290 ft (1,612 m)');
    
    var marker = L.marker([46.785836, -121.735372]).addTo(map);
        marker.bindPopup('<b>Paradise</b><br>Elevation: 5,400 ft (1,645 m)');
 
    var circle = L.circle([46.927725, -121.493720], 1000, {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        }).addTo(map);
        circle.bindPopup('<b>Crystal Mountain Ski Resort</b>');
  
	
	
 });
    





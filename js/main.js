// *** WATS 1020 ADD A MAP *** //

//Set script to run after document load
$(document).ready(function() {
    
    
    //Draw a map in map-container
    var map = L.map('map-container').setView([37.524658, -122.303798], 8);
	
    
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
    

    //Map popup markers
    var marker = L.marker([37.331850, -122.029623]).addTo(map);
        marker.bindPopup('<b>Apple HQ</b><br>One Infinite Loop, Apple headquarters. <br><a href="https://en.wikipedia.org/wiki/Apple_Campus">Read More!</a>');
    
	var marker = L.marker([37.751921, -122.479085]).addTo(map);
				marker.bindPopup('<b>San Francisco</b><br>Birthplace of Steve Jobs, February 24th, 1955. <br><a href="book.html#page/10">Read about it!</a>');
	
	var marker = L.marker([37.484704, -122.230579]).addTo(map);
				marker.bindPopup('<b>Byte Shop</b><br>Paul Terrel at Bye Shop was the first company to order the Macintosh. <br><a href="book.html#page/22">Read about it!</a>');
		
	var marker = L.marker([37.777907, -122.417442]).addTo(map);
				marker.bindPopup('<b>San Francisco Civic Auditorium</b><br>Home of the West Coast Computer Faire, this is where Jobs showed the world the Apple II.<br><a href="book.html#page/28">Read about it!</a>');
	
	var marker = L.marker([37.402540, -122.148109]).addTo(map);
				marker.bindPopup('<b>Xerox PARC</b><br>Steve Jobs visisted this research lab in 1979 and that experienced changed computing forever.<br><a href="book.html#page/35">Read about it!</a>');
	

	
	
	
 
//     var circle = L.circle([46.927725, -121.493720], 1000, {
//         color: 'red',
//         fillColor: '#f03',
//         fillOpacity: 0.5,
//         }).addTo(map);
//         circle.bindPopup('<b>Crystal Mountain Ski Resort</b>');
  
	
	
 });
    





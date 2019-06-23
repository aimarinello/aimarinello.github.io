var mapa = L.map('mapa',{
		center:[5,29],
		zoom: 3,
		minZoom:2,
		maxxZoom:18		
		})

var Capabase = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
		maxZoom: 18,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
		}).addTo(mapa);

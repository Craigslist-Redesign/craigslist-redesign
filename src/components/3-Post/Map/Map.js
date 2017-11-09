import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import './Map.css'
import axios from 'axios';



class Map extends Component {

constructor(props) {
  super(props);
 
  this.state = {
   
    zoom: 12,
    post: [],
    zip: this.props.userInfo.zipcode
  };

}


componentDidUpdate(prevProps) {
  const { zoom } = this.state;    
    
    
    let zip = prevProps.userInfo.zipcode
   
    

  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip +"&key=AIzaSyDT-5CDLUilrcXFV8gdB1QfLUYK3GFz2vE";
  axios.get(url).then( res => {
    

    

    let lat = parseFloat(res.data.results[0].geometry.location.lat);
    let lon = parseFloat(res.data.results[0].geometry.location.lng)

    let zipMarker = [parseFloat(res.data.results[0].geometry.location.lng),parseFloat(res.data.results[0].geometry.location.lat)]

    mapboxgl.accessToken = 'pk.eyJ1IjoicnVzc2VsbGJ3cmlnaHQiLCJhIjoiY2o5b2ZnNzgyMnVwMDMzcGdiaWs3Y2F2aiJ9.pH4AUvYt_3c4ls13mhCDlA'

    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v9',
      center: [lon, lat],
      zoom,
      interactive: false,
      scrollZoom: false
    });
    
    
    

    map.on('load', function() {

      var el = document.createElement('div');
      el.id = 'marker';
  
      new mapboxgl.Marker(el)
      .setLngLat([lon, lat])
      .addTo(map)

      })
    




    
   
  })
  

 
}

render() {
  
 
  
  return (
    
    <div className="map-container" >
        
      
      <div ref={el => this.mapContainer = el} className='Map' />
    </div>
  );
  }
}

export default Map;
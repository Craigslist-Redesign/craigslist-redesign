import React, { Component } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
import './Map.css'
import axios from 'axios';



class Map extends Component {

constructor(props) {
  super(props);
 
  this.state = {
    // lng: 0,
    // lat: 0,
    zoom: 11,
    post: [],
    zip: this.props.userInfo.zipcode
  };

}


componentDidUpdate(prevProps) {
  const { lng, lat, zoom } = this.state;    
    
    
    // this.setState({zip: this.props.userInfo.zipcode})
    
   
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
      interactive: false
    });
    
    map.on('move', () => {
      const { lng, lat } = map.getCenter();
  
      this.setState({
        lng: lng.toFixed(4),
        lat: lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
      });
    });


    

    var el = document.createElement('div');
    el.id = 'marker';

    new mapboxgl.Marker(el)
    .setLngLat(zipMarker)
    .addTo(map)

    map.scrollZoom.disable();
   
  })
  
    
  
  

 
}

render() {
  const { lng, lat, zoom } = this.state;
 
  
  return (
    
    <div className="map-container" >
        
      
      <div ref={el => this.mapContainer = el} className='Map' />
    </div>
  );
  }
}

export default Map;
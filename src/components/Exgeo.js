import React,{useState} from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer,TileLayer,Marker,useMap } from "react-leaflet";
import {Icon, marker} from "leaflet"
import { Navigation } from "lucide-react";


function Exgeo  () {
    
    const [localLatlng, setLocallatlng] = useState({lat:0,lng:0});
    const [m,setM] = useState(0)
    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
        });
        const customIcon = new Icon({
            iconUrl: "/location.png",
            iconSize:[38,38]
        })
        var mark 
        const CustomMark = ({customIcon,loc,distance})=>{
            
            const map = useMap(); 
            const handlemapClick=(e)=>{
                const {lat,lng} = e.latlng;
                if (mark !== undefined && mark._latlng !== e.latlng ) {
                    setLocallatlng({lat:'0',lng:'0'}) 
                    map.removeLayer(mark)
                }
                 mark =  marker([lat,lng],{icon:customIcon}).addTo(map);
                 distance = mark.getLatLng().distanceTo(loc);
                 setLocallatlng({lat: e.latlng.lat,lng: e.latlng.lng})
                 setM(Math.round(distance))
                 return 
                
                
        }
            const handlemapDoubleClick= (e)=>{ 
                map.removeLayer(mark)
                setLocallatlng({lat:0,lng:0})
                setM(false)
                let value = localStorage.getItem('latlng')
                console.log(value)
            }
            map.on('click',  (e)=>handlemapClick(e));
            map.on('dblclick',(e)=>handlemapDoubleClick(e));
            
            console.log(localLatlng)
            console.log(m)
            return m
            
        }

    function Distanceview(){
        if(m>1000){
            return <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 max-w-sm mx-auto transition-colors duration-300 ease-in-out">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Distance</h2>
            </div>
            <div className="flex items-center justify-center mb-6">
              <Navigation className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="text-center">
              <p className="text-6xl font-extrabold mb-2 text-gray-800 dark:text-white">{m/1000}</p>
              <p className="text-xl uppercase tracking-wide text-gray-600 dark:text-gray-400">KM</p>
            </div>
            <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Current distance traveled
              </p>
            </div>
          </div>
        }
        return <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl p-8 max-w-sm mx-auto transition-colors duration-300 ease-in-out">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Distance</h2>
        </div>
        <div className="flex items-center justify-center mb-6">
          <Navigation className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <div className="text-center">
          <p className="text-6xl font-extrabold mb-2 text-gray-800 dark:text-white">{m}</p>
          <p className="text-xl uppercase tracking-wide text-gray-600 dark:text-gray-400">Meters</p>
        </div>
        <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current distance traveled
          </p>
        </div>
      </div>
    }

    function    mapView(){
        const lat = coords.latitude;
        const long = coords.longitude;
        let distance = 0
        return <div className="w-full p-5 h-full mt-40 flex lg:flex-row md:flex-col flex-col  justify-center items-center">
               
                <MapContainer center={[lat,long]} zoom={13} >
                    <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <CustomMark customIcon={customIcon} loc={[lat,long]} distance={distance} m={m} />
                    <Marker position={[lat,long]} icon={customIcon} />
                </MapContainer>
               <Distanceview />
            </div>
    }

      

    return  !isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : coords ? (
        mapView()
    )
     : (
        <div>Getting the location data&hellip; </div>
    );
};

export default Exgeo;
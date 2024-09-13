import React,{useState} from "react";
import { useGeolocated } from "react-geolocated";
import { MapContainer,TileLayer,Marker,Popup,useMap } from "react-leaflet";
import {Icon, marker,DistanceGrid} from "leaflet"


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
            return <div className="mx-12 border-blue-500 text-slate-500 font-bold border-2 rounded-lg font-mono w-48 h-6 justify-center items-center"> Distance {m/1000} Km</div>
        }
        return <div className="mx-12 border-blue-500 text-slate-500 rounded-lg font-bold border-2  font-mono w-48 h-6 justify-center items-center"> Distance {m} Meters</div>
    }

    function    mapView(){
        const lat = coords.latitude;
        const long = coords.longitude;
        let distance = 0
        return <div className="w-full p-5 h-1/2 flex flex-row sm:flex-col justify-center items-center">
               
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
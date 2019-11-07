import React, {useState, useEffect} from "react";
import axios from "axios";
import BoxCard from "./box";
export default NasaInfo;
function NasaInfo(){
const [data, setData] = useState([]);
useEffect(() => {
axios
    .get("https://api.nasa.gov/planetary/apod?api_key=2iyOulD4CR90dasVwmXio8BHxwRTKXducqdy7sNv")
    .then(response => {
        setData(response.data);
         console.log(response.data);
    })
    .catch(error => {
        console.log("The data was not returned", error);
    });
}, []);

    return(
        <BoxCard 
        title ={data.title}
        copyright={data.copyright}
        url={data.url}
        date = {data.date}
        explanation = {data.explanation}
        />
    )
}
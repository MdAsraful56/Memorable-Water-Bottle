import { useEffect, useState } from "react"
import Watch from "../Watch/Watch";

export default function Watchs(){

    const [watchs, setWatchs] = useState([]);

    useEffect( () => {
        fetch('watchs.json')
            .then(res => res.json())
            .then(data => setWatchs(data))
    } ,[])


    return (
        <div>
            <h3>Watchs Total : {watchs.length} </h3>
            {
                watchs.map(watch => <Watch key={watch.id} watch={watch} ></Watch>)
            }
        </div>
    )
}
import { useEffect } from "react";
import { useState } from "react"
import Bottle from "../Bottle/Bottle";

export default function Bottles(){


    const [bottles, setBottles] = useState([]);

    useEffect( () => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    } ,[])

    return (
        <div>
            <h2>Bottles: {bottles.length} </h2>

            <div className="">
                {
                    bottles.map(bottle => <Bottle Bottle={bottle} key={bottle.id} ></Bottle>)
                }
            </div>

        </div>
    )
}
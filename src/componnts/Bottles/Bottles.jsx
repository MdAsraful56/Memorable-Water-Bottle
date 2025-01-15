import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react"
import Bottle from "../Bottle/Bottle";

export default function Bottles({handleBuyBtn}){


    const [bottles, setBottles] = useState([]);

    useEffect( () => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data));
    } ,[])

    return (
        <div className="mb-20">
            <h2 className="text-3xl text-center mb-10">Bottles: {bottles.length} </h2>

            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10">
                {
                    bottles.map(bottle => <Bottle handleBuyBtn={handleBuyBtn} bottle={bottle} key={bottle.id} ></Bottle>)
                }
            </div>

        </div>
    )
}

Bottles.propTypes = {
    handleBuyBtn: PropTypes.func
}
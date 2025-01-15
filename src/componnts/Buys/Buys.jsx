import PropTypes from "prop-types";
import Buy from "../Buy/Buy";

export default function Buys({buys}){
    return (
        <div className="">
            <h2 className="text-3xl text-center mb-10">Bottles: {buys.length} </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10">
                {
                    buys.map((buy, idx) => <Buy buy={buy} key={idx} ></Buy> )
                }
            </div>
            {/* <Buy buys={buys} ></Buy> */}
        </div>
    )
}

Buys.propTypes = {
    buys: PropTypes.object
}
import PropTypes from "prop-types";
export default function Bottle({bottle, handleBuyBtn}){
    const {name, price, img} = bottle;

    return (
        <div className="border rounded-2xl p-5 space-y-5">
            <img className="w-full rounded-2xl" src={img} alt="" />
            <div className="">
                <h2 className="text-xl font-semibold ">Name: {name} </h2>
                <h4 className="text-xl font-semibold ">Price: ${price} </h4>
            </div>
            <button onClick={()=>{handleBuyBtn(bottle)}} className="bg-blue-500 hover:bg-blue-100 hover:text-black text-white font-bold px-3 py-3 rounded-full">Buy Now</button>
        </div>
    )
}

Bottle.propTypes = {
    bottle: PropTypes.object,
    handleBuyBtn: PropTypes.func
}
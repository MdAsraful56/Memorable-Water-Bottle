import PropTypes from "prop-types"
export default function Buy({buy}){
    const {name, price, img} = buy;
    return (
        <div className="border rounded-2xl p-5 space-y-5">
            <img className="w-full rounded-2xl" src={img} alt="img nai" />
            <div className="">
                <h2 className="text-xl font-semibold ">Name: {name} </h2>
                <h4 className="text-xl font-semibold ">Price: ${price} </h4>
            </div>
        </div>
    )
}

Buy.propTypes = {
    buy: PropTypes.object
}
export default function Watch({watch}){
    const {name, id, img} = watch;
    console.log(watch);
    // console.log(key)

    return (
        <div>
            <h2>Watch Name: {name} </h2>
        </div>
    )
}
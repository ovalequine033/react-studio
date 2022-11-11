// TODO: create a component that displays a single bakery item

export default function BakeryItem({name, price, description, image, cart, setCart, priceTotal, setPrice}) {

    function handleClick() {
        setCart([...cart, name]);
        setPrice(priceTotal + price); 
    }

    return(
        <div id="item-container">
            <div>{name} {price}</div>
            <div>{description}</div>
            <img src={image}/>
            <button onClick={handleClick}>add to cart</button>
        </div>
    );
}


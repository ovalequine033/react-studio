import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  
  const [cart, setCart] = useState([]); 
  const [priceTotal, setPrice] = useState(0);

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem name={item.name} price={item.price} description={item.description} image={item.image}
        cart={cart} setCart={setCart} priceTotal={priceTotal} setPrice={setPrice}/> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        <div>{cart}</div>
        <div>{priceTotal}</div>
      </div>
    </div>
  );
}

export default App;

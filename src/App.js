import Card from "./components/Card";
import { product } from "./data/products";

function App() {
  return (
    <div className="App">
      {
        product.map(item=>( //burda ya () bele skobka qoyub ise saliriq yada return ederek
<Card 
key = {item.id}
data= {item}
// image={item.image} 
// title={item.title} 
// description={item.description}
// price={item.price}
/>
        )
        )}
        {/* <Button className="secondary" text="Login"/>  */}
    </div>
  );
}

export default App;

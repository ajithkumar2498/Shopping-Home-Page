import React,{ useState} from 'react';
import Navbar from './components/Navbar.jsx'
import Productscard from './components/Productscard.jsx';


function App() {
 
   let [cart,setCart]=useState(0)
   let products=[
    {
      image:"../src/assets/images/briyani.jpg",
      name:"biryani",
      price: 5,
    },
    {
      image:"../src/assets/images/meals.jpeg",
      name:"Meals",
      price: 3,
    },
    {
      image:"../src/assets/images/italian-pizza.jpg",
      name:"Italian Pizza",
      price: 2.5,
    },
    {
      image:"../src/assets/images/parotta.jpg",
      name:"Parotta",
      price: 1,
    },
    {
      image:"../src/assets/images/sharwarma.jpg",
      name:"shawarma",
      price: 1,
    },
    {
      image:"../src/assets/images/chicken-sandwich.jpg",
      name:"Chicken Sandwich",
      price: 2,
    },
    {
      image:"../src/assets/images/gobi-manchurian.jpg",
      name:"Gobi Manchurian",
      price: 2,
    },
    {
      image:"../src/assets/images/dosa.jpg",
      name:"Dosa",
      price: 1.5,
    }
   ]
  return (
    <>
     <Navbar cart={cart} />
     <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                     {products.map((e,i) => {
                    return  <Productscard cart={cart} setCart={setCart} product={e} key={i}/>
                     })
                    }
                  
                </div>    
           </div>   
        
    </section>     

    </>
  )
}

export default App;

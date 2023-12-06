import React,{useEffect, useState} from 'react';
import Navbar from './components/Navbar.jsx'
import Productscard from './components/Productscard.jsx';
// import briyani from './briyani.jpg'


function App() {
  // useEffect(()=>{ 
  //   const importImages = async () => {
  //     const imageContext = import.meta.glob("./images/*");
  //     console.log(imageContext);
  //     for (const path in imageContext) {
  //       imageContext[path]().then((mod) => {
  //         setImagePaths([...imagePaths, mod.default]);
  //       });
  //     }
  //   };
  // })
   let [cart,setCart]=useState(0)
   let products=[
    {
      name:"biryani",
      price: 5,
    },
    {
      name:"Meals",
      price: 3,
    },
    {
      name:"Italian Pizza",
      price: 2.5,
    },
    {
      name:"Parotta",
      price: 1,
    },
    {
      name:"shawarma",
      price: 1,
    },
    {
      name:"Chicken Sandwitch",
      price: 2,
    },
    {
      name:"Gobi Manchurian",
      price: 2,
    },
    {
    
      name:"Dosa",
      price: 1.5,
    },
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

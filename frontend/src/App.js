import React from 'react'
import data from './data'

function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a className="brand" href="/">amazon</a>
            </div>
            <div>
                <a href="/cart">cart</a>
                <a href="/                              signin"> sign in</a>
            </div>

        </header >
        <main>
            <div className="row center">
                {data.products.map((products) =>(
                <div key={products._id} className="card">
                 <a href={`/products/${products._id}`}>
                     <img  className="medium" src={products.image} alt={products.name}/>
                 </a>
                 <a href={`/products/${products._id}`}>
                   <a href="product.html">
                       <h2>
                           {products.name}
                       </h2>
                   </a>  
                   <div calssName="rating">
                       <span><i className="fa fa-star"></i></span>  
                       
                       <span> <i className="fa fa-star"></i>   </span>
                       <span> <i className="fa fa-star"></i>   </span>
                       <span>  <i className="fa fa-star"></i>  </span>
                       <span>  <i className="fa fa-star"></i>   </span>
                       
                   </div>
                      <div className="price">${products.price}</div>
                       </div>
                       </div>
                       ))
                }
                
            </div>
            </
        </main>
        <footer className="row center"> All right reserved </footer>

    </div>

  );
}

export default App;

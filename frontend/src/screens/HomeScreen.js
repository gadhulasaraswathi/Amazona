import React from 'react';
import product from '../components/product';
import data from '../data';
export default function HomeScreen(){
    return (
    <div>
    <div className="row center">
        {data.products.map((product)=>(
        <product key={product._id} product={product}></product>
        ))
        }
    </div>
    </div>
    );
}
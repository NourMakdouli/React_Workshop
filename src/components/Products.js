import { Component } from "react";
import prods from "../products.json";
import Product from './Product';


export default class Products extends Component {
    render() {
       
        return (
            prods.map((p,index)=><Product produit={p} key={index} ></Product>)
        );

    }
}


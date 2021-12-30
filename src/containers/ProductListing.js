import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
//passing products in action.
import {setProducts} from "../redux/actions/productActions"
import ProductComponent from "./ProductComponent"


const ProductListing = () => {
    const products = useSelector((state) => state)
    //accessing data/products into store
    const dispatch = useDispatch()
    
    const fetchProducts = async () => {
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) => {
            console.log("Err", err)
        }) 
        //passing products as setProducts in action through dispatch
       dispatch(setProducts(response.data)) 
    };

     useEffect(() => {
         fetchProducts()
     }, [])
     console.log("Products: ", products)
    return (
        <div className="ui grid container">
            <ProductComponent />
        </div>
    )
}

export default ProductListing

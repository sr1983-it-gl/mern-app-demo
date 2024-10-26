import axios from "axios";

import {PRODUCT_API_BASE_URL} from "./config.js"

const getAllProducts = async () => {
  
    const getItemsUrl = `${PRODUCT_API_BASE_URL}/products`;
    
    console.log("Final Url is " + getItemsUrl);
    
    const response  = await axios.get(getItemsUrl);
    return response.data;
  
} 


const postProduct = async (newProductItem) => {

    const postItemUrl = `${PRODUCT_API_BASE_URL}/products`;
  
    const response = await axios.post(postItemUrl, newProductItem, {
      headers : {
        'Content-Type' : 'application/json'
      }
    })
  
    return response.data;
}

export {getAllProducts, postProduct};
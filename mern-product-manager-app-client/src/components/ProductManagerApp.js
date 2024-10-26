
import { useEffect } from "react";
import { getAllProducts } from "../services/product";

import {  ProductItems } from "./ProductItems";

import {Container} from "react-bootstrap"

import {useState} from "react"
import { ProductCreator } from "./ProductCreator";


const ProductManagerApp = () => {

    const [productItems, setProductItems] = useState([]);

    useEffect( () => {

        const getAllItemsInvoker = async () => {
    
          const response = await getAllProducts();
          console.log("Response is " + JSON.stringify(response));

          setProductItems(response);
        }
    
        getAllItemsInvoker();
    
      }, [])
    

      const refreshParentUponNewProductAddition = (newProductItem) => {

        setProductItems([
          newProductItem,
          ...productItems
        ])
    
      }
    
      return (
        <Container>
          <h2>Products Manager App</h2>

          <ProductCreator productItems={productItems} refreshParentUponNewProductAddition={refreshParentUponNewProductAddition}></ProductCreator>

          <ProductItems productItems={productItems}></ProductItems>

        </Container>
      );


      
  }
  
export {ProductManagerApp}

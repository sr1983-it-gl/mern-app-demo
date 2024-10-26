import { Button } from "react-bootstrap"
import { Modal } from "react-bootstrap"

import { useState } from "react"

import { Form } from "react-bootstrap"

import { useRef } from "react"
import { postProduct } from "../services/product";

const ProductCreator = ({ productItems, refreshParentUponNewProductAddition }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const productPriceRef = useRef(null);
  const itemsInStockRef = useRef(null);

  const handleAddProduct = async (event) => {

    event.preventDefault();

    const productName = (productNameRef?.current?.value);
    const productDescription = (productDescriptionRef?.current?.value);
    const productPrice = parseFloat((productPriceRef?.current?.value));
    const itemsInStock = parseInt((itemsInStockRef?.current?.value));

    console.log("Product Name " + productNameRef);
    console.log("Product Description " + productDescription);
    console.log("Product Price " + productPrice);
    console.log("Items in Stock " + itemsInStock);

    const createProductItem = {
      name: productName,
      description: productDescription,
      price: productPrice,
      itemsInStock: itemsInStock
    }

    console.log("Create Product Item->" + JSON.stringify(createProductItem));

    const response = await postProduct(createProductItem);
    console.log("Response is " + JSON.stringify(response));

    refreshParentUponNewProductAddition(response);

    handleClose();
  }

  const createForm = () => {

    return (

      <Form onSubmit={handleAddProduct}>

        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" ref={productNameRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter product description" ref={productDescriptionRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" ref={productPriceRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="itemsInStock">
          <Form.Label>Items in Stock</Form.Label>
          <Form.Control type="number" placeholder="Enter price" ref={itemsInStockRef} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>

      </Form>
    )
  }

  return (

    <div>

      <hr />
      <Button variant="primary" onClick={handleShow} className="float-end">New Product Item</Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>{createForm()}</Modal.Body>
      </Modal>

    </div>
  )
}
export { ProductCreator }

import React, { useEffect, useState } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import config from "../config/config.json";
const Product_page = () => {

    const url = new URL(window.location.href);
    const id = url.pathname.split('/').pop();
    const [view, setView] = useState(false);        
    const handleClick = () => {
        setView(!view);
      };
    const [product, setProduct] = useState();
    const [model, setModel] =useState();
    const [brand,setBrand] =useState();
    const [negotiable, setNego] = useState();
    const [price, setPrice] = useState();
    
    useEffect(() => {
        axios
          .get(`${config.REACT_APP_API}product/getproduct`, {
            params: { id: id },
          })
          .then((response) => {
            if(product == null){
                console.log(response)
                setProduct(response.data[0]);
                setModel(response.data[0].model);
                setPrice(response.data[0].price);
                setBrand(response.data[0].brand);
                setNego(response.data[0].negotiable);   
            }
            
           ;
          });
      }, []);

   
      const prod = product;
      
    const CustomerInfo = () => <div>
                    Name : {product.contact_name} <br></br>
                    Mobile NO : {product.mobile} <br></br>
                    Email Address : {product.email}  <br></br>
                    Address : {product.address} <br></br>
        </div>;

     

  return (
    <div className="card-container">
        <Row>
            <h4> Product Page </h4>
            <br></br>
            <br></br>            
            <Col md={6}>
                <Card >
                    <Card.Body>
                    <Card.Title>{brand} {model}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Product Brand : {brand}</Card.Subtitle>
                    <Card.Text>
                    Model : {model} <br></br>
                    Price :  {price}<br></br>
                    Negotiable :  {negotiable}  <br></br>
                    </Card.Text>
                        <Button onClick={handleClick} variant="success">Show Seller Details</Button>{' '}
                        
                        {view && <CustomerInfo/>}
                    </Card.Body>
                    
                </Card>  
                
            </Col>
            <Col md={6} >
                    <Image src={require('../resources/la2.jpg')} rounded />
            </Col>
             
        </Row>
         
      
    </div>
  );
};

export default Product_page;
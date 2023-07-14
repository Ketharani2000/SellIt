import React from 'react';
import axios from "axios";
import Deal_card from './deal_card';
import Row from 'react-bootstrap/Row';
import config from "../config/config.json";

import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";

const View_details = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`${config.REACT_APP_API}product/getAllProduct`)
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  
console.log(products);

  return (
    <div className="card-container">
        <Row>
            <h4> Explore the deals at Sell It </h4>
            <br></br>
            <br></br>
            {products.map((card) => (
              <Col >
                <Deal_card id={card.id} title= {card.brand + " " + card.model} place={card.address} price={card.price} show={card.photo}/>
                  <br></br>
               </Col>
            ))} 
                     
        </Row>
         
      
    </div>
  );
};

export default View_details;
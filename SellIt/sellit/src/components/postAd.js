import Form from 'react-bootstrap/Form';
import axios from "axios";
import config from "../config/config.json";
import Alert from 'react-bootstrap/Alert';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import { useState } from 'react';


function SellProperty() {
    const [showmsg,setmsg] = useState(false);
    const [type,setType] = useState();
    const [brand,setBrand] = useState();
    const [model,setModel] = useState();
    const [photo,setImg] = useState();
    const [price, setPrice] = useState();
    let [negotiable, setNegotiable] = useState(false);
    const [contact_name, setName] = useState();
    const [mobile, setMobile] = useState();
    const [NIC, setNIC] = useState();
    const [email, setMail] = useState();
    const [address , setAddress] = useState();


    const handleFileChange = (event) => {
        const files = event.target.files;
        // Process the selected file(s) here
        console.log(files);
      };


    const handleSubmit = (event) => {
        event.preventDefault(); 
        if(negotiable == true){
            negotiable = "yes";
        } else{
            negotiable = "no";
        }
        photo = "img1.jpg";
        
        axios
      .post(`${config.REACT_APP_API}product/addProduct`, {type,brand,model,photo,price,negotiable,contact_name,mobile,NIC,email,address}, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => {
        console.log("success");
        setmsg(true);
        console.log(res.data.cust_id);       

      })
      };

    return (
        <div>
            <h2>Sell Your Property</h2>
             <h4 className="lead"> Please Add your Product Details </h4>
                <br></br>
            <Row>
                <Col md={6}>
                    
                    <Form  onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Type</Form.Label>
                            <Form.Control type="text" placeholder="Enter Product Type"  onChange={e => setType(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Brand</Form.Label>
                            <Form.Control type="text" placeholder="Enter Brand"  onChange={e => setBrand(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="text" placeholder="Enter Model"  onChange={e => setModel(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Device Photo</Form.Label>
                            <Form.Control type="file" accept="image/*"  onChange={handleFileChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1"  >
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="text" placeholder="Enter Price"  onChange={e => setPrice(e.target.value)}/>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check  onChange={e => setNegotiable(e.target.checked)}
                                type="checkbox"
                                id="disabledFieldsetCheck"
                                label="Negotiable"
                            />
                        </Form.Group>
                        <br></br>
                        <hr></hr>
                        <h4 className="lead"> Contact Information </h4>
                        <br></br>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Your Name" onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Mobile Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Your Number" onChange={e => setMobile(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>NIC</Form.Label>
                            <Form.Control type="text" placeholder="Your NIC" onChange={e => setNIC(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={e => setMail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Your Address</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={e => setAddress(e.target.value)} />
                        </Form.Group>
                        <Button type="submit">Submit</Button>
                        <br></br>
                        <br></br>
                    </Form>
                </Col>
                <Col md={6} >
                    <Image src={require('../resources/happy.jpg')} rounded />
                    <br></br>
                        <br></br>
                        {showmsg && (
                            <Alert variant='success'>
                                Successfully Added
                            </Alert>
                            )}
                </Col>
            </Row>
    
      </div>
    );
  }
  
  export default SellProperty;
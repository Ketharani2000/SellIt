import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const Deal_card = (props) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={require(`../resources/${props.show}`)} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
              Location : {props.place}
              <br></br>
              Price : {props.price}
            </Card.Text>
            <Link to={`/product/${props.id}`}>
                <Button variant="primary">More Details</Button>
            </Link>
            
          </Card.Body>
        </Card>
      );
  };

export default Deal_card;
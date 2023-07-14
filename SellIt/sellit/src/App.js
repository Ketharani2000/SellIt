import logo from './logo.svg';

import MyNavbar from './components/header.js'
import SellProperty from './components/postAd'
import ViewDetails from './components/view_deals'
import Product_page from './components/product_page'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
   <div>
      <MyNavbar />
      <Container>
        <br></br>
        <switch>
          <Route exact path="/">
            <ViewDetails/>
          </Route>
          <Route exact path="/view">
            <ViewDetails/>
          </Route>
          <Route path="/add">
            <SellProperty/>
          </Route>
          <Route path="/product/"  exact component={ViewDetails} />
          <Route path="/product/:id" component={Product_page} />
        </switch>
      </Container>
      
    </div>
    </Router>
  );
}

export default App;

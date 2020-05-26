import React,{Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom';
import Category from './Category';
import Products from './Products';
import {fakeAuth, Login} from './Login' 
import './App.css';
import Admin from './Admin';




const Home=()=>
(
  <div>
    <h3 className='page'> Home</h3>
  </div>
)




class App extends Component {
  render() {

    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className='nav-li'><Link to="/">Home</Link></li>
            <li className='nav-li'><Link to="/Category">Category</Link></li>
            <li className='nav-li'><Link to="/Products">Product</Link></li>
            <li className='nav-li'><Link to="/Login">Admin Area</Link></li>
          </ul>
       </nav>

    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/Category" component={Category}/>
       <Route path="/Products" component={Products}/>
       <Route path="/Login" component={Login}/>
       <Admin authed={fakeAuth.isAuthenticated} path='/Admin' component = {Admin} />
    </Switch>

    </div>
    );
  }
}

export default App
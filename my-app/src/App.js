import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component} from 'react';
import Home from './Components/presentation/Presentation';
import Admin_panel from './Components/Admin_panel/Admin_panel'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      profiles:[]
   }
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:1337/api/main-pages?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const profiles = await response.json()
    this.setState({profiles: profiles})
  }


  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home profiles={this.state.profiles} />} />
          <Route exact path='/123456789/Admin' element={<Admin_panel />} />
        </Routes>
      </Router>
    )
  }

}



export default App;


// /api/main-pages/:id
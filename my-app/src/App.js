import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component} from 'react';
import Home from './Components/presentation/Presentation';
import YetiSmash from './Components/YetiSmash/YetiSmash'
import Bar_menu from './Components/Bar_menu/Bar_menu'
import Footer from './Components/Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      profiles:[],
      yeti:[],
      logos:[]
   }
  }

  componentDidMount = async () => {

    // profiles BDD part
    
    const response = await fetch('http://localhost:1337/api/main-pages?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const profiles = await response.json()
    this.setState({profiles: profiles})

    //YetiSmash BDD part

    const responseYeti = await fetch('http://localhost:1337/api/yeti-smashes?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const yeti = await responseYeti.json()
    this.setState({yeti: yeti})

    //Logo BDD part

    const responseLogo = await fetch('http://localhost:1337/api/img-logos?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const logos = await responseLogo.json()
    this.setState({logos: logos})
    
  }


  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<> <Bar_menu logos={this.state.logos} /> <Home profiles={this.state.profiles}/> <Footer logos={this.state.logos}/> </> } />
          <Route exact path='/YetiSmash' element={<> <Bar_menu logos={this.state.logos}/> <YetiSmash yeti={this.state.yeti}/> <Footer logos={this.state.logos}/> </>} />
        </Routes>
      </Router>
    )
  }

}



export default App;
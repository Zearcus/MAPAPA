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
import YetiSmash from './Components/YetiSmash/YetiSmash'

class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      profiles:[],
      yeti:[]
      // FooterLogo:[]
   }
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:1337/api/main-pages?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const profiles = await response.json()
    this.setState({profiles: profiles})

    const responseYeti = await fetch('http://localhost:1337/api/yeti-smashes?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const yeti = await responseYeti.json()
    this.setState({yeti: yeti})
    
    // const responseFooter = await fetch('http://localhost:1337/api/Img-footers?populate=*', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    // const FooterLogo = await responseFooter.json()
    // this.setState({FooterLogo: FooterLogo})
  }


  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={<Home profiles={this.state.profiles} />} />
          <Route exact path='/123456789/Admin' element={<Admin_panel />} />
          <Route exact path='/YetiSmash' element={<YetiSmash yeti={this.state.yeti}/>} />
        </Routes>
      </Router>
    )
  }

}



export default App;


// /api/main-pages/:id
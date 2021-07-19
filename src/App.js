import React from 'react';
import Head from "./Components/Head/Head";
import Screen from './Components/Screen/Screen';
import Allmovies from './Components/Allcontainer/Allmovies';
import Allseries from './Components/Allcontainer/Allseries';
import Onemovie from './Components/Allcontainer/Onemovie';
import Footer from './Components/Footer/Foot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/***************************************************************/
import './App.css';
import './Components/Head/Head.css';
import './Components/Screen/Screen.css';
import './Components/Allcontainer/Allmovie.css'
import './Components/Allcontainer/Allseries.css'
import './Components/Allcontainer/Onemovie.css'
import './Components/Footer/Foot.css';



export default function App() {
  return (

    <Router>

      <div>
        <Head />

        <div>
          <Switch>
            <Route exact path="/">
              <Screen />
              <Allmovies />
              <Allseries />
            </Route>
          </Switch>

        </div>

        <Switch>
          <Route path="/:slug">
            <Onemovie />
          </Route>
        </Switch>

        <Footer/>
        <div className="end"/>



      </div>




    </Router >
  )
}







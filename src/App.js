import React from 'react';
import Head from "./Components/Head/Head";
import Screen from './Components/Screen/Screen';
import Allmovies from './Components/Allcontainer/Allmovies';
import Allseries from './Components/Allcontainer/Allseries';
import Onepick from './Components/Allcontainer/Onepick';
import Result from './Components/Results/res';
import Footer from './Components/Footer/Foot';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


/***************************************************************/
import './App.css';
import './Components/Head/Head.css';
import './Components/Screen/Screen.css';
import './Components/Allcontainer/Allmovie.css'
import './Components/Allcontainer/Allseries.css'
import './Components/Allcontainer/Onepick.css'
import './Components/Results/res.css'
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
              <Footer />
              <div className="end" />
            </Route>
          </Switch>

        </div>

        <Switch>
          <Route path="/:slug">
            <Onepick />
            <div className="end2" />
          </Route>
        </Switch>


        <Switch>
          <Route path="/Results">
            <Result/>
            <Footer />
            <div className="end" />
          </Route>
        </Switch>


      </div>

    </Router >
  )
}







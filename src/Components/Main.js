import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Projects from './Pages/Projects';
import ProjectClumsy from './Pages/Projects/ProjectClumsy';
import ProjectTrixie from './Pages/Projects/ProjectTrixie';
import ProjectInnchanted from './Pages/Projects/ProjectInnchanted';
import ProjectLA95 from './Pages/Projects/ProjectLA95';
import ProjectMMC from './Pages/Projects/ProjectMMC';
import Prototypes from './Pages/Projects/Prototypes';
import ProjectGameJam from './Pages/Projects/ProjectGameJam';
import ProjectSubmarine from './Pages/Projects/ProjectSubmarine';
import ProjectPlayerController from './Pages/Projects/ProjectPlayerController';
import ProjectGOAP from './Pages/Projects/ProjectGOAP';
import ProjectOther from './Pages/Projects/ProjectOther';
import GermanTest from './Pages/GermanTest';
import ProjectHexapawn from './Pages/Projects/ProjectHexapawn';

class Main extends Component {
  render() {
    return (
      <Router>
          <Switch className='body'>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/projects/clumsybat' component={ProjectClumsy} />
            <Route path='/projects/trixie' component={ProjectTrixie} />
            <Route path='/projects/innchanted' component={ProjectInnchanted} />
            <Route path='/projects/gamejams' component={ProjectGameJam} />
            <Route path='/projects/la95' component={ProjectLA95} />
            <Route path='/projects/mmc' component={ProjectMMC} />
            <Route path='/projects/prototypes' component={Prototypes} />
            <Route path='/projects/submarine' component={ProjectSubmarine} />
            <Route path='/projects/hexapawn' component={ProjectHexapawn} />
            <Route path='/projects/goap' component={ProjectGOAP} />
            <Route path='/projects/playercontroller' component={ProjectPlayerController} />
            <Route path='/projects/other' component={ProjectOther} />
            <Route path='/projects' component={Projects} />
            <Route path='/germantest' component={GermanTest} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}
export default Main;
    
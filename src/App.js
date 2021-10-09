
import './App.css';

import {BrowserRouter as Router} from 'react-router-dom';//my work
import {Switch ,Route } from 'react-router-dom';//my work

import home from './component/home';//my work
import About from './component/About';
import Adminlogin from './component/adminlogin';
import S_registration from './component/S_registration';
import Slogin from './component/slogin';
import Sresult from './component/sresult';
import Aregister from './component/adminregister';
import Apage from './component/adminpage';
import Adds from './component/adds';
import Update from './component/update';
import Delete from './component/delete';





function App() {
  return (
    <div className="App">
      <Router>                              
          <Switch>
              <Route exact path='/' component={home}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/admin' component={Adminlogin}></Route>
              <Route exact path='/sreg' component={S_registration}></Route>
              <Route exact path='/slog' component={Slogin}></Route>
              <Route exact path='/sres' component={Sresult}></Route>
              <Route exact path='/areg' component={Aregister}></Route>
              <Route exact path='/apge' component={Apage}></Route>
              <Route exact path='/addstd' component={Adds}></Route>
              <Route exact path='/updates' component={Update}></Route>
              <Route exact path='/deletes' component={Delete}></Route>

              
          </Switch>
        </Router>
        
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch
} from './easy-router';

import { Link, BrowserRouter, HashRouter } from './easy-router-dom';

const App =() => {
  return (
    <BrowserRouter>
      <div>测试 React Router</div>
      <div><Link to="/home1">首页1</Link></div>
      <div><Link to="/home2">首页2</Link></div>


{/* 
      <Route path="/home1" component={()=>"首页1"} />
      <Route path="/home2" component={()=>"首页2"} /> */}

      <Switch>
        <Route path="/home1" component={()=>"首页1"} />
        <Route path="/home2" component={()=>"首页2"} />
      </Switch> 
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { logout } from './Scatter';

import '../App.css';
import Settings from './settings';

 
class Profile extends Component{
 fun = event => {
    alert("hai")  
  };

  render(){
    return(
      <div id="con">
        <Router>
          <div>
            <Route exact path="/Settings" component={Settings} />
          </div>
        </Router>
            
        <div>
          <div class="view overlay" >
            <a href="#!">
              <div class="mask rgba-white-slight"></div>
            </a>
          </div>
          <div class="card-body">
            <img src={'../images/avatar.png'} alt="Avatar" class="avatar" /> <br /><br />
            <h4 class="card-title"><b>Alex Nelson</b></h4>
            <b><span>20 followers</span>&nbsp;&nbsp;&nbsp;<span>30 following</span>&nbsp;&nbsp;&nbsp;<span>50</span>&nbsp;<span id="mur">MUR</span></b><br /><br />
            <b> 
              <p><img id="ico"src={'../images/settings_cog.png'} alt="img" onClick={this.fun}/>&nbsp;&nbsp;&nbsp;Settings</p>
              <p><img id="ico"src={'../images/settings_cog.png'} alt="img" />&nbsp;&nbsp;&nbsp;Earn MUR</p><br />
              <p><img id="ico"src={'../images/account_recovery_icon.png'} alt="img" />&nbsp;&nbsp;&nbsp;Account Recovery</p><br />
              <p><img id="ico"src={'../images/friends.png'} alt="img" />&nbsp;&nbsp;&nbsp;Invite Friends</p><br />
              <p><img id="ico"src={'../images/settings_cog.png'} alt="img" />&nbsp;&nbsp;&nbsp;Connect to Steemit(..  soon)</p><br />
              <a href="#!" onClick={()=>{ logout() }}><img id="ico"src={'../images/logout_logo.png'} alt="img" />&nbsp;&nbsp;&nbsp;Logout</a><br /> <br />
            </b>
          </div>
        </div>
      </div>   
    );
  }
}

export default Profile;
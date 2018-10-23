import React,{Component} from 'react';
import '../App.css';

class Settings extends Component{
    render(){
        return(
            <div id="con">
                <div class="card-body">
                    <b>
                        <p><img id="ico"src={'../images/settings_cog.png'} alt="img" />&nbsp;&nbsp;&nbsp;Earn MUR</p><br />
                        <p><img id="ico"src={'../images/account_recovery_icon.png'} alt="img" />&nbsp;&nbsp;&nbsp;Account Recovery</p><br />
                        <p><img id="ico"src={'../images/friends.png'} alt="img" />&nbsp;&nbsp;&nbsp;Invite Friends</p><br />
                        <p><img id="ico"src={'../images/settings_cog.png'} alt="img" />&nbsp;&nbsp;&nbsp;Connect to Steemit(..  soon)</p><br />
                        <p><img id="ico"src={'../images/logout_logo.png'} alt="img" />&nbsp;&nbsp;&nbsp;Logout</p><br />
                    </b>
                </div>
            </div>    
        );
    }
}

export default Settings;
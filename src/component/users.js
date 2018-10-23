import React,{Component} from 'react';
import {Userdetail} from '../shared/data';
import '../App.css';

class User extends Component{
  constructor(props){
    super(props)
    this.state={
      userdetail:Userdetail
    }
  }
  render(){
    const list=this.state.userdetail.map(list=>{
      return(
        <div id="us" key={list.id}>
          <div  class="container">
            <div class="row">
              <div class="panel panel-default widget">
                <div class="panel-body">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <div class="row">
                        <div id="li" class="col-xs-2 col-md-1">
                          <img src={this.state.userdetail[list.id].img} alt="Avatar" class="avatar" /> </div>
                          <div class="col-xs-10 col-md-11">
                          <div>
                            <a href="http://bootsnipp.com/BhaumikPatel/snippets/4ldn"><h5><b id="b">{this.state.userdetail[list.id].name}</b></h5></a> 
                          </div>
                          <div id="ms"class="comment-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                            euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return(
      <div id="ul">
        {list}
      </div>
    );        
  }
}
export default User;
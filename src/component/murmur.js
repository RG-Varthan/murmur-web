import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Card, CardImage } from 'mdbreact';
import '../App'

const styles = theme => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    align: 'center'
  },
  img1:{ margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    align: 'center',
     justifyContent: 'center', alignItems: 'center'},
  h5: {
    useNextVariants: true,
  },
});

class Murmur extends React.Component {

  constructor(props){
    super(props);
    
    this.state = {
        author: '',
        content: '',
        Murmurs:[
          {
            key:'0',
            username:'Jonarthan Lee',
            message:'Hey! this is the first murmur comment',
            url:'../images/bike.jpeg',
            transid:'001',
            snoop:'3',
            yell:'5',
            comments:'2',
            time:'2 hours ago'
          },
          {
            key:'1',
            username:'Jonarthan Lee',
            message:'Hey! this is the first murmur comment',
            url: null,
            transid:'001',
            snoop:'2',
            yell:'6',
            comments:'4',
            time:'5 hours ago'
          },
          {
            key:'2',
            username:'Jonarthan Lee',
            message:'Hey! this is the first murmur comment',
            url:'../images/color.jpeg',
            transid:'001',
            snoop:'5',
            yell:'3',
            comments:'7',
            time:'8 hours ago'
          }
        ],
        Initial_len : 0,
      };
  }

  componentDidMount()
  {
    const API = 'http://murmurjungleapi.wandx.co/api/murmurTimeline?account_name=';
    const DEFAULT_QUERY = 'amitmaurya12';

    fetch(API + DEFAULT_QUERY)
      .then(response => response.json())

    // fetch('http://murmurjungleapi.wandx.co/api/murmurTimeline/',
    // {
    //     method: 'GET',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         "account_name" : 'amitmaurya12'
    //     }),
    //     'mode': 'no-cors'
    // }).then((res) => {
    //     res.json().then(resJson=>{
    //         console.log("murmurs: "+resJson);
    //     }).catch(err => console.log(err))
    // }).catch((error) => {
    //     console.error(error);
    // });
  }


  render() {
    const { classes } = this.props;

    return (
      <div>
        <h5 align="center"> Murmurs </h5>
        {this.state.Murmurs.map(({key, username, message, url, snoop, yell, comments, time }) => (
          <div key={key}>
            <Grid  container style={{margin: 0,width: '100%', height:'100%'}}>
              <Grid item xs={12} >
                <Grid container >

                  <Grid item>
                    <ButtonBase className={classes.image}>
                      <img className={classes.img}  style={{ backgroundColor: "#56A2FF", width: 65, height: 65, borderRadius: 40 }} alt="complex" src="../images/avatar.png" />
                    </ButtonBase>
                  </Grid>
                  
                  <Grid item xs={12} sm container>
                    <Grid item xs container direction="column">
                      <Grid item xs>
                        <h5 style={{fontWeight:600}}> {username} </h5>
                        <h5 > {message} </h5>
                        <br />

                        <Grid  container justify="center" style={ (url !== null)? {display:''}: {display:'none'} }>
                          <Card>
                            <CardImage top src={url} alt="Card image cap"/>
                          </Card>
                        </Grid>
        
                      </Grid>
                      <br />
                      <Grid container>
                        <img alt="complex" src="../images/snoop.png" style={{width:30,height:30,}} /> 
                        &nbsp; <h5 style={{color:'red'}}>{snoop}</h5>
                        <img alt="complex" src="../images/yell.png"  style={{width:30,height:30,marginLeft:50}} /> 
                        &nbsp; <h5 style={{color:'red'}}>{yell}</h5>
                        
                        <img alt="complex" src="../images/comment.png" style={{width:30,height:30,marginLeft:54}} />  
                        &nbsp; <h5 style={{color:'red'}}>{comments}</h5>
                        <br /> <br />  
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <h5 >{time}</h5>
                  </Grid>
                </Grid>
              </Grid>  
            </Grid>
            <br /> <hr/>
            </div>
          ) 
        )}
      </div>
    );
  }
}
Murmur.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Murmur);
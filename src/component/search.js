import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App'
const styles = theme => ({

  image: {
    width: 128,
    height: 128,
  },
  img: {
    marginTop:10,
    maxWidth: '100%',
    maxHeight: '100%',
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

function Search(props) {
  const { classes } = props;
  return (
    <div>
      <br />
        <h5  align="center"> Search </h5>
        <br /><br/>

        <Grid  container style={{margin: 10,width: '100%', height:'100%',align:'center'}}>
        
          <Grid item xs={4} sm container>
          </Grid>       


          <Grid item xs={12} sm container >
            <img className={classes.img}  style={{ backgroundColor: "#56A2FF", width: 65, height: 65, borderRadius: 40 }} alt="complex" src="../images/avatar.png" />
            <Grid item xs style={{marginTop:25}}>
              <h5> <b> &nbsp;&nbsp;Jonarthan Lee</b> 
                &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp;
                <button  class="btn-primary"> Follow </button>
              </h5>
            </Grid>
          </Grid>
  
          <Grid item xs={3} sm container>
          </Grid>
        </Grid>
        <br /> <hr/>

        <Grid  container style={{margin: 10,width: '100%', height:'100%',align:'center'}}>
       
          <Grid item xs={4} sm container>
          </Grid>       


        <Grid item xs={12} sm container >
          <img className={classes.img}  style={{ backgroundColor: "#56A2FF", width: 65, height: 65, borderRadius: 40 }} alt="complex" src="../images/avatar.png" />

          <Grid item xs style={{marginTop:25}}>
            <h5>
              <b> &nbsp;&nbsp;Jonarthan Lee</b> 
              &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
              &nbsp;&nbsp; &nbsp;&nbsp;
              <button  class="btn-primary"> Follow </button>
            </h5>
          </Grid>
        </Grid>
 
        <Grid item xs={3} sm container>
        </Grid>
      </Grid>
      <br /> <hr/>
    </div>
  );
}

Search.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Search);
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import '../App';

const styles = theme => ({
  img: {
    marginTop: 10,
    maxWidth: '100%',
    maxHeight: '100%',
  },
  img1: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
    align: 'center',
  },
  h5: {
    useNextVariants: true,
  },
  addButtonContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
});

class Notification extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <br />
        <h5 align="center">Notification</h5>
        <br />
        <Grid container style={{ margin: 3, width: '100%', height: '100%' }}>
          <Grid item xs={5} sm container />

          <Grid item xs={11} sm container>
            <img
              className={classes.img}
              style={{
                backgroundColor: '#56A2FF',
                width: 65,
                height: 65,
                borderRadius: 40,
              }}
              alt="complex"
              src="../images/avatar.png"
            />

            <Grid item xs container style={{ marginTop: 30 }}>
              <h5>
                <b> &nbsp;&nbsp;Scott Masterson</b>
              </h5>
              &nbsp;&nbsp;Yelled your murmur
            </Grid>
          </Grid>
          <Grid item xs={5} sm container />
        </Grid>
        <br /> <hr />

        <Grid container style={{ margin: 3, width: '100%', height: '100%' }}>
          <Grid item xs={5} sm container />

          <Grid item xs={11} sm container>
            <img
              className={classes.img}
              style={{
                backgroundColor: '#56A2FF',
                width: 65,
                height: 65,
                borderRadius: 40,
              }}
              alt="complex"
              src="../images/avatar.png"
            />

            <Grid item xs container style={{ marginTop: 30 }}>
              <h5>
                <b> &nbsp;&nbsp;Jenifer Smith</b>
              </h5>
              &nbsp;&nbsp;commented on your murmur
            </Grid>
          </Grid>
          <Grid item xs={5} sm container />
        </Grid>
        <br /> <hr />

        <Grid container style={{ margin: 3, width: '100%', height: '100%' }}>
          <Grid item xs={5} sm container />

          <Grid item xs={11} sm container>
            <img
              className={classes.img}
              style={{
                backgroundColor: '#56A2FF',
                width: 65,
                height: 65,
                borderRadius: 40,
              }}
              alt="complex"
              src="../images/avatar.png"
            />

            <Grid item xs container style={{ marginTop: 30 }}>
              <h5>
                <b> &nbsp;&nbsp;Jonathan Lee</b>
              </h5>{' '}
              &nbsp;&nbsp;commented on your murmur
            </Grid>
          </Grid>
          <Grid item xs={5} sm container />
        </Grid>
        <br /> <hr />

        <Grid container style={{ margin: 3, width: '100%', height: '100%' }}>
          <Grid item xs={5} sm container />

          <Grid item xs={11} sm container>
            <img
              className={classes.img}
              style={{
                backgroundColor: '#56A2FF',
                width: 65,
                height: 65,
                borderRadius: 40,
              }}
              alt="complex"
              src="../images/avatar.png"
            />

            <Grid item xs container style={{ marginTop: 30 }}>
              <h5>
                <b> &nbsp;&nbsp;&nbsp;Alex Nelson</b>
              </h5>{' '}
              &nbsp;&nbsp; is now following you
            </Grid>
          </Grid>
          <Grid item xs={5} sm container />
        </Grid>
        <br /> <hr />
      </div>
    );
  }
}

Notification.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Notification);

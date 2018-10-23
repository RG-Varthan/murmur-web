import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Drawer, AppBar, Toolbar, IconButton, Hidden, Badge, InputBase } from '@material-ui/core';
import { CardBody, CardImage } from 'mdbreact';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Profile from './component/profile';
import classNames from 'classnames';
import Murmur from './component/murmur';
import User from './component/users';
import Search from './component/search';
import Notification from './component/notification';
import CreateMurmur from './component/create_murmur';
import { Scat_login, login, checkLogin } from './component/Scatter';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    display: 'flex',
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#2c99ff',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    height:900,
    width: 300,

    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    marginLeft:10,
    color:'black',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    color:"black",
    backgroundColor:"white",
    marginLeft: 0,
    width: '500%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
     width:'auto'
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '300%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

class Navbar extends React.Component {

  state = {
    mobileOpen: false,
    login: ''
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  componentDidMount()
  {
    checkLogin()
    console.log("Scatter Login: "+ Scat_login)
    console.log("state Login: "+ this.state.login)
    setInterval(()=>{
      if(this.state.login !== Scat_login)
      {
        this.setState({login:Scat_login})
        console.log("Scatter Login: "+ Scat_login)
      }
    } ,200)
  }

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div id="side">
        <div className={classes.toolbar} />
       <Profile />
      </div>
    );

    return (
      <Router>
        <div>
          <div className={classes.root} style={this.state.login? {display:''}:{display:'none'}}>
            <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)} style={{backgroundColor:'#0770b2',height:80}}>
              <Toolbar style={{marginTop:10}}>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>

                <Link to="/">
                  <img src="../images/murmur_logo.png" style={{width: 38,height: 37}} alt="murmur_logo"/>
                </Link>
                <Link to="/"> <h5 className={classes.title} > Murmurs </h5> </Link>

                <Link to="/user">
                  <img src="../images/wishper.png" style={{width: 40,height: 39,marginLeft:20}} alt="wishper_logo" />
                </Link>
                <Link to="/user"> <h5 className={classes.title}> Whisper </h5> </Link>

                <IconButton color="inherit">
                  <Badge className={classes.margin} badgeContent={11} color="secondary">
                    <Link to="/Notification"> <NotificationsIcon /> </Link>
                  </Badge>
                </IconButton>

                <Link to="/Notification"> <h5 className={classes.title}> Notifications </h5> </Link>
              
                <div className={classes.grow} />
                <div className={classes.search}  >
                  <div className={classes.searchIcon}>
                    <SearchIcon /> 
                  </div>
                  <Link to = "/search">
                    <InputBase style={{color:"black",size:9}}
                      placeholder="Search people .."
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                      }}
                    />
                  </Link>
                </div>
                &nbsp;&nbsp;
                <Link to = "/create">
                  <img src="../images/plus.png" style={{width: 38,height: 37}} alt="plus" />
                </Link>
              </Toolbar>

            </AppBar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant ="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <main  className={classes.content}>
              <div className={classes.toolbar} />
              <div>
                <Switch>
                  <Route exact path="/" component={Murmur} />
                  <Route exact path="/search" component={Search} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/create" component={CreateMurmur} />
                  <Route exact path="/Notification" component={Notification} />
                </Switch>
              </div>
            </main>
          </div>

          <div style={this.state.login? {display:'none'}:{display:''}}>
            <div class="container" style={{ overflow: 'hidden' }}>
              <br /> <br /> <br /> <br /> <br />
              <br /> <br />
              <div class="row">
                <div class="col-md-3">
                  <CardBody style={{ height: 384, width: 380 }}>
                    <CardImage
                      top
                      src='../images/murmur_logo.png'
                      alt="Card image cap"
                    />
                  </CardBody>
                </div>

                <div class="col-md-4" />

                <div class="col-md-5">
                  <h3 id="wel" style={{ width: '383px', height: '150px' }}>
                    Welcome to <br />
                    murmur!
                  </h3>
                  <h2 id="micro"> Microblogging, reimagined.</h2>
                  <br /> <br /> <br />
                  <div class="row">
                    {/* <div class="col-md-4">
                      <input
                        type="text"
                        placeholder="EOS Account Name ...."
                        style={{ width: 232, height: 34, fontSize: 14 }}
                      />
                    </div>

                    <div class="col-md-2">&nbsp; &nbsp;</div> */}

                    <div class="col-md-6">
                      &nbsp;
                      <button style={{ marginTop: 3 }} class="btn-primary" onClick={()=>{login()}}>
                        Sign With Scatter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </Router>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Navbar);
import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Button, Dialog } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import Products from '@material-ui/icons/FullscreenExit';
import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AddTodo from './AddTodo';



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,

    }),
    marginLeft: -drawerWidth,

  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const [dialogOpen, setDialogOpen] = useState(false);


  const DialogBox = () => {
    setDialogOpen(true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{flexGrow: '1'}}>

          </Typography>
          <Button
          color="inherit" 
          startIcon={<AddIcon />}
          onClick={DialogBox}
          >
            ADD NEW
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>

        <Divider />

        <List>
            <ListItem>
              <Link className="link" to="/"> 
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText>Home</ListItemText>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem>
             <Link className="link" to="/about"> 
              <ListItemIcon>{<InfoIcon />}</ListItemIcon>
              <ListItemText>About</ListItemText>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem>
              <Link className="link" to="/product"> 
              <ListItemIcon>{<Products />}</ListItemIcon>
              <ListItemText>Product</ListItemText>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem>
             <Link className="link" to="/team"> 
              <ListItemIcon>{<GroupIcon />}</ListItemIcon>
              <ListItemText>Team</ListItemText>
              </Link>
            </ListItem>
        </List>

        <Divider />

        <List>
            <ListItem>
              <Link className="link" to="/support"> 
              <ListItemIcon>{<HelpIcon />}</ListItemIcon>
              <ListItemText>Support</ListItemText>
              </Link>
            </ListItem>
        </List>
        <List>
            <ListItem>
              <Link className="link" to="/contact"> 
              <ListItemIcon>{<ContactMailIcon />}</ListItemIcon>
              <ListItemText>Contact</ListItemText>
              </Link>
            </ListItem>
        </List>

        <Divider />

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        {/* <Typography paragraph>
          HomePage
        </Typography>  */}
        <Dialog open={dialogOpen}>
          <AddTodo dialogOpen={dialogOpen} setDialogOpen= {setDialogOpen}/>
        </Dialog>
      </main>
    </div>
  );
};

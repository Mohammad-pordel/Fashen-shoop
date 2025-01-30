import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { NavLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const pages = [{ title: 'صفحه اصلی', route: '/' },
{ title: 'درباره ما', route: '/about' },
{ title: ' محصولات ', route: `/products/all` },
{ title: "سبد خرید", route: '/card' },
{ title: "رزومه من", route: '/myResume' }];


export default function Navbar() {

  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {pages.map((text, index) => (
          <ListItem key={text.title} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <NavLink className="font-Dana" to={text.route}>{text.title}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ title: 'ورود / ثبت نام', route: '/login' }].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <NavLink to={text.route} className="font-Dana" >{text.title}</NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // daraver cod

  return (
    <>
      <header >
        <section>
          <div className='grid grid-cols-2 mt-3 py-3 px-1 w-[100%] mb-2'>
            <div>
              <h1 className='  lg:text-2xl px-3 lg:px-7 text-black font-MorabbaBold  '>فشن شاپ</h1>
            </div>
            <div className='relative'>
              <input type="text" placeholder='محصول مورد نظر را جستجو کنید' className='w-52 h-7 px-3 text-xs absolute left-3 transition-all  lg:flex lg:w-80 lg:h-9  lg:p-3 lg:text-base lg:px-4 rounded-md border-gray-300  border-2 font-DanaDemiBold ' />
              <div className='absolute left-3 -top-1 lg:top-0'>
                <IconButton aria-label="search" >
                  <SearchIcon color='primary' />
                </IconButton>
              </div>
            </div>
          </div>
          <div>
            <AppBar position="sticky" >
              <Container maxWidth="2xl" className='bg-zinc-200  shadow-sm shadow-slate-500 w-[100%]'>

                <Toolbar disableGutters>
                  <img className='hidden lg:flex w-14 rounded-full' src="images/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 800,
                      letterSpacing: '.3rem',
                      color: 'success',
                      textDecoration: 'none',
                    }}
                  >
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>


                    <div
                      id="menu-appbar">
                      {
                        <React.Fragment >
                          <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={toggleDrawer("right", true)}
                            color="inherit"
                          >
                            <MenuIcon />
                          </IconButton>
                          <Drawer
                            anchor={"right"}
                            open={state["right"]}
                            onClose={toggleDrawer("right", false)}
                          >
                            {list("right")}
                          </Drawer>
                        </React.Fragment>
                      }
                    </div>

                  </Box>
                  <img className='flex -ml-7 lg:hidden w-12 rounded-full' src="images/1000_F_245841615_d7QzRv937jfiC176rmKK60ckNXU9V76z.jpg" alt="" />
                  <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="#app-bar-with-responsive-menu"
                    sx={{
                      mr: 2,
                      display: { xs: 'flex', md: 'none' },
                      flexGrow: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
                  >
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                      <Button
                        className='hover:text-red-400'

                        key={page.title}
                        sx={{ fontSize: "16px", my: 2, color: 'black', display: 'block', fontFamily: "Dana Medium" }}
                      >
                        <NavLink to={page.route} className={(link) => link.isActive ? 'text-red-600 transition-all' : ''}>
                          {page.title}
                        </NavLink>

                      </Button>
                    ))}
                  </Box>
                  <Button>
                    <NavLink to="/login" className='text-xs lg:text-base font-DanaDemiBold p-0 m-0'>
                      ورود | ثبت نام
                    </NavLink>

                  </Button>
                </Toolbar>
              </Container>
            </AppBar>
          </div>
        </section>
      </header>
    </>
  )
}

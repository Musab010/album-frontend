import {AppBar, Container, Toolbar, Link} from '@mui/material';
import {BrowserRouter, Link as RouterLink, Route, Routes} from 'react-router-dom';
const Navbar = () => {
    return ( 
        <AppBar className='navbar'>
            <Toolbar style={{backgroundColor: 'orange'}}>
                <Link component={RouterLink} to='/' style={{fontSize: '20px', color: 'white', fontWeight: 'bold'}}> Album Overzicht</Link>
                <Link component={RouterLink} to='/new' style={{ marginLeft:'auto', color: "#fff"}} color="secondary"> Maak album aan</Link> 
            </Toolbar>
        </AppBar>
     );
}
 
export default Navbar;
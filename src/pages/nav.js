import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box style={{marginBottom: 50}}  sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={( newValue) => {
          setValue(newValue);
        }}
      >
        <nav className='navbar'>
        <div className='logo-holder logo-6'>
        <Link to="/"> <h3>AIE <span>Assessment</span></h3></Link>
        </div>
        <Link to="/users"><BottomNavigationAction label="Users" icon={<PersonIcon />} /></Link>
        <Link to="/items"><BottomNavigationAction label="Items" icon={<TextSnippetIcon />} /></Link>
        </nav>
      </BottomNavigation>
    </Box>
  );
}
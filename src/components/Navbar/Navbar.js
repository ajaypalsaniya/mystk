import { AppBar, Toolbar } from '@material-ui/core';
import { Button } from '../Button/Button';

function Navbar() {
  return (
    <AppBar
      position='fixed'
      style={{
        backgroundColor: '#fff',
        color: 'orange',
        zIndex: '1000',
      }}
    >
      <Toolbar>
        <h1 style={{ flexGrow: '1' }}>Stock ai</h1>
        <Button buttonText='Create account' />
        <Button buttonText='Login' />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

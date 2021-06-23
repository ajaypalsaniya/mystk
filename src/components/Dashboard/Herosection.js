import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import hero from '../../Assets/images/mainbanner.png';
import { Button } from '../Button/Button';

const useStyles = makeStyles(() => ({
  image: {
    width: '100%',
    height: '100%',
  },
  img: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
}));

function Herosection() {
  const classes = useStyles();
  return (
    <Container
      maxWidth='100%'
      style={{ padding: '0', marginTop: '85px', display: 'flex' }}
    >
      <Grid
        // style={{ display: 'flex', flexDirection: 'column' }}
        xs={12}
        sm={6}
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1
          style={{
            marginBottom: '30px',
            fontsize: '44px',
            lineHeight: '48px',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Buy in Uptrend. Ride it till it ends
        </h1>
        <p
          style={{
            textAlign: 'center',
            // padding: '20px 0',
            fontSize: '22px',
            fontWeight: '400',
          }}
        >
          Our Artificial Intelligence finds the best entry for the stocks in the
          strong uptrend and alerts when the trend ends
        </p>
        <Button buttonText={'Create account with your email'} />
      </Grid>
      <Grid container xs={12} sm={6} spacing={0}>
        <img className={classes.img} alt='complex' src={hero} />
      </Grid>
    </Container>
  );
}

export default Herosection;

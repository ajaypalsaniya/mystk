import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonLink: {
    display: 'inline',
    border: '1px solid #fe8c00',
    color: '#fe8c00 !important',
    padding: ' 10px 20px',
    borderRadius: '50px;',
    background: 'transparent',
    listStyle: 'none',
    fontsize: '16px',
    lineheight: '1.6',
    fontWeight: ' 400',
    letterspacing: '1px',
    marginRight: '32px',
    '&:hover': {
      background: '#fe8c00',
      borderColor: '#fff',
      color: '#fff !important',
      textDecoration: 'none',
      transition: 'all 0.5s ease-in-out',
      cursor: 'pointer',
    },
  },
}));
export const Button = ({ buttonText, to }) => {
  const classes = useStyles();
  return (
    <li className={classes.buttonLink}>
      <span href={`to`}>{buttonText}</span>
    </li>
  );
};

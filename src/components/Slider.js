import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}


ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

const PrettoSlider = withStyles({
  root: {
    color: 'hsl(174, 86%, 45%)',
    opacity:'50%',
    height: 8,
    with:'80%',
    'margin-left': '20%',
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    backgroundColor:'hsl(174, 77%, 80%)',
    height: 8,
    borderRadius: 4,
  },
})(Slider);


const Sliderr = ({onChange})=>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin} />
      <PrettoSlider aria-label="pretto slider" defaultValue={20} min={0} max={200} onChange={onChange} />
    </div>
  );
}

export default Sliderr;
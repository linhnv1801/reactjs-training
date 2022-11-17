import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({color, text, icon, onClick}) =>{
  return 
     (   
       <button className='btn' onClick={onClick} style={{backgroundColor:color}}>Edit</button>
      //  <button className='btn' onClick={onClick} style={{backgroundColor:color}}>Delete</button>
      );
}

Button.defaultProps = {
      'color': 'blue'
};

  Button.propTypes = {
    text: PropTypes.object.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }

export default Button;
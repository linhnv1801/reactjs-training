import React from 'react'
import PropTypes from "prop-types";

class Button extends React.Component {
  constructor(props) {
    super(props); // bắt buộc phải có dòng này để gọi hàm khởi tạo của class cha 
  }
 render (){
  return(
    <div>
      <button style={this.props.btnColor} onClick={handleClick}>{this.props.btnText}</button>
    </div>
  )
 }
}

const handleClick = () => {
  alert('LinhNV')
}

Button.defaultProps = {
  btnText: '',
  btnColor: {
   }
  };

  Button.propTypes = {
    btnText: PropTypes.string,
    btnColor: PropTypes.string,
  };

export default Button
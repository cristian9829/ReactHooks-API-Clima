import React from 'react';

const Header = (props) =>{
  return(
    <nav>
      <div className="naw-wrapper light-blue darken-2">
        <a href="#!" className="brand-logo " >{props.titulo}</a>
      </div>
    </nav>
  )
} 

export default Header;
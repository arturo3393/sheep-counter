import React from 'react';
import '../stylesheets/btn.css'

function Button ({text , isClickBtn, handleClick}){
    return (
      <button
        className={isClickBtn ? 'btn-click' : 'btn-reset'}
        onClick={handleClick}>
        {text}
      </button>
    );
}

export default Button;
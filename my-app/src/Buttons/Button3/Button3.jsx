import React from 'react';

const Button3 = ({ oldArrey }) => {
  const Start_Addition = () => {
    const new_arry = oldArrey.shift(); //????
    alert(new_arry);
  }

  return (
    <button
      onClick={() => { Start_Addition() }}>
      "Удалить первый элемент массива"
    </button>
  )
}

export default Button3;
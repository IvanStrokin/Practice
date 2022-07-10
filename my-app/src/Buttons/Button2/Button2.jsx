import React from 'react';

const Button2 = ({ oldArrey }) => {
  const Start_Addition = () => {
    const new_arry = oldArrey.unshift(4); //????
    alert(new_arry);
  }

  return (
    <button
      onClick={() => { Start_Addition() }}>
      "Удалить первый элемент массива"
    </button>
  )
}

export default Button2;
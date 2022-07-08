import React from 'react';

const Button1 = ({ oldArrey }) => {
  const Start_Addition = () => {
    const new_arry = oldArrey.unshift(4); //????
    alert(new_arry);
  }

  return (
    <button
      onClick={() => { Start_Addition() }}>
      "Добавить новый первый элемент массива"
    </button>
  )
}

export default Button1;
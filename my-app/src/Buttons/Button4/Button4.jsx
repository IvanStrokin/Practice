import React from 'react';

const Button4 = ({ oldArrey }) => {
  const Start_Addition = () => {
    const new_arry = oldArrey.push(5); //????
    alert(new_arry);
  }

  return (
    <button
      onClick={() => { Start_Addition() }}>
      " Добавить элемент в конец массива "
    </button>
  )
}

export default Button4;
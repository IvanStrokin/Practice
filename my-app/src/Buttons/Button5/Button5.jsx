import React from 'react';

const Button5 = ({ oldArrey }) => {
  const Start_Addition = () => {
    const new_arry = oldArrey.reverse(); //????
    alert(new_arry);
  }

  return (
    <button
      onClick={() => { Start_Addition() }}>
      "Вывести в обратном порядке"
    </button>
  )
}

export default Button5;
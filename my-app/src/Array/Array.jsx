import React from "react";
import Button1
  from "../Buttons/Button1";
const Array_Func = ({ }) => {
  const Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const a = Array.map((item) => <li>{item}</li>)
  return (
    <>
      <ul>
        {a}
      </ul>
      {/* Удалить первый элемент массива
          Удалить последний элемент массива
          Добавить элемент в начало массива
          Добавиьт элемент в конец массива
          Вывести в обратном порядке
       */}
      <Button1 oldArrey={Array}/>
    </>
  )
}
export default Array_Func;
import React from "react";
import "./Buttons.css";
import Start_Addition from "../Button1/Button1"
import Array_Func from "../../Array/Array";

const All_Buttons = () => {

    return (
        <div id="Buttons">
            <button onClick={() =>{Start_Addition()}}>
                "Удалить первый элемент массива"
            </button>

            <button>
                "Удалить последний элемент массива"
            </button>

            <button>
                "Добавить элемент  в начало массива"
            </button>

            <button>
                " Добавить элемент в конец массива "
            </button>

            <button>
                "Вывести в обратном порядке"
            </button>
        </div>)
}
export default All_Buttons;
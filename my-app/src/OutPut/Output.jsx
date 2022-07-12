import React from 'react';

function Out_Start({arr}) {
    const a = arr.map((item) => <li>{item}</li>)
    return (
        <div>
            <ul>
                {a}
            </ul>
        </div>
    );
}



export default OutStart;
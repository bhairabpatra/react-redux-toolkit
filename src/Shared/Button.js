import React from 'react'
const Button = ({onEdit,btnType, btnLabel}) => {
 
    return (
     <button  onClick={() => onEdit(5)} className={btnType}>{ btnLabel}</button>
    )
}
export default  Button
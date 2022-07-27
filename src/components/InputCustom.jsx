import React from 'react'
import styled from '@emotion/styled'

const Input = styled.input`
padding:10px;
border-radius:5px;
`
const Legend = styled.legend`
display:flex;
justify-content:start;
flex-direction:column;
align-items:center;
`

const InputCustom = ({value, type, handleChange, name, legendName, minDate}) => {
  return (
    <Legend>
        {legendName}
    <Input min={minDate} name={name} value ={value} type={type} onChange={handleChange}/>
    </Legend>
  )
}

export default InputCustom
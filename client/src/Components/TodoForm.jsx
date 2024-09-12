import React, { useState } from 'react'

function TodoForm() {
  const [text , settext] = useState('');
  const onFormSubmit =() =>{
     
  }

  const onInputChange = (e) =>{
    settext(e.target.value);
  }
  return (
    <form className='' onSubmit={onFormSubmit}>
      <input  className='text-sm text-primary border-b outline-none w-full mt-8 p-2'
      placeholder='Enter new Todo....
      '
      onChange={onInputChange}/>
     
    </form>
  )
}

export default TodoForm
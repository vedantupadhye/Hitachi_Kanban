import React from 'react';
import InputProps from './input.type';

const Input = ({ name, value, placeholder, onChange }: InputProps) => {
  return (
    <div>
    <input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border p-2 w-full rounded-lg shadow-lg hover:shadow-xl"
    ></input>
    <label className='mt-4 px-2' >Select a file:</label>
    <input type="file" id="myfile" name="myfile" className='mt-4'/>
    </div>
  );
};

export default Input;

import React from 'react'

export const FormInput = ({register, error, label, id, ...inputProps}) => {
  return <>
    <label htmlFor={id}>{label}</label>
    <input
      ref={register}
      id={id}
    //   name="password"
    //   type="password"
    {...inputProps}
    />
    {/* {errors.password && <div>{errors.password.message}</div>}  */}
    {error && <div>{error.message}</div>} 
  </>
}

export default FormInput;
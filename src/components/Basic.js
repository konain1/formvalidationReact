import React from 'react'
import {useFormik} from 'formik'

function Basic() {

    const {values,handleBlur,handleChange} = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirmpassword:"",
        }


    })


    console.log(values)
  return (
   <form autoComplete='off' >
    <label htmlFor='email' >Email</label>
    <br></br>
    <input value={values.email} 
    onChange={handleChange}
    id='email' type='email' placeholder='basic' />


    <br></br>
    <label htmlFor='age' >age</label>
    <br></br>
    <input value={values.age} 
    onChange={handleChange}
    onBlur={handleBlur}
    id='age' type='number' placeholder='age' 
    />


    <br></br>
        <label htmlFor='password' >password</label>
        <br></br>
        <input value={values.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        id='password' type='password' placeholder='password' 
        />

    <br></br>
    <label htmlFor='confirmpassword' >confirmpassword</label>
    <br></br>
    <input value={values.confirmpassword} 
    onChange={handleChange}
    onBlur={handleBlur}
    id='confirmpassword' type='password' placeholder='confirmpassword' 
    />

<br></br>
<button>submit</button>

   </form>
  )
}

export default Basic

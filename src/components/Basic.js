import React from 'react'
import {useFormik} from 'formik'
import {basicSchema} from './../schemas/index'



const onSubmit = ()=>{
    console.log('succed')
}

function Basic() {

    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
        initialValues:{
            email:"",
            age:"",
            password:"",
            confirmpassword:"",
        },
        validationSchema:basicSchema,
        onSubmit,
    })


    console.log(touched)
  return (


   <form onSubmit={handleSubmit} autoComplete='off' >

    <label htmlFor='email' >Email</label>

    <br></br>
    <input value={values.email} 
    onChange={handleChange}
    id='email' type='email' placeholder='basic' 
    onBlur={handleBlur}
    className={errors.email && touched.email ? 'input-error' : ''}
    />
    {errors.age && touched.email && <p>{errors.email}</p>}



    <br></br>
    <label htmlFor='age' >age</label>
    <br></br>
    <input value={values.age} 
    onChange={handleChange}
    onBlur={handleBlur}
    id='age' type='number' placeholder='age' 
    className={errors.age && touched.age ?  'input-error' : ''}

    />
{errors.age && touched.age && <p>{errors.age}</p>}

    <br></br>
        <label htmlFor='password' >password</label>
        <br></br>
        <input value={values.password} 
        onChange={handleChange}
        onBlur={handleBlur}
        id='password' type='password' placeholder='password' 
        className={errors.password && touched.password ? 'input-error' : ''}

        />
{errors.password && touched.password && <p>{errors.password}</p>}

    <br></br>
    <label htmlFor='confirmpassword' >confirmpassword</label>
    <br></br>
    <input value={values.confirmpassword} 
    onChange={handleChange}
    onBlur={handleBlur}
    id='confirmpassword' type='password' placeholder='confirmpassword' 
    className={errors.confirmpassword && touched.confirmpassword ? 'input-error' : ''}

    />
    {errors.confirmpassword && touched.confirmpassword && <p>{errors.confirmpassword}</p>}


<br></br>
<button>submit</button>

   </form>
  )
}

export default Basic

// import React from 'react'

// function Advanced() {
//   return (
//     <form autoComplete='off' >
//     <label htmlFor='email' >Email</label>
//     <input id='email' type='email' placeholder='advance' />
//    </form>
//   )
// }

// export default Advanced


import React from 'react';
import { Formik } from 'formik';

const Basic = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '', age: '' , cpassword:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }else if(!values.age){
          errors.age = "enter your age"
        }else if(!values.password){
          errors.password = 'please enter password'
        }else if(!values.cpassword){
          errors.cpassword = 'password must be match'
        }else if(values.password !== values.cpassword){
          errors.cpassword = 'password must be match'

        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            className={errors.email && touched.email ? 'input-error' : ''}
          />
          {errors.email && touched.email && errors.email}
          <br></br>
          <label htmlFor='age'>Age</label>

          <input
            type="number"
            name="age"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.age}
            className={errors.age && touched.age ? 'input-error' : ''}

          />
          {errors.age && touched.age && errors.age}
          <br></br>
          <label htmlFor='password'>Password</label>

          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            className={errors.password && touched.password ? 'input-error' : ''}

          />
          {errors.password && touched.password && errors.password}

          <br></br>
          <label htmlFor='cpassword'>confirmpassword</label>
          <input
            type="password"
            name="cpassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.cpassword}
            className={errors.cpassword && touched.cpassword ? 'input-error' : ''}

          />
          {errors.cpassword && touched.cpassword && errors.cpassword}
          <br></br>
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
import * as yup from "yup"

const passwordRules = /^[a-z]{2,4}$/
export const basicSchema = yup.object().shape({
    email:yup.string().email("please enter valid email").required(),
    age:yup.number().positive().integer().required(),
    password:yup.string().matches(passwordRules,{message:"please create a strong password"}).required(),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null],"password must be match").required()
})
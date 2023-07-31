import * as Yup from 'yup';

export const signIn = Yup.object({
    name: Yup.string().min(3).required("Please Enter Your Name"),
    password: Yup.string().min(8).required("Please Enter Your Password"),
  });
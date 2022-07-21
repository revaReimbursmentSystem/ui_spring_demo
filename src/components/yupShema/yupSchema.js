import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().min(10),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Password does not match"),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
});

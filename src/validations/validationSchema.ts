import * as yup from "yup";
import { formErrorMessages } from "./errorMessages";
import { regExpression } from "./regularExpressions";


export const EmailValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(formErrorMessages.email)
    .matches(regExpression.emailRegex.mailFormat),
});

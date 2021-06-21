/*
validate form used to examin and valid the diffrent fields 
type login or register (to avoid the confirmation field for login || FactoryPattern)

*/

const validateForm = (values, type) => {
  let errors = {};
  if (
    !values.email.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    )
  ) {
    errors = {
      ...errors,
      email: ["You have to provide a valid email."],
    };
  }

  if (values.password.length < 5 || values.password.length > 16) {
    errors = {
      ...errors,
      password: ["Your password must be between 5 and 16 characters length."],
    };
  }
  if (type === "register") {
    if (values.confirm.length < 5 || values.confirm.length > 16) {
      errors = {
        ...errors,
        confirm: ["Your password must be between 5 and 16 characters length."],
      };
    }

    if (values.confirm !== values.password) {
      const passwordError =
        undefined !== errors.password
          ? [...errors.password, "Your passwords must match."]
          : ["Your passwords must match"];

      errors = {
        ...errors,
        password: passwordError,
      };
    }
  }

  return errors;

  // return 0 === Object.keys(errors).length;
};

export default validateForm;

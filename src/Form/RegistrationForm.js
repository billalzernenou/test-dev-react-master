import React, { useState } from "react";
import "./RegisterForm.css";

const RegistrationForm = () => {
  // controlled from states
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const handleInputChange = (e, field) => {
    // delete error related to chnaged field
    const newErrors = errors;
    delete newErrors[field];
    setErrors(newErrors);

    setTouched({
      ...touched,
      [field]: true,
    });
    setValues({ ...values, [field]: e.currentTarget.value });
  };

  const validateForm = (values) => {
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
    setErrors(errors);

    return 0 === Object.keys(errors).length;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm(values)) {
      return;
    }

    alert(JSON.stringify(values));
  };
  // form error test
  const isEmailError = undefined !== errors.email && touched.email;
  const isPasswordError = undefined !== errors.password && touched.password;
  const isConfirmError = undefined !== errors.confirm && touched.confirm;
  return (
    <div className="RegisterForm">
      <h1>Registration form</h1>
      <form onSubmit={handleSubmit}>
        <div className={`form-item${isEmailError ? " has-error" : ""}`}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            value={values.email}
            onChange={(e) => handleInputChange(e, "email")}
          />
          {isEmailError && (
            <span className="error-message">
              {errors.email.map((err, k) => (
                <span key={k} className="error-item">
                  {err}
                </span>
              ))}
            </span>
          )}
        </div>
        <div className={`form-item${isPasswordError ? " has-error" : ""}`}>
          <label htmlFor="">Password</label>
          <input
            type="text"
            value={values.password}
            onChange={(e) => handleInputChange(e, "password")}
          />
          {isPasswordError && (
            <span className="error-message">
              {errors.password.map((err, k) => (
                <span key={k} className="error-item">
                  {err}
                </span>
              ))}
            </span>
          )}
        </div>
        <div className={`form-item${isConfirmError ? " has-error" : ""}`}>
          <label htmlFor="">Confirm</label>
          <input
            type="text"
            value={values.confirm}
            onChange={(e) => handleInputChange(e, "confirm")}
          />
          {isConfirmError && (
            <span className="error-message">
              {errors.confirm.map((err, k) => (
                <span key={k} className="error-item">
                  {err}
                </span>
              ))}
            </span>
          )}
        </div>
        <div className="form-item">
          <input type="submit" value="Register !" />
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

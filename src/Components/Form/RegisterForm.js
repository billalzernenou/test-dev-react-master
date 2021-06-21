import React, { useState } from "react";
import validateForm from "./validateForm";

const RegisterForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values, "register"));
    if (0 !== Object.keys(validateForm(values)).length) {
      return;
    }

    alert(JSON.stringify(values));
  };
  // form error test
  const isEmailError = undefined !== errors.email && touched.email;
  const isPasswordError = undefined !== errors.password && touched.password;
  const isConfirmError = undefined !== errors.confirm && touched.confirm;
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <div className={`form-item${isEmailError ? " has-error" : ""}`}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            data-testid="email"
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
            data-testid="password"
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
            data-testid="confirm-password"
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
          <input title="submit" type="submit" value="Je crée mon compte" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;

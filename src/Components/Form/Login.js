import React, { useState } from "react";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import validateForm from "./validateForm";

const Login = () => {
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    email: "",
    password: "",
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
    const newErrors = validateForm(values, "login");
    setErrors(newErrors);
    if (0 !== Object.keys(newErrors).length) {
      return;
    }

    alert(JSON.stringify(values));
  };
  // form error test
  const isEmailError = undefined !== errors.email && touched.email;
  const isPasswordError = undefined !== errors.password && touched.password;

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <div className={`form-item${isEmailError ? " has-error" : ""}`}>
          <label htmlFor="">Email</label>
          <input
            type="text"
            data-testid="email"
            title="email"
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

        <div className="form-item">
          <input title="submit" type="submit" value="ME CONNECTER" />
        </div>
      </form>
    </div>
  );
};

export default Login;

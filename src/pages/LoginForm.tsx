import { useState } from "react";

interface LoginFormFields {
  email: string;
  password: string;
}

interface LoginFormErrors {
  email?: string;
  password?: string;
}

const LoginForm: React.FC = () => {
  //state
  const [formValues, setFormValues] = useState<LoginFormFields>({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState<LoginFormErrors>({});
  const [isSumbitted, setIsSubmitted] = useState<boolean>(false);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Validate form inputs
  const validateForm = () => {
    const error: LoginFormErrors = {};

    if (!formValues.email) {
      error.email = "ایمیل وارد نشده";
    } else if (!emailRegex.test(formValues.email)) {
      error.email = "ایمیل معتبر وارد کنید";
    }

    if (!formValues.password) {
      error.password = "رمز عبور وارد نشده";
    } else if (formValues.password.length < 6) {
      error.password = "رمز عبور باید حداقل 6 کارکتر باشد!!!!";
    }

    setFormErrors(error);

    return Object.keys(error).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    if (validateForm()) {
      console.log("form value", formValues);
    }
  };
  return (
    <div>
      <h2>ورود</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="you@example.com"
          />
          {isSumbitted && formErrors.email && <span>{formErrors.email} </span>}
        </div>
        <div>
          <label htmlFor="password">رمز عبور</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            placeholder="••••••••"
          />
          {isSumbitted && formErrors.password && (
            <span>{formErrors.password} </span>
          )}
        </div>
        <div>
          <button type="submit">ورود</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

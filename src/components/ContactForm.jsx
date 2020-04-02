import React from "react";
import useFormValidation from '../utils/useFormValidation'
import validateForm from '../utils/validateForm'

const INITIAL_STATE = {
    email: "",
    content: ""
};

const Contact = () => {
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        errors,
        isSubmitting,
        values
    } = useFormValidation(INITIAL_STATE, validateForm);
    return (
        <div className="container">
          <div className="Hashtag">Contact Us</div>
          <form onSubmit={handleSubmit}>
            <input
              className={errors.email ? "error-input" : "contact-input"}
              onChange={handleChange}
              onBlur={handleBlur}
              name="email"
              value={values.email}
              autoComplete="off"
              placeholder="Your email address"
            />
            {errors.email && <p className="error-text">{errors.email}</p>}
            <textarea rows="4" cols="50"
              className={errors.content ? "error-input" : "contact-input"}
              onChange={handleChange}
              onBlur={handleBlur}
              name="content"
              value={values.content}
              placeholder="Your info here"
            />
            {errors.content && <p className="error-text">{errors.content}</p>}
            <div>
              <button className="SendEmailBtn" disabled={isSubmitting} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
    );
}

export default Contact

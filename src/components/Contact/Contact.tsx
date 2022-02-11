import { ReactElement, useState } from "react";
import * as C from "./styles";
import { Formik, FormikHelpers, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { Submit } from "../Buttons/Buttons";
import emailjs from "@emailjs/browser";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

type MyFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Contact = (): ReactElement => {
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const initialValues: MyFormValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const handleSubmit = (
    values: MyFormValues,
    actions: FormikHelpers<MyFormValues>
  ) => {
    setIsLoading(true);
    try {
      emailjs
        .send(
          "robarroyocom_service",
          "robarroyo_template",
          values,
          "user_tqboTvo5sfjBPZQf6sKcD"
        )
        .then((result) => {
          actions.setSubmitting(false);
          actions.resetForm();
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
          setIsLoading(false);
        });
    } catch (error) {
      console.error({ error });
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      setIsLoading(false);
      actions.setSubmitting(false);
    }
  };

  return (
    <C.Container>
      <h1>Get in touch 📬</h1>
      <p>
        I'm glad you are here. Feel free to send any inquiry you may have, share
        your thoughts about my portfolio or contact me for working together.
      </p>

      <C.FormContainer>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(3, "Must be at leas 3 characters")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            phone: Yup.string().matches(phoneRegExp, "Invalid phone number"),
            subject: Yup.string(),
            message: Yup.string(),
          })}
        >
          <Form>
            <C.FormRow>
              <C.FormCol>
                <Field id="name" name="name">
                  {({ field, meta }: FieldProps) => (
                    <div>
                      <label htmlFor="name">Name</label>
                      <input type="text" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </C.FormCol>
              <C.FormCol>
                <Field id="email" name="email">
                  {({ field, meta }: FieldProps) => (
                    <div>
                      <label htmlFor="email">Email</label>
                      <input type="email" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </C.FormCol>
            </C.FormRow>

            <C.FormRow>
              <C.FormCol>
                <Field id="phone" name="phone">
                  {({ field, meta }: FieldProps) => (
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input type="tel" {...field} />
                      {meta.touched && meta.error && (
                        <div className="error">{meta.error}</div>
                      )}
                    </div>
                  )}
                </Field>
              </C.FormCol>
              <C.FormCol>
                <label htmlFor="subject">Subject</label>
                <Field id="subject" name="subject" />
              </C.FormCol>
            </C.FormRow>

            <C.FormRow>
              <C.FormCol>
                <label htmlFor="message">Message</label>
                <Field id="message" name="message" as="textarea" />
              </C.FormCol>
            </C.FormRow>

            {success && (
              <C.SuccessMessage>
                <span>✅ The form was sent successfully!</span>
              </C.SuccessMessage>
            )}

            {error && (
              <C.ErrorMessage>
                <span>
                  ‼️ There was an error. Please try again later or contact me
                  via Twitter @betoarpi
                </span>
              </C.ErrorMessage>
            )}

            <C.FormRow>
              <Submit label="Submit" type="submit" isLoading={isLoading} />
            </C.FormRow>
          </Form>
        </Formik>
      </C.FormContainer>
    </C.Container>
  );
};

export default Contact;

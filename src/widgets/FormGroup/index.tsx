import React, { ChangeEvent } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

type FormGroupProps = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: React.ChangeEventHandler;
  controlId: string;
  placeholder: string;
  type: string;
  name: string;
  values: string | number;
  errors: string | undefined;
  touched: boolean | undefined;
};

export const FormGroup: React.FC<FormGroupProps> = ({
  handleChange,
  handleBlur,
  controlId,
  placeholder,
  type,
  name,
  values,
  errors,
  touched,
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={controlId}>
        <FloatingLabel label={placeholder}>
          <Form.Control
            type={type}
            name={name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            value={values}
          />
        </FloatingLabel>
        {errors && touched && <div>{errors}</div>}
      </Form.Group>
    </>
  );
};

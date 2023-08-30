import React from "react";
import { Form } from "react-bootstrap";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addFriend, updateFriend } from "../../store/friendsSlice.ts";
import { Formik } from "formik";
import { ActionButton } from "../../shared";
import { FriendFormSchema } from "../../shared/constants.ts";
import { selectedFriendToDisplaySelector } from "../../store/selectors.ts";

export const AddNewFriendForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const friend = useSelector(selectedFriendToDisplaySelector);

  return (
    <>
      <Formik
        initialValues={
          friend
            ? {
                id: friend.id,
                firstName: friend.firstName,
                lastName: friend.lastName,
                email: friend.email,
                phone: friend.phone,
                twitter: friend.twitter,
              }
            : {
                id: null,
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                twitter: "",
              }
        }
        validationSchema={FriendFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (mode === "edit") {
              dispatch(updateFriend(values));
            } else {
              dispatch(addFriend({ ...values, id: Date.now() }));
            }
            setSubmitting(false);
            navigate("/friends");
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Control
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="First Name"
                />
                {errors.firstName && touched.firstName && (
                  <div>{errors.firstName}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <div>{errors.lastName}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Email"
                />
                {errors.email && touched.email && <div>{errors.email}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  placeholder="Phone"
                />
                {errors.phone && touched.phone && <div>{errors.phone}</div>}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Control
                  type="twitter"
                  name="twitter"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.twitter}
                  placeholder="Twitter"
                />
                {errors.twitter && touched.twitter && (
                  <div>{errors.twitter}</div>
                )}
              </Form.Group>
            </Form>
            <button hidden type="submit" disabled={isSubmitting}></button>
            <ActionButton
              variant={ActionButtonVariants.PRIMARY}
              label="Create Friend"
              disabled={isSubmitting}
              action={handleSubmit}
              className="mb-2"
            />
            <br />
            <ActionButton
              variant={ActionButtonVariants.SECONDARY}
              label="Back"
              disabled={isSubmitting}
              action={() => {
                navigate("/friends");
              }}
            />
          </form>
        )}
      </Formik>
    </>
  );
};

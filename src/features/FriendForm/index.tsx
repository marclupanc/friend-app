import { Form } from "react-bootstrap";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { ActionButton } from "../../shared";
import { FriendFormSchema } from "../../shared/constants.ts";
import {
  addFriend,
  removeFriend,
  updateFriend,
} from "../../shared/store/friendsSlice.ts";
import { selectedFriendToDisplaySelector } from "../../shared/store/selectors.ts";
import React from "react";
import { Friend } from "../../shared/store/types.ts";

type FriendFormProps = {
  mode?: "edit" | undefined;
};

export const FriendForm: React.FC<FriendFormProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const friend = useSelector(selectedFriendToDisplaySelector);
  return (
    <>
      <Formik
        initialValues={id ? friend : ({} as Friend)}
        validationSchema={FriendFormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            if (id) {
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
            {!id ? (
              <>
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
              </>
            ) : (
              <>
                <ActionButton
                  variant={ActionButtonVariants.PRIMARY}
                  label="Update Friend"
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
                <ActionButton
                  variant={ActionButtonVariants.SECONDARY}
                  label="Show"
                  disabled={isSubmitting}
                  className="mx-2"
                  action={() => {
                    navigate(`/friends/${friend.id}`);
                  }}
                />

                <ActionButton
                  variant={ActionButtonVariants.REMOVE}
                  label="Remove"
                  disabled={isSubmitting}
                  action={() => {
                    dispatch(removeFriend({ id: friend.id }));
                    navigate("/");
                  }}
                />
              </>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

import { Form } from "react-bootstrap";
import { ActionButtonVariants } from "../../shared/ui/ActionButton/types.ts";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import { ActionButton } from "../../shared";
import { FriendFormSchema } from "../../shared/constants.ts";
import { addFriend, updateFriend } from "../../shared/store/friendsSlice.ts";
import { selectedFriendToDisplaySelector } from "../../shared/store/selectors.ts";
import { Friend } from "../../shared/store/types.ts";
import { FormGroup } from "../../widgets/FormGroup";

export const FriendForm = () => {
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
              dispatch(addFriend({ ...values, id: crypto.randomUUID() }));
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
              <FormGroup
                values={values.firstName}
                placeholder="First Name"
                name="firstName"
                type="firstName"
                handleChange={handleChange}
                handleBlur={handleBlur}
                controlId="formGroupFirstName"
                errors={errors.firstName}
                touched={touched.firstName}
              />

              <FormGroup
                values={values.lastName}
                placeholder="Last Name"
                name="lastName"
                type="lastName"
                handleChange={handleChange}
                handleBlur={handleBlur}
                controlId="formGroupLastName"
                errors={errors.lastName}
                touched={touched.lastName}
              />

              <FormGroup
                values={values.email}
                placeholder="Email"
                name="email"
                type="email"
                handleChange={handleChange}
                handleBlur={handleBlur}
                controlId="formGroupEmail"
                errors={errors.email}
                touched={touched.email}
              />
              <FormGroup
                values={values.phone}
                placeholder="Phone"
                name="phone"
                type="phone"
                handleChange={handleChange}
                handleBlur={handleBlur}
                controlId="formGroupPhone"
                errors={errors.phone}
                touched={touched.phone}
              />
              <FormGroup
                values={values.twitter}
                placeholder="Twitter"
                name="twitter"
                type="twitter"
                handleChange={handleChange}
                handleBlur={handleBlur}
                controlId="formGroupTwitter"
                errors={errors.twitter}
                touched={touched.twitter}
              />
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
              </>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};

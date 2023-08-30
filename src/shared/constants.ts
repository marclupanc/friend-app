import * as Yup from "yup";

export const FriendFormSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Last Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(
      /^\+373\d{8}$/,
      "Phone must start with +373 and have 8 digits after +373"
    )
    .required("Phone is required"),
  twitter: Yup.string()
    .matches(/^@[\w]+$/, "Twitter must start with @")
    .required("Twitter is required"),
});

export const TableHeading = ["Name", "Email", "Phone", "Twitter", "Actions"];

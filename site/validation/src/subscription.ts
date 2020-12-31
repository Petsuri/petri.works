import * as Yup from 'yup';
import { EmailAddress, Name } from "@petriworks/common";

export const NewSubscriptionSchema = Yup.object().shape({
  name: Yup.string().test("Name", "Invalid name", (value) =>
    Name.isValid(value)
  ),
  email: Yup.string().test("Email", "Invalid email", (value) =>
    EmailAddress.isValid(value)
  ),
});

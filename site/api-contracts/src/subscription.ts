import * as Yup from 'yup';
import { EmailAddress, Name } from '@petriworks/common';

export type NewSubscriptionRequest = {
  name: string;
  email: string;
};

export const NewSubscriptionSchema = Yup.object()
  .strict()
  .shape({
    name: Yup.string()
      .required()
      .test('Name', 'Invalid name', (value) => Name.isValid(value)),
    email: Yup.string()
      .required()
      .test('Email', 'Invalid email', (value) => EmailAddress.isValid(value)),
  })
  .noUnknown(true)
  .required();

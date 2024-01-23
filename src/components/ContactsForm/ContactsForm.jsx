import { Formik } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import {
  Form,
  FormGroup,
  Field,
  ErrorMessage,
  Button,
} from './ContactsForm.styled';

const contactSchema = Yup.object().shape({
  name: Yup.string().min(2, 'Too Short!').required('Required'),
  phone: Yup.string().min(6, 'Too Short!').required('Required'),
});

const ContactsForm = ({ onAdd }) => {
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          phone: '',
        }}
        validationSchema={contactSchema}
        onSubmit={(values, actions) => {
          onAdd(values);
          actions.resetForm();
        }}
      >
        <Form autoComplete="off">
          <FormGroup>
            Name
            <Field id="name" type="text" name="name" required />
            <ErrorMessage name="name" component="span" />
          </FormGroup>

          <FormGroup>
            Phone
            <Field id="phone" type="tel" name="phone" required />
            <ErrorMessage name="phone" component="span" />
          </FormGroup>

          <Button type="submit">Add contact</Button>
        </Form>
      </Formik>
    </div>
  );
};

ContactsForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactsForm;

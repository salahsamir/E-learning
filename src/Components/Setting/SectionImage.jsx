import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios'; // Import axios for making API requests
import toast from 'react-hot-toast';

export default function SectionImage() {
    let headers={
        token: localStorage.getItem('token')
    }
  const initialValues = {
    fullName: '',
    gender: '',
    phone: '',
    age: ''
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // Make API request to update user profile
      await axios.patch('https://education-project.azurewebsites.net/user/updateProfile', values,{headers});
      toast('Successfully updated profile!');
    //   alert('Profile updated successfully!');
      resetForm(); // Reset form fields after successful submission
    } catch (error) {
      console.error('Error updating profile:', error);
    //   alert('Error updating profile. Please try again.');
    }
    setSubmitting(false);
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.fullName) {
      errors.fullName = 'Required';
    }

    if (!values.gender) {
      errors.gender = 'Required';
    }

    if (!values.phone) {
      errors.phone = 'Required';
    }

    if (!values.age) {
      errors.age = 'Required';
    } else if (isNaN(values.age)) {
      errors.age = 'Age must be a number';
    }

    return errors;
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validate={validateForm}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="fullName">Full Name:</label>
              <Field type="text" name="fullName" />
              <ErrorMessage name="fullName" component="div" />
            </div>
            <div>
              <label htmlFor="gender">Gender:</label>
              <Field as="select" name="gender">
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </Field>
              <ErrorMessage name="gender" component="div" />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <Field type="text" name="phone" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <label htmlFor="age">Age:</label>
              <Field type="text" name="age" />
              <ErrorMessage name="age" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Update Profile'}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

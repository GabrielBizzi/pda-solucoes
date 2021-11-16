/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

const initialValues = {
  company: '',
  position: '',
  link: '',
  date: '',
  note: '',
};

const Form: React.FC = () => {
  const [values, setValues] = React.useState(initialValues);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form>
      <input
        value={values.company}
        onChange={handleInputChange}
        name="company"
      />
      <input
        value={values.position}
        onChange={handleInputChange}
        name="position"
      />
      {/* // ... Rest of the input fields */}
      <button type="submit"> Submit </button>
    </form>
  );
};

export default Form;

import { useState } from "react";

const useForm = (initialValues) => {

  console.log(initialValues)
  const [form, setForm] = useState(initialValues);        
    const onChange = (name, value) => {
      const newForm = { ...form, [name]: value };
      setForm(newForm);
    };
    const resetForm = () => {
      setForm(initialValues);
    };      
    return { form, onChange, resetForm };
};

export default useForm;
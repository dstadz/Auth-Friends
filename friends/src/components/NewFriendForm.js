import React from 'react';
import useForm from 'react-hook-form';

export default function NewFriendForm() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="name" name="name" ref={register} />
      <input type="number" placeholder="age" name="age" ref={register} />
      <input type="text" placeholder="Email" name="Email" ref={register({pattern: /^\S+@\S+$/i})} />

      <input type="submit" />
    </form>
  );
}
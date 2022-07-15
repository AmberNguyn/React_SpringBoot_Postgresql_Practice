import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="employeeCode" {...register("employeeCode", {})} />
      <input type="text" placeholder="firstName" {...register("firstName", {required: true, maxLength: 80})} />
      <input type="text" placeholder="middleName" {...register("middleName", {})} />
      <input type="text" placeholder="lastName" {...register("lastName", {required: true, maxLength: 100})} />
      <input type="datetime-local" placeholder="dateOfBirth" {...register("dateOfBirth", {})} />
      <input type="tel" placeholder="phoneNumber" {...register("phoneNumber", {required: true, maxLength: 12})} />
      <input type="text" placeholder="address" {...register("address", {})} />
      <input type="email" placeholder="privateEmail" {...register("privateEmail", {pattern: /^\S+@\S+$/i})} />
      <input type="email" placeholder="schoolEmail" {...register("schoolEmail", {})} />
      <select {...register("teacherType")}>
        <option value="VIETNAMESE">Vietnamese</option>
        <option value="EXPATRIATE">Expatriate</option>
        <option value="OTHER">Other</option>
      </select>
      <select {...register("gender")}>
        <option value="MALE">Male</option>
        <option value="FEMALE">Female</option>
        <option value="OTHER">Other</option>
      </select>
      <input type="text" placeholder="degree" {...register("degree", {})} />
      <select {...register("nationalityId")}>
        <option value="1">American</option>
        <option value="2">Vietnamese</option>
        <option value="3">Canadian</option>
        <option value="4">Scotland</option>
        <option value="5">Britain</option>
        <option value="6">Ireland</option>
        <option value="7">Wales</option>
      </select>

      <input type="submit" />
    </form>
  );
}
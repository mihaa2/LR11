
import React from "react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const onSubmit = (data) => {
    console.log("Дані форми:", data);

    reset({
      login: "",
      firstName: "Пам’ятай",
      lastName: "Про курсову роботу",
    });
  };

  return (
    <div className="App">
      <h1>React Hook Form for IPZ</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Login:</label>
        <input
          {...register("login", {
            required: "Введіть логін!",
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Логін має містити тільки латинські літери!",
            },
          })}
        />
        {errors.login && <p>{errors.login.message}</p>}

        <label>FirstName:</label>
        <input
          {...register("firstName", {
            required: "Поле обов'язкове!",
            minLength: {
              value: 5,
              message: "Мінімум 5 символів!",
            },
          })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}

        <label>LastName:</label>
        <input
          {...register("lastName", {
            required: "Поле обов'язкове!",
            minLength: {
              value: 5,
              message: "Мінімум 5 символів!",
            },
            maxLength: {
              value: 25,
              message: "Максимум 25 символів!",
            },
          })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}

        <input type="submit" value="Відправити" />
      </form>
    </div>
  );
}

export default App;

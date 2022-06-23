/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function LoginForm() {
  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col items-center">
      <header className="m-6">
        <img src={logo} alt="logo" className="max-w-xs m-4" />
      </header>
      <form className="w-full max-w-lg w-4/5">
        <label
          htmlFor="email"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Email
          <input
            type="text"
            {...register("email", {
              required: true,
            })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
        </label>
        <label
          htmlFor="password"
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        >
          Mot de passe
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-600 normal-case text-xs font-normal italic">
              Ce champ est requis.
            </p>
          )}
        </label>
        <Link to="/home">
          <input type="submit" className="underline underline-offset-1" />
        </Link>
      </form>
      <div className="flex space-x-1">
        <span>Vous n’avez pas de compte ? </span>
        <Link to="/inscription" className="underline underline-offset-1">
          Inscrivez-vous ici
        </Link>
      </div>
    </div>
  );
}

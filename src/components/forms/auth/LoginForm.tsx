"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { UserRound } from "lucide-react";
import Link from "next/link";
import PasswordInput from "../../ui/PasswordInput";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Loader from "@/components/ui/Loader";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('O e-mail inválido').required('O e-mail é obrigatório'),
      password: Yup.string().required('A senha é obrigatória'),
    }),
    onSubmit: (values) => {
      handleSubmit(values)
    },
  });

  async function handleSubmit(values: { email: string, password: string }) {
    setIsLoading(true)
    await signIn("credentials", {
      ...values,
      redirect: true,
      callbackUrl: '/app',
    });
    setIsLoading(false)
  }

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white w-full">
      <Input
        leftIcon={<UserRound size={18} className="text-primary-700" />}
        label="E-mail"
        type="email"
        name="email"
        placeholder="Seu melhor e-mail"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
      />
      <PasswordInput
        label="Senha"
        name="password"
        placeholder="Sua senha"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.touched.password && formik.errors.password ? formik.errors.password : ""}
      />
      <div className="flex flex-col justify-center items-center gap-3 mt-12 mb-3">
        <Button
          className="bg-secondary-400 text-white py-5 px-7 w-64 h-16 rounded-2xl text-xl"
          type="submit"
          text={isLoading ? <Loader /> : "Login"} 
          disabled={isLoading}/>
        <span className="text-base text-gray-300 font-normal">
          Não possui conta? {" "}
          <Link className="font-medium text-primary-400" href="/auth/register">Registre-se</Link>
        </span>
      </div>
    </form>
  );
};
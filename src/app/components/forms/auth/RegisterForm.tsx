"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import { UserRound } from "lucide-react";
import Link from "next/link";
import PasswordInput from "../../PasswordInput";

export default function RegisterForm() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('O nome é obrigatório'),
      email: Yup.string().email('O email inválido').required('O email é obrigatório'),
      password: Yup.string().required('A senha é obrigatória'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), undefined], 'As senhas não são iguais')
        .required('A confirmação da senha é obrigatória'),
    }),
    onSubmit: (values) => {
      console.log('Nome:', values.name);
      console.log('Email:', values.email);
      console.log('Password:', values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white w-full">
      <Input
        leftIcon={<UserRound size={18} className="text-primary-700" />}
        label="Nome"
        type="text"
        name="name"
        placeholder="Seu nome completo"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.touched.name && formik.errors.name ? formik.errors.name : ""}
      />
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
      <PasswordInput
        label="Confirme a Senha"
        name="confirmPassword"
        placeholder="Confirme sua senha"
        value={formik.values.confirmPassword}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        errors={formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : ""}
      />
      <div className="flex flex-col justify-center items-center gap-3 mt-12 mb-3">
        <Button
          className="bg-secondary-400 text-white py-5 px-7 w-64 rounded-2xl text-xl"
          type="submit"
          text="Registrar">
        </Button>
        <span className="text-base text-gray-300 font-normal">
          Já possui conta? {" "}
          <Link className="font-medium text-primary-400" href="/auth/login">Faça Login</Link>
        </span>
      </div>
    </form>
  );
};
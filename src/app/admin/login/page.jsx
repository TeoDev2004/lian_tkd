"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormLogin from "@/components/FormLogin";

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [error, setError] = useState(null);
  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      loginType: "admin",
      redirect: false,
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/admin/dashboard");
      router.refresh();
    }
  });
  return (
    <FormLogin
      error={error}
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      colorPage={"bg-[#2A3D5F]"}
      colorHover={"hover:bg-[#1A2E4A]"}
    />
  );
}

export default AdminLogin;

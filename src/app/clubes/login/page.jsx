"use client";

import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FormLogin from "@/components/FormLogin";

function ClubLogin() {
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
      redirect: false,
      loginType: "club",
    });

    if (res.error) {
      setError(res.error);
    } else {
      router.push("/clubes/dashboard");
      router.refresh();
    }
  });
  return (
    <FormLogin
      error={error}
      errors={errors}
      onSubmit={onSubmit}
      register={register}
      colorPage={"bg-[#00843D]"}
      colorHover={"hover:bg-[#008F54]"}
    />
  );
}

export default ClubLogin;

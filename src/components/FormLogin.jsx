import Image from "next/image";

function FormLogin({
  error,
  errors,
  onSubmit,
  register,
  colorPage,
  colorHover,
}) {
  return (
    <div>
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <Image
          src="/logo-liga.png"
          alt="Taekwondo"
          width={200}
          height={200}
          quality={100}
          className="absolute hidden md:block md:top-8 md:mb-2 2xl:top-20"
        />
        <form onSubmit={onSubmit} className="w-1/4">
          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-4">
              {error}
            </p>
          )}
          <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
          <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
            Ingresa tú usuario
          </label>
          <input
            type="email"
            placeholder="Usuario"
            {...register("email", {
              required: {
                value: true,
                message: "El usuario es requerido",
              },
            })}
            className={`p-3 rounded block mb-2 ${colorPage} text-slate-100 w-full`}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <label
            htmlFor="password"
            className="text-slate-500 mt-6 mb-2 block text-sm"
          >
            Ingresa tú contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: {
                value: true,
                message: "La contraseña es requerida",
              },
            })}
            className={`p-3 rounded block mb-2 ${colorPage} text-slate-100 w-full`}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}

          <button
            className={`w-full ${colorPage} ${colorHover} hover:cursor-pointer text-white p-3 rounded-lg mt-2`}
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;

-- CreateTable
CREATE TABLE "Club" (
    "id" SERIAL NOT NULL,
    "nombre_club" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "nombre_presidente" TEXT NOT NULL,
    "id_presidente" INTEGER NOT NULL,
    "telefono_presidente" TEXT NOT NULL,
    "correo_institucional" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Club_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Deportista" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "tipo_identificacion" TEXT NOT NULL,
    "numero_identificacion" TEXT NOT NULL,
    "grado_cinturon" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "lugar_nacimiento" TEXT NOT NULL,
    "rh" TEXT NOT NULL,
    "eps" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "municipio" TEXT NOT NULL,
    "barrio" TEXT NOT NULL,
    "estrato" INTEGER NOT NULL,
    "numero_celular" TEXT NOT NULL,
    "correo_electronico" TEXT NOT NULL,
    "discapacidad" TEXT,
    "tipo_formacion" TEXT NOT NULL,
    "profesion" TEXT,
    "ocupacion" TEXT,
    "fecha_ultimo_examen" TIMESTAMP(3),
    "competidor" BOOLEAN NOT NULL,
    "modalidad_competencia" TEXT,
    "rol_club" TEXT NOT NULL,
    "id_club" INTEGER NOT NULL,

    CONSTRAINT "Deportista_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "nombre_admin" TEXT NOT NULL,
    "correo_admin" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeleccionCombate" (
    "id" SERIAL NOT NULL,
    "mayor_logro" TEXT NOT NULL,
    "categoria" INTEGER NOT NULL,
    "id_deportista" TEXT NOT NULL,

    CONSTRAINT "SeleccionCombate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SeleccionPoomsae" (
    "id" SERIAL NOT NULL,
    "mayor_logro" TEXT NOT NULL,
    "modalidad" TEXT NOT NULL,
    "id_deportista" TEXT NOT NULL,

    CONSTRAINT "SeleccionPoomsae_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Club_id_presidente_key" ON "Club"("id_presidente");

-- CreateIndex
CREATE UNIQUE INDEX "Club_correo_institucional_key" ON "Club"("correo_institucional");

-- CreateIndex
CREATE UNIQUE INDEX "Deportista_numero_identificacion_key" ON "Deportista"("numero_identificacion");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_correo_admin_key" ON "Admin"("correo_admin");

-- CreateIndex
CREATE UNIQUE INDEX "SeleccionCombate_id_deportista_key" ON "SeleccionCombate"("id_deportista");

-- CreateIndex
CREATE UNIQUE INDEX "SeleccionPoomsae_id_deportista_key" ON "SeleccionPoomsae"("id_deportista");

-- AddForeignKey
ALTER TABLE "Deportista" ADD CONSTRAINT "Deportista_id_club_fkey" FOREIGN KEY ("id_club") REFERENCES "Club"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeleccionCombate" ADD CONSTRAINT "SeleccionCombate_id_deportista_fkey" FOREIGN KEY ("id_deportista") REFERENCES "Deportista"("numero_identificacion") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeleccionPoomsae" ADD CONSTRAINT "SeleccionPoomsae_id_deportista_fkey" FOREIGN KEY ("id_deportista") REFERENCES "Deportista"("numero_identificacion") ON DELETE CASCADE ON UPDATE CASCADE;

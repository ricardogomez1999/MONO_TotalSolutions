import { CheckBadgeIcon } from "@heroicons/react/20/solid";

export default function AllYouNeed() {
  return (
    <div className="container mx-auto max-w-7xl py-10">
      <h1 className=" my-10 text-4xl font-bold text-center text-primary">
        Todo lo que necesitas en un mismo lugar
      </h1>
      <div className=" flex flex-col md:flex-row p-5">
        <div className="h-96 bg-all-youneed bg-cover bg-center md:w-1/2 rounded-lg shadow-lg"></div>
        <div className=" md:w-1/2 p-5">
          <ul className="md:px-8 flex flex-col gap-5">
            <li className=" flex gap-2 items-start ">
              <CheckBadgeIcon className="w-12 text-lightBlue" />
              Operaciones Centralizadas: Gestiona todas tus operaciones
              logísticas desde un solo lugar, desde cotizaciones hasta pagos y
              facturas.
            </li>
            <li className=" flex gap-2 items-start">
              <CheckBadgeIcon className="w-12 text-lightBlue" />
              Solución Integral: Cubrimos todas tus necesidades logísticas,
              desde transporte aéreo y terrestre hasta almacenamiento y última
              milla.
            </li>
            <li className=" flex gap-2 items-start">
              <CheckBadgeIcon className="w-12 text-lightBlue" />
              Equipo Especializado: Un equipo comprometido de expertos te
              acompaña en todo momento, asegurando un servicio de calidad.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

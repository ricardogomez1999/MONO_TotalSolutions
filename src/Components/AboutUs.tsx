export default function AboutUs() {
  return (
    <div className=" p-5 md:bg-about-us bg-cover bg-center flex justify-end md:w-3/4 mx-auto my-10 md:rounded-lg md:shadow-lg">
      <div className=" md:h-96 flex flex-col justify-center items-center md:w-1/2">
        <div className="p-4 md:pe-36 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Acerca <span className=" font-normal">de Nosotros</span>
          </h1>
          <h2 className=" text-lg md:text-xl font-semibold text-primary">
            En MONO Total Solutions,
          </h2>
          <p className=" text-sm md:text-md text-secondary">
            ofrecemos soluciones integrales en logística y transporte nacional e
            internacional, alquiler de equipos especializados para mejorar su
            cadena de suministro, y comercialización de productos. Nos
            esforzamos por ser el socio estratégico que su empresa necesita para
            alcanzar sus objetivos, brindando soporte excepcional y soluciones
            personalizadas. Explore cómo MONO Total Solutions puede ayudar a
            llevar su empresa al siguiente nivel.
          </p>
        </div>
        <img className="md:hidden" src="./AboutUs.jpeg" alt="about us image" />
      </div>
    </div>
  );
}

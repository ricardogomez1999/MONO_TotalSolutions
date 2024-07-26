export default function AboutUs() {
  return (
    <div className=" p-5 md:bg-about-us bg-cover bg-center flex justify-end md:w-3/4 mx-auto my-10 md:rounded-lg md:shadow-lg">
      <div className=" md:h-96 flex flex-col justify-center items-center md:w-1/2">
        <div className="p-4 md:pe-36 mt-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Acerca <span className=" font-normal">de Nosotros</span>
          </h1>
          <h2 className=" text-lg md:text-xl font-semibold text-primary">
            En Mono total solutions
          </h2>
          <p className=" text-sm md:text-md text-secondary">
            Somos una empresa comprometida con ofrecer soluciones integrales y
            personalizadas para tu negocio. Nos especializamos en brindar una
            amplia gama de servicios diseñados para satisfacer todas tus
            necesidades empresariales. Desde la asesoría estratégica hasta la
            implementación de tecnologías innovadoras, trabajamos contigo para
            asegurar el crecimiento y éxito de tu empresa.{" "}
          </p>
        </div>
        <img
          className="md:hidden"
          src="./bgAboutUs.webp"
          alt="about us image"
        />
      </div>
    </div>
  );
}

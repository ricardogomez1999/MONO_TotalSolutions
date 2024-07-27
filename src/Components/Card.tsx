type CardProps = {
  title: string;
  img: string;
  description: string;
};

export default function Card({ title, img, description }: CardProps) {
  return (
    <div className="bg-gray-100 text-white h-[400px] rounded-lg p-10 flex flex-col justify-evenly shadow-lg">
      <img src={`${img}.webp`} alt={`imagen de ${img}`} />
      <h1 className="text-center font-bold text-xl text-primary">{title}</h1>
      <p className=" text-lightBlue mt-3 text-sm">{description}</p>
    </div>
  );
}

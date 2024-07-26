type CardProps = {
  title: string;
  img: string;
};

export default function Card({ title, img }: CardProps) {
  return (
    <div className="bg-gray-100 text-white h-96 rounded-lg p-10 flex flex-col justify-evenly shadow-lg">
      <img src={`${img}.webp`} alt={`imagen de ${img}`} />
      <h1 className="text-center font-bold text-xl text-primary">{title}</h1>
      <p className=" text-lightBlue mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit tempore,
        minus sit enim.
      </p>
    </div>
  );
}

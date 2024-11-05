type CardProps = {
  title: string;
  img: string;
  description: string;
};

export default function Card({ title, img, description }: CardProps) {
  const sentences = description.split(".");
  return (
    <div className="bg-gray-100 text-white rounded-lg p-10 flex flex-col justify-evenly shadow-lg h-full">
      <img src={`${img}.webp`} alt={`imagen de ${img}`} />
      <h1 className="text-center font-bold text-xl text-primary">{title}</h1>
      <p className=" text-lightBlue mt-3 text-sm">
        <ul className=" list-disc flex flex-col gap-1">
          {sentences.map((sentence) => (
            <li key={sentence}>{sentence}</li>
          ))}
        </ul>
      </p>
    </div>
  );
}

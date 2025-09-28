type CardProps = {
  title: string;
  img: string;
  imgAlt: string;
  description: string[];
};

export default function Card({ title, img, imgAlt, description }: CardProps) {
  return (
    <div className="bg-gray-100 text-white rounded-lg p-8 flex flex-col justify-evenly shadow-lg h-[550px]">
      <img src={`${img}.webp`} alt={imgAlt} />
      <h1 className="text-center font-bold text-xl text-primary">{title}</h1>
      <ul className=" list-disc flex flex-col gap-1 text-lightBlue mt-3 text-sm">
        {description.map((sentence, index) => (
          <li key={`${img}-${index}`}>{sentence}</li>
        ))}
      </ul>
    </div>
  );
}

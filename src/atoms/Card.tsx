interface CardProps {
  children: React.ReactNode;
  heading: string;
  paragraph: string;
}

const Card = ({ children, heading, paragraph }: CardProps) => {
  return (
    <div className="card w-full h-full flex flex-col justify-center items-center px-5">
      {/* gradient */}
      <div className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-orange-50  w-full rounded">
        {children}
      </div>
      {/* text */}
      <div
        className="w-full flex justify-center
    items-center flex-col py-5"
      >
        <h1 className="text-3xl font-bold hover:text-orange-500 pb-2">
          {heading}
        </h1>
        <p className="text-gray-500 text-center">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;

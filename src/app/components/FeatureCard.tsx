const FeatureCard = ({
    imageSrc,
    imageAlt,
    title,
    year,
    category,
    description
}: {
    imageSrc: string;
  imageAlt: string;
  title: string;
  year: string;
  category: string;
  description: string;
}) => {
    return(
    <div className="text-gray-800 flex items-start max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-4 p-6 mb-6">
    <img className="w-56  mr-6 rounded-lg max-md:mr-0 max-md:w-full " src={imageSrc} alt={imageAlt} />
    <div className="px-2 mt-1 space-y-2">
      <h3 className="text-3xl font-bold">{title}</h3>
      <p className="mb-2">
        <span className="text-white bg-red-300 px-3 rounded-3xl font-extrabold h-11">{year}</span>
        &nbsp; &nbsp; {category}
      </p>
      <p className="text-sm ">{description}</p>
    </div>
  </div>
    )
}

export default FeatureCard
const Card = ({
    title,
    date,
    category,
    description,
}: {
    title: string,
    date: string,
    category: string,
    description: string
}) => {
    return (
            <div className="bg-white p-8 text-gray-700 max-w-[26rem]">
              <p className="font-semibold text-xl">{title}</p>
              <br />
              <p>
                {date} &nbsp; &nbsp; | &nbsp; &nbsp; {category}
              </p>
              <br />
              <p className="text-sm">{description}</p>
            </div>
          );
}

export default Card
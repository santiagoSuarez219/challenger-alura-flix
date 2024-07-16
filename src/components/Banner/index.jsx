export default function Banner({ data }) {
  const handleStyleBackground = (category) => {
    if (category === "frontend") {
      return "bg-color-frontend";
    } else if (category === "backend") {
      return "bg-color-backend";
    } else {
      return "bg-color-innovation";
    }
  };

  const handleStyleBorder = (category) => {
    if (category === "frontend") {
      return "border-color-frontend";
    } else if (category === "backend") {
      return "border-color-backend";
    } else {
      return "border-color-innovation";
    }
  };

  return (
    <div
      className={`banner hidden md:flex h-96 lg:h-[700px]  justify-center md:justify-between items-center px-6 lg:px-12 gap-6`}
    >
      <div className="w-1/2">
        <p
          className={`w-auto max-w-[470px] ${handleStyleBackground(
            data.category
          )} text-white font-bold p-2 lg:px-4 rounded-xl text-center text-xl lg:text-3xl mb-8 lg:uppercase capitalize`}
        >
          {data.category}
        </p>
        <div className="text-white">
          <h3 className="text-xl lg:text-3xl font-light lg:mb-2">
            {data.title}
          </h3>
          <p className="font-extralight text-sm lg:text-lg max-w-screen-md">
            {data.description}
          </p>
        </div>
      </div>
      <figure
        className={`w-96 lg:w-[600px] aspect-video border-[3px] ${handleStyleBorder(
          data.category
        )} rounded-lg overflow-hidden`}
      >
        <img
          src={data.image}
          alt={`imagen-${data.title}`}
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  );
}

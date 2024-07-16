import VideoCard from "../VideoCard";

export default function VideoList(props) {
  const handleColor = (title) => {
    if (title === "Front End") {
      return "bg-color-frontend";
    } else if (title === "Back End") {
      return "bg-color-backend";
    } else {
      return "bg-color-innovation";
    }
  };

  return (
    <>
      <div
        className={`uppercase text-white w-72 ${handleColor(
          props.title
        )} py-4 rounded-2xl flex justify-center items-center mb-10 md:mt-16 md:mx-auto md:text-lg md:mb-2 lg:mx-6`}
      >
        <h2 className="font-bold">{props.title}</h2>
      </div>
      <div className="w-auto h-80 items-center overflow-x-auto overscroll-x-contain flex gap-4 mb-20 md:mx-6">
        {props.data.map((video) => (
          <VideoCard key={video.id} title={props.title} data={video} />
        ))}
      </div>
    </>
  );
}

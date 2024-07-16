import FooterCard from "../FooterCard";

export default function VideoCard(props) {
  const handleColor = (title) => {
    if (title === "Front End") {
      return "border-color-frontend";
    } else if (title === "Back End") {
      return "border-color-backend";
    } else {
      return "border-color-innovation";
    }
  };

  return (
    <div
      className={`w-96 h-64 flex-none rounded-xl overflow-hidden border-4 ${handleColor(
        props.title
      )}`}
    >
      <figure className="h-4/5">
        <img
          src={props.data.image}
          alt={`imagen-${props.data.title}`}
          className="w-full h-full object-cover"
        />
      </figure>
      <FooterCard color={handleColor(props.title)} id={props.data.id} />
    </div>
  );
}

import { useQuery } from "@tanstack/react-query";

import VideoList from "../../components/VideoList";
import Banner from "../../components/Banner";
import { getVideos } from "../../api";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["videos"],
    queryFn: getVideos,
  });

  const filteredData = (category) => {
    return data.filter((video) => video.category === category);
  };

  if (isLoading) return <p className="text-white text-lg">Cargando ...</p>;
  return (
    <section className="">
      <Banner data={data[data.length - 1]} />
      <VideoList title="Front End" data={filteredData("frontend")} />
      <VideoList title="Back End" data={filteredData("backend")} />
      <VideoList
        title="Innovacion y Gestion"
        data={filteredData("innovacion y gestion")}
      />
    </section>
  );
}

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { deleteVideo } from "../../api";

export default function ButtonCard(props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteVideo,
    onError: () => {
      toast.error("Error al borrar el video");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      toast.success("Video borrado correctamente");
    },
  });

  const handleButtons = (title) => {
    if (title === "Editar") {
      navigate(`/?editVideo=true&videoId=${props.id}`);
    } else if (title === "Borrar") {
      mutate(props.id);
    }
  };

  return (
    <div
      className="flex-grow flex justify-center items-center gap-2 cursor-pointer"
      onClick={() => handleButtons(props.title)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-7 text-white"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d={props.svg} />
      </svg>
      <p className="text-white uppercase font-semibold">{props.title}</p>
    </div>
  );
}

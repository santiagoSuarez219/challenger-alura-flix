import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { createVideo } from "../../api";
import VideoForm from "../VideoForm";

export default function AddForm() {
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    category: "",
    image: "",
    video: "",
    description: "",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: createVideo,
    onError: () => {
      toast.error("Error al crear el video");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      toast.success("Video creado correctamente");
      navigate("/");
    },
  });

  const handleForm = (data) => mutate(data);

  return (
    <form
      className="flex flex-col gap-14 lg:gap-4"
      onSubmit={handleSubmit(handleForm)}
      noValidate
    >
      <VideoForm register={register} errors={errors} />
      <div className="flex flex-col md:flex-row gap-7 px-12 md:px-0 md:mb-12 text-xl font-semibold uppercase">
        <input
          type="submit"
          value="Guardar"
          className="form__button border-primary"
        />
        <input
          type="button"
          value="Limpiar"
          className="form__button"
          onClick={() => reset()}
        />
      </div>
    </form>
  );
}

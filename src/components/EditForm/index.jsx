import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { updateVideo } from "../../api";
import VideoForm from "../VideoForm";

export default function EditForm({ dataForm }) {
  const navigate = useNavigate();
  const initialValues = {
    title: dataForm.title,
    category: dataForm.category,
    image: dataForm.image,
    video: dataForm.video,
    description: dataForm.description,
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
    mutationFn: updateVideo,
    onError: () => {
      toast.error("Error al editar el video");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["videos"] });
      queryClient.invalidateQueries({ queryKey: ["editVideo"] });
      toast.success("Video editado correctamente");
      reset();
      navigate("/");
    },
  });

  const handleForm = (data) => {
    mutate({ id: dataForm.id, video: data });
  };

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
          className="form__button border-primary bg-black text-primary"
        />
        <input
          type="button"
          value="Limpiar"
          className="form__button"
          onClick={() =>
            reset({
              title: "",
              category: "",
              image: "",
              video: "",
              description: "",
            })
          }
        />
      </div>
    </form>
  );
}

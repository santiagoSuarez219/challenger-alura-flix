export default function VideoForm({ register, errors }) {
  return (
    <>
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
        <div className="flex flex-col gap-4 mb-6 md:mb-0">
          <label htmlFor="title" className="text-xl font-medium">
            Titulo
          </label>
          <input
            id="title"
            type="text"
            placeholder="titulo del video"
            className="form__input"
            {...register("title", {
              required: "El titulo es obligatorio",
            })}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="category" className="text-xl font-medium">
            Categoria
          </label>
          <select
            name="category"
            id="category"
            className="form__input"
            {...register("category", {
              required: "La categoria es obligatoria",
            })}
          >
            <option value="" className="bg-black/90">
              escoja una categoria
            </option>
            <option value="frontend" className="bg-black/90">
              Frontend
            </option>
            <option value="backend" className=" bg-black/90">
              Backend
            </option>
            <option value="innovacion y gestion" className="bg-black/90">
              Innovación y Gestión
            </option>
          </select>
          {errors.category && (
            <span className="text-red-500 text-sm">
              {errors.category.message}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="image" className="text-xl font-medium">
            Imagen
          </label>
          <input
            id="image"
            type="text"
            placeholder="link de la imagen"
            className="form__input"
            {...register("image", {
              required: "El enlace es obligatorio",
            })}
          />
          {errors.image && (
            <span className="text-red-500 text-sm">{errors.image.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <label htmlFor="video" className="text-xl font-medium">
            Video
          </label>
          <input
            id="video"
            type="text"
            placeholder="link del video"
            className="form__input"
            {...register("video", {
              required: "El enlace es obligatorio",
            })}
          />
          {errors.video && (
            <span className="text-red-500 text-sm">{errors.video.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 lg:mb-6 ">
          <label htmlFor="description" className="text-xl font-medium">
            Descripcion
          </label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="5"
            placeholder="De que se trata este video?"
            className="form__input"
            {...register("description", {
              required: "El enlace es obligatorio",
            })}
          ></textarea>
          {errors.description && (
            <span className="text-red-500 text-sm">
              {errors.description.message}
            </span>
          )}
        </div>
      </div>
    </>
  );
}

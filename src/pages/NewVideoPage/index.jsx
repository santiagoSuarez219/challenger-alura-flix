import AddForm from "../../components/AddForm";

export default function NewVideo() {
  return (
    <>
      <div className="py-12 text-center uppercase text-white">
        <h2 className="text-4xl font-bold">Nuevo video</h2>
        <p className="mt-4 text-sm">
          Completa el formulario para crear una nueva tarjeta de video
        </p>
      </div>
      <div className="px-4 text-white md:px-8 max-w-screen-md mx-auto">
        <h2 className=" capitalize mb-10 px-2 py-4 text-4xl md:text-2xl border-y-2 border-color-form">
          Crear tarjeta
        </h2>
        <AddForm />
      </div>
    </>
  );
}

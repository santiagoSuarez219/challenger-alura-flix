import { Fragment } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  Transition,
  TransitionChild,
  DialogPanel,
} from "@headlessui/react";

import { getVideoById } from "../../api";
import EditForm from "../EditForm";

export default function EditCardModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showModal = queryParams.get("editVideo") ? true : false;
  const videoId = queryParams.get("videoId");

  const { data, isLoading } = useQuery({
    queryKey: ["editVideo", videoId],
    queryFn: () => getVideoById(videoId),
    retry: false,
  });

  if (isLoading) return <p className="text-white text-lg">Cargando ...</p>;

  return (
    <>
      <Transition appear show={showModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            navigate(location.pathname, { replace: true });
          }}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-color-modal/70 " />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full md:w-[90%] max-w-4xl transform overflow-hidden rounded-2xl h-[90%] md:h-auto border-4 border-primary bg-color-modal text-left align-middle shadow-xl transition-all p-4">
                  <figure
                    className="flex justify-end mb-4 md:mb-0"
                    onClick={() => {
                      navigate(location.pathname, { replace: true });
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                      stroke="currentColor"
                      className="size-12 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </figure>
                  <h2 className="uppercase text-primary font-bold text-4xl text-center mb-16 md:mb-6 md:text-left md:px-6 lg:px-12">
                    Editar card
                  </h2>
                  <div className="text-white mb-16 md:mb-0 md:px-6 lg:px-12">
                    <EditForm dataForm={data} />
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

import React from "react";
import ReactDOM from "react-dom";

const ProjectModal = ({ setProjectModal }) => {
  return ReactDOM.createPortal(
    <div
      class="relative z-20"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        class="fixed inset-0 bg-gray-500/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col ">
              <div class="sm:flex sm:items-start bg-red-500 flex-col">
                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    class="text-base font-semibold text-gray-900"
                    id="modal-title"
                  >
                    Proje Oluştur
                  </h3>
                </div>
                <form className="w-full bg-blue-500 p-2 grid grid-cols-2 gap-5">
                  <input type="text" placeholder="Proje Adı" />
                  <input type="text" placeholder="Proje Açıklaması" />
                  <input type="text" placeholder="Proje Teknolojisi" />
                  <input type="text" placeholder="Proje Tasarım Teknolojisi" />
                  <input type="text" placeholder="Proje Versiyonu" />
                  <input type="text" placeholder="Proje Linki" />
                  <input type="text" placeholder="Proje Github Linki" />
                  <input type="text" placeholder="Proje Görseli" />
                  <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      onClick={() => setProjectModal(false)}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Oluştur
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("root-modal")
  );
};

export default ProjectModal;

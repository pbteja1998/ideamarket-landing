import { Transition } from '@headlessui/react'

export default function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}) {
  if (!isOpen) {
    return <></>
  }
  return (
    <>
      <div
        className="fixed z-10 inset-0 overflow-y-auto"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="min-h-screen text-center block p-0">
          <Transition
            show={isOpen}
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            onClick={() => setIsOpen(false)}
          />

          <span
            className="inline-block align-middle h-screen"
            aria-hidden="true"
          >
            ​
          </span>
          <Transition
            show={isOpen}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-0 scale-95"
            enterTo="opacity-100 translate-y-0 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100"
            leaveTo="opacity-0 translate-y-0 scale-95"
            className={`inline-block align-bottom bg-white rounded-lg text-left 
            overflow-hidden shadow-xl transform transition-all my-8 
            sm:align-middle max-w-lg w-full`}
          >
            <div className="video-container">
              <iframe
                src="https://www.youtube-nocookie.com/embed/vmzUtpaeQ-I"
                frameBorder={0}
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className=""
                title="Ideamarket Video"
              />
            </div>
          </Transition>
        </div>
      </div>
    </>
  )
}

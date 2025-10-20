import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import type { ReactNode } from 'react'
interface ModalProps {
  isOpen: boolean,
  close: () => void,
  children: ReactNode
  title?: string,
  description?: string
}
const Modal = ({ isOpen, close, children, title, description }: ModalProps) => {
  //* Title and Description functions to conditionally render them
  const titleFunction = () => {
    return title && (
      <DialogTitle as="h3" className="text-base/7 font-medium text-black">
        {title}
      </DialogTitle>
    )
  }

  const descriptionFunction = () => {
    return description && (
      <p className="mt-2 text-sm/6 text-black/50">
        {description}
      </p>
    )
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none " onClose={close}>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" aria-hidden="true" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white px-4 pt-5 pb-700/10 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {titleFunction()}
              {descriptionFunction()}
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Modal
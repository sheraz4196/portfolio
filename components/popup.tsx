import { ReactNode, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Heading from "./Typography/Headings";
import Button from "./button";
import { X } from "lucide-react";
import useKey from "$/Hooks/useKey";

export type PopupProps = {
  title: string;
  children: ReactNode;
  onYes?: () => void;
  onClose?: () => void;
  open: boolean;
};

export default function Popup({
  title,
  children,
  onYes,
  onClose,
  open,
}: PopupProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);
  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.focus();
    }
  }, [isOpen]);
  function handleClose() {
    if (onClose) {
      onClose();
    }
    setIsOpen(false);
  }
  function handleBackdropClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  }
  useKey("Escape", handleClose);
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 flex items-center justify-center z-50"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-lg"
            aria-hidden="true"
          />
          <motion.div
            ref={dialogRef}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.5 }}
            className="flex items-center justify-center relative bg-white h-[80%] w-[80%] px-6 py-4 focus-opposite"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <article>
              <Heading size="h3">{title}</Heading>
              <div className="text-zinc-800 tracking-wide leading-7 text-lg font-medium">
                {children}
              </div>
            </article>
            <button
              type="button"
              aria-label="Close Button"
              onClick={handleClose}
              className="absolute top-2 right-4 p-4 focus-opposite rounded-full text-zinc-900"
            >
              <X size={30} />
            </button>
            {onYes && (
              <div className="absolute bottom-4 right-6 flex gap-4">
                <Button
                  className="bg-white !text-blue-900 focus-opposite"
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                <Button className="focus-accent" onClick={onYes}>
                  Confirm
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

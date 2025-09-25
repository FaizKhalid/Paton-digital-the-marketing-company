// components/MondayFormModal.tsx

import React from "react";

interface MondayFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MondayFormModal({
  isOpen,
  onClose,
}: MondayFormModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="relative w-full max-w-3xl bg-white rounded-lg shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-3 right-3 text-black text-2xl font-bold hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Iframe wrapper */}
        <div className="w-full h-[80vh] p-4">
          <iframe
            src="https://forms.monday.com/forms/2c30b407e30a09baad27b6a4e646d094?r=use1"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
}

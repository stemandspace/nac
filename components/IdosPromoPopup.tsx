"use client";

import { useEffect, useState } from "react";

const EXPLORIUM_URL = "http://explorium.spacetopia.in/?ref=nac";

export default function IdosPromoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="idos-promo-title"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="relative my-auto w-full max-w-4xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="idos-promo-title" className="sr-only">
          I Dream of Space Too
        </h2>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-2 top-2 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-800 shadow-lg hover:bg-gray-100 sm:right-3 sm:top-3"
          aria-label="Close popup"
        >
          <span className="text-xl leading-none">&times;</span>
        </button>
        <a
          href={EXPLORIUM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/idos-promo-popup.jpg?v=2"
            alt="I Dream of Space Too — a fun 30-day space challenge for grades 2 to 4. Opens Explorium in a new tab."
            className="mx-auto h-auto max-h-[85vh] w-full object-contain"
          />
        </a>
      </div>
    </div>
  );
}

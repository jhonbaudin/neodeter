import { content } from "@/content/content";

const WhatsAppLogo = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="h-full w-full">
    <path
      fill="#FFFFFF"
      d="M16.02 3.2c-6.99 0-12.66 5.67-12.66 12.66 0 2.22.57 4.39 1.66 6.3L3.2 28.8l6.79-1.78a12.6 12.6 0 0 0 6.03 1.54h.01c6.99 0 12.77-5.67 12.77-12.66 0-3.39-1.32-6.58-3.72-8.97A12.58 12.58 0 0 0 16.02 3.2Zm0 23.23h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-4.03 1.06 1.08-3.93-.25-.4a10.53 10.53 0 0 1-1.63-5.62c0-5.82 4.74-10.56 10.58-10.56 2.82 0 5.47 1.1 7.46 3.09a10.47 10.47 0 0 1 3.08 7.47c0 5.82-4.76 10.58-10.55 10.58Z"
    />
    <circle cx="16.02" cy="15.86" r="10.35" fill="#25D366" />
    <path
      fill="#FFFFFF"
      transform="translate(1.35 0.1)"
      d="M19.11 17.41c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.09-.16.19-.32.21-.6.07-.28-.14-1.17-.43-2.23-1.36-.82-.73-1.38-1.63-1.54-1.91-.16-.28-.02-.43.12-.57.12-.12.28-.32.42-.48.14-.16.19-.28.28-.46.09-.19.05-.35-.02-.49-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.46h-.52c-.18 0-.46.07-.7.35-.23.28-.89.87-.89 2.12s.91 2.46 1.03 2.63c.12.16 1.79 2.74 4.34 3.84.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.64-.67 1.87-1.32.23-.65.23-1.21.16-1.32-.07-.12-.25-.19-.53-.33Z"
    />
  </svg>
);

const WhatsAppButton = () => {
  return (
    <a
      href={content.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full transition-transform hover:scale-105 animate-float focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/35"
      aria-label="Contactar por WhatsApp"
    >
      <div className="h-[96%] w-[96%] translate-x-[0.1rem] drop-shadow-[0_22px_30px_rgba(37,211,102,0.45)]">
        <WhatsAppLogo />
      </div>
      <span className="sr-only">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;

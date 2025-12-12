import React from 'react';

const WhatsAppBtn = () => {
  // Apna WhatsApp Number yahan daalo (Country code ke saath, bina + sign ke)
  const phoneNumber = "916388162419"; 
  const message = "Hello Yatraksathi, I want to inquire about a tour package."; // Default message

  // WhatsApp Link banana
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon SVG */}
      <svg 
        className="w-8 h-8 text-white fill-current" 
        viewBox="0 0 448 512" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 60.2 23.5 118.5 66.9 162.1l-24.9 90.9 93.3-24.4C180.2 505.7 222 512 223.9 512c122.4 0 222-99.6 222-222 0-60.1-23.2-115.9-65-192.9zm-157 377.6c-34.9 0-69.3-9.4-100-27.1l-7.1-4.1-74.4 19.5 19.8-72.5-4.7-7.5C37.3 343.9 23.8 304.8 23.8 264c0-110.3 89.7-200 200.1-200 53.4 0 103.5 20.8 141.3 58.5 37.7 37.8 58.5 87.9 58.5 141.4 0 110.4-89.7 200.1-200.1 200.1z"/>
        <path d="M328.4 294.6c-5.9-3-35.3-17.4-40.7-19.4-5.4-2-9.4 3-13.4 8.9-4 5.9-15.4 19.4-18.9 23.4-3.5 4-7 4.5-12.9 1.5-5.9-3-24.9-9.2-47.4-29.3-17.5-15.6-29.3-34.9-32.7-40.8-3.5-5.9-.4-9.1 2.6-12 2.7-2.7 5.9-7 8.9-10.5 3-3.5 4-5.9 6-9.9 2-4 .9-7.5-.4-10.5-1.5-3-13.4-32.3-18.4-44.2-4.9-11.6-9.9-10-13.4-10.2-3.3-.2-7-.2-10.7-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 35.3-14.4 40.3-28.3 5-13.9 5-25.8 3.5-28.3-1.4-2.5-5.4-4-11.3-7z"/>
      </svg>
      
      {/* Tooltip (Optional: Hover karne pe text dikhega) */}
      <span className="absolute right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppBtn;
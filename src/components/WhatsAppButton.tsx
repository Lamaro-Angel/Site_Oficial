import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "928282656"; // Replace with actual number
  const message = "Olá! Gostaria de mais informações sobre os serviços da Blue Financial.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </a>
  );
};

export default WhatsAppButton;
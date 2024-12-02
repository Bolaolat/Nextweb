export default function WhatsAppButtons() {
  return (
    <section className="mt-12 flex flex-col items-center gap-4">
      <a
        href="https://whatsapp.com/channel/0029Vah3fKtCnA7oMPTPJm1h"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg transition-colors"
      >
        Join Our WhatsApp Channel
      </a>
      <a
        href="https://wa.me/2347041039367"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors"
      >
        Chat with Owner
      </a>
    </section>
  )
}


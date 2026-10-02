export const scrollToId = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const openWhatsApp = (name: string, email: string, message: string) => {
  const body = `Hello Ahmed,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
  window.open(`https://wa.me/201112358135?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
};

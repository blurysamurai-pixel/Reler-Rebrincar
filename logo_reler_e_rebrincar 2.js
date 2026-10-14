/**
 * Logo reLer e reBrincar
 * Projeto: Plataforma Escolar de Troca e Doação de Livros e Brinquedos
 */

export const logoConfig = {
  name: "reLer e reBrincar",
  slogan: "Troca e Alegria na Escola",
  colors: {
    primary: "#f43f5e",   // Rosa/Vermelho Vibrante
    secondary: "#be123c", // Vermelho Carmim
    accent: "#fb7185"     // Rosa Claro
  },
  icons: {
    book: "fa-solid fa-book-open",
    toy: "fa-solid fa-puzzle-piece",
    exchange: "fa-solid fa-arrows-rotate"
  },
  
  // Retorna o elemento HTML da Logo configurado
  renderHTML: function() {
    return `
      <div class="logo-reler-rebrincar inline-flex items-center space-x-3 cursor-pointer">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 via-rose-500 to-pink-400 flex items-center justify-center text-white text-xl shadow-lg shadow-rose-500/30 transform hover:scale-105 transition-all">
          <i class="fa-solid fa-arrows-rotate"></i>
        </div>
        <div>
          <span class="font-bold text-2xl text-slate-900 tracking-tight block leading-none">
            re<span class="text-rose-600">Ler</span> e re<span class="text-rose-600">Brincar</span>
          </span>
          <span class="text-xs text-rose-600 font-semibold tracking-wide">
            Troca & Alegria na Escola
          </span>
        </div>
      </div>
    `;
  }
};

export default logoConfig;
import type { Livro } from './types/entidades';
import { CartaoLivro } from './componentes/CartaoLivro';


const domCasmurro: Livro = {
  id: 1,
  titulo: 'Dom Casmurro',
  autor: 'Machado de Assis',
  sinopse: 'Romance narrado por Bentinho.',
  exemplares: 3,
};

const vidasSecas: Livro = {
  id: 2,
  titulo: 'Vidas Secas',
  autor: 'Graciliano Ramos',
  exemplares: 1,
};


export default function App() {
  return (
    <main>
      <CartaoLivro livro={domCasmurro} />
      <CartaoLivro livro={vidasSecas} minimoExemplares={3} />
    </main>
  );
}
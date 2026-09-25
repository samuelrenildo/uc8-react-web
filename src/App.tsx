import type { Livro } from './types/entidades';
import { CartaoLivro } from './componentes/CartaoLivro';
import { useState } from 'react';
import { FormularioLivroProps } from './componentes/FormularioLivro';
import { ListaLivros } from './componentes/ListaLivros';
import './App.css';

const Livro1 : Livro = {
  id: 1,
  titulo: 'Pai Rico, Pai Pobre',
  autor: 'Robert Kiyosaki',
  sinopse: 'é um guia clássico de finanças pessoais que desafia o modelo tradicional de buscar um emprego seguro para acumular riqueza.',
  exemplares: 3,
};

const Livro2: Livro = {
  id: 2,
  titulo: '1984',
  autor: 'George Orwell',
  exemplares: 1,
};


export default function App() {
  const [novosLivros, setNovosLivros] = useState<Livro[]>([]);

  return (
    <main>
      <CartaoLivro livro={Livro1} />
      <CartaoLivro livro={Livro2} minimoExemplares={3} />

      <ListaLivros />

      <FormularioLivroProps aoAdicionar={(livro) => setNovosLivros([...novosLivros, livro])} />
      {novosLivros.map((livro) => (
        <CartaoLivro key={livro.id} livro={livro} />
      ))}
    </main>
  );
}
import { useEffect, useState } from 'react';
import type { Livro } from '../types/entidades';
import { CartaoLivro } from './CartaoLivro';

function carregarLivros(): Promise<Livro[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, titulo: 'O Alquimista', autor: 'Paulo Coelho', exemplares: 4 },
        { id: 2, titulo: '1984', autor: 'George Orwell', exemplares: 1 },
        { id: 3, titulo: 'Dom Casmurro', autor: 'Machado de Assis', exemplares: 2 },
      ]);
    }, 300);
  });
}

export function ListaLivros() {
  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    carregarLivros().then(setLivros);
  }, []);

  return (
    <div>
      {livros.map((livro) => (
        <CartaoLivro key={livro.id} livro={livro} />
      ))}
    </div>
  );
}
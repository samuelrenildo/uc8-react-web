import { useState } from 'react';
import type { Livro } from '../types/entidades';

interface FormularioLivroProps {
  aoAdicionar: (livro: Livro) => void;
}

export function FormularioLivroProps({ aoAdicionar }: FormularioLivroProps) {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [exemplares, setExemplares] = useState(1);

    function handleSubmit() {
        if (!titulo || !autor) return;
        aoAdicionar({
            id: Date.now(),
            titulo,
            autor,
            exemplares,
        });
        setTitulo('');
        setAutor('');
        setExemplares(1);
    }

    return (<div>
      <input
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Título"
      />
      <input
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
        placeholder="Autor"
      />
      <input
        type="number"
        value={exemplares}
        onChange={(e) => setExemplares(Number(e.target.value))}
        min={0}
      />
      <button onClick={handleSubmit}>Adicionar livro</button>
    </div>
  );
}
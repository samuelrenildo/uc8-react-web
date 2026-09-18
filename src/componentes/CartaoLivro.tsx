import type { Livro } from '../types/entidades';

interface CartaoLivroProps {
    livro: Livro;
    minimoExemplares?: number;
}

export function CartaoLivro({ livro, minimoExemplares = 2}: CartaoLivroProps) {
    return (
        <article>
            <h2>{livro.titulo}</h2>
            <p>{livro.autor}</p>
            <p>{livro.sinopse ?? 'Sem sinopse'}</p>
            <p>{livro.exemplares} exemplares</p>
            {livro.exemplares < minimoExemplares && <p>Poucos exemplares</p>}
        </article>
    );
}
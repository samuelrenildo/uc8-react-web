import type { Livro } from '../types/entidades';

interface CartaoLivroProps {
    livro: Livro;
    minimoExemplares?: number;
}

export function CartaoLivro({ livro, minimoExemplares = 2 }: CartaoLivroProps) {
    return (
        <article>
            <h2>{livro.titulo}</h2>
            <p>{livro.autor}</p>
            <p>{livro.sinopse ?? 'Sinopse não cadastrada'}</p>
            <p>{livro.exemplares} exemplares disponíveis</p>
            {livro.exemplares < minimoExemplares && <p>Estoque baixo, considere repor</p>}
        </article>
    );
}
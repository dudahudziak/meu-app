'use client';

import { useState, type FormEvent } from 'react';
import styles from './NovaTarefa.module.css';

type NovaTarefaProps = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: NovaTarefaProps) {
  const [titulo, setTitulo] = useState('');
  const vazio = titulo.trim() === '';

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (vazio) return;
    onAdicionar(titulo.trim());
    setTitulo('');
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="titulo" className={styles.label}>
        Nova tarefa
      </label>
      <input
        id="titulo"
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite uma tarefa"
        className={styles.input}
      />
      <button type="submit" disabled={vazio} className={styles.botao}>
        Adicionar
      </button>
    </form>
  );
}
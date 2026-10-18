'use client';

import { useState } from 'react';
import NovaTarefa from './NovaTarefa';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';
import type { Tarefa } from '@/lib/tarefas';
import styles from './TarefasApp.module.css';

type TarefasAppProps = {
  tarefasIniciais: Tarefa[];
};

export default function TarefasApp({ tarefasIniciais }: TarefasAppProps) {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasIniciais);
  const total = useContadorDeTarefas(tarefas);

  function adicionar(titulo: string) {
    setTarefas((atual) => [...atual, { id: Date.now(), titulo }]);
  }

  return (
    <>
      <p data-testid="contador" className={styles.contador}>
        Total de tarefas: {total}
      </p>
      <NovaTarefa onAdicionar={adicionar} />
      <ul className={styles.lista}>
        {tarefas.map((t) => (
          <li key={t.id} className={styles.item}>
            {t.titulo}
          </li>
        ))}
      </ul>
    </>
  );
}
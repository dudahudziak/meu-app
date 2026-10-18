import TarefasApp from '@/components/TarefasApp';
import { getTarefas } from '@/lib/tarefas';
import styles from './page.module.css';

export default async function Home() {
  const tarefas = await getTarefas();

  return (
    <main className={styles.main}>
      <h1 className={styles.titulo}>Lista de Tarefas</h1>
      <TarefasApp tarefasIniciais={tarefas} />
    </main>
  );
}
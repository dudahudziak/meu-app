export type Tarefa = {
  id: number;
  titulo: string;
};

const tarefas: Tarefa[] = [
  { id: 1, titulo: 'Estudar testes unitários' },
  { id: 2, titulo: 'Configurar o Jest' },
  { id: 3, titulo: 'Escrever o README' },
];

export async function getTarefas(): Promise<Tarefa[]> {
  return Promise.resolve([...tarefas]);
}

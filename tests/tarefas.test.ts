import { getTarefas } from '@/lib/tarefas';

describe('getTarefas', () => {
  it('retorna uma lista de tarefas com id e titulo', async () => {
    const tarefas = await getTarefas();
    expect(tarefas.length).toBeGreaterThan(0);
    expect(tarefas[0]).toEqual({ id: expect.any(Number), titulo: expect.any(String) });
  });
});

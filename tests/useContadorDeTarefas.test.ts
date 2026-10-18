import { renderHook } from '@testing-library/react';
import { useContadorDeTarefas } from '@/hooks/useContadorDeTarefas';

describe('useContadorDeTarefas', () => {
  it('retorna 0 para lista vazia', () => {
    const { result } = renderHook(() => useContadorDeTarefas([]));
    expect(result.current).toBe(0);
  });

  it('retorna a quantidade de tarefas', () => {
    const tarefas = [
      { id: 1, titulo: 'A' },
      { id: 2, titulo: 'B' },
    ];
    const { result } = renderHook(() => useContadorDeTarefas(tarefas));
    expect(result.current).toBe(2);
  });

  it('atualiza o valor quando a lista muda', () => {
    const { result, rerender } = renderHook(
      ({ lista }) => useContadorDeTarefas(lista),
      { initialProps: { lista: [{ id: 1, titulo: 'A' }] } }
    );
    expect(result.current).toBe(1);

    rerender({
      lista: [
        { id: 1, titulo: 'A' },
        { id: 2, titulo: 'B' },
        { id: 3, titulo: 'C' },
      ],
    });
    expect(result.current).toBe(3);
  });
});

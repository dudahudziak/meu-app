import { render, screen, fireEvent, within } from '@testing-library/react';
import Home from '@/app/page';

describe('Página inicial', () => {
  it('renderiza título, contador e as tarefas carregadas', async () => {
    render(await Home());

    expect(screen.getByRole('heading', { name: 'Lista de Tarefas' })).toBeInTheDocument();
    expect(screen.getByTestId('contador')).toHaveTextContent('Total de tarefas: 3');

    const lista = screen.getByRole('list');
    expect(within(lista).getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByText('Estudar testes unitários')).toBeInTheDocument();
    expect(screen.getByText('Configurar o Jest')).toBeInTheDocument();
    expect(screen.getByText('Escrever o README')).toBeInTheDocument();
  });

  it('adiciona uma nova tarefa e atualiza o contador', async () => {
    render(await Home());

    fireEvent.change(screen.getByLabelText('Nova tarefa'), {
      target: { value: 'Publicar no GitHub' },
    });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(screen.getByText('Publicar no GitHub')).toBeInTheDocument();
    expect(screen.getByTestId('contador')).toHaveTextContent('Total de tarefas: 4');
  });
});

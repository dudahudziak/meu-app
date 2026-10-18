import { render, screen, fireEvent } from '@testing-library/react';
import NovaTarefa from '@/components/NovaTarefa';

describe('<NovaTarefa />', () => {
  it('renderiza input e botão', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    expect(screen.getByLabelText('Nova tarefa')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeInTheDocument();
  });

  it('mantém o botão desabilitado com input vazio ou só com espaços', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    const input = screen.getByLabelText('Nova tarefa');
    const botao = screen.getByRole('button', { name: 'Adicionar' });

    expect(botao).toBeDisabled();
    fireEvent.change(input, { target: { value: '   ' } });
    expect(botao).toBeDisabled();
  });

  it('habilita o botão ao digitar e atualiza o valor (input controlado)', () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);
    const input = screen.getByLabelText('Nova tarefa') as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'Estudar' } });
    expect(input.value).toBe('Estudar');
    expect(screen.getByRole('button', { name: 'Adicionar' })).toBeEnabled();
  });

  it('chama onAdicionar com o título e limpa o input ao enviar', () => {
    const onAdicionar = jest.fn();
    render(<NovaTarefa onAdicionar={onAdicionar} />);
    const input = screen.getByLabelText('Nova tarefa') as HTMLInputElement;

    fireEvent.change(input, { target: { value: '  Nova tarefa  ' } });
    fireEvent.click(screen.getByRole('button', { name: 'Adicionar' }));

    expect(onAdicionar).toHaveBeenCalledTimes(1);
    expect(onAdicionar).toHaveBeenCalledWith('Nova tarefa');
    expect(input.value).toBe('');
  });

  it('não chama onAdicionar ao submeter o formulário vazio', () => {
    const onAdicionar = jest.fn();
    const { container } = render(<NovaTarefa onAdicionar={onAdicionar} />);

    fireEvent.submit(container.querySelector('form')!);
    expect(onAdicionar).not.toHaveBeenCalled();
  });
});

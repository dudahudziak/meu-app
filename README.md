# Tarefas App — Testes unitários em Next.js 15

Aplicação de listagem e adição de tarefas com Next.js 15 (App Router), TypeScript, Jest e Testing Library.

## Estrutura

```
app/            layout.tsx e page.tsx (Server Component que carrega as tarefas)
components/     NovaTarefa (formulário controlado) e TarefasApp (lista + contador)
hooks/          useContadorDeTarefas
lib/            tarefas.ts (API simulada com Promise.resolve)
tests/          testes unitários
```

## Instalação

```bash
npm install
```

## Execução

```bash
npm run dev      # http://localhost:3000
```

## Testes

```bash
npm test                # executa todos os testes
npm run test:coverage   # com relatório de cobertura
```

## O que é testado

- `<NovaTarefa />`: renderização, botão desabilitado com input vazio, input controlado, submissão e limpeza do campo.
- `useContadorDeTarefas`: valor inicial, quantidade e atualização via `renderHook`.
- Página (`app/page.tsx`): renderização das tarefas, contador e adição de nova tarefa, sem mock de API.

// @ts-expect-error Next.js resolves gloal CSS imports at build time.
import './globals.css';

export const metadata = { title: 'Lista de Tarefas' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body> 
    </html>
  );
}
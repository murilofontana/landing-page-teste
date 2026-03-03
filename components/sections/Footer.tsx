import { Code2, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border" role="contentinfo">
      <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Code2 className="h-4 w-4 text-primary" aria-hidden="true" />
          <span className="font-medium text-foreground">Murilo Fontana</span>
        </div>

        <p className="flex items-center gap-1">
          © {currentYear} · Feito com{' '}
          <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 inline" aria-hidden="true" />
          {' '}e muito{' '}
          <span className="font-mono text-primary">{'</>'}</span>
        </p>
      </div>
    </footer>
  );
}

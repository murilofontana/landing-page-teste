import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { ButtonLink } from '@/components/ui';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
      aria-label="Apresentação"
    >
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase animate-fade-in">
          Olá, me chamo
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Murilo Fontana
        </h1>

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
          Desenvolvedor de Software{' '}
          <span className="text-primary">Senior</span>
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          8 anos de experiência construindo sistemas escaláveis com{' '}
          <span className="text-foreground font-medium">.NET</span>,{' '}
          <span className="text-foreground font-medium">TypeScript</span> e{' '}
          <span className="text-foreground font-medium">Docker</span>. Especialista em
          integrações corporativas e arquiteturas Multitenancy.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <ButtonLink href="#contato" size="lg">
            <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
            Entre em Contato
          </ButtonLink>
          <ButtonLink href="#projetos" variant="outline" size="lg">
            Ver Projetos
          </ButtonLink>
        </div>

        <div className="flex items-center justify-center gap-6 mb-16">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub de Murilo Fontana"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn de Murilo Fontana"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
          <a
            href="mailto:fontana.murilo@gmail.com"
            aria-label="Email de Murilo Fontana"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-6 w-6" aria-hidden="true" />
          </a>
        </div>

        <a
          href="#sobre"
          className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          aria-label="Ir para seção Sobre"
        >
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}


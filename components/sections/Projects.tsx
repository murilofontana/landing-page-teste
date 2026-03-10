import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, Button } from '@/components/ui';
import type { Project } from '@/types';

const projects: Project[] = [
  {
    title: 'MultiTenant SaaS Platform',
    description:
      'Plataforma SaaS com arquitetura Multitenancy completa, suportando múltiplos clientes com isolamento de dados por schema e configuração por tenant. Construída com ASP.NET Core e Entity Framework.',
    stack: ['C#', '.NET 8', 'ASP.NET Core', 'EF Core', 'SQL Server', 'Docker'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Integration Hub — Azure Service Bus',
    description:
      'Hub de integração corporativa utilizando Azure Service Bus para orquestrar comunicação assíncrona entre múltiplos sistemas. Suporte a retry policies, dead-letter queues e monitoramento em tempo real.',
    stack: ['C#', '.NET 8', 'Azure Service Bus', 'MassTransit', 'Docker', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'DevOps Orchestration Platform',
    description:
      'Plataforma de orquestração de ambientes Docker com API RESTful para gerenciamento de containers, redes e volumes. Interface para deploy automatizado com rollback e health checks configuráveis.',
    stack: ['TypeScript', 'Node.js', 'Docker SDK', 'React', 'Next.js', 'PostgreSQL'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

export function Projects() {
  return (
    <section id="projetos" className="py-24 px-4" aria-label="Projetos">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">
            O que construí
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Projetos em Destaque</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex flex-col hover:border-primary/50 hover:shadow-lg transition-all duration-200"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-lg leading-snug">{project.title}</CardTitle>
                  <div className="flex gap-1 shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub do projeto ${project.title}`}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo do projeto ${project.title}`}
                        className="p-1 hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

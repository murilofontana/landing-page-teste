import { Code2, Container, Building2, Plug, Database, Terminal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import type { Skill } from '@/types';

const skills: Skill[] = [
  {
    title: 'Desenvolvimento .NET / C#',
    description:
      'Ampla experiência com .NET, ASP.NET Core e C#, atuando desde o design de APIs até implementação de soluções enterprise.',
    icon: 'code2',
    tags: ['.NET', 'ASP.NET Core', 'C#', 'REST APIs', 'Clean Architecture'],
  },
  {
    title: 'TypeScript & Frontend',
    description:
      'Desenvolvimento de aplicações modernas com TypeScript, garantindo tipagem forte e código mais previsível e seguro.',
    icon: 'terminal',
    tags: ['TypeScript', 'React', 'Node.js', 'Next.js'],
  },
  {
    title: 'Conteinerização & Deploy',
    description:
      'Uso de Docker para otimização do deployment de aplicações, garantindo escalabilidade e facilidade na gestão de ambientes.',
    icon: 'container',
    tags: ['Docker', 'Docker Compose', 'CI/CD', 'DevOps'],
  },
  {
    title: 'Arquiteturas Multitenancy',
    description:
      'Experiência na construção de aplicações Multitenancy para atender múltiplos clientes de forma segura e eficiente.',
    icon: 'building2',
    tags: ['Multitenancy', 'SaaS', 'Isolamento de dados', 'Escalabilidade'],
  },
  {
    title: 'Integrações & Mensageria',
    description:
      'Desenvolvimento de integrações robustas via APIs e Azure Service Bus, garantindo comunicação confiável entre sistemas.',
    icon: 'plug',
    tags: ['Azure Service Bus', 'REST', 'Event-Driven', 'Microservices'],
  },
  {
    title: 'Bancos de Dados',
    description:
      'Boas práticas de modelagem relacional e não-relacional, otimização de queries e estratégias de performance.',
    icon: 'database',
    tags: ['SQL Server', 'PostgreSQL', 'EF Core', 'Query Optimization'],
  },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  code2: Code2,
  terminal: Terminal,
  container: Container,
  building2: Building2,
  plug: Plug,
  database: Database,
};

export function Skills() {
  return (
    <section id="habilidades" className="py-24 px-4 bg-secondary/30" aria-label="Habilidades">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">O que faço</p>
          <h2 className="text-3xl md:text-4xl font-bold">Principais Competências</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = iconMap[skill.icon];
            return (
              <Card
                key={skill.title}
                className="group hover:border-primary/50 hover:shadow-md transition-all duration-200"
              >
                <CardHeader>
                  <div className="p-2 rounded-md bg-primary/10 text-primary w-fit mb-3">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

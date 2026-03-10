import { GraduationCap, Briefcase, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui';

export function About() {
  return (
    <section id="sobre" className="py-24 px-4" aria-label="Sobre mim">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Quem sou eu</p>
          <h2 className="text-3xl md:text-4xl font-bold">Sobre Mim</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Sou desenvolvedor de software com{' '}
              <span className="text-foreground font-semibold">8 anos de experiência</span>, apaixonado
              por construir soluções robustas e escaláveis que resolvem problemas reais.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Tenho sólida atuação no ecossistema{' '}
              <span className="text-foreground font-semibold">.NET</span> e em projetos que envolvem
              integração de sistemas, automação de processos e arquiteturas escaláveis. Gosto de
              escrever código limpo, bem testado e fácil de manter.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Ao longo da carreira, trabalhei em projetos de médio e grande porte, sempre focado em
              entregar valor com qualidade, performance e boas práticas de engenharia de software.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Formação Acadêmica</h3>
                  <p className="text-sm text-muted-foreground">
                    Bacharelado em Sistemas de Informação
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Universidade Estadual de Minas Gerais (UEMG)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <Briefcase className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Experiência Profissional</h3>
                  <p className="text-sm text-muted-foreground">
                    8 anos de experiência como desenvolvedor de software
                  </p>
                  <p className="text-sm text-primary font-medium">
                    Foco em .NET, ASP.NET, C# e TypeScript
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:border-primary/50 transition-colors">
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Localização</h3>
                  <p className="text-sm text-muted-foreground">Minas Gerais, Brasil</p>
                  <p className="text-sm text-primary font-medium">
                    Disponível para projetos remotos
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

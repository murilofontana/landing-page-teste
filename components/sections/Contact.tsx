import { Mail, Github, Linkedin, MessageSquare } from 'lucide-react';
import { ButtonLink, Card, CardContent } from '@/components/ui';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'fontana.murilo@gmail.com',
    href: 'mailto:fontana.murilo@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/murilofontana',
    href: 'https://github.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/murilofontana',
    href: 'https://linkedin.com',
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-24 px-4 bg-secondary/30" aria-label="Contato">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-2">Vamos conversar</p>
          <h2 className="text-3xl md:text-4xl font-bold">Entre em Contato</h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Estou disponível para novos projetos, colaborações ou apenas uma boa conversa sobre
            tecnologia. Não hesite em entrar em contato!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label}: ${value}`}>
                <Card className="group hover:border-primary/50 hover:shadow-md transition-all duration-200 cursor-pointer">
                  <CardContent className="flex items-center gap-4 py-4">
                    <div className="p-2 rounded-md bg-primary/10 text-primary shrink-0">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-mono">{label}</p>
                      <p className="text-sm font-medium group-hover:text-primary transition-colors">
                        {value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          {/* CTA card */}
          <Card className="flex flex-col justify-center items-center text-center p-8 border-primary/30 bg-primary/5">
            <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
              <MessageSquare className="h-7 w-7" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold mb-2">Pronto para começar?</h3>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Se você tem um projeto em mente ou quer discutir uma oportunidade, me manda um email.
              Responderei o mais rápido possível.
            </p>
            <ButtonLink href="mailto:fontana.murilo@gmail.com" size="lg" className="w-full">
              <Mail className="mr-2 h-4 w-4" aria-hidden="true" />
              Enviar Email
            </ButtonLink>
          </Card>
        </div>
      </div>
    </section>
  );
}

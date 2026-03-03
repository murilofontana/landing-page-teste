import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface BaseButtonProps {
  variant?: 'default' | 'destructive' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

interface ButtonProps extends BaseButtonProps, React.ButtonHTMLAttributes<HTMLButtonElement> {}

function getButtonClasses(variant = 'default', size = 'default', className?: string) {
  return cn(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
    'disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
      'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
      'border border-input bg-background hover:bg-accent': variant === 'outline',
      'hover:bg-accent hover:text-accent-foreground': variant === 'ghost',
    },
    {
      'h-10 px-4 py-2': size === 'default',
      'h-9 px-3': size === 'sm',
      'h-11 px-8': size === 'lg',
    },
    className
  );
}

interface ButtonLinkProps extends BaseButtonProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {}

function ButtonLink({ className, variant = 'default', size = 'default', children, ...props }: ButtonLinkProps) {
  return (
    <a className={getButtonClasses(variant, size, className)} {...props}>
      {children}
    </a>
  );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    return (
      <button
        className={getButtonClasses(variant, size, className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, ButtonLink, type ButtonProps };



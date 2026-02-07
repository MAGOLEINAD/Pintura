import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  className,
  align = 'center',
}) => {
  const alignments = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-12', alignments[align], className)}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg sm:text-xl text-dark-lighter max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

import { useState, type ReactNode } from 'react';
import { ChevronRightIcon } from './Icons.tsx';

interface DisclosureProps {
  title: string;
  icon?: ReactNode;
  badge?: number;
  size?: 'lg' | 'sm';
  defaultOpen?: boolean;
  children: ReactNode;
}

/**
 * Reusable collapsible disclosure section. Can be nested (lg containing sm).
 */
export default function Disclosure({
  title,
  icon,
  badge,
  size = 'lg',
  defaultOpen = false,
  children,
}: DisclosureProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`disclosure disclosure-${size}${open ? ' open' : ''}`}>
      <button type="button" className="disclosure-head" onClick={() => setOpen((o) => !o)}>
        <span className="arrow">
          <ChevronRightIcon size={size === 'sm' ? 11 : 13} />
        </span>
        {icon && <span className="dh-icon">{icon}</span>}
        <span className="dh-title">{title}</span>
        {badge != null && <span className="dh-badge">{badge}</span>}
      </button>
      {open && <div className="disclosure-body">{children}</div>}
    </div>
  );
}

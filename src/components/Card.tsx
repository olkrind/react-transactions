import type { ReactNode } from 'react';

interface CardProps {
    title: string;
    actions?: ReactNode; // аналог именованного слота
    children: ReactNode;
}

export function Card({ title, actions, children }: CardProps) {
    return (
        <section className="card">
            <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>{title}</h2>
                {actions}
            </header>
            {children}
        </section>
    );
}
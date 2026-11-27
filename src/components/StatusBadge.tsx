import type { TransactionStatus } from '../types';

const labels: Record<TransactionStatus, string> = {
    completed: 'Выполнена',
    pending: 'В обработке',
    failed: 'Ошибка',
};

export function StatusBadge({ status }: { status: TransactionStatus }) {
    return <span className={`badge badge--${status}`}>{labels[status]}</span>;
}
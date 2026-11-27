import type { Transaction } from '../types';
import { TransactionRow } from './TransactionRow';

export function TransactionTable({ items }: { items: Transaction[] }) {
    if (items.length === 0) {
        return <p>Операций нет</p>;
    }

    return (
        <table>
            <thead>
            <tr>
                <th>Дата</th>
                <th>Описание</th>
                <th>Сумма</th>
                <th>Статус</th>
            </tr>
            </thead>
            <tbody>
            {items.map((t) => (
                <TransactionRow key={t.id} transaction={t} />
            ))}
            </tbody>
        </table>
    );
}
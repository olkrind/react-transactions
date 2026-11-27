import type { Transaction } from '../types';
import { Amount } from './Amount.tsx';
import { StatusBadge } from './StatusBadge.tsx';

export function TransactionRow({ transaction }: { transaction: Transaction }) {
    return (
        <tr>
            <td>{transaction.date}</td>
            <td>{transaction.description}</td>
            <td><Amount value={transaction.amount}/></td>
            <td><StatusBadge status={transaction.status}/></td>
        </tr>
    );
}
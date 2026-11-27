export type TransactionStatus = 'completed' | 'pending' | 'failed';

export interface Transaction {
    id: number;
    date: string; // ISO 8601: '2026-10-01'
    description: string;
    amount: number; // отрицательная — списание
    status: TransactionStatus;
}
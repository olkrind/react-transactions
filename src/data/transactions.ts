import type { Transaction } from '../types';

export const transactions: Transaction[] = [
    { id: 1, date: '2026-10-01', description: 'Продажа товаров', amount: 125000, status: 'completed' },
    { id: 2, date: '2026-10-02', description: 'Комиссия площадки', amount: -12500, status: 'completed' },
    { id: 3, date: '2026-10-03', description: 'Вывод средств', amount: -100000, status: 'pending' },
    { id: 4, date: '2026-10-05', description: 'Продажа товаров', amount: 48000, status: 'completed' },
    { id: 5, date: '2026-10-06', description: 'Возврат покупателю', amount: -6000, status: 'failed' },
];
import { Card } from './components/Card';
import { TransactionTable } from './components/TransactionTable.tsx';
import { transactions } from './data/transactions';

function App() {
    return (
        <main>
            <h1>История операций</h1>
            <Card title="Операции" actions={<span>{transactions.length} шт.</span>}>
                <TransactionTable items={transactions} />
            </Card>
        </main>
    );
}

export default App

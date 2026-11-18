import { useMemo } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage";
import Summary from "./components/Summary";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export default function App() {
  const [transactions, setTransactions] = useLocalStorage(
    "finance-dashboard:transactions",
    []
  );

  const { income, expense, balance } = useMemo(() => {
    const income = transactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);
    return { income, expense, balance: income - expense };
  }, [transactions]);

  const addTransaction = (data) => {
    const newTransaction = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      ...data,
    };
    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <main className="mx-auto max-w-4xl space-y-6 p-4 sm:p-8">
        <h1 className="text-2xl font-bold sm:text-3xl">
          💰 Dashboard Financeiro
        </h1>

        <Summary balance={balance} income={income} expense={expense} />

        <div className="grid gap-6 md:grid-cols-5">
          <div className="md:col-span-2">
            <TransactionForm onAdd={addTransaction} />
          </div>
          <div className="md:col-span-3">
            <TransactionList
              transactions={transactions}
              onDelete={deleteTransaction}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

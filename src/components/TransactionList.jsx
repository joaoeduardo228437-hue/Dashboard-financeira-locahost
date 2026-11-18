import { formatCurrency, formatDate } from "../utils/format";

export default function TransactionList({ transactions, onDelete }) {
  return (
    <section className="rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Histórico</h2>

      {transactions.length === 0 ? (
        <p className="py-8 text-center text-slate-400">
          Nenhuma transação ainda. Adicione a primeira! 👈
        </p>
      ) : (
        <ul className="divide-y divide-slate-100">
          {transactions.map((t) => {
            const isIncome = t.type === "income";
            return (
              <li
                key={t.id}
                className="flex items-center justify-between gap-3 py-3"
              >
                <div className="min-w-0">
                  <p className="truncate font-medium">{t.description}</p>
                  <p className="text-xs text-slate-500">
                    {t.category} · {formatDate(t.date)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`whitespace-nowrap font-semibold ${
                      isIncome ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {isIncome ? "+" : "−"} {formatCurrency(t.amount)}
                  </span>
                  <button
                    onClick={() => onDelete(t.id)}
                    aria-label={`Apagar ${t.description}`}
                    className="rounded-md px-2 py-1 text-slate-400 transition hover:bg-red-50 hover:text-red-600"
                  >
                    ✕
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

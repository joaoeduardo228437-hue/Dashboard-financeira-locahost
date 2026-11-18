import { formatCurrency } from "../utils/format";

function Card({ label, value, valueClass = "" }) {
  return (
    <div className="rounded-xl bg-white p-5 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <p className={`mt-1 text-2xl font-semibold ${valueClass}`}>
        {formatCurrency(value)}
      </p>
    </div>
  );
}

export default function Summary({ balance, income, expense }) {
  return (
    <section className="grid gap-4 sm:grid-cols-3">
      <Card
        label="Saldo total"
        value={balance}
        valueClass={balance < 0 ? "text-red-600" : "text-slate-800"}
      />
      <Card label="Receitas" value={income} valueClass="text-emerald-600" />
      <Card label="Despesas" value={expense} valueClass="text-red-600" />
    </section>
  );
}

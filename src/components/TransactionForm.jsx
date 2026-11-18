import { useState } from "react";

const CATEGORIES = {
  income: ["Salário", "Freelance", "Investimentos", "Outros"],
  expense: [
    "Alimentação",
    "Moradia",
    "Transporte",
    "Lazer",
    "Saúde",
    "Educação",
    "Outros",
  ],
};

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";

export default function TransactionForm({ onAdd }) {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState(CATEGORIES.expense[0]);
  const [error, setError] = useState("");

  const handleTypeChange = (newType) => {
    setType(newType);
    setCategory(CATEGORIES[newType][0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = parseFloat(String(amount).replace(",", "."));

    if (!description.trim()) return setError("Informe uma descrição.");
    if (!value || value <= 0) return setError("Informe um valor maior que zero.");

    onAdd({ type, amount: value, description: description.trim(), category });
    setAmount("");
    setDescription("");
    setError("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-xl bg-white p-5 shadow-sm"
    >
      <h2 className="text-lg font-semibold">Nova transação</h2>

      <div className="grid grid-cols-2 gap-2">
        {[
          ["income", "Receita", "bg-emerald-600"],
          ["expense", "Despesa", "bg-red-600"],
        ].map(([value, label, activeBg]) => (
          <button
            key={value}
            type="button"
            onClick={() => handleTypeChange(value)}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
              type === value
                ? `${activeBg} text-white`
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-600">Descrição</label>
        <input
          className={inputClass}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder={type === "income" ? "Ex.: Salário" : "Ex.: Supermercado"}
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-600">Valor (R$)</label>
        <input
          className={inputClass}
          type="number"
          step="0.01"
          min="0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0,00"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-slate-600">Categoria</label>
        <select
          className={inputClass}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES[type].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
      >
        Adicionar
      </button>
    </form>
  );
}

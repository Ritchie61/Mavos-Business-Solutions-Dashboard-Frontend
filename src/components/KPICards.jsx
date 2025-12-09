import React from 'react';

export default function KPICards() {
  const kpis = [
    { label: 'Sales Today', value: 'K1,200' },
    { label: 'Stock Alerts', value: '3 items' },
    { label: 'Expenses This Week', value: 'K450' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {kpis.map((kpi) => (
        <div key={kpi.label} className="bg-white p-4 rounded shadow text-center">
          <h4 className="text-sm text-gray-500">{kpi.label}</h4>
          <p className="text-xl font-bold">{kpi.value}</p>
        </div>
      ))}
    </div>
  );
}

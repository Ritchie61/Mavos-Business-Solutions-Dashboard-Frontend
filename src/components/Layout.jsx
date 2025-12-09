import React from 'react';
import ModuleCard from './ModuleCard';
import ChatPanel from './ChatPanel';
import KPICards from './KPICards';

const modules = [
  { name: 'POS', icon: '🛒', actions: ['New Sale', 'View Reports'] },
  { name: 'Inventory', icon: '📦', actions: ['Add Item', 'Stock Audit'] },
  { name: 'Accounting', icon: '📑', actions: ['View Ledger', 'Add Expense'] },
  { name: 'HR/Staff', icon: '👥', actions: ['Add Staff', 'Run Payroll'] },
  { name: 'Reports', icon: '📊', actions: ['View Dashboard', 'Export'] },
];

export default function Layout() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
      <div className="lg:col-span-3 space-y-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modules.map((mod) => (
            <ModuleCard key={mod.name} module={mod} />
          ))}
        </div>
        <KPICards />
      </div>
      <div className="lg:col-span-1">
        <ChatPanel />
      </div>
    </div>
  );
}

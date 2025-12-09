import React from 'react';

export default function ModuleCard({ module }) {
  return (
    <div className="bg-white shadow rounded p-4 text-center hover:shadow-lg transition">
      <div className="text-3xl">{module.icon}</div>
      <h3 className="font-bold mt-2">{module.name}</h3>
      <div className="mt-2 space-y-1">
        {module.actions.map((action) => (
          <button
            key={action}
            className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200"
          >
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}

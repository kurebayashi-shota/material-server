// GlossaryCard.jsx
import React from 'react';

export default function GlossaryCard({ term, definition }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{term}</h2>
      <p className="text-gray-700">{definition}</p>
    </div>
  );
}

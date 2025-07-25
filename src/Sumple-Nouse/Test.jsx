// GlossaryPage.jsx
import React from 'react';
import GlossaryCard from './GlossaryCard';
import { terms } from './terms';

export default function Test() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          用語解説
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {terms.map((item, index) => (
            <GlossaryCard key={index} term={item.term} definition={item.definition} />
          ))}
        </div>
      </div>
    </div>
  );
}

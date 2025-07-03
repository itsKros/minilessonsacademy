import React from 'react';

export default function Home() {
  return (
    <section className="p-8">
      <div className="p-8 space-y-4">
      <h1 className="text-4xl text-lightPurple">This should be Light Purple Text</h1>
      <h2 className="text-4xl text-darkPurple">This should be Dark Purple Text</h2>
      <div className="bg-lightPurple text-white p-4">This should have Light Purple Background</div>
      <div className="bg-darkPurple text-white p-4">This should have Dark Purple Background</div>
    </div>
    </section>
  );
}
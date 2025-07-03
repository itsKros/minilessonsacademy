import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-darkPurple text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} MiniLessons Academy</p>
    </footer>
  );
}
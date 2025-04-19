import React from "react";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Angel Santiago. All rights reserved.
    </footer>
  );
}
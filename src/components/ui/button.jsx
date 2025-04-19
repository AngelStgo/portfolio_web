import React from "react";

export function Button({ children, className, variant = "solid", ...props }) {
  const baseStyle =
    "font-medium rounded-md px-4 py-2 transition-all duration-200";
  const styles = {
    solid: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
  };

  return (
    <button className={`${baseStyle} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

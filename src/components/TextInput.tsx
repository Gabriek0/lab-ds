import { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded w-full bg-gray-800   focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent outline-none flex-1 text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
};

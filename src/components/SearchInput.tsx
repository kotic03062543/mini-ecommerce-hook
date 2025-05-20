import type { ChangeEvent } from "react";
import { debounce } from "lodash";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

function SearchInput({ value, onChange, placeholder }: SearchInputProps) {
  return (
    <div className="max-w-lg">
      <div className="relative">
        <div className="w-10 absolute inset-y-0 start-0 flex justify-center items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          required
          type="search"
          id="default-search"
          className="w-[300px] p-4 ps-13 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder={placeholder || "Search input ..."}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SearchInput;

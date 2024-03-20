import React, { useReducer } from "react"

export const CountButton = () => {
  const [count, increase] = useReducer((c) => c + 1, 0)

  return (
    <button
      onClick={() => increase()}
      type="button"
      className="flex flex-row items-center px-4 py-2 text-sm transition-all border-none rounded-lg shadow-lg shadow-gray-1 hover:shadow-md text-gray-12 bg-gray-2 hover:bg-gray-3 active:bg-gray-4 disabled:bg-gray-1 disabled:text-gray-11 active:scale-105">
      Count:
      <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold rounded-full text-gray-12 bg-gray-9 hover:bg-gray-10">
        {count}
      </span>
    </button>
  )
}

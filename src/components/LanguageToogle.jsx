// import { useState } from "react"
import { useLangStore } from "@/store/langStore"

export function LanguageToogle ({ lang }) {
  // const [isEnglish, setIsEnglish] = useState(false)
  const { isEnglish, setIsEnglish } = useLangStore(state => state)

  const handleCheckboxChange = (event) => {
    setIsEnglish(event.target.checked)
  }

  return (
    <label className="inline-flex items-center mt-4 mb-5 cursor-pointer relative">
      <input 
        tabIndex="0" 
        type="checkbox"
        className="sr-only peer" 
        checked={isEnglish}
        onChange={handleCheckboxChange}
      />
      <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-zinc-200">
        {isEnglish? 'English': 'Español'}
      </span>
    </label>
  )
}

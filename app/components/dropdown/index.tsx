import * as I from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface DropdownProps {
  options: string[]
  selectedOption: string
  onOptionSelect: (option: string) => void
  placeholder?: string
  disabled?: boolean
  filterKey?: string
}

export default function Dropdown({
  options,
  selectedOption,
  onOptionSelect,
  placeholder = 'Selecione...',
  disabled = false,
}: DropdownProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleOptionClick = (option: string) => {
    onOptionSelect(option)
    setIsOpen(false)
  }

  return (
    <div ref={dropdownRef} className="w-full relative">
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`flex items-center justify-between w-full h-10 min-w-60 py-2 px-5 text-sm lg:text-base bg-ui-colors-background border border-grey-scale-onyx rounded-sm select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-heart-500 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        <span className="truncate flex-1 items-start justify-start text-start text-grey-scale-off-white">{selectedOption || placeholder}</span>
        <I.ChevronDown
          className={`size-7.5 transition-transform duration-200 text-grey-scale-off-white ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      {isOpen && (
        <div className="bg-ui-colors-background absolute top-12 z-20 w-full min-w-60 shadow-md border border-grey-scale-onyx">
          <ul className="flex flex-col max-h-48 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`flex items-start justify-start py-2 px-3 rounded-md cursor-pointer hover:bg-purple-heart-700/10 hover:text-grey-scale-text ${selectedOption === option ? 'bg-purple-heart-700/10 text-grey-scale-text' : 'text-grey-scale-text/40'}`}
              >
                {option}

              </li>
            ))}
            {options.length === 0 && (
              <li className="py-2 px-3 text-sm text-grey-scale-dim-gray text-center">
                Nenhuma opção disponível
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  )
}
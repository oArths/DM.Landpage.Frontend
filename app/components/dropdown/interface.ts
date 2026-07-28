export interface DropdownProps {
  options: string[]
  selectedOption: string
  onOptionSelect: (option: string) => void
  placeholder?: string
  disabled?: boolean
  filterKey?: string
}
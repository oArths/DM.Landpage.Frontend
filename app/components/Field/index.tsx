interface FieldProps {
  label: string;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  textarea?: boolean;
  rows?: number;
  className?: string;
}

const controlClasses =
  "w-full py-2 px-5 font-DMSans text-base bg-transparent border border-grey-scale-onyx rounded-sm text-grey-scale-off-white placeholder:text-grey-scale-dim-gray focus:outline-none focus:border-purple-heart-500";

export default function Field({
  label,
  id,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  textarea = false,
  rows,
  className = "",
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="font-Inter text-grey-scale-off-white text-lg font-normal mb-2 block"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          rows={rows}
          placeholder={placeholder}
          className={`${controlClasses} h-[280px] pb-10 resize-none`}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={controlClasses}
        />
      )}
    </div>
  );
}

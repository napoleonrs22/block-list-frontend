import clsx from "clsx";
import {
  PropsWithoutRef,
  SelectHTMLAttributes,
  useId,
} from "react";

export type UiSelectFieldOption = {
  value: string;
  label: string;
};

export type UiSelectFieldProps = {
  className?: string;
  label?: string;
  error?: string;
  selectProps?: PropsWithoutRef<SelectHTMLAttributes<HTMLSelectElement>>;
  options?: UiSelectFieldOption[];
  placeholder?:string;
};

export function UiSelectField({
  className,
  error,
  label,
  placeholder,
  selectProps,
  options = [],
}: UiSelectFieldProps) {
  const id = useId();

  return (
    <div className={clsx(className, "flex flex-col gap-1")}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <select
        {...selectProps}
        id={id}
        className={clsx(
          "rounded border border-slate-300 px-2 h-10 outline-none focus:border-teal-600",
          selectProps?.className
        )}
      >
        {placeholder && (
          <option value="" disabled selected hidden>
            {placeholder}
          </option>
        )}
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <div className="text-sm text-rose-500">{error}</div>
      )}
    </div>
  );
}


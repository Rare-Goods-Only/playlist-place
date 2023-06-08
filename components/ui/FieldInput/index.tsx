import { type } from "os";
import styles from "./fieldInput.module.css";

interface FieldInputI {
  value: string;
  name: string;
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function FieldInput({
  value,
  name,
  type = "text",
  placeholder,
  onChange,
}: FieldInputI) {
  return (
    <div className={styles.wrapper}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={placeholder}
      />
    </div>
  );
}

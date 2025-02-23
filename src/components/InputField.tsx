interface InputProps {
    label: string;
    type: string;
    name: string;
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }
  
  const InputField: React.FC<InputProps> = ({
    label,
    type,
    name,
    placeholder,
    value,
    onChange,
  }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-medium">{label}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    );
  };
  
  export default InputField;
  
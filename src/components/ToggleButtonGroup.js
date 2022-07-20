const ToggleButtonGroup = ({ data, value, onChange }) => {
  return (
    <div className="my-2">
      {data.map((option, idx) => (
        <button
          type="button"
          key={option.value}
          onClick={() => onChange(option.value)}
          style={{ minWidth: "6.5rem" }}
          className={`
            rounded
            py-2 px-4
            ${idx === data.length ? "" : "mr-2"}
            ${
              option.disabled
                ? "line-through opacity-75 bg-gray-300 text-gray-700 cursor-not-allowed"
                : `border border-blue-400 ${
                    option.value === value
                      ? "bg-blue-400 text-white"
                      : "text-blue-400"
                  }`
            }
          `}
          disabled={option.disabled}
        >
          {option.value}
        </button>
      ))}
    </div>
  );
};
export default ToggleButtonGroup;

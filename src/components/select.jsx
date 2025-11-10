export default function Select({ options, onChange, name }) {
   return (
      <select
         name={name}
         onChange={onChange}
         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white appearance-none"
      >
         {options.map((option) => (
            <option key={option.value} value={option.value}>{option.value}</option>
         ))}
      </select>
   )
}
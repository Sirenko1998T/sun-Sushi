export default function Input({ placeholder, type, value, name, onChange }) {
   return (<>
      <input
         type={type}
         placeholder={placeholder}
         value={value}
         name={name}
         onChange={onChange}
         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2  focus:border-transparent transition-all duration-200 placeholder-gray-400"
      />

   </>);
}
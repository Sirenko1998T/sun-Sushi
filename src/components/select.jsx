export default function Select({ options, onChange, name }) {
   return (
      <select name={name} id="" onChange={onChange}>
         {options.map((option) => (
            <option key={option.value} value={option.value}>{option.value}</option>
         ))}
      </select>
   )
}
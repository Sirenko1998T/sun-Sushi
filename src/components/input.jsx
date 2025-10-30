export default function Input({ placeholder, type, value, name }) {
   return (<>
      <input type={type} placeholder={placeholder} value={value} name={name} />

   </>);
}
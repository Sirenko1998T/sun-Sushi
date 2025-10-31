

export default function BurgerLink({ item }) {
   return (
      <nav>
         {item.map((link, index) => (
            <li key={index}>{link}</li>
         ))}
      </nav>
   )
}
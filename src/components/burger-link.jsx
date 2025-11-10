import { Link } from 'react-router-dom';

export default function BurgerLink({ items }) {
   return (
      <nav className="w-full">
         <ul className="flex flex-col space-y-3 w-full">
            {items.map((item, index) => (
               <li
                  key={index}
                  className="w-full text-gray-700 hover:text-blue-600 hover:bg-gray-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium cursor-pointer border-b border-gray-100 last:border-b-0"
               >
                  {item.external ? (
                     <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full"
                     >
                        {item.label}
                     </a>
                  ) : (
                     <Link to={item.path} className="block w-full h-full">
                        {item.label}
                     </Link>
                  )}
               </li>
            ))}
         </ul>
      </nav>
   )
}
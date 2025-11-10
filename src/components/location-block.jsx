import { lib } from "nunjucks";

export default function LocationBlock({ title, desc = [], button }) {
   return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
         <h2 className="text-xl font-bold text-gray-800 mb-4">{title}</h2>
         <ul className="space-y-2 mb-6">{desc.map((i, index) => (<li key={index} className="text-gray-600">{i}</li>))}</ul>
         {button}
      </div>
   )
}
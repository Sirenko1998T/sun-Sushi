export default function Textarea({ placeholder }) {
   return (<>
      <textarea
         placeholder={placeholder}
         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 min-h-32 resize-y"
      ></textarea>
   </>);

}
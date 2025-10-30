import { lib } from "nunjucks";

export default function LocationBlock({ title, desc = [], button }) {
   return (
      <div>
         <h2>{title}</h2>
         <ul>{desc.map((i) => (<li>{i}</li>))}</ul>
         {button}
      </div>
   )
}
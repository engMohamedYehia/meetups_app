import calsses from './Card.module.css'
function Card(propes) {
  return <div className={calsses.card}>
   {propes.children}
  </div>;
}

export default Card;

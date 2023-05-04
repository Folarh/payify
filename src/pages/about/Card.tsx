interface CardProps{
    image: string;
}
export default function Card({image}:CardProps) {
  return (
    <div className='card'>
       <img src={image}/>
    </div>
  )
}

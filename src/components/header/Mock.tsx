import first from "../../assets/first.webp"
import second from "../../assets/second.webp"
import third from "../../assets/third.webp"
const Mock = () => {
  return (
    <main className="mock">
        <img src={first} className="none" />
        <img src={second} className="special"/>
        <img src={third} className="none"/>
    </main>
  )
}

export default Mock



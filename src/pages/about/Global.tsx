// image imports
import MoniePoint from "../../assets/moniepoint.png"
import TechStars from "../../assets/techstars.png"
import DfsLab from "../../assets/dfs.png"
import Ethos from "../../assets/ethos.png"
import MicroTraction from "../../assets/microtraction.png"
import GreenCap from "../../assets/greencap.png"
import MagicFunds from "../../assets/magicfund.svg"
import Voitron from "../../assets/voltron.svg"
import Ingressive from "../../assets/ingressive.png"
import Vee from "../../assets/vpp.png"
import HealthCarrier from "../../assets/helicarrier..svg"
import Ek from "../../assets/eclogo.png"
import LoftyInc from "../../assets/loftyinc.png"
import Acuity from "../../assets/acuityventures.svg"
import Syndicate from "../../assets/syndicate.png"
import Hoaq from "../../assets/hoaq.webp"


// component import
import Card from "./Card"
export default function Global() {
  return (
    <div className="global">
        <h1>Global Investors</h1>

        <div className="investors">
            <div className="investors-grid">
            <Card image={MoniePoint} />
            <Card image={TechStars} />
            <Card image={DfsLab} />
            <Card image={Ethos} />
            </div>

            <div className="investors-grid">
            <Card image={MicroTraction} />
            <Card image={GreenCap} />
            <Card image={MagicFunds} />
            <Card image={Voitron} />
            </div>

            <div className="investors-grid">
            <Card image={Ingressive} />
            <Card image={Vee} />
            <Card image={HealthCarrier} />
            <Card image={Ek} />
            </div>

            <div className="investors-grid">
            <Card image={LoftyInc} />
            <Card image={Acuity} />
            <Card image={Syndicate} />
            <Card image={Hoaq} />
            </div>
           
           
            


           
        </div>
      
    </div>
  )
}

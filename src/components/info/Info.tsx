import First from "../../assets/first-img.webp"
import Second from "../../assets/second img.webp"
import Third from "../../assets/third-image.webp"
import Fourth from "../../assets/fourth-image.webp"

//styles
import "./Info.css"
export default function Info() {
  return (
    <div className="info">
      <div className="info-first">
        <div className="info-images">
            <img src={First}/>
        </div>
        <div className="info-text">
            <h2>Transact with ease</h2>
            <p>with payify, Send and Receive Fund through PayPal from your loved ones abroad and more in one space</p>
        </div>
      </div>

       {/* first information page ends here */}

       <div className="info-first">
       <div className="info-text">
            <h2>Spread Love with your Pally</h2>
            <p>Send money through PayPal to your pally in Nigeria with payify.</p>
        </div>
        <div className="info-images">
            <img src={Second}/>
        </div>
        
      </div>
       {/* first information page ends here */}
       <div className="info-first">
        <div className="info-images">
            <img src={Third}/>
        </div>
        <div className="info-text">
            <h2>Withdraw and fund your wallet with ease, all in naira</h2>
            <p>with payify, Send and Receive Fund through Payify from your loved ones abroad and more in one space</p>
        </div>
      </div>

      {/* fourth information */}

      <div className="info-first">
       <div className="info-text">
            <h2>Pay your utility bills on the go!</h2>
            <p>Top up airtime/Data, pay or Renew your electricity and cable bills with ease.</p>
        </div>
        <div className="info-images">
            <img src={Fourth}/>
        </div>
        
      </div>
     
    </div>
  )
}

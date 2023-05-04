//material icons
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function Experience() {
  return (
    <div className='experience'>
        <div className="experience-left">
        <h3>BUILT BY</h3>
      <h1>An Experienced Team</h1>
      <p>We are a resourceful team with a proven track record of building successful consumer and enterprise products used by millions of customers.</p>
        </div>

        <div className="experience-right">
            <h3>COMBINED EXPERIENCE ACROSS</h3>
            <div className="btn">
                <button>Revoult</button>
                <button>KPMG</button>
                <button>Donut</button>
                <button>Access Bank</button>
            </div>
            <div className="btn">
                <button>indeed</button>
                <button>BAU</button>
                <button>Jobberman</button>
                <button>VGG</button>
            </div>
            <div className="contact">
                <LockOutlinedIcon/>
            <span className='contact-btn'>Contact them</span>
            </div>
           
        </div>
      

    </div>
  )
}

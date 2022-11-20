import phone from '../phone.png'
import fb from '../fb.png'
import brgyLogo from '../brgyLogo.png'

function About() {
    return (
        <div className="aboutContainer">
            <div className='aboutMain'>
                <img src={brgyLogo} alt="talairon" />
                <h1>Talairon is a barangay in Oroquieta City</h1>
                <h2>Carlito Quilantang Selim</h2>
                <span>Punong Barangay</span>
            </div>
            <div className="aboutFooter">
                <div className="contactItem">
                    <img src={ phone } alt="" />
                </div>
                <a target="_blank" href='https://www.facebook.com/sktalairon?_rdc=1&_rdr' rel="noreferrer">
                    <div className="contactItem">
                        <img src={ fb } alt="" />
                    </div>
                </a>
            </div>
        </div>
    )
}

export default About;
import Image from 'next/image'
import Logo from '../src/img/LogoBlue2.png'
import Chevron from '../src/img/down-chevron.png'

const Header = () => {

    const handleImageClick = () => {
        document.querySelector(".aboutMe").scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className="homepageHeader">
            <div className="overlay">
                <div className="welcomeInfo container">
                    <Image
                        src={Logo}
                        alt="Blue Kevin Allen Logo"
                        className="headerLogo"
                        loading="eager"
                    />
                    <h2 className="welcomeTitle">Kevin allen</h2>       
                    <hr />
                    <p>Chicagoland Web Developer</p>
                </div>
            </div>
            <div className="downChevron" onClick={handleImageClick}>
                <Image 
                    src={Chevron}
                    width="20px"
                    height="11.72px"
                    alt="White down chevron"
                    loading="eager"
                />
            </div>
    
        </header>
    )
}

export default Header

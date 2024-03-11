import Image from 'next/image'
import greyLogo from '../src/img/logo-footer2.webp'
import Link from 'next/link'

const Footer = () => {

    let year = new Date().getFullYear();

    return (
        <footer>
            <div className="container">
                <Image 
                    src={greyLogo}
                    width="53.72px"
                    height="60px"
                    alt="Grey Kevin Allen Logo" 
                    className="footerLogo"  
                    loading="eager"             
                />
                <div className="quickNav">
                    <Link href="/">
                        Home
                    </Link>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kevinallen3/">
                        LinkedIn
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/KevinAllen4325">
                        Github
                    </a>
                </div>
                <p className="copyright">
                © {year}. All Rights Reserved Kevinallen.io
                </p>
            </div>
        </footer>
    )
}

export default Footer

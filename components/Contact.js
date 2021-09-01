import City from '../src/img/cityOutline.png'
import Image from 'next/image'

const Contact = () => {


    return (
        <div id="contact-me" className="contactForm homepageSection">
            <div className="container">
                <h2>Let&apos;s Work Together</h2>
                <hr />
                <form action="post" className="contact">
                    <div className="formLeft">
                        <input type="text" placeholder="Name" name="fromName" required/>
                        <input type="email" placeholder="Email" name="fromEmail" required />
                        <input type="text" name="companyName" placeholder="Company" />
                    </div>
                    <div className="formRight">
                        <input type="text" name="fromPhone" placeholder="Phone"/>
                        <input type="text" placeholder="How Did You Hear About Me?" name="referral"/>
                    </div>
                    <textarea name="messageContent" placeholder="Additional Information"></textarea>
                    <button>SEND</button>
                </form>
            </div>
            <div className="cityOutline">
                <Image 
                    src={City}
                    alt="City outline graphic"
                />
            </div>
        </div>
    )
}

export default Contact
import City from '../src/img/cityOutline.webp'
import Image from 'next/image'
import { useState } from 'react'

const Contact = () => {



    return (
        <div id="contact-me" className="contactForm homepageSection">
            <div className="container">
                <h2>Let&apos;s Work Together</h2>
                <hr />
                <form
                    method="POST" className="contact"
                    action="/thank-you"
                    name="contactForm"
                    data-netlify="true"
                    netlify-honeypot="companyName">
                    <input type="hidden" name="contactForm" value="contactForm" />

                    <div className="formLeft">
                        <input type="text" placeholder="Name" name="fromName" required />
                        <input type="email" placeholder="Email" name="fromEmail" required />
                        <input type="text" name="companyName" placeholder="Company" />
                    </div>
                    <div className="formRight">
                        <input type="text" name="fromPhone" placeholder="Phone" />
                        <input type="text" placeholder="How Did You Hear About Me?" name="referral" />
                    </div>
                    <textarea name="messageContent" placeholder="Additional Information"></textarea>
                    <button type="submit">SEND</button>
                </form>
            </div>
            <div className="cityOutline">
                <Image
                    src={City}
                    alt="City outline graphic"
                    loading="eager"
                    width="auto"
                    height="auto"
                />
            </div>
        </div>
    )
}

export default Contact

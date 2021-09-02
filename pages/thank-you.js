import Link from 'next/link'

const thankYou = () => {
    return (
        <div className="thankYouPage">
            <div className="container">
                <h1>Success</h1>
                <h2>Your form was submitted. Go <Link href="/">Home</Link>?</h2>
            </div>
        </div>
    )
}

export default thankYou

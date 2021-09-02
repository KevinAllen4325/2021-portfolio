import Link from 'next/link'

const Custom404 = () => {
    return (
        <div className="customErrorPage">
            <div className="container">
                <h1>404</h1>
                <h2>THIS PAGE COULD NOT BE FOUND. Go <Link href="/">Home</Link>?</h2>
            </div>
        </div>
    )
}

export default Custom404

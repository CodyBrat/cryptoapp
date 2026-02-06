import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <Image src="/assets/logo.svg" alt="Logo" width={130} height={40} />
                </Link>
            </div>
        </header>
    )
}

export default Header
import navbar from './navbar.module.css'
import Link from 'next/link'

export default function Navbar() {
    return (
        <>
        <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <div className={navbar.hidenav}>
                <div className={navbar.col-3}>
                    <div className={navbar.content}>
                        <ul className={navbar.navbarlist}>
                            <Link href="/mkashi"><img className={navbar.logoimg} src="/logo.svg" alt= "mkashima logo" width="130px" /></Link>
                            <li className={navbar.logoitem}>
                                mkashima
                            </li>
                            <br></br>
                            <br></br>
                            <li className={navbar.navbaritem}><Link href="/mkashi"><a>/ HOME</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/mkashi/pixel"><a>/ PIXELART</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/mkashi/gamedesign"><a>/ GAMEDESIGN</a></Link></li>
                            <br></br>
                            <li className={navbar.navbaritem}><Link href="/mkashi/photography"><a>/ PHOTOGRAPHY</a></Link></li>
                            <br></br>
                            <br></br>
                        </ul>        
                    </div>  
                </div>
            </div>  
        </>
    )
}

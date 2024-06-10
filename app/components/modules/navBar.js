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
                            <Link href="/"><img className={navbar.logoimg} src="/logo.svg" alt= "mkashima logo" width="130px" /></Link>
                            <li className={navbar.logoitem}>
                                mkashima
                            </li>
                            <li className={navbar.logoitem}>
                                portfolio
                            </li>
                            <br></br>
                            <br></br>
                            <li className={navbar.navbaritem}><Link href="/fotografia"><a>/ FOTOGRAFIA</a></Link></li>
                            <br></br>
                            <br></br>
                        </ul>        
                    </div>  
                </div>
            </div>  
        </>
    )
}

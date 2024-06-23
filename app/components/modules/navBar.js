import navbar from './navbar.module.css'
import Link from 'next/link'
import { useRouter} from 'next/router';


export default function Navbar() {
    const { pathname } = useRouter();
    const isInPixelArt = pathname.includes("/mkashi/pixelart");
    const isInPixelArtMaps = pathname.includes("/mkashi/pixelart/maps");
    const isInGamedesign = pathname.includes("/mkashi/gamedesign");
    const isInCommunity = pathname.includes("/mkashi/community");
    return (
        <>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <div className={navbar.hidenav}>
                <div className={navbar.col-3}>
                    <div className={navbar.content}>
                        <ul className={navbar.navbarlist}>
                            <Link href="/mkashi"><img className={navbar.logoimg} src="/logo.svg" alt= "logo" width="130px" /></Link>
                            <li className={navbar.logoitem}>mkashi</li>
                            <br/>
                            <br/>
                            <li className={navbar.navbaritem}><Link href="/mkashi"><a>/ HOME</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/mkashi/pixelart"><a>/ PIXELART</a></Link></li>
                            <li className={isInPixelArt === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/items"><a>. / ITEMS</a></Link></li>
                            <li className={isInPixelArt === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/outfits"><a>. / OUTFITS</a></Link></li>
                            <li className={isInPixelArt === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/backpacks"><a>. / BACKPACKS</a></Link></li>
                            <li className={isInPixelArt === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/maps"><a>. / MAPS</a></Link></li>
                            <li className={isInPixelArtMaps === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/maps/cities"><a>. / . / CITIES</a></Link></li>
                            <li className={isInPixelArtMaps === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/pixelart/maps/hunts"><a>. / . / HUNTS</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/mkashi/gamedesign"><a>/ GAMEDESIGN</a></Link></li>
                            <li className={isInGamedesign === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/gamedesign/quests"><a>. / QUESTS</a></Link></li>
                            <li className={isInGamedesign === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/gamedesign/events"><a>. / EVENTS</a></Link></li>
                            <li className={navbar.navbaritem}><Link href="/mkashi/community"><a>/ COMMUNITY</a></Link></li>
                            <li className={isInCommunity === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/community/events"><a>. / EVENTS</a></Link></li>
                            <li className={isInCommunity === true ? navbar.navbaritem : navbar.hidenavbaritem}><Link href="/mkashi/community/feedback"><a>. / FEEDBACK</a></Link></li>
                            <br/>
                            <li className={navbar.navbaritem}><Link href="/mkashi/photography"><a>/ PHOTOGRAPHY</a></Link></li>
                            <br/>
                            <br/>
                        </ul>        
                    </div>  
                </div>
            </div>
        </>
    )
}

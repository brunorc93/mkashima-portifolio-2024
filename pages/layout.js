import { useState } from "react";
import { useRouter} from 'next/router';
import Head from 'next/head'
import Footer from '../app/components/modules/footer'
import Navbar from '../app/components/modules/navBar'
import layout from './layout.module.css'
import Link from "next/link";

export default function Layout({children}) {

    const [isOpen,setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    const { pathname } = useRouter();
    const isInPixelArt = pathname.includes("/mkashi/pixelart");
    const isInPixelArtMaps = pathname.includes("/mkashi/pixelart/maps");
    const isInCommunity = pathname.includes("/mkashi/community");

    return (
        <>
            <Head>
                <title>mkashi portfolio</title>
                <link rel="favicon" href="public/favicon.ico" />
                <link rel="preload" href="/fonts/goudosi.otf" as="font" crossOrigin="" />
            </Head>
            <header>
                <Navbar className={isOpen === false ? layout.nav : layout.nav + ' ' + layout.active} />

                {/* the contents below apply only on mobile */}
                <button className={isOpen === false ? layout.mobile + ' ' + layout.hamburger : layout.mobile + ' ' + layout.hamburger + ' ' + layout.active} onClick={openMenu}>
                    <span className={layout.bar}></span>
                    <span className={layout.bar}></span>
                    <span className={layout.bar}></span>
                </button>
                <ul className={isOpen === false ? layout.mobile + ' ' + layout.navmob : layout.mobile + ' ' + layout.navmob + ' ' + layout.active} onClick={openMenu}>
                    <li className={layout.navmobitem}><Link href="/mkashi"><a>/ HOME</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/mkashi/pixelart"><a>/ PIXELART</a></Link></li>
                    <li className={isInPixelArt === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/items"><a>. / ITEMS</a></Link></li>
                    <li className={isInPixelArt === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/outfits"><a>. / OUTFITS</a></Link></li>
                    <li className={isInPixelArt === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/backpacks"><a>. / BACKPACKS</a></Link></li>
                    <li className={isInPixelArt === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/maps"><a>. / MAPS</a></Link></li>
                    <li className={isInPixelArtMaps === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/maps/cities"><a>. / . / CITIES</a></Link></li>
                    <li className={isInPixelArtMaps === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/pixelart/maps/hunts"><a>. / . / HUNTS</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/mkashi/gamedesign"><a>/ GAMEDESIGN</a></Link></li>
                    <li className={layout.navmobitem}><Link href="/mkashi/community"><a>/ COMMUNITY</a></Link></li>
                    <li className={isInCommunity === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/community/events"><a>. / EVENTS</a></Link></li>
                    <li className={isInCommunity === true ? layout.navmobitem : layout.hidenavmobitem}><Link href="/mkashi/community/feedback"><a>. / FEEDBACK</a></Link></li>
                    <br/>
                    <li className={layout.navmobitem}><Link href="/mkashi/photography"><a>/ PHOTOGRAPHY</a></Link></li>
                </ul>
                {/* the contents above apply only on mobile */}
            </header>
            <section className={layout.main}>
                {children}
            </section>
            <footer>
                <Footer className={layout.foot} />
            </footer>
            
        </>
    )
}
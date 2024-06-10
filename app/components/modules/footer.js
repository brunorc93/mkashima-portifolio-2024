import footer from './footer.module.css'

export default function Footer() {
    return (
        <div className={footer.responsive}>
            <div className={footer.content}>
                <div className={footer.row}>
                    <div className={footer.column}>
                        <ul className={footer.footerlist}>
                            <li className={footer.footeritem}>M. KASHI</li>
                        </ul>
                    </div>
                    <div className={footer.column}>
                        <ul className={footer.footerlist}>  
                            <li className={footer.footeritem}>discord: mkashima #2118</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
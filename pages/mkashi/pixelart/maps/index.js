import maps from './maps.module.css'
import index from './../../index.module.css'
import Layout from '../../../layout'

// Images

import { cities1, cities8 } from './cities/index.js'
import { hunts1, hunts2 } from './hunts/index.js'

function Pixelart() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / where am I? </h6>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/maps/cities">CITIES <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={cities1} width="100%" alt="pixelart city map image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={cities8} width="100%" alt="pixelart city map image" />
                </div>
            </div>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/maps/hunts">HUNTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={hunts1} width="100%" alt="pixelart hunts map image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={hunts2} width="100%" alt="pixelart hunts map image" />
                </div>
            </div>
        </section>
    )
}

export default Pixelart

Pixelart.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
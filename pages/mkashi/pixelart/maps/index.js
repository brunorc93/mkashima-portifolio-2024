import maps from './maps.module.css'
import index from './../index.module.css'
import Layout from '../../../layout'

// Images

// import from pages below
import { cities1, cities8, cities21 } from './cities/index.js'
import { hunts1, hunts2, hunts3 } from './hunts/index.js'

function Pixelart() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / where am I? </h6>
            <h1><a className={index.links} href="/mkashi/pixelart/maps/cities">CITIES <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={maps.row}>
                <div className={maps.column}>
                    <img className={maps.photo} src={cities1} width="100%" alt="pixelart city map image" />
                </div>
                <div className={maps.column}>
                    <img className={maps.photo} src={cities8} width="100%" alt="pixelart city map image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/pixelart/maps/hunts">HUNTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={maps.row}>
                <div className={maps.column}>
                    <img className={maps.photo} src={hunts1} width="100%" alt="pixelart hunts map image" />
                </div>
                <div className={maps.column}>
                    <img className={maps.photo} src={hunts2} width="100%" alt="pixelart hunts map image" />
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
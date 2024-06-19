import maps from './../maps.module.css'
import Layout from '../../../../layout'

// Images

export const cities1 = '/img/pixelart/maps/cities/bravos-1.png'
export const cities2 = '/img/pixelart/maps/cities/bravos-2.png'
export const cities3 = '/img/pixelart/maps/cities/bravos-3.png'
export const cities4 = '/img/pixelart/maps/cities/bravos-5.png'
export const cities5 = '/img/pixelart/maps/cities/bravos-6.png'
export const cities6 = '/img/pixelart/maps/cities/mecanique-1.png'
export const cities7 = '/img/pixelart/maps/cities/mecanique-2.png'
export const cities8 = '/img/pixelart/maps/cities/mecanique-3.png'
export const cities9 = '/img/pixelart/maps/cities/mecanique-4.png'
export const cities10 = '/img/pixelart/maps/cities/mecanique-5.png'
export const cities11 = '/img/pixelart/maps/cities/mecanique-6.png'
export const cities12 = '/img/pixelart/maps/cities/netulco-1.png'
export const cities13 = '/img/pixelart/maps/cities/netulco-2.png'
export const cities14 = '/img/pixelart/maps/cities/netulco-3.png'
export const cities15 = '/img/pixelart/maps/cities/netulco-4.png'
export const cities16 = '/img/pixelart/maps/cities/netulco-5.png'
export const cities17 = '/img/pixelart/maps/cities/oakgrove-1.png'
export const cities18 = '/img/pixelart/maps/cities/oakgrove-2.png'
export const cities19 = '/img/pixelart/maps/cities/oakgrove-3.png'
export const cities20 = '/img/pixelart/maps/cities/oakgrove-4.png'
export const cities21 = '/img/pixelart/maps/cities/oakgrove-5.png'
export const cities22 = '/img/pixelart/maps/cities/oakgrove-6.png'

function Cities() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / cities</h6>
            <h1>CITIES</h1>
            <div className={maps.row}>
                <div className={maps.column}>
                    <img className={maps.photo} src={cities1} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities2} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities3} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities4} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities5} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities6} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities7} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities8} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities9} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities10} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities11} width="100%" alt="pixelart city map image" />
                </div>
                <div className={maps.column}>
                    <img className={maps.photo} src={cities12} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities13} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities14} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities15} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities16} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities17} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities18} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities19} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities20} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities21} width="100%" alt="pixelart city map image" />
                    <img className={maps.photo} src={cities22} width="100%" alt="pixelart city map image" />
                </div>
            </div>
        </section>
    )
}

export default Cities

Cities.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
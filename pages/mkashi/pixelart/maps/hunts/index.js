import index from './../../../index.module.css'
import Layout from '../../../../layout'

// Images

export const hunts1 = '/img/pixelart/maps/hunts/Arcane-Djinn.png'
export const hunts2 = '/img/pixelart/maps/hunts/Arch-Nemesis.png'
export const hunts3 = '/img/pixelart/maps/hunts/Bibliosage.png'
export const hunts4 = '/img/pixelart/maps/hunts/Bongshroom.png'
export const hunts5 = '/img/pixelart/maps/hunts/Necro-King.png'
export const hunts6 = '/img/pixelart/maps/hunts/Paranoid-Android.png'
export const hunts7 = '/img/pixelart/maps/hunts/Sea-Viper.png'
export const hunts8 = '/img/pixelart/maps/hunts/Sky-Viper.png'
export const hunts9 = '/img/pixelart/maps/hunts/Terrible-Mantis.png'
export const hunts10 = '/img/pixelart/maps/hunts/Toxic-Titan.png'
export const hunts11 = '/img/pixelart/maps/hunts/Vapor.png'
export const hunts12 = '/img/pixelart/maps/hunts/Wild-Thing.png'

function Hunts() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / hunts</h6>
            <h1 className={index.h1}>HUNTS</h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={hunts1} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts2} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts3} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts4} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts5} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts6} width="100%" alt="pixelart hunt map image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={hunts7} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts8} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts9} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts10} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts11} width="100%" alt="pixelart hunt map image" />
                    <img className={index.photo_page} src={hunts12} width="100%" alt="pixelart hunt map image" />
                </div>
            </div>
        </section>
    )
}

export default Hunts

Hunts.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
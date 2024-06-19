import outfits from './outfits.module.css'
import Layout from '../../../layout'

// Images

export const outfits1 = '/img/pixelart/outfits/1anniversary-female-3.gif'
export const outfits2 = '/img/pixelart/outfits/1anniversary-male-2.gif'
export const outfits3 = '/img/pixelart/outfits/cyberpunk-female-addons.gif'
export const outfits4 = '/img/pixelart/outfits/cyberpunk-male-addons.gif'
export const outfits5 = '/img/pixelart/outfits/kedavra-blue-female-tia.gif'
export const outfits6 = '/img/pixelart/outfits/kedavra-blue-male-tia.gif'
export const outfits7 = '/img/pixelart/outfits/kedavra-red-female-tia.gif'
export const outfits8 = '/img/pixelart/outfits/kedavra-red-male-tia.gif'
export const outfits9 = '/img/pixelart/outfits/madmax-female-addon.gif'
export const outfits10 = '/img/pixelart/outfits/madmax-male-addon.gif'
export const outfits11 = '/img/pixelart/outfits/rivendell-female.gif'
export const outfits12 = '/img/pixelart/outfits/rivendell-male-ste.gif'
export const outfits13 = '/img/pixelart/outfits/valyrian-female-axe.gif'
export const outfits14 = '/img/pixelart/outfits/valyrian-male-axe.gif'
export const outfits_map1 = '/img/pixelart/outfits/halloween.png'
export const outfits_map2 = '/img/pixelart/outfits/beach.png'

function Outfits() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / outfits / how do I look?</h6>
            <h1>OUTFITS</h1>
            <div className={outfits.row}>
                <div className={outfits.column}>
                    <img src={outfits_map1} width="100%" alt="pixelart outfits map image 1" />
                    <img src={outfits_map2} width="100%" alt="pixelart outfits map image 2" />
                </div>
                <div className={outfits.column}>
                    <img src={outfits1} width="14%" alt="pixelart outfits image 1" />
                    <img src={outfits2} width="14%" alt="pixelart outfits image 2" />
                    <img src={outfits3} width="14%" alt="pixelart outfits image 3" />
                    <img src={outfits4} width="14%" alt="pixelart outfits image 4" />
                    <img src={outfits5} width="14%" alt="pixelart outfits image 5" />
                    <img src={outfits6} width="14%" alt="pixelart outfits image 6" />
                    <img src={outfits7} width="14%" alt="pixelart outfits image 7" />
                    <img src={outfits8} width="14%" alt="pixelart outfits image 8" />
                    <img src={outfits9} width="14%" alt="pixelart outfits image 9" />
                    <img src={outfits10} width="14%" alt="pixelart outfits image 10" />
                    <img src={outfits11} width="14%" alt="pixelart outfits image 11" />
                    <img src={outfits12} width="14%" alt="pixelart outfits image 12" />
                    <img src={outfits13} width="14%" alt="pixelart outfits image 13" />
                    <img src={outfits14} width="14%" alt="pixelart outfits image 14" />
                </div>
            </div>
        </section>
    )
}

export default Outfits

Outfits.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
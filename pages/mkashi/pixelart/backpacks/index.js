import pixelart from './../pixelart.module.css'
import Layout from '../../../layout'

// Images

export const backpacks1 = '/img/pixelart/backpacks/affliction.png'
export const backpacks2 = '/img/pixelart/backpacks/brazi-backpack.png'
export const backpacks3 = '/img/pixelart/backpacks/canada_backpack.png'
export const backpacks4 = '/img/pixelart/backpacks/catpack-brown.gif'
export const backpacks5 = '/img/pixelart/backpacks/catpack-green.gif'
export const backpacks6 = '/img/pixelart/backpacks/catpack-halloween1.gif'
export const backpacks7 = '/img/pixelart/backpacks/catpack-halloween2.gif'
export const backpacks8 = '/img/pixelart/backpacks/catpack-halloween3.gif'
export const backpacks9 = '/img/pixelart/backpacks/catpack-red.gif'
export const backpacks10 = '/img/pixelart/backpacks/chespe-backpack-sembolso-comestilingue.png'
export const backpacks11 = '/img/pixelart/backpacks/cyber-backpack-2.gif'
export const backpacks12 = '/img/pixelart/backpacks/cyber-backpack-3.gif'
export const backpacks13 = '/img/pixelart/backpacks/cyber-backpack.gif'
export const backpacks14 = '/img/pixelart/backpacks/decay-backpack.png'
export const backpacks15 = '/img/pixelart/backpacks/egghunter-backpack.gif'
export const backpacks16 = '/img/pixelart/backpacks/japanese-backpack-black-I.png'
export const backpacks17 = '/img/pixelart/backpacks/japanese-backpack-blue.png'
export const backpacks18 = '/img/pixelart/backpacks/japanese-backpack-brown.png'
export const backpacks19 = '/img/pixelart/backpacks/japanese-backpack-red.png'
export const backpacks20 = '/img/pixelart/backpacks/netherlands-backpack.gif'
export const backpacks21 = '/img/pixelart/backpacks/polski-backpack.png'
export const backpacks22 = '/img/pixelart/backpacks/regret-backpack.png'
export const backpacks23 = '/img/pixelart/backpacks/reindeer-blue.png'
export const backpacks24 = '/img/pixelart/backpacks/suffering.png'
export const backpacks25 = '/img/pixelart/backpacks/thebad-backpack.png'
export const backpacks26 = '/img/pixelart/backpacks/thegood-backpack.png'
export const backpacks27 = '/img/pixelart/backpacks/theugly-backpack.png'
export const backpacks28 = '/img/pixelart/backpacks/usa_backpackpng.png'
export const backpacks29 = '/img/pixelart/backpacks/venezuela-devil-yare-backpack.png'
export const backpacks30 = '/img/pixelart/backpacks/xmas23-green-backpack.gif'
export const backpacks31 = '/img/pixelart/backpacks/xmas23-red-backpack.gif'

function Backpacks() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / backpacks / packing...</h6>
            <h1>BACKPACKS</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                <img src={backpacks1} width="9%" alt="pixelart backpack image 1" />
                <img src={backpacks2} width="9%" alt="pixelart backpack image 2" />
                <img src={backpacks3} width="9%" alt="pixelart backpack image 3" />
                <img src={backpacks4} width="9%" alt="pixelart backpack image 4" />
                <img src={backpacks5} width="9%" alt="pixelart backpack image 5" />
                <img src={backpacks6} width="9%" alt="pixelart backpack image 6" />
                <img src={backpacks7} width="9%" alt="pixelart backpack image 7" />
                <img src={backpacks8} width="9%" alt="pixelart backpack image 8" />
                <img src={backpacks9} width="9%" alt="pixelart backpack image 9" />
                <img src={backpacks10} width="9%" alt="pixelart backpack image 10" />
                <img src={backpacks11} width="9%" alt="pixelart backpack image 11" />
                </div>
                <div className={pixelart.column}>
                <img src={backpacks12} width="10%" alt="pixelart backpack image 12" />
                <img src={backpacks13} width="10%" alt="pixelart backpack image 13" />
                <img src={backpacks14} width="10%" alt="pixelart backpack image 14" />
                <img src={backpacks15} width="10%" alt="pixelart backpack image 15" />
                <img src={backpacks16} width="10%" alt="pixelart backpack image 16" />
                <img src={backpacks17} width="10%" alt="pixelart backpack image 17" />
                <img src={backpacks18} width="10%" alt="pixelart backpack image 18" />
                <img src={backpacks19} width="10%" alt="pixelart backpack image 19" />
                <img src={backpacks20} width="10%" alt="pixelart backpack image 20" />
                <img src={backpacks21} width="10%" alt="pixelart backpack image 21" />
                </div>
                <div className={pixelart.column}>
                <img src={backpacks22} width="10%" alt="pixelart backpack image 22" />
                <img src={backpacks23} width="10%" alt="pixelart backpack image 23" />
                <img src={backpacks24} width="10%" alt="pixelart backpack image 24" />
                <img src={backpacks25} width="10%" alt="pixelart backpack image 25" />
                <img src={backpacks26} width="10%" alt="pixelart backpack image 26" />
                <img src={backpacks27} width="10%" alt="pixelart backpack image 27" />
                <img src={backpacks28} width="10%" alt="pixelart backpack image 28" />
                <img src={backpacks29} width="10%" alt="pixelart backpack image 29" />
                <img src={backpacks30} width="10%" alt="pixelart backpack image 30" />
                <img src={backpacks31} width="10%" alt="pixelart backpack image 31" />
                </div>
            </div>
        </section>
    )
}

export default Backpacks

Backpacks.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
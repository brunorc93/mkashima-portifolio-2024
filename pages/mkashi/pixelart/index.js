import pixelart from './pixelart.module.css'
import index from './index.module.css'
import Layout from '../../layout'

// Images

// import from pages below
import { backpacks1, backpacks2, backpacks3, backpacks4, backpacks5, backpacks6, backpacks7, backpacks8, backpacks9, backpacks10, backpacks11, backpacks12, backpacks13, backpacks14, backpacks15, backpacks16, backpacks17, backpacks18, backpacks19, backpacks20, backpacks21, backpacks22, backpacks23, backpacks24, backpacks25, backpacks26, backpacks27, backpacks28, backpacks29, backpacks30, backpacks31 } from './backpacks/index.js'

function Pixelart() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixel / art / ▪ </h6>
            <h1><a className={index.links} href="/mkashi/pixelart/items">ITEMS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/pixelart/outfits">OUTFITS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/pixelart/backpacks">BACKPACKS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
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
            <h1><a className={index.links} href="/mkashi/pixelart/maps">MAPS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
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
import outfits from './outfits/outfits.module.css'
import items from './items/items.module.css'
import backpacks from './backpacks/backpacks.module.css'
import maps from './maps/maps.module.css'
import index from './../index.module.css'
import Layout from '../../layout'

// Images

// import from pages below
import { items1, items2, items3, items4, items5, items6, items7, items8, items9, items10, items11, items12, items13, items14, items15, items16, items17, items18, items19, items20, items21, items22, items23, items24, items25, items26, items27, items28, items29, items30 } from './items/index.js'

import { backpacks1, backpacks2, backpacks3, backpacks4, backpacks5, backpacks6, backpacks7, backpacks8, backpacks9, backpacks10, backpacks11, backpacks12, backpacks13, backpacks14, backpacks15, backpacks16, backpacks17, backpacks18, backpacks19, backpacks20, backpacks21, backpacks22, backpacks23, backpacks24, backpacks25, backpacks26, backpacks27, backpacks28, backpacks29, backpacks30, backpacks31 } from './backpacks/index.js'

import { outfits1, outfits2, outfits3, outfits4, outfits5, outfits6, outfits7, outfits8, outfits9, outfits10, outfits11, outfits12, outfits13, outfits14 } from './outfits/index.js'

import { cities1 } from './maps/cities/index.js'
import { hunts1 } from './maps/hunts/index.js'

function Pixelart() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixel / art / ▪ </h6>
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/items">ITEMS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={items.row}>
                <div className={items.column}>
                    <img src={items1} width="10%" alt="pixelart item image" />
                    <img src={items2} width="10%" alt="pixelart item image" />
                    <img src={items3} width="10%" alt="pixelart item image" />
                    <img src={items4} width="10%" alt="pixelart item image" />
                    <img src={items5} width="10%" alt="pixelart item image" />
                    <img src={items6} width="10%" alt="pixelart item image" />
                    <img src={items7} width="10%" alt="pixelart item image" />
                    <img src={items8} width="10%" alt="pixelart item image" />
                    <img src={items9} width="10%" alt="pixelart item image" />
                    <img src={items10} width="10%" alt="pixelart item image" />
                </div>
                <div className={items.column}>
                    <img src={items11} width="10%" alt="pixelart item image" />
                    <img src={items12} width="10%" alt="pixelart item image" />
                    <img src={items13} width="10%" alt="pixelart item image" />
                    <img src={items14} width="10%" alt="pixelart item image" />
                    <img src={items15} width="10%" alt="pixelart item image" />
                    <img src={items16} width="10%" alt="pixelart item image" />
                    <img src={items17} width="10%" alt="pixelart item image" />
                    <img src={items18} width="10%" alt="pixelart item image" />
                    <img src={items19} width="10%" alt="pixelart item image" />
                    <img src={items20} width="10%" alt="pixelart item image" />
                </div>
                <div className={items.column}>
                    <img src={items21} width="10%" alt="pixelart item image" />
                    <img src={items22} width="10%" alt="pixelart item image" />
                    <img src={items23} width="10%" alt="pixelart item image" />
                    <img src={items24} width="10%" alt="pixelart item image" />
                    <img src={items25} width="10%" alt="pixelart item image" />
                    <img src={items26} width="10%" alt="pixelart item image" />
                    <img src={items27} width="10%" alt="pixelart item image" />
                    <img src={items28} width="10%" alt="pixelart item image" />
                    <img src={items29} width="10%" alt="pixelart item image" />
                    <img src={items30} width="10%" alt="pixelart item image" />
                </div>
            </div>
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/outfits">OUTFITS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={outfits.row}>
                <div className={outfits.column}>
                    <img src={outfits1} width="14%" alt="pixelart outfits image 1" />
                    <img src={outfits2} width="14%" alt="pixelart outfits image 2" />
                    <img src={outfits3} width="14%" alt="pixelart outfits image 3" />
                    <img src={outfits4} width="14%" alt="pixelart outfits image 4" />
                    <img src={outfits5} width="14%" alt="pixelart outfits image 5" />
                    <img src={outfits6} width="14%" alt="pixelart outfits image 6" />
                    <img src={outfits7} width="14%" alt="pixelart outfits image 7" />
                </div>
                <div className={outfits.column}>
                    <img src={outfits8} width="14%" alt="pixelart outfits image 8" />
                    <img src={outfits9} width="14%" alt="pixelart outfits image 9" />
                    <img src={outfits10} width="14%" alt="pixelart outfits image 10" />
                    <img src={outfits11} width="14%" alt="pixelart outfits image 11" />
                    <img src={outfits12} width="14%" alt="pixelart outfits image 12" />
                    <img src={outfits13} width="14%" alt="pixelart outfits image 13" />
                    <img src={outfits14} width="14%" alt="pixelart outfits image 14" />
                </div>
            </div>
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/backpacks">BACKPACKS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={backpacks.row}>
                <div className={backpacks.column}>
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
                <div className={backpacks.column}>
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
                <div className={backpacks.column}>
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
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/pixelart/maps">MAPS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={maps.row}>
                <div className={maps.column}>
                    <img className={index.photo_page} src={cities1} width="100%" alt="pixelart cities map image" />
                </div>
                <div className={maps.column}>
                    <img className={index.photo_page} src={hunts1} width="100%" alt="pixelart hunt map image" />
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
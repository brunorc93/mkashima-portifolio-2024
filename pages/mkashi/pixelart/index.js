import pixelart from './pixelart.module.css'
import index from './index.module.css'
import Layout from '../../layout'

// Images

// import from pages below

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
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart image" />
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
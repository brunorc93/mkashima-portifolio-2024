import pixelart from './../pixelart.module.css'
import index from './../index.module.css'
import Layout from '../../../layout'

// Images

// import from pages below

function Pixelart() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / where am I? </h6>
            <h1><a className={index.links} href="/mkashi/pixelart/maps/cities">CITIES <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/pixelart/maps/hunts">HUNTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart map image" />
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
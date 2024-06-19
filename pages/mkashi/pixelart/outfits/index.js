import pixelart from './../pixelart.module.css'
import Layout from '../../../layout'

// Images

function Outfits() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / outfits / how do I look?</h6>
            <h1>OUTFITS</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart outfit image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart outfit image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart outfit image" />
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
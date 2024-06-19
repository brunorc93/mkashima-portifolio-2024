import pixelart from './../pixelart.module.css'
import Layout from '../../../layout'

// Images

function Backpacks() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / backpacks / packing...</h6>
            <h1>BACKPACKS</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart backpack image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart backpack image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart backpack image" />
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
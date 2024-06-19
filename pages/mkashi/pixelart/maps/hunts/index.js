import pixelart from './../../pixelart.module.css'
import Layout from '../../../../layout'

// Images

function Hunts() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / hunts</h6>
            <h1>HUNTS</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart hunt map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart hunt map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart hunt map image" />
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
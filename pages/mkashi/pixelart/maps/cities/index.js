import pixelart from './../../pixelart.module.css'
import Layout from '../../../../layout'

// Images

function Cities() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / maps / cities</h6>
            <h1>CITIES</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart city map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart city map image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart city map image" />
                </div>
            </div>
        </section>
    )
}

export default Cities

Cities.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
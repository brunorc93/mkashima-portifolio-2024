import pixelart from './../pixelart.module.css'
import Layout from '../../../layout'

// Images

function Items() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ pixelart / items / ✌</h6>
            <h1>ITEMS</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart item image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart item image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="pixelart item image" />
                </div>
            </div>
        </section>
    )
}

export default Items

Items.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
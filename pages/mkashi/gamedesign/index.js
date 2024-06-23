import index from './../index.module.css'
import Layout from '../../layout'

// Images

function GameDesign() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ game / design / 🕹</h6>
            <h1 className={index.h1}>GAME DESIGN</h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src="{}" width="100%" alt="gamedesign image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src="{}" width="100%" alt="gamedesign image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src="{}" width="100%" alt="gamedesign image" />
                </div>
            </div>
        </section>
    )
}

export default GameDesign

GameDesign.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
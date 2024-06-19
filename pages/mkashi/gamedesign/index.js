import pixelart from './gamedesign.module.css'
import Layout from '../../layout'

// Images

function GameDesign() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ game / design / 🕹</h6>
            <h1>GAME DESIGN</h1>
            <div className={pixelart.row}>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="gamedesign image" />
                </div>
                <div className={pixelart.column}>
                    <img src="{}" width="100%" alt="gamedesign image" />
                </div>
                <div className={pixelart.column}>
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
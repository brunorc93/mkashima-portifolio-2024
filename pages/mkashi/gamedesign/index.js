import index from './../index.module.css'
import Layout from '../../layout'

// Images

import { events10, events3 } from './events/index.js'
import { quests19, quests24 } from './quests/index.js'
function GameDesign() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ game / design / 🕹</h6>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/gamedesign/quests">QUESTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={quests19} width="100%" alt="gamedesign quests image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={quests24} width="100%" alt="gamedesign quests image" />
                </div>
            </div>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/gamedesign/events">EVENTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events10} width="100%" alt="gamedesign events image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events3} width="100%" alt="gamedesign events image" />
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
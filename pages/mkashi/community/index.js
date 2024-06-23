import feedback from './feedback/feedback.module.css'
import events from './events/events.module.css'
import index from './../index.module.css'
import Layout from '../../layout'

// Images

import { feedback3, feedback4, feedback5, feedback6, feedback8, } from './feedback/index.js'
import { events1, events2 } from './events/index.js'
// import from pages below

function Community() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / people / ꆜꆜꆜꆜ</h6>
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/community/events">EVENTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={events.row}>
                <div className={events.column}>
                    <img className={index.photo_page} src={events1} width="100%" alt="community events image" />
                </div>
                <div className={events.column}>
                    <img className={index.photo_page} src={events2} width="100%" alt="community events image" />
                </div>
            </div>
            <h1><a className={index.links_page + ' ' + index.links_base} href="/mkashi/community/feedback">FEEDBACK <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={feedback.row}>
                <div className={feedback.column}>
                    <img src={feedback4} width="100%" alt="community feedback image" />
                    <img src={feedback3} width="100%" alt="community feedback image" />
                </div>
                <div className={feedback.column}>
                    <img src={feedback5} width="100%" alt="community feedback image" />
                    <img src={feedback6} width="100%" alt="community feedback image" />
                </div>
                <div className={feedback.column}>
                    <img src={feedback8} width="100%" alt="community feedback image" />
                </div>
            </div>
        </section>
    )
}

export default Community

Community.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
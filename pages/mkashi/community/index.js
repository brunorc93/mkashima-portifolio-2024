import community from './community.module.css'
import index from './index.module.css'
import Layout from '../../layout'

// Images

import { feedback1, feedback3, feedback4, feedback5, feedback6, feedback8, } from './feedback/index.js'
import { events1, events2, events11 } from './events/index.js'
// import from pages below

function Community() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / people / ꆜꆜꆜꆜ</h6>
            <h1><a className={index.links} href="/mkashi/community/events">EVENTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src={events1} width="100%" alt="community events image" />
                </div>
                <div className={community.column}>
                    <img src={events2} width="100%" alt="community events image" />
                </div>
                <div className={community.column}>
                    <img src={events11} width="100%" alt="community events image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/community/feedback">FEEDBACK <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src={feedback1} width="100%" alt="community feedback image" />
                </div>
                <div className={community.column}>
                    <img src={feedback4} width="100%" alt="community feedback image" />
                    <img src={feedback5} width="100%" alt="community feedback image" />
                    <img src={feedback6} width="100%" alt="community feedback image" />
                </div>
                <div className={community.column}>
                    <img src={feedback8} width="100%" alt="community feedback image" />
                    <img src={feedback3} width="100%" alt="community feedback image" />
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
import index from './../index.module.css'
import Layout from '../../layout'

// Images

import { feedback3, feedback4, feedback5, feedback6, feedback8, } from './feedback/index.js'
import { events1, events2 } from './events/index.js'

function Community() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / people / ꆜꆜꆜꆜ</h6>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/community/events">EVENTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events1} width="100%" alt="community events image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events2} width="100%" alt="community events image" />
                </div>
            </div>
            <h1 className={index.h1}><a className={index.links_page + ' ' + index.links_base} href="/mkashi/community/feedback">FEEDBACK <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src={feedback4} width="100%" alt="community feedback image" />
                    <img src={feedback3} width="100%" alt="community feedback image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src={feedback5} width="100%" alt="community feedback image" />
                    <img src={feedback6} width="100%" alt="community feedback image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
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
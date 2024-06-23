import index from './../../index.module.css'
import Layout from '../../../layout'

// Images

export const feedback2 = '/img/community/feedback/Captura de tela 2022-10-12 232301.jpg'
export const feedback3 = '/img/community/feedback/Captura de tela 2022-10-15 120703.jpg'
export const feedback4 = '/img/community/feedback/Captura de tela 2022-11-10 203507.jpg'
export const feedback5 = '/img/community/feedback/Captura de tela 2022-12-16 164724.jpg'
export const feedback6 = '/img/community/feedback/Captura de tela 2022-12-18 214532.jpg'
export const feedback7 = '/img/community/feedback/Captura de tela 2022-12-30 123546.jpg'
export const feedback8 = '/img/community/feedback/Captura de tela 2023-01-15 021830.jpg'
export const feedback9 = '/img/community/feedback/Captura de tela 2023-01-24 224915.jpg'
export const feedback10 = '/img/community/feedback/Captura de tela 2023-03-04 072320.jpg'
export const feedback11 = '/img/community/feedback/Captura de tela 2023-08-28 133357.png'
export const feedback12 = '/img/community/feedback/Captura de tela 2023-08-28 222148.png'
export const feedback13 = '/img/community/feedback/Captura de tela 2024-02-27 152323.png'
export const feedback14 = '/img/community/feedback/Captura de tela 2024-03-13 234240.png'
export const feedback15 = '/img/community/feedback/Capture8.PNG'
export const feedback16 = '/img/community/feedback/Capture9.PNG'
export const feedback17 = '/img/community/feedback/Capture10.PNG'
export const feedback18 = '/img/community/feedback/Capture11.PNG'
export const feedback19 = '/img/community/feedback/Capture12.PNG'
export const feedback20 = '/img/community/feedback/Capture14.PNG'
export const feedback21 = '/img/community/feedback/Capture15.PNG'
export const feedback22 = '/img/community/feedback/Capture17.PNG'
export const feedback23 = '/img/community/feedback/Capture23.PNG'

function CommunityFeedback() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / feedback / 🗣</h6>
            <h1 className={index.h1}>FEEDBACK</h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src={feedback2} width="100%" alt="community feedback image 2" />
                    <img src={feedback3} width="100%" alt="community feedback image 3" />
                    <img src={feedback4} width="100%" alt="community feedback image 4" />
                    <img src={feedback5} width="100%" alt="community feedback image 5" />
                    <img src={feedback6} width="100%" alt="community feedback image 6" />
                    <img src={feedback7} width="100%" alt="community feedback image 7" />
                    <img src={feedback8} width="100%" alt="community feedback image 8" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src={feedback9} width="100%" alt="community feedback image 9" />
                    <img src={feedback10} width="100%" alt="community feedback image 10" />
                    <img src={feedback11} width="100%" alt="community feedback image 11" />
                    <img src={feedback12} width="100%" alt="community feedback image 12" />
                    <img src={feedback13} width="100%" alt="community feedback image 13" />
                    <img src={feedback14} width="100%" alt="community feedback image 14" />
                    <img src={feedback15} width="100%" alt="community feedback image 15" />
                    <img src={feedback16} width="100%" alt="community feedback image 16" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_3}>
                    <img src={feedback17} width="100%" alt="community feedback image 17" />
                    <img src={feedback18} width="100%" alt="community feedback image 18" />
                    <img src={feedback19} width="100%" alt="community feedback image 19" />
                    <img src={feedback20} width="100%" alt="community feedback image 20" />
                    <img src={feedback21} width="100%" alt="community feedback image 21" />
                    <img src={feedback22} width="100%" alt="community feedback image 22" />
                    <img src={feedback23} width="100%" alt="community feedback image 23" />
                </div>
            </div>
        </section>
    )
}

export default CommunityFeedback

CommunityFeedback.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
import index from './../../index.module.css'
import Layout from '../../../layout'

// Images

export const quests1 = '/img/gamedesign/quests/Blink-1.png'
export const quests2 = '/img/gamedesign/quests/Blink-2.png'
export const quests3 = '/img/gamedesign/quests/Blink-3.png'
export const quests4 = '/img/gamedesign/quests/Blink-4.png'
export const quests5 = '/img/gamedesign/quests/Blink-5.png'
export const quests6 = '/img/gamedesign/quests/Blink-6.png'
export const quests7 = '/img/gamedesign/quests/Blink-7.png'
export const quests8 = '/img/gamedesign/quests/Bravos Founder Figurines-1.png'
export const quests9 = '/img/gamedesign/quests/Bravos Founder Figurines-2.png'
export const quests10 = '/img/gamedesign/quests/Bravos Founder Figurines-3.png'
export const quests11 = '/img/gamedesign/quests/Cleaning the Aquarium-1.png'
export const quests12 = '/img/gamedesign/quests/Cleaning the Aquarium-2.png'
export const quests13 = '/img/gamedesign/quests/Cleaning the Aquarium-3.png'
export const quests14 = '/img/gamedesign/quests/Sweet Sisters-1.png'
export const quests15 = '/img/gamedesign/quests/Sweet Sisters-2.png'
export const quests16 = '/img/gamedesign/quests/Sweet Sisters-3.png'
export const quests17 = '/img/gamedesign/quests/Sweet Sisters-4.png'
export const quests18 = '/img/gamedesign/quests/Sweet Sisters-5.png'
export const quests19 = '/img/gamedesign/quests/Tyrant Tango-1.png'
export const quests20 = '/img/gamedesign/quests/Tyrant Tango-2.png'
export const quests21 = '/img/gamedesign/quests/Tyrant Tango-3.png'
export const quests22 = '/img/gamedesign/quests/Whispers of the Wild-1.png'
export const quests23 = '/img/gamedesign/quests/Whispers of the Wild-2.png'
export const quests24 = '/img/gamedesign/quests/Whispers of the Wild-3.png'
export const quests25 = '/img/gamedesign/quests/Whispers of the Wild-4.png'
export const quests26 = '/img/gamedesign/quests/Whispers of the Wild-5.png'
export const quests27 = '/img/gamedesign/quests/Whispers of the Wild-6.png'

function GamedesignQuests() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ gamedesign / quests / I challenge you!</h6>
            <h1 className={index.h1}>QUESTS</h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={quests1} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests2} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests3} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests4} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests5} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests6} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests7} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests8} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests9} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests10} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests11} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests12} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests13} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests14} width="100%" alt="gamedesign quests image" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={quests15} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests16} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests17} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests18} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests19} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests20} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests21} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests22} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests23} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests24} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests25} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests26} width="100%" alt="gamedesign quests image" />
                    <img className={index.photo_page} src={quests27} width="100%" alt="gamedesign quests image" />
                </div>
            </div>
        </section>
    )
}

export default GamedesignQuests

GamedesignQuests.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
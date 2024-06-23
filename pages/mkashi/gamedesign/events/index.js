import index from './../../index.module.css'
import Layout from '../../../layout'

// Images

export const events1 = '/img/gamedesign/events/Casino-1.png'
export const events2 = '/img/gamedesign/events/Casino-2.png'
export const events3 = '/img/gamedesign/events/Casino-3.png'
export const events4 = '/img/gamedesign/events/Dealer.png'
export const events5 = '/img/gamedesign/events/Minas Morgul.jpg'
export const events6 = '/img/gamedesign/events/Mitras Palace.png'
export const events7 = '/img/gamedesign/events/Nightmare.gif'
export const events8 = '/img/gamedesign/events/Sun Sand and Survival-1.png'
export const events9 = '/img/gamedesign/events/Sun Sand and Survival-2.jpg'
export const events10 = '/img/gamedesign/events/The Maze.png'

function GamedesignEvent() {
    return (
        <section className={index.section}>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ game / design / events</h6>
            <h1 className={index.h1}>EVENTS</h1>
            <div className={index.row}>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events1} width="100%" alt="gamedesign events image 1" />
                    <img className={index.photo_page} src={events2} width="100%" alt="gamedesign events image 2" />
                    <img className={index.photo_page} src={events3} width="100%" alt="gamedesign events image 3" />
                    <img className={index.photo_page} src={events4} width="100%" alt="gamedesign events image 4" />
                    <img className={index.photo_page} src={events5} width="100%" alt="gamedesign events image 5" />
                </div>
                <div className={index.column_page_base + ' ' + index.column_page_2}>
                    <img className={index.photo_page} src={events6} width="100%" alt="gamedesign events image 6" />
                    <img className={index.photo_page} src={events7} width="100%" alt="gamedesign events image 7" />
                    <img className={index.photo_page} src={events8} width="100%" alt="gamedesign events image 8" />
                    <img className={index.photo_page} src={events9} width="100%" alt="gamedesign events image 9" />
                    <img className={index.photo_page} src={events10} width="100%" alt="gamedesign events image 10" />
                </div>
            </div>
        </section>
    )
}

export default GamedesignEvent

GamedesignEvent.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
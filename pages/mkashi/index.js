import React from 'react'
import index from './index.module.css'
import Layout from '../layout'

function Home() {
  return ( <section className={index.section}>
    <h5>mkashi portfolio • 2024</h5>
    <h6>/ home / home / hello mellow</h6>
      <div className={index.row}>
        <div className={index.column}>
            <img className={index.photo_home} src="/img/home/mk-poppy.png" alt= "poppy flower" />
            <img className={index.jp} src="/jp-text-red.svg" alt= "japanese presentation" />
        </div>
        <div className={index.column}>
            <img src="/hello.svg" alt= "hello" width="83%" />
            <h2>
                <p className={index.text}>Welcome :)</p><br/>
                <p className={index.redtext}>Pixel Artist, Game Designer, Community Manager</p><br/>
                <p className={index.text}>Here you can find some of my favorite projects</p><br/>
            </h2>
            <ul className={index.list}>
                <br/>
                <li className={index.item}>
                <a className={index.links_home + ' ' + index.links_base} href="/mkashi/pixelart">PIXEL ART <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
                </li>
                <br/>
                <li className={index.item}>
                <a className={index.links_home + ' ' + index.links_base} href="/mkashi/gamedesign">GAME DESIGN <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
                </li>
                <br/>
                <br/>
                <li className={index.item}>
                <a className={index.links_home + ' ' + index.links_base} href="/mkashi/community">COMMUNITY <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
                </li>
                <br/>
                <li className={index.item}>
                <a className={index.links_home + ' ' + index.links_base} href="/mkashi/photography">PHOTOGRAPHY <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a>
                </li>
            </ul>
        </div>
      </div>
  </section>)
}

export default Home

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
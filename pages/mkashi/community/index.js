import community from './community.module.css'
import index from './index.module.css'
import Layout from '../../layout'

// Images

// import from pages below

function Community() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / people / ꆜꆜꆜꆜ</h6>
            <h1><a className={index.links} href="/mkashi/community/events">EVENTS <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
                </div>
            </div>
            <h1><a className={index.links} href="/mkashi/community/feedback">FEEDBACK <img src="/link-arrow.svg" alt= "arrow to the right" width="70px" /></a></h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community image" />
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
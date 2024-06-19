import community from './../community.module.css'
import Layout from '../../../layout'

// Images

function CommunityEvent() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / events / ꆜ ꆜꆜꆜ ꆜꆜ ꆜꆜ ꆜꆜꆜꆜꆜ ꆜ ꆜꆜ</h6>
            <h1>EVENTS</h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community event image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community event image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community event image" />
                </div>
            </div>
        </section>
    )
}

export default CommunityEvent

CommunityEvent.getLayout = function getLayout(page) {
    return (
      <Layout>
        {page}
      </Layout>
    )
  }
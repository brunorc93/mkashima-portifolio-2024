import community from './../community.module.css'
import Layout from '../../../layout'

// Images

function CommunityFeedback() {
    return (
        <section>
            <h5>mkashi portfolio • 2024</h5>
            <h6>/ community / feedback / 🗣</h6>
            <h1>FEEDBACK</h1>
            <div className={community.row}>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community feedback image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community feedback image" />
                </div>
                <div className={community.column}>
                    <img src="{}" width="100%" alt="community feedback image" />
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
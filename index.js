'use strict'
const Nightmare = require('nightmare')
const nightmare = Nightmare()

module.exports = (tag, cb) => {
  nightmare
    .goto(`https://www.instagram.com/explore/tags/${tag}/`)
    .wait('main')
    .evaluate(() => (window._sharedData))
    .end()
    .then(imgs => {
      cb(imgs.entry_data.TagPage[0].tag.top_posts.nodes.map(post => (post.id)))
    })
    .catch(error => {
      console.error('FUCK', error);
    })
}

const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
  assetPrefix: !debug ? '' : '',
  exportPathMap: function() {
    return {
      '/': { page: '/mkashi' },
      '/mkashi': { page: '/mkashi' },
      '/mkashi/community': { page: '/mkashi/community' },
      '/mkashi/community/events': { page: '/mkashi/community/events' },
      '/mkashi/community/feedback': { page: '/mkashi/community/feedback' },
      '/mkashi/gamedesign': { page: '/mkashi/gamedesign' },
      '/mkashi/gamedesign/events': { page: '/mkashi/gamedesign/events' },
      '/mkashi/gamedesign/quests': { page: '/mkashi/gamedesign/quests' },
      '/mkashi/photography': { page: '/mkashi/photography' },
      '/mkashi/pixelart': { page: '/mkashi/pixelart' },
      '/mkashi/pixelart/backpacks': { page: '/mkashi/pixelart/backpacks' },
      '/mkashi/pixelart/items': { page: '/mkashi/pixelart/items' },
      '/mkashi/pixelart/maps': { page: '/mkashi/pixelart/maps' },
      '/mkashi/pixelart/maps/cities': { page: '/mkashi/pixelart/maps/cities' },
      '/mkashi/pixelart/maps/hunts': { page: '/mkashi/pixelart/maps/hunts' },
      '/mkashi/pixelart/outfits': { page: '/mkashi/pixelart/outfits' },
    }
  },
}

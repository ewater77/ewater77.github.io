/**
 * 把草稿與 published: false 的文章排除在 Butterfly 的系列清單之外。
 * 主題的 scripts/tag/series.js 用 hexo.model('Post').toArray() 建 hexo._seriesGroups，
 * 沒有過濾 published，source/_drafts/ 底下的文章一樣會被收進去，
 * 導致側欄「同系列文章」出現連向 404 的未發布文章。
 * 這裡在主題建完之後補一次過濾，不修改主題檔案。
 */

'use strict'

// priority 20 > 主題的預設 10，確保在 hexo._seriesGroups 建好之後才執行
hexo.extend.filter.register('before_generate', () => {
  const groups = hexo._seriesGroups
  if (!groups) return

  const published = new Set(
    hexo.model('Post').toArray()
      .filter(post => post.published)
      .map(post => post.path)
  )

  for (const name of Object.keys(groups)) {
    const kept = groups[name].filter(item => published.has(item.path))
    if (kept.length) {
      groups[name] = kept
    } else {
      delete groups[name]
    }
  }
}, 20)

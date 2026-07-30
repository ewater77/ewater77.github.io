/**
 * 為每篇文章頁在 </head> 前輸出 BlogPosting JSON-LD。
 * Butterfly 主題本身不輸出任何結構化資料，這裡用 Hexo 的 _after_html_render
 * filter（可取得 page locals）注入，不修改主題檔案。
 */

'use strict'

const { full_url_for } = require('hexo-util')

hexo.extend.filter.register('_after_html_render', function (html, locals) {
  const page = locals && locals.page
  if (!page || !page.__post) return

  const config = hexo.config
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: page.title,
    description: page.description || config.description,
    url: page.permalink,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': page.permalink
    },
    datePublished: page.date.toISOString(),
    dateModified: (page.updated || page.date).toISOString(),
    inLanguage: config.language,
    author: {
      '@type': 'Person',
      name: page.author || config.author,
      url: config.url
    }
  }
  if (page.cover) data.image = full_url_for.call(hexo, page.cover)
  if (page.tags && page.tags.length) data.keywords = page.tags.map(tag => tag.name).join(',')

  // < 逸出避免內容中的 </script> 提前結束標籤
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  const script = `<script type="application/ld+json">${json}</script>`
  return html.replace('</head>', `${script}</head>`)
})

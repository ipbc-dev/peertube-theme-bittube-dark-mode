function register ({ registerHook, peertubeHelpers }) {
  
  const baseStaticUrl = peertubeHelpers.getBaseStaticRoute()
  const imageUrl = baseStaticUrl + '/images/filter_white.png';
  // Change filter icon
  const style = document.createElement('style')
      document.head.appendChild(style)
      const sheet = style.sheet
      let rule = "#custom-css .icon.icon-filter { "
      rule+= " background-image: url('"+ imageUrl +"');"
      rule+= " }"
      sheet.insertRule(rule, 0)
  // END
}

export {
  register
}

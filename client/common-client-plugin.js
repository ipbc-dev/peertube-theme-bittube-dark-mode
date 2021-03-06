function register ({ registerHook, peertubeHelpers }) {
  
  const baseStaticUrl = peertubeHelpers.getBaseStaticRoute()
  const imageFilterUrl = baseStaticUrl + '/images/filter_white.png';
  const imageShortcutsUrl = baseStaticUrl + '/images/keyboard-gray.png'
  const backgroundUrl = baseStaticUrl + '/images/back_cube_dm.svg';
  const image404 = baseStaticUrl + '/images/404.svg'
  // Change filter icon
  const style = document.createElement('style')
      document.head.appendChild(style)
      const sheet = style.sheet
      let rule = "#custom-css .icon.icon-filter { "
      rule+= " background-image: url('"+ imageFilterUrl +"');"
      rule+= " }"
      sheet.insertRule(rule, 0)
  // Change shortcuts icon
      rule = "#custom-css .dropdown-item .icon.icon-shortcuts {"
      rule+= " background-image: url('" + imageShortcutsUrl + "');"
      rule+= " }"
      sheet.insertRule(rule, 0)
  // Change background 
      rule = " #custom-css .sub-header-container{ "
      rule+= " background-image: url('"+ backgroundUrl +"'); -webkit-filter: none; filter: none"
      rule+= " } "
      sheet.insertRule(rule, 0)
  // END

  /* ANGULAR NAVIGATION-END */
  registerHook({
    target: 'action:router.navigation-end',
    handler: params => {
      if(document.querySelector('my-page-not-found')){
        const img = document.querySelector('my-page-not-found').querySelector('img')
        if(img){
          img.src = image404
        }
      }
    }
  })
}

export {
  register
}

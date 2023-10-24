let body = document.querySelector('body')
document.addEventListener('readystatechange', function () {
  if (document.readyState === 'complete') {
    body.classList.add('preloader_ready')
    setTimeout(function () {
      body.classList.remove('preloader_active')
      body.classList.remove('preloader_ready')
      body.classList.add('page_ready')
    }, 500)
  }
})

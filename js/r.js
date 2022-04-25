let referrer;

document.addEventListener('DOMContentLoaded', (e) => {
  const params = new URLSearchParams(window.location.search);
  if (params.has('ref')) {
      console.log(params.get('ref'))
      referrer = params.get('ref');
      Array.from(document.getElementsByClassName('checkout-button')).forEach(el => {
          el.href = el.href + '?ref=' + referrer;
      })
  }
  
  if (!document.cookie) {
    if (params.has('ref')) {
      Cookies.set('referrer', referrer, { expires: 7, domain: '.robo4dd.com' });
    }
  }
});

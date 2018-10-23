const requireJS = (...srcs) => {
  return Promise.all(srcs.map(src => {
    return new Promise(resolve => {
      const myScript = document.createElement('script');
      myScript.onload = function() {
        resolve();
      };
    
      myScript.type = 'text/javascript';
      myScript.src = src;
      document.head.appendChild(myScript);
    });
  }))
};
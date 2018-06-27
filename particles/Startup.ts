/// <reference path="App.ts" />

namespace Particles {

  window.addEventListener('load', () => {
    const app = new App(2000, <HTMLCanvasElement>document.getElementById('particle'), document.getElementById('box'));
    app.init();
    
    window.addEventListener('resize', () => app.reposition());
  });

}
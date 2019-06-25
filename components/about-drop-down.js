class Stat {
    constructor(domElement) {

      this.domElement = domElement;

      this.expandArrow = this.domElement.querySelector('.expandArrow');

      this.expandArrow.addEventListener('click', this.expandStats.bind(this));
    }
  
    expandStats() {

      this.domElement.classList.toggle('stats-open');
    }
  }

      let stats = document.querySelectorAll('.stats').
                    forEach(stat => {
                      new Stat(stat)
                    });
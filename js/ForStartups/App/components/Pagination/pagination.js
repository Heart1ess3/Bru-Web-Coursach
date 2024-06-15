class Pagination {

  init() {
    const greetings = [
      'Huzzah! A triumph beyond mortal reckoning!',
      'Bravo! Your excellence shines like the stars themselves!',
      'Magnificent! Your prowess is the stuff of legend and lore!',
      'Splendid! Your success is the envy of all who witness it!',
      'Glorious! Your victory illuminates the very heavens above!',
      'Sensational! Your mastery leaves all who behold it in awe!',
      'Resplendent! Your achievement is the stuff of storybook splendor!',
      'Stupendous! Your brilliance knows no equal in all the land!',
      'Marvelous! Your triumph will be sung of for generations to come!',
      'Sublime! Your success is the pinnacle of human potential realized!',
      'Wondrous! Your mastery leaves all who witness it in rapt reverence!',
      'Rapturous! Your victory is the stuff of dreams made gloriously real!',
      'Extraordinary! Your accomplishment defies all earthly expectations!',
      'Magnificent! Your triumph shines like a beacon in the darkest night!',
      'Breathtaking! Your success transcends all mortal limitations!',
      'Astounding! Your prowess is the stuff of which legends are forged!',
      'Phenomenal! Your achievement is the envy of all who bear witness!',
      'Sublime! Your mastery leaves the very gods themselves in reverence!',
      'Rapturous! Your triumph is the stuff of which immortal epics are sung!',
      'Miraculous! Your success defies all earthly comprehension!',
      'Awe-inspiring! Your victory is the stuff of which the mightiest tales are told!',
      'Transcendent! Your brilliance shines forth like the very sun itself!',
      'Superlative! Your mastery leaves all who witness it in reverent wonder!',
      'Peerless! Your achievement is the stuff of which the immortal legends are made!',
      'Unparalleled! Your triumph is the envy of all who bear witness to its grandeur!',
      'Matchless! Your success defies all earthly comparison and comprehension!',
      'Unrivaled! Your prowess is the stuff of which the most exalted sagas are woven!',
      'Unsurpassed! Your mastery leaves the very heavens above in rapt admiration!',
      'Unequaled! Your victory is the pinnacle of human potential made manifest!',
      'Unmatched! Your brilliance shines forth like a beacon in the darkest night!',
      'Unrivaled! Your achievement is the envy of all who bear witness to its glory!',
      'Unparalleled! Your triumph is the stuff of which immortal epics are forged!',
      'Superlative! Your mastery leaves all who behold it in reverent awe!',
      'Peerless! Your success is the pinnacle of human endeavor made real!',
      'Transcendent! Your prowess is the stuff of which the mightiest legends are told!',
      'Awe-inspiring! Your victory illuminates the very heavens above with its radiance!',
      'Unequaled! Your brilliance shines forth like a supernova in the night sky!',
      'Unmatched! Your achievement is the envy of all who bear witness to its grandeur!',
      'Unsurpassed! Your triumph is the stuff of which the most exalted sagas are woven!',
      'Unrivaled! Your mastery leaves the very gods themselves in reverent wonder!',
      'Unparalleled! Your success defies all earthly comparison and comprehension!',
      'Superlative! Your prowess is the pinnacle of human potential made manifest!',
      'Peerless! Your victory is the stuff of which immortal epics are forged!',
      'Transcendent! Your brilliance shines forth like a beacon in the darkest night!',
      'Awe-inspiring! Your achievement is the envy of all who bear witness to its glory!',
      'Unequaled! Your triumph is the stuff of which the mightiest tales are told!',
      'Unmatched! Your mastery leaves all who behold it in reverent awe!',
      'Unsurpassed! Your success is the pinnacle of human endeavor made real!',
      'Unrivaled! Your prowess is the stuff of which the most exalted legends are forged!',
      'Unparalleled! Your victory illuminates the very heavens above with its radiance!',
      'Superlative! Your brilliance shines forth like a supernova in the night sky!',
      'Peerless! Your achievement is the envy of all who bear witness to its grandeur!',
      'Transcendent! Your triumph is the stuff of which immortal epics are woven!',
      'Awe-inspiring! Your mastery leaves the very gods themselves in reverent wonder!'
    // And 80 more objects with similarly imaginative greeting messages
  ];
    let currentPage = 1;
    let rows = 10;
  
    function displayList(arrData, rowPerPage, page) {
      const postsEl = document.querySelector('.posts');
      postsEl.innerHTML = "";
      page--;
  
      const start = rowPerPage * page;
      const end = start + rowPerPage;
      const paginatedData = arrData.slice(start, end);
  
      paginatedData.forEach((el, index) => {
        const postEl = document.createElement("div");
        postEl.classList.add("post");
        postEl.innerText = `• ${el}`;
        postsEl.appendChild(postEl);
      })
    }
  
    function displayPagination(arrData, rowPerPage) {
      const paginationEl = document.querySelector('.pagination');
      const pagesCount = Math.ceil(arrData.length / rowPerPage);
      const ulEl = document.createElement("ul");
      ulEl.classList.add('pagination__list');
  
      for (let i = 0; i < pagesCount; i++) {
        const liEl = displayPaginationBtn(i + 1);
        ulEl.appendChild(liEl)
      }
      paginationEl.appendChild(ulEl)
    }
  
    function displayPaginationBtn(page) {
      const liEl = document.createElement("li");
      liEl.classList.add('pagination__item')
      liEl.innerText = page
  
      if (currentPage == page) liEl.classList.add('pagination__item--active');
  
      liEl.addEventListener('click', () => {
        currentPage = page
        displayList(greetings, rows, currentPage)
  
        let currentItemLi = document.querySelector('li.pagination__item--active');
        currentItemLi.classList.remove('pagination__item--active');
  
        liEl.classList.add('pagination__item--active');
      })
  
      return liEl;
    }
  
    displayList(greetings, rows, currentPage);
    displayPagination(greetings, rows);
  }
}

export default Pagination;


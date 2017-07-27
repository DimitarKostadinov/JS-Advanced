function createBook(selector,bookTitle,authorName,isbn) {
    let bookGenerator=(function () {
      let id=1;
      return function (selector,bookTitle,authorName,isbn) {
          let container=$(selector);
          let bookContainer=$('<div>');
          bookContainer.attr('id',`book${id}`);
          bookContainer.css('border','none');
          $(`<p class="title">${bookTitle}</p>`).appendTo(bookContainer);
          $(`<p class="author">${authorName}</p>`).appendTo(bookContainer);
          $(`<p class="isbn">${isbn}</p>`).appendTo(bookContainer);
          let selectBtn=$('<button>Select</button>').appendTo(bookContainer);
          let deselectBtn=$('<button>Deselect</button>').appendTo(bookContainer);
          selectBtn.on("click",()=>bookContainer.css('border','2px solid blue'));
          deselectBtn.on("click",()=>bookContainer.css('border','none'));
          container.append(bookContainer);
          id++;
      }
    }());
    bookGenerator(selector,bookTitle,authorName,isbn)
}


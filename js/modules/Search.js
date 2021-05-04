import $ from "jquery";


class Search {
  // 1. Describe and create/initiate our object
 constructor() {
   this.openButton = $(".js-search-trigger");
   this.closeButton = $(".search-overlay__close");
   this.searchField = $("#search-term");
   this.searchOverlay = $(".search-overlay");
   this.events();
   this.isOverlayOpen = false;
   this.typingTimer;
 }

  // 2. Events
  events() {
    this.openButton.on("click", this.openOverlay.bind(this));
    this.closeButton.on("click", this.closeOverlay.bind(this));
    $(document).on("keyup", this.keyPressDispatcher.bind(this));
    this.searchField.on("keydown", this.typingLogic.bind(this));
  }

  // 3. Methods (function. action...)
  typingLogic() {
    clearTimeout(this.typingTimer);
    this.typingTimer = setTimeout(function () {console.log("This is a timeout test");}, 2000);
  }


  keyPressDispatcher(e) {

    if (e.keyCode == 83 && !this.isOverlayOpen) {
      this.openOverlay();
    }

    if (e.keyCode == 27 && this.isOverlayOpen) {
      this.closeOverlay();
    }
  }



  openOverlay() {
    this.searchOverlay.addClass("search-overlay--active");
    $("body").addClass("body-no-scroll");
    console.log("Our opet method just ran!");
    this.isOverlayOpen = true;
  }

  closeOverlay() {
    this.searchOverlay.removeClass("search-overlay--active");
    $("body").removeClass("body-no-scroll");
    console.log("Out close method just ran!");
    this.isOverlayOpen = false;
  }
}

export default Search;
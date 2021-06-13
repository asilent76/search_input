$(function (params) {
  $("#button").on("click", () => {
    let search_form = $("#search-form");
    search_form.toggleClass("active");
    if(search_form.hasClass('active')){
        setTimeout(()=>{
            $('#input-search').focus();
        },300)
    }
  });
});

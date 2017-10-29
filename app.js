
console.log("testing");
$(document).ready(function(){

getAndRenderGifs();


$("form").on("submit", function(event){
  event.preventDefault();
  console.log('testing submit');
  getAndRenderGifs();
});

});

function getAndRenderGifs(){

    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search",
      data: $("form").serialize(),
      success: onSuccess,
      error: onError
    });
}

function onSuccess(json){
  $(".gif-img").remove();
  json.data.forEach(function(item, index){
    $('.gif-gallery').append("<img class='img-responsive img-thumbnail gif-img' src="+ "'" + item.images.fixed_height.url + "'" +">");
  });
}

function onError(err){
  console.log(err);
}

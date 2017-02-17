$(function() {

  $('.summon-cats').on('click',function(event){

    $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method:'GET',
    dataType: 'json'

    }).done(function(data){
      console.log(data);
      var catJSON = data;
      var cats = catJSON["cats"];

      //cat 0
      console.log(cats[0]["name"]);
      var cat_photo = cats[0]["photo"];
      $('<img>').attr('src', cat_photo).appendTo('#cat1');

      //cat 1
      console.log(cats[1]["name"]);
      var cat1_photo = cats[1]["photo"];
      $('<img>').attr('src', cat1_photo).appendTo('#cat2');

      //cat 2
      console.log(cats[2]["name"]);
      var cat2_photo = cats[2]["photo"];
      $('<img>').attr('src', cat2_photo).appendTo('#cat3');

    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log('Ajax Request Failed');
      console.log(jqXHR);
    }).always(function(){
      console.log('Ajax Request Sent');
    });
  });
});

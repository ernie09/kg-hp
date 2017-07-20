$(document).ready(function() {
  var prinzenCarouselDiv = $("#prinzenEventCarousel > div");
  var kinderPrinzenCarouselDiv = $("#kinderPrinzenEventCarousel > div");

  $.getJSON("resources/prinzenpaare.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {

      var title = '<div class=\"col-md-4\"><img src=\"'+(val.Bild ? val.Bild : 'http://placehold.it/250x250')+'\" class=\"img-responsive\"><div class=\"text-center\"><p><strong>Session ' + key + '</strong><br>Prinz ' + val.Mann + ' ' + mapNumericalToRoman(val.AnzahlMann) + '.' + (val.TitleMann ? val.TitleMann : '') +
        '<br>Prinzessin ' + val.Frau + ' ' + mapNumericalToRoman(val.AnzahlFrau) + '.' + (val.TitleFrau ? val.TitleFrau : '') + '</p></div></div>';

      console.log(title);

      var divInner = $("<div>", {
        "class": "item",
        html: title
      });


      items.push(divInner);
    });

    prinzenCarouselDiv.append(items);
    console.log(prinzenCarouselDiv);

    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
  });

  $.getJSON("resources/kinderprinzenpaare.json", function(data) {
    var items = [];
    $.each(data, function(key, val) {

      var title = '<div class=\"col-md-4\"><a href=\"\"><img src=\"'+(val.Bild ? val.Bild : '')+'\" class=\"img-responsive\"></a><div class=\"text-center\"><p><strong>Session ' + key + '</strong><br>Prinz ' + val.Mann + ' ' + mapNumericalToRoman(val.AnzahlMann) + '.' + (val.TitleMann ? val.TitleMann : '') +
        '<br>Prinzessin ' + val.Frau + ' ' + mapNumericalToRoman(val.AnzahlFrau) + '.' + (val.TitleFrau ? val.TitleFrau : '') + '</p></div></div>';

      console.log(title);

      var divInner = $("<div>", {
        "class": "item",
        html: title
      });


      items.push(divInner);
    });

    kinderPrinzenCarouselDiv.append(items);
    console.log(kinderPrinzenCarouselDiv);

    $('.fdi-Carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));

        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        }
        else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });
  });

})

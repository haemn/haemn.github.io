
//landing page
var openDiv = document.getElementById ('container');
var img = document.getElementById ('main');

openDiv.style.opacity = '0';
function nextpage () {    
        
        openDiv.style.transition = 'all 1s';   
        setTimeout (function() {
            img.style.display = 'none';
            openDiv.style.opacity = '1';
        }, 1000);

    }

img.addEventListener('click', nextpage, false);


//second page using pokemon api
$(document).ready(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();

    function createCORSRequest(method, url) {
      var xhr = new XMLHttpRequest();
      if ("withCredentials" in xhr) {
        
        xhr.open(method, url, true);
      } else if (typeof XDomainRequest != "undefined") {
        
        xhr = new XDomainRequest();
        xhr.open(method, url);
      } else {
        
        xhr = null;
      }
      return xhr;
    }
    
    function getTitle(text) {
      return text.match("<title>(.*)?</title>")[1];
    }
    
    function makeCorsRequest() {
      
      var url =
        "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";
      var xhr = createCORSRequest("GET", url);
      if (!xhr) {
        alert("CORS not supported");
        return;
      }
      
      xhr.onload = function() {
        var text = xhr.responseText;
        var title = getTitle(text);
        alert("Response from CORS request to " + url + ": " + title);
      };
      xhr.onerror = function() {
        alert("Woops, there was an error making the request.");
      };
      xhr.send();
    }

    var userInput = $("#search").val();
    var url = "https://pokeapi.co/api/v2/pokemon/" + userInput;
    console.log(url);
    $.ajax({
      url: url,
      dataType: "json",
      method: "GET",
      success: function(data) {
        var name = data.forms[0].name,
          pokeImgFront = data.sprites.front_default,
          pokeImgBack = data.sprites.back_default,
          pokeImgShinyFront = data.sprites.front_shiny,
          pokeImgShinyBack = data.sprites.back_shiny,
          shiny = false,
          frontImg = true,
          speed = data.stats[0].base_stat,
          spDef = data.stats[1].base_stat,
          spAtk = data.stats[2].base_stat,
          def = data.stats[3].base_stat,
          atk = data.stats[4].base_stat,
          hp = data.stats[5].base_stat,
          id = "#" + data.id,
          weight = "<span class='stat'>Weight: </span>" + data.weight,
          height = "<span class='stat'>Height: </span>" + data.height,
          types = [];
        for (var i = 0; i < data.types.length; i++) {
          var type = data.types[i].type.name;
          types.push(type);
        }

        function pokemonType(types) {
          $("#types").html("");
          for (var i = 0; i < types.length; i++) {
            $("#types").append(
              "<div class='pokeType poke-info " +
                types[i] +
                "'>" +
                types[i] +
                " </div>"
            );
          }
        }

        $("#defaultBtn").click(function() {
          $("#pokeImage").attr("src", pokeImgFront);
          shiny = false;
          frontImg = true;
        });
        $("#shinyBtn").click(function() {
          $("#pokeImage").attr("src", pokeImgShinyFront);
          shiny = true;
          frontImg = true;
        });
        $(".changeBtn").click(function() {
          if (shiny == false && frontImg == true) {
            shiny = false;
            frontImg = false;
            $("#pokeImage").attr("src", pokeImgBack);
          } else if (shiny == false && frontImg == false) {
            shiny = false;
            frontImg = true;
            $("#pokeImage").attr("src", pokeImgFront);
          } else if (shiny == true && frontImg == true) {
            shiny = true;
            frontImg = false;
            $("#pokeImage").attr("src", pokeImgShinyBack);
          } else if (shiny == true && frontImg == false) {
            shiny = true;
            frontImg = true;
            $("#pokeImage").attr("src", pokeImgShinyFront);
          }
        });

        $(".name").html(name);
        $(".idNum").html(id);
        $("#pokeImage").attr("src", pokeImgFront);
        $(".hp").html(hp);
        $(".attack").html(atk);
        $(".defense").html(def);
        $(".special-attack").html(spAtk);
        $(".special-defense").html(spDef);
        $(".speed").html(speed);
        $(".weight").html(weight);
        $(".height").html(height);
        pokemonType(types);
        //console.log(data);
      } 
    }); 
  }); 
});
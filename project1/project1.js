 let squarefootage = 0;
 let story = 0;
 let garageSize = 0;
 let material = 0;
 let cost = story + garageSize + material + squarefootage;
  //story select
  //create border around one story if selected
  function singleSelect() {
    document.getElementById("oneStory").style.border = "solid";
    document.getElementById("twoStory").style.border = "";
  }
  //create border around two story if selected
  function doubleSelect() {
    document.getElementById("twoStory").style.border = "solid";
    document.getElementById("oneStory").style.border = "";
  }
  //color select
  //create border around color red if selected
  function redSelect() {
    document.getElementById("red").style.border = "solid";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around orange if selected
  function orangeSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "solid";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around yellow if selected
  function yellowSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "solid";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around blue if selected
  function blueSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "solid";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around green if selected
  function greenSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "solid";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around purple if selected
  function purpleSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "solid";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "";
  }
  //create border around black if selected
  function blackSelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "solid";
    document.getElementById("grey").style.border = "";
  }
  //create border around grey if selected
  function greySelect() {
    document.getElementById("red").style.border = "";
    document.getElementById("orange").style.border = "";
    document.getElementById("yellow").style.border = "";
    document.getElementById("blue").style.border = "";
    document.getElementById("green").style.border = "";
    document.getElementById("purple").style.border = "";
    document.getElementById("black").style.border = "";
    document.getElementById("grey").style.border = "solid";
  }
  //material select
  //create border around vinyl if selected
  function vinylSelect() {
    document.getElementById("vinyl").style.border = "solid";
    document.getElementById("wood").style.border = "";
    document.getElementById("brick").style.border = "";
    document.getElementById("stucko").style.border = "";
    document.getElementById("stone").style.border = "";
  }
  //create border around wood if selected
  function woodSelect() {
    document.getElementById("vinyl").style.border = "";
    document.getElementById("wood").style.border = "solid";
    document.getElementById("brick").style.border = "";
    document.getElementById("stucko").style.border = "";
    document.getElementById("stone").style.border = "";
  }
  //create border around brick if selected
  function brickSelect() {
  document.getElementById("vinyl").style.border = "";
  document.getElementById("wood").style.border = "";
  document.getElementById("brick").style.border = "solid";
  document.getElementById("stucko").style.border = "";
  document.getElementById("stone").style.border = "";
  }
  //create border around stucko if selected
  function stuckoSelect() {
  document.getElementById("vinyl").style.border = "";
  document.getElementById("wood").style.border = "";
  document.getElementById("brick").style.border = "";
  document.getElementById("stucko").style.border = "solid";
  document.getElementById("stone").style.border = "";
  }
  //create border around stone if selected
  function stoneSelect() {
  document.getElementById("vinyl").style.border = "";
  document.getElementById("wood").style.border = "";
  document.getElementById("brick").style.border = "";
  document.getElementById("stucko").style.border = "";
  document.getElementById("stone").style.border = "solid";
  }


  let calculate = function() {
    if ((document.getElementById("oneStory").style.border == "")&& (document.getElementById("twoStory").style.border == "")){
      alert("You must choose a story size");
    }
    if ((document.getElementById("red").style.border == "") && (document.getElementById("orange").style.border == "") && (document.getElementById("yellow").style.border == "") && (document.getElementById("blue").style.border == "") && (document.getElementById("green").style.border == "") && (document.getElementById("purple").style.border == "") && (document.getElementById("black").style.border == "") && (document.getElementById("grey").style.border == "")) {
      alert("You must choose color");
    }
    if ((document.getElementById("vinyl").style.border == "") && (document.getElementById("wood").style.border == "") && (document.getElementById("brick").style.border == "") && (document.getElementById("stucko").style.border == "") && (document.getElementById("stone").style.border == "")){
      alert("You must choose a material");
    }
    if (document.getElementById("squarefootage").value == "") {
      alert("You must enter the desired square footage");
    }
    if ((document.getElementById("garage").checked == false) && (document.getElementById("garage2").checked == false) && (document.getElementById("garage3").checked == false)) {
     alert("You must choose a garage size");
    }


    //Square Footage
    let squarefootage = document.getElementById("oneStory").style.border == "solid" ? document.getElementById("oneStory").getAttribute("data-squarefootage") : document.getElementById("twoStory").getAttribute("data-squarefootage");
    //get square Footage
    let footage = document.getElementById("squarefootage").value;
    //Get garage size
    let garageSize = document.querySelector('input[name="garage"]:checked').value;
    //calculate material
    let material = 0;
    if (document.getElementById("vinyl").style.border == "solid") {
      material = 0;
    }
    if (document.getElementById("wood").style.border == "solid") {
      material = 5000 + (10 * footage);
    }
    if (document.getElementById("brick").style.border == "solid") {
      material = 8000 + (10 * footage );
    }
    if (document.getElementById("stucko").style.border == "solid") {
      material = 6000;
    }
    if (document.getElementById("stone").style.border == "solid") {
      material = 16000;
    }
     //Total Cost estimate
     let totalCost = (footage * squarefootage) + (15000 * garageSize) + material;
     console.log("Footage " + footage);
     console.log("Material " + material);
     console.log("Square Footage " + squarefootage);
     console.log("Garage Size " + garageSize);
     console.log("Total cost " + totalCost);

     //output div
     let output = document.createElement("div");

     //Story label output
     let div2 = document.createElement("div");
     let divText2 = "Story:";
     div2.appendChild(document.createTextNode(divText2));
     output.appendChild(div2);


     //House image output
     let houseImage;
     houseImage = document.createElement("img");
     houseImage.src = document.getElementById("oneStory").style.border == "solid" ? "images/oneStory.jpg" : "images/twoStory.jpg";
     output.appendChild(houseImage);

     //color label output
     let div = document.createElement("div");
     let divText = "Color:";
     div.appendChild(document.createTextNode(divText));
     output.appendChild(div);

    //color image
     let colorImage;
     colorImage = document.createElement("img");
     if(document.getElementById("red").style.border == "solid") {
     colorImage.src = "images/red.jpg"
     }
     if(document.getElementById("orange").style.border == "solid") {
     colorImage.src = "images/orange.jpg"
     }
     if(document.getElementById("yellow").style.border == "solid") {
     colorImage.src = "images/yellow.jpg"
     }
     if(document.getElementById("blue").style.border == "solid") {
     colorImage.src = "images/blue.jpg"
     }
     if(document.getElementById("green").style.border == "solid") {
     colorImage.src = "images/green.jpg"
     }
     if(document.getElementById("purple").style.border == "solid") {
     colorImage.src = "images/purple.jpg"
     }
     if(document.getElementById("black").style.border == "solid") {
     colorImage.src = "images/black.jpg"
     }
     if(document.getElementById("grey").style.border == "solid") {
     colorImage.src = "images/grey.jpg"
     }

     //color image output
     output.appendChild(colorImage);

     //material label output
     let div3 = document.createElement("div");
     let divText3 = "Material:";
     div3.appendChild(document.createTextNode(divText3));
     output.appendChild(div3);

     //material image
      let materialImage;
      materialImage = document.createElement("img");
      if(document.getElementById("vinyl").style.border == "solid") {
      materialImage.src = "images/vinyl.jpg"
      }
      if(document.getElementById("wood").style.border == "solid") {
      materialImage.src = "images/wood.jpg"
      }
      if(document.getElementById("brick").style.border == "solid") {
      materialImage.src = "images/brick.jpg"
      }
      if(document.getElementById("stucko").style.border == "solid") {
      materialImage.src = "images/stucko.jpg"
      }
      if(document.getElementById("stone").style.border == "solid") {
      materialImage.src = "images/stone.jpg"
      }

      //material image output
      output.appendChild(materialImage);

      //square footage label output
      let div4 = document.createElement("div");
      let divText4 = "Square Footage:";
      div4.appendChild(document.createTextNode(divText4));
      output.appendChild(div4);

      //square footage output
      let footage2 = document.createElement("span");
      let footageText = document.getElementById("squarefootage").value;
      footage2.appendChild(document.createTextNode(footageText));
      output.appendChild(footage2);

      //garage label output
      let div5 = document.createElement("div");
      let divText5 = "Garage Size:";
      div5.appendChild(document.createTextNode(divText5));
      output.appendChild(div5);

      //garage output
      let gsize = document.createElement("span");
      let gsizetext = document.querySelector('input[name="garage"]:checked').value;
      gsize.appendChild(document.createTextNode(gsizetext));
      output.appendChild(gsize);


     //Estimate output
     let details = document.createElement("span");
     let detailsText = "Your house cost is $" + totalCost;
     details.appendChild(document.createTextNode(detailsText));

     //output to page
     document.body.appendChild(details);
     details.appendChild(output);

     if(document.getElementById("oneStory").style.border == "solid") {
      houseImage.src = "images/oneStory.jpg"
    } else {
      houseImage.src = "images/twoStory.jpg"
    }

  }

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < selElmnt.length; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        h = this.parentNode.previousSibling;
        for (i = 0; i < s.length; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            for (k = 0; k < y.length; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  for (i = 0; i < y.length; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);


console.log("connected!");
var first = document.querySelector("#first")
var second = document.getElementById("second")
var button = document.getElementById("third")
var fuel = document.getElementById("fourth")
var winning = 0;
var temp;
var co2;
var four;
var info = document.querySelector('.panel');
info.addEventListener('submit', (e) => {
  console.log("its working")
    e.preventDefault();
    const km = info.km.value;
    const type = info.type.value;
    const fuel = info.fuel.value;
    winning = Number(first.value);
    console.log(winning)
    temp = (second.value);
    console.log(temp)
    four = (fourth.value)
    if (temp === "KTM Suzuki") {

        if (four === "petrol") {
            co2 = (winning * 2.31) / 23;

        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 23;
        }
        alert(co2);
    }
    if (temp === "Yamaha Bajaj") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 28;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 28;
        }
        alert(co2);
    }
    if (temp === "Mahindra Vespa") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 30;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 30;
        }
        alert(co2);
    }
    if (temp === "zuki Hayabusa") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 34;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 34;
        }
        alert(co2);
    }
    if (temp === "MV Agusta") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 43;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 43;
        }
        alert(co2);
    }
    if (temp === "Super Blackbird") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 50;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 50;
        }
        alert(co2);
    }
    if (temp === "Agusta") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 60;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 60;
        }
        alert(co2);
}
    if (temp === "Royal Enfield Classic") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 65;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 65;
        }
        alert(co2);
    }
    if (temp === "Honda Activa ") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 74;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 74;
        }
        alert(co2);
        }
    if (temp === "Bajaj Pulsar") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 55;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 55;
        }
        alert(co2);
    }
    if (temp === "Ducati") {
        if (four === "petrol") {
            co2 = (winning * 2.31) / 44;
        }
        else if (four === "diesel") {
            co2 = (winning * 2.68) / 44;
        }
        alert(co2);
    }
});

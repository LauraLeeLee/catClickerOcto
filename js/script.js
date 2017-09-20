//--------------Model
var model = {
  currentCat: null,
  //array for crazy lady cat collection
   cats: [
    { img: "images/catclicker.jpg",
      name: "Kitty",
      count: 0,
      id: 1
    },
    { img: "images/catclicker2.jpg",
      name: "Mr. Tipps",
      count: 0,
      id: 2
    },
    { img: "images/catclicker3.jpg",
      name: "FraidyCat",
      count: 0,
      id: 3
    },
    { img: "images/catclicker4.jpg",
      name: "MsClawz",
      count: 0,
      id: 4
    },
    { img: "images/catclicker5.jpg",
      name: "ZsaZsa",
      count: 0,
      id:5
    }
  ]
};

//------------Octopus

var octopus = {
  init: function() {
    //sets current cat on page load to the first cat in list
    model.currentCat = model.cats[0];

    //intructs initialize of views
    catListView.init();
    catView.init();
  },
}

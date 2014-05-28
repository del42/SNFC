/* 
 This file was generated by Dashcode.  
 You may edit this file to customize your widget or web page 
 according to the license.txt file included in the project.
 */

//
// Function: load()
// Called by HTML body element's onload event when the web application is ready to start
//
function load()
{
    dashcode.setupParts();
    html5rocks.webdb.open();
    html5rocks.webdb.createTable();
    html5rocks.webdb.getAllObservations(loadObservations);
}

//
// Function: itemClicked()
// Called when an item from the items list is selected to navigate to the detail view
//
function itemClicked(event)
{
  
    var list = document.getElementById("list").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('detailLevel'), selectedObjects[0].valueForKey("name"));
    } 
}

function itemClicked1(event)
{
    var list = document.getElementById("list1").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('salamanderDetail'), selectedObjects[0].valueForKey("name"));
    }    
}
function itemClicked2(event)
{
    var list = document.getElementById("list2").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('frogDetail'), selectedObjects[0].valueForKey("name"));
    }    
}
function itemClicked3(event)
{
    var list = document.getElementById("list3").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('turtleDetail'), selectedObjects[0].valueForKey("name"));
    }    
}

function itemClicked4(event)
{
    var list = document.getElementById("list4").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('LizardDetail'), selectedObjects[0].valueForKey("name"));
    }    
}

function itemClicked5(event)
{
    var list = document.getElementById("list5").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('SnakeDetail'), selectedObjects[0].valueForKey("name"));
    }    
}
//
// Function: itemDescription()
// This method is a value transformer that returns the appropriate description of the selected item in the list
//
itemDescription = Class.create(DC.ValueTransformer,{
	transformedValue: function(value){
    var valuex = {};
        for (var i=0; i < value.length; i++) {
            alert(value[i].valueForKey("name"));
            if (value[i].valueForKey("name") == "Racer"){
               continue;
               }     
            else  value[i];
	}
    return valuex;
    }
});


function makeObservation(event)
{
    //getLocation(event);
    //var stackLayout = document.getElementById('stackLayout').object;
    //stackLayout.setCurrentView('Observe');
    var txt = document.getElementById("todo");
    var list = document.getElementById("list").object;
    var list1 = document.getElementById("list1").object;
    var list2 = document.getElementById("list2").object;
    var list3 = document.getElementById("list3").object;
    var list4 = document.getElementById("list4").object;
    var list5 = document.getElementById("list5").object;
    var browser = document.getElementById('browser').object;
    var selectedObjects = list.selectedObjects();
    var selectedObjects1 = list1.selectedObjects();
    var selectedObjects2 = list2.selectedObjects();
    var selectedObjects3 = list3.selectedObjects();
    var selectedObjects4 = list4.selectedObjects();
    var selectedObjects5 = list5.selectedObjects();
    
    if (selectedObjects && (1 == selectedObjects.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects[0].valueForKey("name"));
        txt.innerHTML = selectedObjects[0].valueForKey("name");
    } 
    else if (selectedObjects1 && (1 == selectedObjects1.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects1[0].valueForKey("name"));
        txt.innerHTML = selectedObjects1[0].valueForKey("name");
    } 
    else if (selectedObjects2 && (1 == selectedObjects2.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects2[0].valueForKey("name"));
        txt.innerHTML = selectedObjects2[0].valueForKey("name");
    }
    else if (selectedObjects3 && (1 == selectedObjects3.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects3[0].valueForKey("name"));
        txt.innerHTML = selectedObjects3[0].valueForKey("name");
        
    }
    else if (selectedObjects4 && (1 == selectedObjects4.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects4[0].valueForKey("name"));
        txt.innerHTML = selectedObjects4[0].valueForKey("name");
    }
    else if (selectedObjects5 && (1 == selectedObjects5.length)){
        // The Browser's goForward method is used to make the browser push down to a new level.
        // Going back to previous levels is handled automatically.
        browser.goForward(document.getElementById('Observe'), selectedObjects5[0].valueForKey("name"));
        txt.innerHTML = selectedObjects5[0].valueForKey("name");
    }
}


function goToGroups(event)
{
    var stackLayout = document.getElementById('stackLayout').object;
    stackLayout.setCurrentView('GroupsView');
}


function goToSpecies(event)
{
    var stackLayout = document.getElementById('stackLayout').object;
    stackLayout.setCurrentView('listLevel');
}


function goToObserve(event)
{
    var stackLayout = document.getElementById('stackLayout').object;
    stackLayout.setCurrentView('Observe');
}

//get geological location 
function getLocation(event)
  {
  if (navigator.geolocation)
    {
    navigator.geolocation.getCurrentPosition(show);
    }
  else
    {
    var lat=document.getElementById("latPos");
    lat.innerHTML="Geolocation is not supported by this browser.";
    }
  }
  var lat=document.getElementById("latPos");
  var lon=document.getElementById("lonPos");
//
function show(position)
  {
  var lat=document.getElementById("latPos");
  var lon=document.getElementById("lonPos");
  lat.innerHTML=position.coords.latitude;	
  lon.innerHTML=position.coords.longitude;
  }
 
    var html5rocks = {};
    html5rocks.webdb = {};
    html5rocks.webdb.db = null;

html5rocks.webdb.open = function() {
    var dbSize = 5 * 1024 * 1024; // 5MB
    html5rocks.webdb.db = openDatabase("SNFC", "1.0", "SNFC manager", dbSize);
}

html5rocks.webdb.createTable = function() {
    var db = html5rocks.webdb.db;
    db.transaction(function(tx) {
      tx.executeSql("CREATE TABLE IF NOT EXISTS snfcDB(ID INTEGER PRIMARY KEY ASC, name TEXT, img TEXT,  added_on DATETIME,latitude TEXT,longitude TEXT)", []);
    });
}

html5rocks.webdb.addObservations = function(todoText,img,latitude,longitude) {
    var db = html5rocks.webdb.db;
    db.transaction(function(tx){
      var addedOn = new Date();
      tx.executeSql("INSERT INTO snfcDB(name, img, added_on,latitude,longitude) VALUES (?,?,?,?,?)",
          [todoText, img, addedOn,latitude,longitude],
          html5rocks.webdb.onSuccess,
          html5rocks.webdb.onError);
     });
}

html5rocks.webdb.onError = function(tx, e) {
    alert("There has been an error: " + e.message);
}

html5rocks.webdb.onSuccess = function(tx, r) {
    // re-render the data.
    html5rocks.webdb.getAllObservations(loadObservations);
}


html5rocks.webdb.getAllObservations = function(renderFunc) {
    var db = html5rocks.webdb.db;
    db.transaction(function(tx) {
      tx.executeSql("SELECT * FROM snfcDB", [], renderFunc,
          html5rocks.webdb.onError);
    });
}

html5rocks.webdb.deleteObservations = function(id) {
    var db = html5rocks.webdb.db;
    db.transaction(function(tx){
      tx.executeSql("DELETE FROM snfcDB WHERE ID=?", [id],
          html5rocks.webdb.onSuccess,
          html5rocks.webdb.onError);
      });
}

function loadObservations(tx, rs) {
    var rowOutput = "";
    var observations = document.getElementById("observedItems");
    for (var i=0; i < rs.rows.length; i++) {
      rowOutput += renderObservation(rs.rows.item(i));
    }
    observations.innerHTML = rowOutput;
}

function renderObservation(row) {
    return  "<div id='container'><label id='nameLabel'>"+row.name+"</label><br><img id='obsImage' src="+row.img+"><br><label id='latLabel'>"+row.latitude+"</label><br><label id='lonLabel'>"+row.longitude+"</label><br><label id='dateLabel'>"+row.added_on+"</label><br><button id='delete' onclick='html5rocks.webdb.deleteObservations(" + row.ID +");'>Delete</button><button id='email' onclick='sendEmail(" + row.ID +");'>eMail</button></div>";
}

function init() {
    html5rocks.webdb.open();
    html5rocks.webdb.createTable();
    html5rocks.webdb.getAllObservations(loadObservations);
}

function addObservations() {
    var todo = document.getElementById("todo");
    var blah = document.getElementById("blah");
    var latty = document.getElementById("latPos"); 
    var longy = document.getElementById("lonPos");
    html5rocks.webdb.addObservations(todo.innerHTML,blah.src,latty.innerHTML, longy.innerHTML);
    todo.value = "";
    alert("Observation saved!");
}

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#blah').attr('src', e.target.result);
                            
            }
            reader.readAsDataURL(input.files[0]);

        }
    }
 $("#imgInp").change(function(){readURL(this);});    

function sendEmail(event)
{
  var td = document.getElementById("header");
    var db = html5rocks.webdb.db;
    var msg;
    db.transaction(function (tx) {
                   tx.executeSql("SELECT img, name, latitude, longitude, added_on FROM snfcDB where ID=?", [event], function (tx, results) {
                                 msg =  results.rows.item(0).img;
                                 name = results.rows.item(0).name;
                                 date = results.rows.item(0).added_on;
                                 lattyOfobs = results.rows.item(0).latitude;
                                 longyOfobs = results.rows.item(0).longitude;
                                 body = ""+date+"<br><img width='300' height='240' src="+msg+"><br>Latitude = "+lattyOfobs+"<br>Longitude = "+longyOfobs+"<br>";
                                 window.location.href = "mailto:?Subject="+name+" observation &Body="+body+"";
                                 }, null);
                   });
}


function goToMyObservations(event)
{
    var stackLayout = document.getElementById('stackLayout').object;
    stackLayout.setCurrentView('Observations');
}

function goToHome(event)
{
    var stackLayout = document.getElementById('stackLayout').object;
    stackLayout.setCurrentView('Home');
}

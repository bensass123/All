var returnData, map;
var infoArray = [];
var dayArray = [];
var weekArray = [];
var monthArray = [];
var markerArray = [];
var trafficSet = false;
var trafficLayer;
var dateSelector = 'week';
var oArgs;
var searchArea = '';
var pageSize = 250;
var runOnce = false;

function textInputValidate(text){
    return text.replace(/[\W \/ ]+/g,'');
}

//dropdown listener

$(window).load(function(){
     $(function(){
         $(".dropdown-menu").on("click", "a", function(event){
             console.log("You clicked the drop downs " + $(this).data('date'));
             if ($(this).data('date') === 'today'){
                createTable(dayArray); 
                createMarkers(dayArray);     
             } 
             if ($(this).data('date') === 'week'){
                createTable(weekArray);
                createMarkers(weekArray);       
             }
             if ($(this).data('date') === 'month'){
                createTable(monthArray);
                createMarkers(monthArray);       
             }
             if ($(this).data('date') === 'all'){
                createTable(returnData);  
                createMarkers(returnData);     
             }
             //should add functionality to return to original custom search
         });
     });

    $(function(){
         $("#add-submit").on("click",  function(event){
            event.preventDefault();
            $('tbody').empty();
            var city = textInputValidate($('#city').val().trim());
            // var within = $('#within').val().trim();
            var range1 = $('#range1').val().trim().toString();
            var range2 = $('#range2').val().trim().toString();

            moment(range2, 'MM/DD/YYYY').format('YYYYMMDD');

            if (range1 && range2){
                var range1formatted = moment(range1, 'MM/DD/YYYY').format('YYYYMMDD');
                var range2formatted = moment(range2, 'MM/DD/YYYY').format('YYYYMMDD');
                range1formatted += '00';
                range2formatted += '00';
            }
            else {
                range1formatted = null;
                range2formatted = null;
            }


            if(!city){
                city = null;
            }

            console.log(city + ' ' + range1formatted + ' ' + range2formatted );

            createCustomSearch(city, range1formatted, range2formatted);

            //city within range1 range 2
        });

    });
});


//to test: createCustomSearch('seattle', '20170221', '20170222',  5);
var gLat, gLong;

function createCustomSearch() {




    $('#loadingIcon').removeClass('hidden');
    var location = arguments[0];
    var startRange = arguments[1];
    var endRange = arguments[2];
    // var within = arguments[3];


    // removed, not going to use geo coding here to implement the within feature for searches in other cities, will slow it down more and don't really need functionality
    // another implementation that would be better woudl be to allow user to specify from map click their location, then within would be easy
    
    // if (within && location){
    //     var geocoder =  new google.maps.Geocoder();
    //     geocoder.geocode( { 'address': location}, function(results, status) {
    //         if (status == google.maps.GeocoderStatus.OK) {
    //             gLat = results[0].geometry.location.lat();
    //             gLong = results[0].geometry.location.lng();
    //             location = gLat + ', ' + gLong;
    //             console.log(location +'=location baddabing' + gLat +' ' + gLong);
    //         } 
    //         else {
    //             alert("Something got wrong " + status);
    //         }
    //     });
    // }
    


    //within
    // if(within){
    //     withinLast = within;
    // }

    
    //formatting date-range
    if(startRange && endRange){
        //add back in when date is being given in diff format
        startFormatted = startRange;
        endFormatted = endRange;

        var date =  startFormatted + '-' + endFormatted;
    }
    else{
        //using original date range if it hasnt changed
        date = returnCurrentDatePlusDayRange(60);
    }

    //setting location if available
    if(location){
        searchArea = location;
        console.log('searchArea =' + searchArea);
    }


    //if ranges requested two calls are necessary, otherwise, only do one call on new location
    if (startRange && endRange){
          oArgs = {

              app_key: "cwS4RsHxLmMG3kx7",

              where: searchArea,

              within: 25,

              "date": date,

              page_size: pageSize,

              sort_order: "date",

              change_multi_day_start: true,

              category: 'music'

              // after_start_date: currentDate

          };

        console.log(oArgs);

        EVDB.API.call("/events/search", oArgs, function(oData) {
            customData = oData.events.event;
            

            for (let i = 0; i < customData.length; i++){
                console.log(customData[i]);
            }

            var currentDate2 = moment().format("YYYYMMDD");
            var endDateW = moment().add(7, 'day').format("YYYYMMDD");
            var endDateM = moment().add(30, 'day').format("YYYYMMDD");

            customData.forEach(item => {
                let startTimeTest = moment(item.start_time).format("YYYYMMDD");
                if(!item.title && !item.performers) {
                    customData.splice(customData.indexOf(item), 1);
                }

            });

            createTable(customData);
            createMarkers(customData);

              map.setCenter(marker.getPosition());


            

            //creating week and month arrays, if not a range-based custom

        });

        oArgs2 = {

            app_key: "cwS4RsHxLmMG3kx7",

            where: searchArea,

            within: 25,

            "date": returnCurrentDatePlusDayRange(60),

            page_size: pageSize,

            sort_order: "date",

            change_multi_day_start: true,

            category: 'music'

            // after_start_date: currentDate
        };

        

            EVDB.API.call("/events/search", oArgs2, function(oData) {
              returnData = oData.events.event;
              

              for (let i = 0; i < returnData.length; i++){
                  console.log(returnData[i]);
              }

              var currentDate2 = moment().format("YYYYMMDD");
              var endDateW = moment().add(7, 'day').format("YYYYMMDD");
              var endDateM = moment().add(30, 'day').format("YYYYMMDD");
              weekArray = [];
              monthArray = [];
              dayArray = [];

              //creating new arrays for week, month and day
              returnData.forEach(item => {
                  let startTimeTest = moment(item.start_time).format("YYYYMMDD");
                  if(!item.title && !item.performers) {
                      returnData.splice(returnData.indexOf(item), 1);
                  }
                  console.log('start time is ' + item.start_time);

                  if(endDateW > startTimeTest) {   //event date is less than now plus seven days
                      // console.log(startTimeTest + ' is before ' + endDateW);
                      weekArray.push(item);
                  }
                  if(endDateM > startTimeTest) {   //event date is less than now plus 30 days
                      // console.log(startTimeTest + ' is before ' + endDateM);
                      monthArray.push(item);
                  }
                  if(currentDate2 === startTimeTest) {   //date is the same as today
                      // console.log(startTimeTest + ' is the same as ' + currentDate2);
                      dayArray.push(item);
                  }

              });

            });

    }
    else {

      oArgs2 = {

            app_key: "cwS4RsHxLmMG3kx7",

            where: searchArea,

            within: 25,

            "date": returnCurrentDatePlusDayRange(60),

            page_size: pageSize,

            sort_order: "date",

            change_multi_day_start: true,

            category: 'music'

      };

      EVDB.API.call("/events/search", oArgs2, function(oData) {

              returnData = oData.events.event;
              

              var currentDate2 = moment().format("YYYYMMDD");
              var endDateW = moment().add(7, 'day').format("YYYYMMDD");
              var endDateM = moment().add(30, 'day').format("YYYYMMDD");
              weekArray = [];
              monthArray = [];
              dayArray = [];

              //creating new arrays for week, month and day
              returnData.forEach(item => {
                  let startTimeTest = moment(item.start_time).format("YYYYMMDD");
                  if(!item.title && !item.performers) {
                      returnData.splice(returnData.indexOf(item), 1);
                  }
                  // console.log('start time is ' + item.start_time);

                  if(endDateW > startTimeTest) {   //event date is less than now plus seven days
                      // console.log(startTimeTest + ' is before ' + endDateW);
                      weekArray.push(item);
                  }
                  if(endDateM > startTimeTest) {   //event date is less than now plus 30 days
                      // console.log(startTimeTest + ' is before ' + endDateM);
                      monthArray.push(item);
                  }
                  if(currentDate2 === startTimeTest) {   //date is the same as today
                      // console.log(startTimeTest + ' is the same as ' + currentDate2);
                      dayArray.push(item);
                  }

              });
              createTable(returnData);
              createMarkers(returnData);
            });

    }
    
}



// Initialize Firebase //
var config = {
apiKey: "AIzaSyCyBk3Ao56DrRy2sovQJ9VvxamP158Nr84",
authDomain: "firstproject-731d4.firebaseapp.com",
databaseURL: "https://firstproject-731d4.firebaseio.com",
storageBucket: "firstproject-731d4.appspot.com",
messagingSenderId: "1081920125981"
};
firebase.initializeApp(config);
var database = firebase.database();


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in, display name
    $("#insert-name").text(user.displayName);
  } else {
    // // No user is signed in, send to login page
     window.location.href = "homepage.html";
  }
});



// sign out
$('#sign-out').on("click", function() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      window.location.href = "homepage.html";
    }, function(error) {
      console.log(error.code);
    });
});

//get the correct date range
function returnCurrentDatePlusDayRange(r){
    let currentDate = moment().format("YYYYMMDD");
    let endDate = moment().add(r, 'day').format("YYYYMMDD");
    currentDate += '00';
    endDate += '00';
    return currentDate + '-' + endDate;
}

function createTable(activeArray){

    //make table appear, table display block
    

    //start fresh with new table
    $('#concert-table > tbody').empty();

    //put data into table concert-table
    $.each(activeArray, function(i, item) {
        let startTime = moment(item.start_time).format("h:mm - M/DD/YY");

        //setting link to google maps directions
        var addressLink = $('<a>').attr({
            href: 'http://maps.google.com/?q=' + item.venue_address + ' ' + item.city_name,
            target: '_blank'
        });
        addressLink.text('Click for Directions');

        //appending everything to the DOM

        $('#concert-table > tbody:last').append('<tr><td>' + item.title + '</td>' + '<td>' + item.venue_name + '</td>' + '<td>' + addressLink[0].outerHTML + '</td>' + '<td>' + startTime + '</td></tr>');
        // console.log(addressLink);
    });

    $('#loadingIcon').addClass('hidden');
}


function createMarkers(activeArray){
    infoArray = [];

    for (i in markerArray){
        markerArray[i].setMap(null);
    }

    markerArray = [];
    
    for (var i = 0; i < activeArray.length; i++) {

         //initializing DOM node to display info (info window)
         var nodeToAdd = $('<div>').append($('<h1>' + activeArray[i].title + '</h1>'));
         nodeToAdd.append($('<h2>@' + activeArray[i].venue_name + '</h2>'));


         //formatting the address hotlink to google maps for mobile or web
         var addressLink = $('<a>').attr({
             href: 'http://maps.google.com/?q=' + activeArray[i].venue_address + ' ' + activeArray[i].city_name,
             target: '_blank'
         });
         //formatting the DOM node to append to the info window
         addressLink.append($('<h2>' + activeArray[i].venue_address + '</h2>'));
         nodeToAdd.append(addressLink);
         nodeToAdd.append('<p>(Click for Directions)</p>');

         nodeToAdd.append($('<h2>' + moment(activeArray[i].start_time).format('h:mm a') + ' on ' + moment(activeArray[i].start_time).format('MM/DD/YY') + '</h2>'));

         //hotlinking the ticket web address for a direct click rather than having to go through multiple links
         var ticketURL = activeArray[i].url;
         ticketURL = ticketURL.split('?')[0];
         ticketURL += '/tickets?lid=edp&spot=main&source=edp';
         ticketURL = $('<a>').attr({
             href: ticketURL,
             target: '_blank'
         });
         var ticketURLButton = $('<div> BUY TICKETS </div>');
         ticketURLButton.addClass('info-ticket-button text-center');
         ticketURL.append(ticketURLButton);
         nodeToAdd.append(ticketURL);
         nodeToAdd.addClass('text-center info-window-text');
         nodeToAdd.append(activeArray[i].description);

         //marking the current location of that event to store for later use
         var currentLocation = {
             lat: parseFloat(activeArray[i].latitude),
             lng: parseFloat(activeArray[i].longitude)
         }

         //storing the marker in an array to save for later use (markers go on the google map)
         var marker = new google.maps.Marker({
             position: currentLocation,
             map: map,
             title: activeArray[i].title,
             index: i,
         });

         //keeping track of all the markers we've created in an array (used for matching correct info window to its correct marker)
         markerArray.push(marker);

         //creating an info window for it's corresponding marker and appending the DOM node we just created inside of it
         var infoWindow = new google.maps.InfoWindow({
             content: nodeToAdd[0].outerHTML,
             index: i
         });

         //keeping track of the infoWindows we've created to match them correctly to their marker
         infoArray.push(infoWindow);

         //adding event listeners to each marker for a click and matching them with their correct info windows
         marker.addListener('click', function() {
             infoArray[this.index].open(map, markerArray[this.index]);
         });
    }
    if (runOnce){
      map.setCenter(markerArray[0].getPosition());
    }
}


//call to the eventful API
function eventArrayReturn(latLong, map) {

    let currentDate = moment().format("YYYYMMDD");

    oArgs = {

        app_key: "cwS4RsHxLmMG3kx7",

        where: latLong,

        within: 15,

        "date": returnCurrentDatePlusDayRange(60),

        page_size: pageSize,

        sort_order: "date",

        change_multi_day_start: true,

        category: 'music'

        // after_start_date: currentDate

    };

    EVDB.API.call("/events/search", oArgs, function(oData) {
        returnData = oData.events.event;
        

        for (let i = 0; i < returnData.length; i++){
            console.log(returnData[i]);
        }

        var currentDate2 = moment().format("YYYYMMDD");
        var endDateW = moment().add(7, 'day').format("YYYYMMDD");
        var endDateM = moment().add(30, 'day').format("YYYYMMDD");

        returnData.forEach(item => {
            let startTimeTest = moment(item.start_time).format("YYYYMMDD");
            if(!item.title && !item.performers) {
                returnData.splice(returnData.indexOf(item), 1);
            }
            console.log('start time is ' + item.start_time);

            if(endDateW > startTimeTest) {   //event date is less than now plus seven days
                console.log(startTimeTest + ' is before ' + endDateW);
                weekArray.push(item);
            }
            if(endDateM > startTimeTest) {   //event date is less than now plus 30 days
                console.log(startTimeTest + ' is before ' + endDateM);
                monthArray.push(item);
            }
            if(currentDate2 === startTimeTest) {   //date is the same as today
                console.log(startTimeTest + ' is the same as ' + currentDate2);
                dayArray.push(item);
            }

        });

        createTable(returnData);
        createMarkers(returnData);
        runOnce = true;
    });

}

//setting a default value for the user location, in case of geolocation fail
var contentString;
var myLatLng = {
    lat: 35.243795,
    lng: -81.035947
};


//function to run if geolocation succeeds(overwrites the default value set above)
function positionSuccess(position) {
    console.log(position);
    myLatLng.lat = position.coords.latitude;
    myLatLng.lng = position.coords.longitude;
    map.setCenter(myLatLng);
}
//function to run in case geolocation fails
function positionError(message) {
    console.log(message);
}




//map function to start the map, doesn't run until DOM loads
function initialise() {
    var lat, lng, accuracy, pos;

    //settting a watch on the geolocation function on the user (they have to allow)
    navigator.geolocation.watchPosition(positionSuccess, positionError, {
        enableHighAccuracy: true,
        timeout: 10000
    });

    //setting our global map variable equal to a newly generated google maps
    map = new google.maps.Map(document.getElementById('mapresult'), {
        zoom: 12,
        center: myLatLng
    });
    
    //setting a global traffic layer to toggle on and off at user's discretion
    trafficLayer = new google.maps.TrafficLayer();
    $('#traffic').on('click', function(){
        
        if(!trafficSet){
            trafficLayer.setMap(map);
            trafficSet = true;
        } 
        else {
            trafficLayer.setMap(null);
            trafficSet = false;
        }
        
    });
    

    // Try HTML5 geolocation. calls the function to get their position
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            //centers the map on the newly grabbed position
            map.setCenter(pos);

            //get events from eventful API
            eventArrayReturn(pos.lat.toString() + ", " + pos.lng.toString(), map);

            searchArea = pos.lat.toString() + ", " + pos.lng.toString();


        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }    
    
}

//making sure the DOM is loaded before trying to load the map
$(document).ready(function(){
    //this is why we were getting errors all the time earlier, now google maps never tries to load until the whole page is loaded
    google.maps.event.addDomListener(window, 'load', initialise);
});

// Make sure the document is ready to be handled
$(document).ready(function($) {

  // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)
  xively.setKey( "rQ6YvuNELKLR8Wj0RkblfS3UwM7Q5Vf35d5Ond6I34FKabEk" );
  
  // Replace with your own values
  var feedID        = 483265714;        // Feed ID (the last number on the URL on the feed page on Xively)
      
  xively.feed.get (feedID, function (data) {
    // Display the value from the datastream
    $("#title").html( data["title"] );
    // The function associated with the subscribe method will be executed
    // every time there is an update to the datastream
    xively.feed.subscribe( feedID, function ( event , feed_updated ) {
      // Display the value from the updated datastream
      $("#title").html( feed_updated["title"] );
    });
  });
  
  // Get datastream data from Xively
  xively.datastream.get (feedID, "AssemblyArea", function (datastream) {
    $("#assemblyarea").html( datastream["current_value"] );
    // The function associated with the subscribe method will be executed
    // every time there is an update to the datastream
    xively.datastream.subscribe( feedID, "AssemblyArea", function ( event , datastream_updated ) {
      // Display the value from the updated datastream
      $("#assemblyarea").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedID, "MedicalDispensary", function (datastream) {
    $("#medicaldispensary").html( datastream["current_value"] );
    // The function associated with the subscribe method will be executed
    // every time there is an update to the datastream
    xively.datastream.subscribe( feedID, "MedicalDispensary", function ( event , datastream_updated ) {
      // Display the value from the updated datastream
      $("#medicaldispensary").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedID, "ReceptionOffice", function (datastream) {
    $("#receptionoffice").html( datastream["current_value"] );
    // The function associated with the subscribe method will be executed
    // every time there is an update to the datastream
    xively.datastream.subscribe( feedID, "ReceptionOffice", function ( event , datastream_updated ) {
      // Display the value from the updated datastream
      $("#receptionoffice").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feedID, "SleepingQuarter", function (datastream) {
    $("#sleepingquarter").html( datastream["current_value"] );
    // The function associated with the subscribe method will be executed
    // every time there is an update to the datastream
    xively.datastream.subscribe( feedID, "SleepingQuarter", function ( event , datastream_updated ) {
      // Display the value from the updated datastream
      $("#sleepingquarter").html( datastream_updated["current_value"] );
    });
  });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,
  // use the function associated with datastream.get to work with the data
  // once the request is complete
});

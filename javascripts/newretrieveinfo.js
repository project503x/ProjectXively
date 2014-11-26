// Make sure the document is ready to be handled
$(document).ready(function($) {

  // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)
  xively.setKeyA( "A4lGfHsBnd3sTzbltW9J6SgkHH4pzcQxlf7zGAo1qxlS1Wkc" );
  xively.setKeyB( "rQ6YvuNELKLR8Wj0RkblfS3UwM7Q5Vf35d5Ond6I34FKabEk" );
  
  // Replace with your own values
  var feedA        = 1260369820;        // Feed ID (the last number on the URL on the feed page on Xively)
      feedB        = 483265714;
  
  // feedA
  xively.feed.get (feedA, function (data) {
    $("#title").html( data["title"] );
    xively.feed.subscribe( feedA, function ( event , feed_updated ) {
      $("#title").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feedA, "AssemblyArea", function (datastream) {
    $("#assemblyarea").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyarea").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedA, "MedicalDispensary", function (datastream) {
    $("#medicaldispensary").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensary").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedA, "ReceptionOffice", function (datastream) {
    $("#receptionoffice").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionoffice").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feedA, "SleepingQuarter", function (datastream) {
    $("#sleepingquarter").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarter").html( datastream_updated["current_value"] );
    });
  });
  
  // feedB
  xively.feed.get (feedB, function (data) {
    $("#title").html( data["title"] );
    xively.feed.subscribe( feedB, function ( event , feed_updated ) {
      $("#title").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feedB, "AssemblyArea", function (datastream) {
    $("#assemblyarea").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyarea").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedB, "MedicalDispensary", function (datastream) {
    $("#medicaldispensary").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensary").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedB, "ReceptionOffice", function (datastream) {
    $("#receptionoffice").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionoffice").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feedB, "SleepingQuarter", function (datastream) {
    $("#sleepingquarter").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarter").html( datastream_updated["current_value"] );
    });
  });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,
  // use the function associated with datastream.get to work with the data
  // once the request is complete
});

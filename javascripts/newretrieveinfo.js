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
    $("#titleA").html( data["title"] );
    xively.feed.subscribe( feedA, function ( event , feed_updated ) {
      $("#titleA").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feedA, "AssemblyArea", function (datastream) {
    $("#assemblyareaA").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyareaA").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedA, "MedicalDispensary", function (datastream) {
    $("#medicaldispensaryA").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensaryA").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedA, "ReceptionOffice", function (datastream) {
    $("#receptionofficeA").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionofficeA").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feedA, "SleepingQuarter", function (datastream) {
    $("#sleepingquarterA").html( datastream["current_value"] );
    xively.datastream.subscribe( feedA, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarterA").html( datastream_updated["current_value"] );
    });
  });
  
  // feedB
  xively.feed.get (feedB, function (data) {
    $("#titleB").html( data["title"] );
    xively.feed.subscribe( feedB, function ( event , feed_updated ) {
      $("#titleB").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feedB, "AssemblyArea", function (datastream) {
    $("#assemblyareaB").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyareaB").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedB, "MedicalDispensary", function (datastream) {
    $("#medicaldispensaryB").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensaryB").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feedB, "ReceptionOffice", function (datastream) {
    $("#receptionofficeB").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionofficeB").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feedB, "SleepingQuarter", function (datastream) {
    $("#sleepingquarterB").html( datastream["current_value"] );
    xively.datastream.subscribe( feedB, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarterB").html( datastream_updated["current_value"] );
    });
  });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,
  // use the function associated with datastream.get to work with the data
  // once the request is complete
});

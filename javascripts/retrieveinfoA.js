// Make sure the document is ready to be handled
$(document).ready(function($) {

  // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)
  xively.setKey( "A4lGfHsBnd3sTzbltW9J6SgkHH4pzcQxlf7zGAo1qxlS1Wkc" );
  
  // Replace with your own values
  var feed        = 1260369820;        // Feed ID (the last number on the URL on the feed page on Xively)
  
  xively.feed.get (feed, function (data) {
    $("#titleA").html( data["title"] );
    xively.feed.subscribe( feed, function ( event , feed_updated ) {
      $("#titleA").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feed, "AssemblyArea", function (datastream) {
    $("#assemblyareaA").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyareaA").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feed, "MedicalDispensary", function (datastream) {
    $("#medicaldispensaryA").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensaryA").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feed, "ReceptionOffice", function (datastream) {
    $("#receptionofficeA").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionofficeA").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feed, "SleepingQuarter", function (datastream) {
    $("#sleepingquarterA").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarterA").html( datastream_updated["current_value"] );
    });
  });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,
  // use the function associated with datastream.get to work with the data
  // once the request is complete
});

// Make sure the document is ready to be handled
$(document).ready(function($) {

  // Set the Xively API key (https://xively.com/users/YOUR_USERNAME/keys)
  xively.setKey( "rQ6YvuNELKLR8Wj0RkblfS3UwM7Q5Vf35d5Ond6I34FKabEk" );
  
  // Replace with your own values
  var feed        = 483265714;        // Feed ID (the last number on the URL on the feed page on Xively)
  
  xively.feed.get (feed, function (data) {
    $("#titleB").html( data["title"] );
    xively.feed.subscribe( feed, function ( event , feed_updated ) {
      $("#titleB").html( feed_updated["title"] );
    });
  });
  
  xively.datastream.get (feed, "AssemblyArea", function (datastream) {
    $("#assemblyareaB").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "AssemblyArea", function ( event , datastream_updated ) {
      $("#assemblyareaB").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feed, "MedicalDispensary", function (datastream) {
    $("#medicaldispensaryB").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "MedicalDispensary", function ( event , datastream_updated ) {
      $("#medicaldispensaryB").html( datastream_updated["current_value"] );
    });
  });
  
  xively.datastream.get (feed, "ReceptionOffice", function (datastream) {
    $("#receptionofficeB").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "ReceptionOffice", function ( event , datastream_updated ) {
      $("#receptionofficeB").html( datastream_updated["current_value"] );
    });
  });

  xively.datastream.get (feed, "SleepingQuarter", function (datastream) {
    $("#sleepingquarterB").html( datastream["current_value"] );
    xively.datastream.subscribe( feed, "SleepingQuarter", function ( event , datastream_updated ) {
      $("#sleepingquarterB").html( datastream_updated["current_value"] );
    });
  });
  
  // WARNING: Code here will continue executing while we get the datastream data from Xively,
  // use the function associated with datastream.get to work with the data
  // once the request is complete
});

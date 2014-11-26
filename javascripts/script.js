(function ( $ ){
  "use strict";
  
  var feedID = 1260369820;
  
  // SET API KEY
  xively.setKey( "WmcVId0fSn2bwMwkq0DmBMDdOkjpQ42YlnE1pGDVDKTHbmNV" ); // do not use this one, create your own at xively.com
  
  // get all feed data in one shot
  
  xively.feed.get (feedID, function (data) {
    // this code is executed when we get data back from Xively
    var feed = data, datastream, value,
    // loop through datastreams
    
    for (var x = 0, len = feed.datastreams.length; x < len; x++) {
      datastream = feed.datastreams[x];
      value = parseInt(datastream["current_value"]);
      
      // AssemblyArea
      if ( datastream.id === "AssemblyArea" ) {
        var $assembly = $("#assemblyarea");
        $assembly.html( datastream["current_value"] );
        
        // make it live
        xively.datastream.subscribe( feedID, "AssemblyArea", function ( event, data ) {
          $assembly.html( data["current_value"] );
        });
      }
      
      // MedicalDispensary
      if ( datastream.id === "MedicalDispensary" ) {
        var $assembly = $("#medicaldispensary");
        $assembly.html( datastream["current_value"] );
        
        // make it live
        xively.datastream.subscribe( feedID, "MedicalDispensary", function ( event, data ) {
          $assembly.html( data["current_value"] );
        });
      }
      
      / ReceptionOffice
      if ( datastream.id === "ReceptionOffice" ) {
        var $assembly = $("#receptionoffice");
        $assembly.html( datastream["current_value"] );
        
        // make it live
        xively.datastream.subscribe( feedID, "ReceptionOffice", function ( event, data ) {
          $assembly.html( data["current_value"] );
        });
      }
      
      // SleepingQuarter
      if ( datastream.id === "SleepingQuarter" ) {
        var $assembly = $("#sleepingquarter");
        $assembly.html( datastream["current_value"] );
        
        // make it live
        xively.datastream.subscribe( feedID, "SleepingQuarter", function ( event, data ) {
          $assembly.html( data["current_value"] );
        });
      }
      
    }
  });
})( jQuery );

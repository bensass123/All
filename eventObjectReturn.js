var dataObj;

function eventArrayReturn(){



   var oArgs = {

      app_key: "cwS4RsHxLmMG3kx7",

      q: "music",

      where: "Charlotte", 

      "date": "2017011700-2017012500",

      page_size: 20,

      sort_order: "popularity",

   };

   EVDB.API.call("/events/search", oArgs, function(oData) {
      // Note: this relies on the custom toString() methods below
      return oData.events.event;

    });

}

var ncp = require("copy-paste");

console.log();

ncp.paste(function(_, clipboard) {
  var tickets = getTicketsFromString(clipboard);
  var JQLString = getJQLFromTicketArray(tickets);

  if (JQLString != null) {
    ncp.copy(JQLString);

    console.log("Copied JQL to clipboard:")
    console.log(JQLString);
  }

  console.log();
});

function getTicketsFromString(string) {
  var regex = /[A-Z]{1,}-[0-9]{1,}/g;
  var ticketArray = string.match(regex);

  return ticketArray;
}

function getJQLFromTicketArray(ticketArray) {
  if (ticketArray == null || ticketArray.length == 0) {
    console.log("No tickets found... Did you copy the right text?");
    return null;
  }
  else {
    console.log("Found " + ticketArray.length + " tickets!");
    console.log();
  }

  var JQLString = "issueKey in (";

  ticketArray.forEach(ticketKey => {
    JQLString += ticketKey + ", ";
  });

  JQLString = JQLString.substr(0, JQLString.length - 2);
  JQLString += ")";

  return JQLString;
}
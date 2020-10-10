# jql-from-text

This node script takes the contents of the clipboard and extracts all potential jJira ticket keys from it, returning a JQL filter which can be used in Jira to display those tickets.

## Installation

1. Clone the repository
1. Run npm install

## Usage

1. Copy text top clipboard, e.g.
> https://kanasoftware.jira.com/browse/VOC-562 (Review Acs and ticket description)
https://kanasoftware.jira.com/browse/VOC-2447 (Review Acs and ticket description)
https://kanasoftware.jira.com/browse/VOC-12981 (Review Acs and ticket description)
https://kanasoftware.jira.com/browse/VOC-9747 (Review Acs and ticket description)
https://kanasoftware.jira.com/browse/VOC-12980 (Review Acs and ticket description)
2. Run `./jql-from-text/jql-from-text`
3. JQL filter content is returned to the clipboard, i.e.

> `issueKey in (VOC-562, VOC-2447, VOC-12981, VOC-9747, VOC-12980)`

4. Open your Jira instance
4. Go to the advanced search page
4. Paste the search term and press enter
4. Enjoy easily navigating through the issues found in the original text 🙌

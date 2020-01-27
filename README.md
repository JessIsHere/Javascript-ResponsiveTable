# javascript-challenge

HTML NOTES:

NOTES ON <!DOCTYPE html>:
We are declaring the DOCTYPE html as an instruction to the browser of what version of HTML the page is written in. Doctype must be declared at the begining of your code: HTML 5 is just <!DOCTYPE html>


 NOTES ON <html>: 
Tag that specifies webpage is written in html. AKA "root element" - tag is the parent tag for every other tag on the page. First and Last line of the page.</html>

    - HTML 4.01 Strict, Transitional, and Frameset are DTD (Document Type Definition) with different abilities or limitations. These versions were based of the use of SMGL (Standard Generalized Markup Language).

    - HTML 5 Differences
        - Supports SVG( Scalable Vector Graphics) while HTML needed to add additional tech (Flash, VML, etc.)
        - Web SQL databases are used to store data temp. Before HTML was stored in browser cache data. 
        - HTML 5 improved parsing rules enhancing compatibility (moved from SGML).
        - New form controls, new elements. No longer restricted use of MathML and SVG.

NOTES ON <head>:
    Specfies meta data about the webpage. Includes site name, dependencies (JS and CSS scripts), font usage etc. 

NOTES ON <meta>:

Information about data (metadata). Is not displayed on the page, but is machine parsable. Used by browsers (display and reload), search engines (keywords), etc. Typically stores info about author, last modification, etc.

    - meta tags always go in <head> element
    - Always passed in name = "meta" content = "name-value pairs"

A viewport element - gives browser instructions on how to control dimensions and scaling. 
    Five Attributes: 
        - charset: specifies character encoding for doc. Default is UTF-8. Used to be ASCII then ISO-8859-1. The previous character sets were limited and not compatible with a multilingual environment. 
        - content: says things
        - name: specifice name for metadata and for the information/value of the content attribute. Also defines veiwport to control view and scaling on devices.

NOTES ON <title>: 
Title of page - search engines use this tag to extract topic of webpage - relevant to ranking search results for the page.

NOTES ON <body>:
All the fun shit. 

EXPLANATION OF WHAT IS HAPPENING IN THIS .HTML

    HEADER: Specifiying character encoding, providing information about the page through "name", linking page to external scripts (css) and declaring the viewport settings. Whe have links to Bootstrap (using library instead of writing all css), google api for fonts, and our css stylesheet. Title included.

    BODY: Starting with a div class "wrapper". TBH not sure why we are using wrapper instead of container. Some say it doesn't matter, but it seems that a wrapper wraps around a single object to provide more functionality and interface to it. A container is used for structures that contain more than one element and use bootstrap to house grid systems and compontents. Oh it looks like the wrapper allows you to format the page layout using one css element instead of each container element.... 

Creating a NAVBAR:
    
    Default Navbar
    Wrapping in a container to center it or add it within. Basically formatting.
    
    Navbar-header is an architectural class for the BS Navbar. Allocates approx 150px to the left of navbard and allows the logo to make use of the entire area.
    
    Navbar-brand can be applied to most elements but anchor <a> works best because some others might require utility classes or custom styles. Basically houses your brand/logo. This class automatically styles the image to fit the navbar vertically. 

    Image is housed in the navbar-brand and it's referencing an svg file in our folder.

Adding HERO TEXT-CENTER:

    A Large Image with text, often placed at the top of a website. CSS needed. Heading and Paragraph included.

Creating another CONTAINER:

    Adding a row and setting the top margin to 50

    Adding a column that is md (>= 768 px) 

UNDERSTAINDING <aside>: defines some content aside from the content it is placed in. It is related to the surrounding content. It's a tangential element. Commonly used for sidebar. In this file it looks like the aside is related to the table we are going to create but we want it next to the table without creating a new column.  We are applying the filter class styling. I chose to remove it. 

CREATING A PANEL:
    
    A bordered box with padding around it's content.

    Adding a heading to the panel

    Styling the Panel Body

    Inserting a Form into the panel

Creating A Form: 
    "Form Group" is a class in bootstrap and is the easiest way to add structure to forms. It's a flexible class - proper grouping of labels, controls, optional help text, validation messaging.

    "list Group" - Bootstrap class is an unordered list with list items and the proper classes. 

    "list-group-item" = indicates the current active selection

    Creating Labels

    'input' allows viewer to interact with html. In this exampe we are using type=text. But I changed it to date so you can select a date using a calendar. 










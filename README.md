## Week 5 Day Planner

Hey there, here is some site information:
* Developed in: CSS3, HTML5, JQuery
* Maintained by: Me
* Date and time courtesy of: Moment.JS

## Feature breakdown

The Day Planner is an addition to the portfolio site from week 2 (they have not been linked yet - soon to come). Key notes are:

1. The date and time are displayed if the time is between 9am - 5pm. If the time is outside of those bounds, a message stating the date will appear only.
2. If the time is between 9am - 5pm, the corresponding column will be highlighted in light-gray, to indicate it is the current hour. If it is not between 9 am - 5pm, nothing is highlighted.
3. Hours that have not yet passed in the day have a dark-gray highlight (again, only if the time is between 9am - 5pm)
4. All inputs are saved to local storage and will appear after a page reload.

Example of the highlights (3pm is current hour, 4 and 5pm are future hours)
![Highlight example](assets/readme.JPG)

### Future additions

I have some plans to improve this in the future with:
1. An ability to change what day you are looking at
2. An input feature where you are able to add items to specific days in the future without them affecting your inputs on other days

## Site maintenance

### HTML

Page structure is largely defined by the bootsrap column layout. There is only one page, which is designed to use (almost) identical CSS to the portfolio site.
THE MENU BAR IS NOT ACTIVE! This is for when I incorporate the homework piece into my portfolio site from week 2.

### CSS

One custom stylesheet is referenced only. All other stylesheets and scripts are Bootstrap and FontAwesome. 
There is only one custom Media Query used - for mobile phones. Other device sizes are covered under the column layout. 
import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
}

//Plan the App

/* Features of the App
Root Component - Starting Component
Header Component - Navigate between components
1. Shopping List 
    a. Shopping List - Data of the list
    b. Shopping List Edit - Edit the Data Added
2. Recipe Book
    a. Recipe List (list of items / home page for recipe)
    b. Recipe Item (individual item in List)
    c. Recipe Detail (Full detail of individual item)
3. Modals (what type of data we have in App, Interface class)
    a. Ingredients - Shopping List
    b. Recipe - Recipe Book
*/



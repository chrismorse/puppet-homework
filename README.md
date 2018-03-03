## Getting Started
### `npm start` or `yarn start`

Runs the app in development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The default app loads 100 records.  If you would like to load 100,000 records for testing you can change the variable *createTonsOfAddresses* to true.


## Various Thoughts
- *Long data in table cells* - I am limiting the length of the data in the table cells to fight layout weirdness with long data.  (you can see this in the first cell)   I cut off the length, place an ellipsis, and store the full data in the title of an element that people can mouseover and see.  We might need to change this to a proper mouseover div depending on browser compatibility.
- *Sortby* - The mockup had only 5 sorting items in the dropdown but the intructions said the rows should be sortable by clicking the column header.   I decided to make all rows sortable which lead to me including the other rows in the dropdown for consistency.  The dropdown then becomes a visual to show which column is being sorted. 
- *Paging design* - 100,000 results is quite a bit.  I imagine you might want to look at the results in the middle such as people whose last name starts with 'M'.  This design doesn't allow you to do this easily which might be an issue.
- *Data* - some things to think about and to test:   Is making a large AJAX call going to work?  A better solution might be to load the first page's data first and then load the entire dataset in the background.
- *Mobile* - this interface needs to be rethought and built for mobile.  I didn't do any mobile testing.
- *Tests* - we could spend time writing code for testing behavior.  For instance, we could load some data into the interface and test if the sorting works.
- *Production* - `npm run build` or `yarn build` builds the app for production.


## Dev Notes
- This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
- Puppet [dev exercise](https://github.com/Distelli/ui-ux-exercise1)


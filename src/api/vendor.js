/*this contain references to vendor libraries we use in the project.
this used by webpack in production build only.
avoids user from downloading huge js file any line of code changes.
only download vendor.js
Files that arent referenced here will be bundled to main.js
*/

/*eslint-disable no-unused-vars*/

import fetch from 'whatwg-fetch';

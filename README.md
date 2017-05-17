# Portfolio

Personal portfolio and blog of Ron Beitler *attempting* to use the Feeling Resposive Jekyll theme with some added style tweaks. Forked from Phlow and borrowed heavily from clhenrick.
-------------------------------
## Adding a New Project

To add a new project add a new object entry to the `work` array in `_data/work.json` containing the following attributes:

- "title" : required: title of the project
- "tags" : an array of relevant tags
- "description" : a short description shown in `/work/`
- "description_long" : a long description shown in the corresponding project page
- "thumb" : required: thumb nail image
- "tech" : an array containing the names of whatever tech was used
- "video" : an object containing the following if the project has a video
  - "url" : link to a video if the project has one  
    ( eg: "https://vimeo.com/81728484")
  - "embed" : link to the embed url for the video  
    (eg: "https://player.vimeo.com/video/81728484")
- "imgs" : required: an array of any images associated with the project
- "size" : size to give to the project that corresponds to a `CSS` class
  (depreciated / unnecessary)
- "date" : date the project was created in the format of Year-Month-Day, eg: "2014-11-02"

Then `cd` to the `scripts` dir and do `node make-portfolio-pages.js`

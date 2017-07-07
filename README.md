# When Last I Left
Adding Masonry -not isotope. The 12th SASS needs to have the masonry CSS that is applicable.
Dont know what work.md needs in order to get it to properly display. 

# Portfolio

Personal portfolio and blog of Ron Beitler *attempting* to use the Feeling Resposive Jekyll theme with some added style tweaks. Forked from Phlow and borrowed heavily from clhenrick.

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

## TO DO List:
- [ ] Add portfolio work in Work -write it out, thumbnails, the whole whammy. Figure out the thumbnail stuff.

- [ ] Add CV / Resume

- [ ] Add Projects page -I am not sure how I want this to work. I want to expand on this functionality to include sub projects and pages

- [ ] Figure out contact page -Need to revist this. 

- [ ] Find out how to add the gallery -Need something where the gallery is presented in a cool manner, and not just listed

- [ ] Figure out how to forward the GitHub page to it's own domain -eventually own a my own name

- [ ] Do a logo?

- [ ] Google Anayltics? What the hell is that?

- [ ] Meta Data stuff?? What the hell is that?

# When Last I Left
Trying to add Masonry.. maybe Isotope.. all this stuff to my Work page in order to get a nifty tileset going that I see on some other portfolios. So far, as I understand it, the javascript files are located where they needed to be. They are loaded in vai the Footer Scripts include which allows them to be powered up and ran.  With that said, I have the SASS file 12Theme as being where the theme for these scripts is refrence. I also have a Theme javacript where I think the meat and potatoes of the masonry/isotope works. I need to take a break.
"{% if page.url == '/work/' %}
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/masonry.pkgd.js"></script>
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/isotope.pkgd.js"></script>
{% endif %}
{% comment %}
<script src="{{ site.url }}{{ site.baseurl }}/assets/js/theme.js"></script>
{% endcomment %}"
Add that to Footerscripts when ready.

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

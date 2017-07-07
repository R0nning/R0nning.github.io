---
layout: page-fullwidth
show_meta: false
title: "Portfolio"
meta_description: ""
subheadline: ""
permalink: "/work/"
header: no
---

 <!-- this pulls in projects from _data/work.json -->
<div class="grid">
  <!-- width of .grid-sizer used for columnWidth -->
  <div class="grid-sizer"></div>
  <div class="grid-item"></div>
  <div class="grid-item grid-item--width2"></div>
   {% for item in site.data.work.work %}
       <a href="{{ site.url }}{{ site.baseurl }}/work/{{item.title | slugify}}.html">
{% if item.thumb.size != 0  %}      
<img class="item-img" src="{{ site.url }}{{ site.baseurl }}/images/{{item.thumb}}">
{% endif %}
           <div class="item-meta">
           <h4 class="item-title">{{ item.title }}</h4>
           <p class="item-description">{{ item.description }}</p>
           </div>
       </a> 
   {% endfor %}
   
 </div>

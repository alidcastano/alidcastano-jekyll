---

layout: page
title: Archives
permalink: archives
footer: none

---

<ul class="archives">
  {% for post in site.posts %}
  <li> 
    <a href="{{ post.url }}"> {{ post.title }}</a>
  </li>
    {% endfor %}
</ul>


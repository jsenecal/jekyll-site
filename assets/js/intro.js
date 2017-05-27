---
id: intro
lang: en
---
/**
 * Created by Jonathan Senecal on 2017-05-24.
 */
$('.type-it').typeIt({lifeLike:true,autoStart:false,loop: true})
{%for line in site.data.intro%}
    .tiType('{{line.type}}').tiPause(1200){%if forloop.last%};{%else%}.tiDelete({{line.delete}}){%endif%}
    {%endfor%}

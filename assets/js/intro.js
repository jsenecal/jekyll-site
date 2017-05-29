---
id: intro
lang: en
---
/**
 * Created by Jonathan Senecal on 2017-05-24.
 */
$('.type-it').typeIt({lifeLike:true,autoStart:false,startDelay: 2000})
{%for line in site.data.intro%}
    .tiType('{{line.type}}').tiPause({%if line.pause%}{{line.pause}}{%else%}3000{%endif%}){%if forloop.last%};{%else%}.tiDelete({{line.delete}}){%endif%}
    {%endfor%}

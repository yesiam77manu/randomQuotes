function generate()
{
  var quotes={
    "― Alysha Speer ":'"You never really know what is coming. A small wave, or maybe a big one. All you can really do is hope that when it comes, you can surf over it, instead of drown in its monstrosity.”',
    "― Monique Duval":'“She decided to free herself, dance into the wind, create a new language. And birds fluttered around her, writing “yes” in the sky.”',
    "― Aaron Lauritsen":'“The struggles we endure today will be the ‘good old days’ we laugh about tomorrow.”'
  }
  var authors=Object.keys(quotes);
  var author=authors[Math.floor(Math.random()*authors.length)];
  var quote=quotes[author];
  document.getElementById("quotes").innerHTML=quote;
  document.getElementById("Author").innerHTML=author;
  console.log(authors);
}
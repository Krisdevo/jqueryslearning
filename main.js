// $(function(){

//   $.ajax({
//     url: 'https://jsonplaceholder.typicode.com/posts',
//     method: 'GET',
//     success : function (data){
//       console.log('Données AJAX :', data);
//     },
//     error: function (err){
//       console.error('Erreur AJAX : ', err)
//     }
//   });

// })

// const json = require('./datas.json');


$(document).ready(function (){

  $.getJSON("./datas.json")
  .done(function(data){
    const container = $("#contenairePersonnage");
    const personnages = data.personnages;

    personnages.forEach(persos =>{
      const persoHtml = `
      <div>
        <h2>${persos.name}</h2>
        <p> ${"PV : " + persos.vie}</p>
        <p> ${persos.magie}</p>

        ${persos.stats.map(stat =>
          `<p>${stat.title}</p>
          <p>${stat.subtitle}</p>
          `
        )}

      </div>
      `
      container.append(persoHtml)
    })

  })
  .fail(function(jqxhr, textStatus,error){

  })
})








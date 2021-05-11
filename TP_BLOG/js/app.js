document.addEventListener("DOMContentLoaded", ()=>{
    console.log("chargé");
    let date, pub, article, stock, btn
        date = ({
            myDate : new Date().getFullYear(),
            target : document.querySelector("footer p")
        })
        date.target.innerText += date.myDate;
        console.log(typeof date)
        /*bouton*/
        btn = document.querySelector(".btn-add")
        /* objet article titre, date et paragraphe */
        pub = [
            {
                titre : " Système Solaire",
                emo : "&#128300;",
                date : `01-05-${date.myDate}`,
                msg : "Le Système solaire, ou système solaire, est le système planétaire auquel appartient la Terre. Il est composé d'une étoile, le Soleil, et des objets célestes gravitant autour de lui : les huit planètes etc ...",
                img : "./asset/3285297-andromeda-astronomy-cosmos-galaxy-space-spiral-universe_106791.png",

            },
            {
                titre : " Space X - Lancement",
                emo : "&#128300;",
                date : `06-05-${date.myDate}`,
                msg : "SpaceX, officiellement Space Exploration Technologies Corporation, est une entreprise américaine spécialisée dans le domaine de l'astronautique et du vol spatial. Un lancement de la fusée SpaceX pour l'ISS pour la conquête spatiale d'Elon Musk",
                img : "./asset/3285300-launch-rocket-space-spacecraft-spaceship-starship-startup_106797.png",

            },
            {
                titre : " FAQ - L'astronomie ",
                emo : "&#128300;",
                date : `02-05-${date.myDate}`,
                msg : " Est ce que Mars est délicieux ? / Elon Musk est-il un monstre des fusées ? / Est ce que Saturne tourne vraiment ? Est-il vrai qu'ils pleuvent des diamants sur Uranus",
                img : "./asset/3285303-astronomy-galaxy-planets-solar-space-star-universe_106790.png",

            },
            
        ]
        /*console.table(pub)*/
        /*iteration*/
        article = document.querySelector(".article_off");
        stock = "";
        for(data of pub){
            console.log(
                `${data.titre} ${data.date} ${data.msg} ${data.img}`
            )
            stock += `  <figure>
                            <img src=${data.img} alt="image">
                            <figcaption>
                                <h2>${data.emo}${data.titre}</h2>
                                <time datetime="2021-04-10T20:00:00">${data.date}</time>
                                    <p>${data.msg}</p>
                            </figcaption>
                        </figure>
                        `
        }
        article.innerHTML += stock; 
        btn.addEventListener("click",()=>{
            article.classList.toggle("article_on");
            btn.classList.toggle("btn-remove");
        })
})
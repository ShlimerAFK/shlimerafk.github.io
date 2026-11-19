const sub_main = document.getElementById("sub_main")

async function add_sections() {

    let path = window.location.pathname.toString();
    let filename = path.substring(7, path.length - 5)

    const data = await get_json()

    const sections = data[filename]

    let element = "";

    for (let i in sections) {

        let articles = sections[i].articles

        element += `<section> <div class="section_title"> <h3> ${sections[i].title} </h3> </div>`

        for (let j in articles) {

            element += `<article> <div class="article_text_box">`

            if (articles[j].has_title) {

                element += `<div class="article_title"> <h3> ${articles[i].title} </h3> </div>`

            }

            if (articles[j].type == "text") {

                element += `<div class="article_text_box"> ${articles[i].text} </div>`

            }

            else if (articles[j].type == "list") {

                var items = articles[j].items

                element += `<div class="article_list_box"> <ul>`

                for (k in items) {

                    element += `<li><p><b> ${items[k].name} </b> - ${items[k].text} <p/></li>`
                };

                element += ` </ul> </div>`

            }


            element += `</div > </article>`

        }

        element += `</section>`
    }


    sub_main.innerHTML = element
}

async function get_json() {

    const response = await fetch("../data/data.json");
    const data = response.json()

    return data

}

add_sections()
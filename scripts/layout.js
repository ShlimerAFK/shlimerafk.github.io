async function add_component_to_page(input_element, file) {

    const element = document.querySelector(input_element);

    try {
        const response = await fetch(file)
        const text = await response.text()

        if (!response.ok) {
            throw new Error(`Could not load file ${file}`);
        }

        element.innerHTML = text;

    } catch (error) {
        console.log(`Error: ${error}`)
    }

}

add_component_to_page("header", "../components/header.html")

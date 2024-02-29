<script>
    async function getAllBooks() {
        const data = await fetch("http://localhost:3069/api/getAllBooks")
        const books = await data.json()
        return books
    }
    async function renderBooks(){
        const allBooks = await getAllBooks()
        allBooks.forEach(element => {
            document.querySelector(".all-books").innerHTML += `
            <div>
                <h2 data-id="${element._id}">${element.title}</h2>
                <h3 class="text-base">${element.author}</h3>
                <ul>
                    <li class="text-base">${element.ISBN}</li>
                    <li class="text-base">${element.edition}</li>
                    <li><p class="text-base">${element.description}</p></li>
                </ul>
            </div>
            `
        });
    }
    renderBooks()
</script>
    <div class="all-books">
            
    </div>
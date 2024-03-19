    $(document).ready(function () {
        listing();        
    })
    function listing() {
        $.ajax({
            type: "GET",
            url: "http://spartacodingclub.shop/post/en",
            data: {},
            success: function (response) {
                let movies = response['movies']
                for (let i = 0; i < movies.length; i++) {
                    const movie = movies[i];
                    console.log(movie);
                    let temp_html = `
                <div class="col">
                    <div class="card h-100">
                    <img src="${movie['image']}"
                        class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${movie['title']}</h5>
                        <p class="card-text">${movie['desc']}</p>
                        <p>${movie['star']}</p>
                        <p class="mycomment">${movie['comment']}</p>
                    </div>
                    </div>
                </div>
                    `
                $('#cards-box').append(temp_html)
                }
            }
        })
    }
    function open_box() {
      $('#post-box').show()
    }
    function close_box() {
      $('#post-box').hide()
    }
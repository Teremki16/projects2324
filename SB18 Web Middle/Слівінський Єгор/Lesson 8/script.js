$(document).ready(function(){
    $("input").on("change", (event)=>{
        let username = $("input").val()
        $.ajax(`http://api.github.com/users/${username}`, {
            success: (result)=> {
                $(".result").html(`
                <h3>${result.login}</h3>
                <img src="${result.avatar_url}">
                <a href="${result.html_url}">LINK<a>
                `)
            },
            error: (err)=>{
                console.log(err.statusText)
            }
        })
    })
});
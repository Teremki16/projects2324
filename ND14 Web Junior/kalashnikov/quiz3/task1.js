$(".rules").slideUp(0)

let cards = [
    {
        name: "M4A1",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO1gb-Gw_alfqjuhWJd7ctyj9bN_Iv9nBqx_0s4Y2_0LIXAd1U4MlHZqFPox-u7g8W0vpXAyCE2sych7Cndnh22n1gSOXJG-eI-",
        id: 1
    },
    {
        name: "AWP",
        img: "https://cdn.skinbaron.de/steamdata/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAZt7P_BdjVW4tW4k7-KgOfLP7LWnn8fsJEh0uuR9I6m3gbi_Uppamn2d4CTcVc4NFDZ_Qe4x-rmgMPtuZucnGwj5He2etKLyw?optimizer=image",
        id: 2
    },
    {
        name: "AK47",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhh3szKcDBA49OJnpWFkPvxDLfYkWNFppwpie2Rp9_w0VDm-UNrMj30IoPHdAY-M1rY-1K7w7291pO8vJTJzHN9-n51xLwwH8g",
        id: 3
    },
    {
        name: "UMP-45",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo7e1f1Jf0Ob3ZDBS092kho-chMj4OrzZgiUDuMch27GYpdis3VDk8kQ-YG72cNOScAY7ZQnV-VTtwOu7gpC0tZrJ1zI97XuqSfkK",
        id: 4
    },
    {
        name: "Tec-9",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoor-mcjhnwMzcdD4b09m4go-SqP_xMq3I2G4HvJ0hi76SpYijjgGw8hZramjzddOccQNsZF3ZqFW3k-zo18C0vMnXiSw0Ujnn9Hs",
        id: 5
    },
    {
        name: "USP",
        img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jnI7LFkGJD7fp9g-7J4cL23lexqhI9ZT3wd4WTJ1VvZ1rZr1G2wu2805W46p6amnJj6SEmt3_YgVXp1sALRvj2/360fx360f",
        id: 6
    },
    {
        name: "Dual Berettas",
        img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJf1OD3dShD4OO0kZKOg-P1IITFhG5Q7Pp9g-7J4cKj0AfsqBFlNWvxJYKXdQY4Z1zUqQK9xrzrhJG6v8-fzHNmviB34S2MgVXp1iINu42Q/360fx360f",
        id: 7
    },
    {
        name: "P250",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopujwezhjxszYI2gS09-vloWZlOX7MITdn2xZ_Isi07_F8N3x3Qfj8kQ6a2H0IdKXdgRqYA2C-VLqxLznhMLv6Z-bm3o2pGB8sr9Yt3dq",
        id: 8
    },
    {
        name: "Desert Eagle",
        img: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7duJhJKCmePnJ6nUl2Zu5Mx2gv2P9o-t21fj-RI_Nz2ncYbDcFNoYArYrgDql-3m08PptcjBn3tgs3Yis2GdwUJr9IfvpA/360fx360f",
        id: 9
    },
    {
        name: "Revolver R8",
        img: "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopL-zJAt21uH3cDx96tC3mYWYqPv9NLPF2GhUvMFz3OqU99jz0Vfg-BJpNm73JtPBJlM-Ml7Q_QW8xe2918Pu7czXiSw06_FuxCQ/360fx360f",
        id: 10
    },
    {
        name: "P90",
        img: "https://community.akamai.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpopuP1FABz7OORIQJM6dOngYWOmcj4OrzZgiVU6ZZ12bnH84nz31fs-xFrNTj6dYOSdAdvYg7T-QK_k7rshZK1us_O1zI97eL4BLUp/360fx360f",
        id: 11
    },
    {
        name: "AUG",
        img: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFAR17PLGeDBH092jk7-DkvbiKvWJwDwJ7MQo0rHDp9v20QHtrxVuZDv0Io-VcgY5aFjVrlXvwe7s1sS_ot2XnmIh6UNm",
        id: 12
    },
]

let firstCard = null;
let secondCard = null;

let score = 0
let time = 300;

if(localStorage.getItem("time") != null){
    time = localStorage.getItem("time")
}else{
    localStorage.setItem("time", time)
}

$(".slideRules").on("click", function(){
    $(".rules").slideToggle()
})


function rnd(){
    return Math.floor(Math.random() * 12);
}


$("#progress").knob({
    min: 0,
    max: 10,
    angleArc: 120,
    angleOffset: -60,
    displayInput: false,
    lineCap: "round",
    readOnly:true
})

$("#time").knob({
    min: 0,
    max: 300,
    displayInput: true,
    readOnly:true,
    width: 200,
})


function startTime(){
    setInterval(function(){
        time =  parseInt(localStorage.getItem("time"))
        time--;
        $("#time").val(time).trigger("change")
        if(time<=0){
            alertify.error("Time is over!")
            setTimeout(()=>window.open("../quiz/task1.html"))
            localStorage.removeItem("time")
        }else if(time > 0){
          localStorage.setItem("time", time)  
        }
    }, 1000)
}


$("#start").on("click", ()=>{
    startTime()
    $("#start").css("display","none")
    $(".gameBoard").css("display","grid")
    fillBoard()
})

function fillBoard(){
    let board = [...cards, ...cards]
    board = shuffle(board)
    for(let i = 0; i<board.length;i++){
        let cardHtml = `
        <div class="card" data-id="${board[i].id}">
                <div class="front">ROBOCODE</div>
                <div class="back">
                    <img src="${board[i].img}" alt="${board[i].name}">
                </div>
            </div>
        `

        $(".gameBoard").append(cardHtml)
    }
}
function shuffle(array){
    let counter = array.length
    let temp;
    let index;
    while(counter > 0){
        index = Math.floor(Math.random()*counter)
        counter--;
        temp = array[counter]
        array[counter] = array[index]
        array[index] = temp
    }
    return array
}



function cardClicked(){
    if(secondCard || $(this).hasClass("marched") || firstCard == $(this)) return
    if(!firstCard){
        firstCard = $(this)
        firstCard.addClass("flip")
        return
    }
    if(firstCard){
        secondCard = $(this)
        secondCard.addClass("flip")
        if(firstCard.attr("data-id") == secondCard.attr("data-id")){
            firstCard.addClass("matched")
            secondCard.addClass("matched")
            firstCard = null
            secondCard = null
        }else{
            setTimeout(()=>{
                firstCard.removeClass("flip")
                secondCard.removeClass("flip")
                firstCard = null
                secondCard = null
            }, 500)
        }
    }  
}

$(document).on("click", ".card", cardClicked)
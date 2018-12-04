// $('h1').css('color','red')

// $("h1").text("Coding Bootcamp")

// $("ul").html("<li>Iron Man</li> <li>Thor</li>")

// $("input").attr("type", "text")

// $("input").val();


$("#hide").click( () => {
	$(".container").addClass("hidden")
})

$("#show").click( () => {
	$(".container").removeClass("hidden")
})

$("#toggle").click( () => {
	$(".container").toggleClass("hidden")
})

$("#changeHTML").click( () => {
	$("#text").html("jQuery")
})

// $("#changeHeight").click( () => {
// 	$("img").css("height", 100)
// })

$("#changeHeight").click( () => {
	$("img").toggleClass("smaller")
})

// $("#changeImage").click( () => {
// 	$("img").attr("src", "assets/images/o.jpg")
// })

$("#changeImage").click( () => {
	$("img").toggleClass("o")
})

// $("#changeStyle").click( () => {
// 	$("#style").css("color", "blue")
// })

$("#changeStyle").click( () => {
	$("#style").toggleClass("blue")
})

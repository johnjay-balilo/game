
$('#play').click(function() {
	$('#landing').hide("display");
})













function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

$("#shuffle").click(function() {
	shuffleArray(first)
	$("#1").text(first[0])
	$("#2").text(first[1])
	$("#3").text(first[2])
	$("#4").text(first[3])
	$("#5").text(first[4])
	$("#6").text(first[5])
	$("#7").text(first[6])
	$("#8").text(first[7])
	$("#9").text(first[8])
	$("#10").text(first[9])
	$("#11").text(first[10])
	$("#12").text(first[11])
})





let ans = []
let first = ["h", "a", "w", "o", "g", "t", "m", "e", "y", "d", "o", "d"]

function generateBox() {
	for (var i = 0; i < 12; i++) {
		$("#"+(i+1)).text(first[i])
	}
}

generateBox();

function press(x) {

	if (document.getElementById('box6').innerHTML != ans[5]) {
		ans.push(first[x-1]);
		$("#"+x).css("opacity", "0")
		$("#"+x).css(("transition", "0.5s"))
		refresh()
		if (document.getElementById('box1').innerHTML == "h" && document.getElementById('box2').innerHTML == "o" && document.getElementById('box3').innerHTML == "t" && document.getElementById('box4').innerHTML == "d" && document.getElementById('box5').innerHTML == "o" && document.getElementById('box6').innerHTML == "g") {
			document.getElementById('box1').style.color = "green" ;
			document.getElementById('box2').style.color = "green" ;
			document.getElementById('box3').style.color = "green" ;
			document.getElementById('box4').style.color = "green" ;
			document.getElementById('box5').style.color = "green" ;
			document.getElementById('box6').style.color = "green" ;
			alert('correct!')
		}else if(document.getElementById('box1').innerHTML != "h" && document.getElementById('box2').innerHTML != "o" && document.getElementById('box3').innerHTML != "t" && document.getElementById('box4').innerHTML != "d" && document.getElementById('box5').innerHTML != "o" && document.getElementById('box6').innerHTML != "g") {

		}
	}
}

function refresh() {
	$("#box1").text(ans[0])
	$("#box2").text(ans[1])
	$("#box3").text(ans[2])
	$("#box4").text(ans[3])
	$("#box5").text(ans[4])
	$("#box6").text(ans[5])
}

$("#reset").click(function() {
	ans.splice(0,ans.length)

	for (var i = 0; i < 7; i++) {
		$("#box"+i).text("")
	}

	for (var i = 0; i < 13; i++) {
		$("#"+i).css("opacity", "1")
		$("#"+i).css("transition", "0.5s")
	}
})






$("#1").click(function() {
	press(1)

})

$("#2").click(function() {
	press(2)
})

$("#3").click(function() {
	press(3)
})

$("#4").click(function() {
	press(4)
})

$("#5").click(function() {
	press(5)
})

$("#6").click(function() {
	press(6)
})

$("#7").click(function() {
	press(7)
})

$("#8").click(function() {
	press(8)
})

$("#9").click(function() {
	press(9)
})

$("#10").click(function() {
	press(10)
})

$("#11").click(function() {
	press(11)
})

$("#12").click(function() {
	press(12)
})




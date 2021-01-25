/** @format */

const bodyy = document.querySelector("body");
const content = bodyy.innerHTML;
bodyy.innerHTML = `<div class="scrollBar"><div class="slider"></div></div>`;
bodyy.innerHTML += `<div
			id="frame"
			style="
				overflow: hidden;
				position: fixed;
				top: 0vh;
				right: 5%;
				opacity: 0;
			"
		>
			<iframe
				id="myIframe"
				src="#"
				style="
					height: 100vh;
					width: 0;
					margin-top: -30vh;
					margin-left: 40%;
					background-color: white;
					transform: scale(0.25);
				"
			>
			</iframe>
		</div>`;
bodyy.innerHTML += content;

const slide = document.querySelector(".slider");
const scrollBar = document.querySelector(".scrollBar");
const head = document.querySelector("head");
const frame = document.querySelector("#frame");
var boddy = document.body,
	html = document.documentElement;

var height = Math.max(
	boddy.scrollHeight,
	boddy.offsetHeight,
	html.clientHeight,
	html.scrollHeight,
	html.offsetHeight
);
head.innerHTML += `<link rel="stylesheet"  href="previewstyle.css" />`;

$(document).ready(function main() {
	$bHeight = height;
	$sHeight = window.innerHeight;
	$sliderHeight = ($sHeight / $bHeight) * 100;
	$(".slider").height($sliderHeight + "%");
	$dist = ($sliderHeight * $sHeight) / 100;
	$(window).on("load", correct);
	$(".slider").draggable({
		containment: "parent",
		axis: "y",
		drag: function () {
			$pos = $(".slider").position().top;
			$ScrollPercent = ($pos / $sHeight) * 100;
			$ScrollPx = ($ScrollPercent / 100) * $bHeight;
			window.scrollTo(0, $ScrollPx);
		},
	});

	function correct() {
		const yOffset = window.pageYOffset;
		let ht = ($sHeight * yOffset) / $bHeight;

		return (slide.style.top = ht + "px");
	}
	let iframe = document.getElementById("myIframe");

	window.addEventListener("resize", main);
	window.addEventListener("resize", correct);
	window.addEventListener("mouseover", correct);
	window.addEventListener("wheel", correct);
	window.addEventListener("keydown", correct);
	$(".scrollBar").hover(
		function (e) {
			frame.style.opacity = "1";
			iframe.style.width = window.innerWidth + "px";
		},
		function (e) {
			frame.style.opacity = "0";
		}
	);
	scrollBar.addEventListener("mousemove", (e) => {
		let het = e.offsetY / window.innerHeight;
		het = het * boddy.scrollHeight;
		iframe.contentWindow.scrollTo(0, het);
	});
	slide.addEventListener("mousemove", (e) => {
		let het = e.offsetY / window.innerHeight;
		het = het * boddy.scrollHeight;
		iframe.contentWindow.scrollTo(0, het);
	});

	scrollBar.addEventListener("click", (e) => {
		$pos = e.clientY;
		$ScrollPercent = ($pos / $sHeight) * 100;
		$ScrollPx = ($ScrollPercent / 100) * $bHeight;
		window.scrollTo(0, $ScrollPx);
		correct();
	});
});

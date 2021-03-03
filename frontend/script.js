async function getProgress() {
	const response = await fetch("progress.json")
	const json = await response.json()

	return json
}

function populate(data) {
	var cards = d3
		.select(".topics")
		.selectAll("a")
		.data(data).enter()
		.append("a")
		.attr('class', 'topic-card')
		.attr('href', data => `/learn/${data.shortname}`)
		.style("--completion", data => (data.onpage / data.numpage * 100) + "%")

	cards.append("img").attr("src", data => data.icon)

	var cardLabels = cards.append("div")

	cardLabels.append("span").text(data => data.name)
	cardLabels.append("p").attr("class", "caption").text(data => data.caption)
}

getProgress().then(populate)
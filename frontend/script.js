// row of skills 
async function getSkills() {
	const response = await fetch("progress.json");
	const json = await response.json()

	return json
}

// rendering skills 
const $skills = $('.skills')

const makeIcon = skill => {
	return `background-image: url(images/${skill.icon}); background-color: ${skill.bg}`
}

const skillToHTML = skill => {
	console.log(skill)
	return (
		`<a class="skill" href="learn/${skill.name}">
			<div class="pie-chart" data-percent="${skill.onpage / skill.numpages}">
				<div class="progress"><div class="progress-fill"></div></div>
				<div class="bg" style='${makeIcon(skill)}'></div>
			</div>

			<span class="label">
				${skill.name}
			</span>
		</a>`
	)
}
const renderSkills = rows => {
	rows.forEach(row => {
		$(
			`<div class="row">
			${row.map(skillToHTML).join("\n")}
		</div>`
		).appendTo($skills)
	})

	// render pie charts 
	$('.pie-chart').each((idx, chart) => {
		chart = $(chart)
		var percent = parseFloat(chart.data('percent'));

		if (percent > .5)
			chart.addClass('gt-50');

		chart.find('.progress-fill').css('transform', 'rotate(' + percent + 'turn)');
	})
}

getSkills().then(renderSkills)
// row of skills 
async function getSkills() {
	const response = await fetch("skills.json");
	const json = await response.json()

	return json
}

// rendering skills 
const $skills = $('.skills')

const makeIcon = skill => {
	return `background-image: url(images/${skill.icon}); background-color: ${skill.bg}`
}

const skillToHTML = skill => {
	return (
		`<a class="skill" href="learn/${skill.name}">
			<div class="pie-chart" data-percent="${skill.progress}">
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
		var percent = parseInt(chart.data('percent'));

		if (percent > 50)
			chart.addClass('gt-50');

		chart.find('.progress-fill').css('transform', 'rotate(' + percent / 100 + 'turn)');
	})
}

getSkills().then(renderSkills)
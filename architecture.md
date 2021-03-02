# frontend/
* create a simple ui to access all the skills needed to learn in rust
* the entire page is populated by `progress.json`. For now that is a sample input
* `todo: ` learn rust (I might me rushing into the repo)
* `todo: ` create a login ui
* `todo: ` make a post request to the server every time a skills completion is modified 

# backend/
* `todo: ` process sign ins and sign ups (I will send the request through [form input](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_and_retrieving_form_data))
* `todo: ` serve `progress.json` over the server, here is what the input might look like
```json
[
	[
		{
			"name": "Intro",
			"icon": "icon.svg",
			"bg": "#2bb1f3",
			"onpage": 5,
			"numpages": 5
		}
	],
	[
		{
			"name": "Variables",
			"icon": "varkeyword.png",
			"bg": "#3f51b5",
			"onpage": 2,
			"numpages": 6
		},
		{
			"name": "Functions",
			"icon": "fnkeyword.png",
			"bg": "#3f51b5",
			"onpage": 0,
			"numpages": 8
		}
	]
]
```
* `onpage` is the page that the user is currently on in the topic
* `numpages` is the number of pages in that topic
* `todo: ` make content pages which host things like learning and example pages or quiz pages (example: `/learn/intro?page=1`). I will also work on that
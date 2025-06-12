export const render3DAlbum = (projectName) => {
	const BASE_URL =
		"https://cdn.jsdelivr.net/gh/nils-keller-dev/cdn-resources@latest/images/";

	const generateImageUrl = (name) =>
		`url(${BASE_URL}${projectName}/${name}.webp)`;

	const shadowTemplate = document.createElement("div");
	shadowTemplate.classList.add("shadow");

	const images = [];

	for (const el of [...document.querySelectorAll("div")].reverse()) {
		const depth = Number(el.innerHTML);

		el.style.setProperty("--image", generateImageUrl(el.id));
		el.style.setProperty("--depth", `${depth}em`);

		if (images.at(-1)?.depth > depth) {
			images.forEach(({ name, depth: previousDepth }) => {
				const shadowEl = shadowTemplate.cloneNode();
				shadowEl.style.backgroundImage = generateImageUrl(name);
				shadowEl.style.setProperty("--blur", `${(previousDepth - depth) / 10}em`);
				el.appendChild(shadowEl);
			});
		}

		images.push({
			name: el.id,
			depth
		});
	}

	document.addEventListener("click", () =>
		document.body.classList.toggle("disabled")
	);
};
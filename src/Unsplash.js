// ES Modules syntax
import Unsplash, { toJson } from "unsplash-js";

export const unsplash = new Unsplash({
	accessKey: "dOv0U82mN15Ftd2ikJwE5iQmCs-ZKmYz2ZA7UhNIgd8",
});

export const getImage = async (keyword) =>
	unsplash.search
		.photos(keyword, 1, 10, { orientation: "portrait" })
		.then(toJson)
		.then((json) => {
			if (json.total === 0) return undefined;

			let photoLink = json.results[0].urls.small;
			return photoLink;
		});

// export const getImage = async (keyword) => {
// 	let photos = await unsplash.search.photos(keyword, 1, 10, {
// 		orientation: "portrait",
// 	});
// 	let photosJson = await toJson(photos);
// 	let photoLink = await photosJson.results[0].urls.small;

// 	return photoLink;
// };

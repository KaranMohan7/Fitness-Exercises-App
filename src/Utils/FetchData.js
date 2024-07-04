
export const exerciseoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8060d394e4mshe4407e52cee158dp131673jsn22f1dc2b89bf',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const ytoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '8060d394e4mshe4407e52cee158dp131673jsn22f1dc2b89bf',
		'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
	}
};

export const FetchData = async (url,exerciseoptions) =>{
	try {
		const response = await fetch(url, exerciseoptions);
		const result = await response.json();
		return result;
	} catch (error) {
		console.error(error);
	}
}


export const exerciseoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd7246cd737msh9899e1e0e9a8574p11d6a0jsned661de70291',
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
	}
};

export const ytoptions = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'd7246cd737msh9899e1e0e9a8574p11d6a0jsned661de70291',
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

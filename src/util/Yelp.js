const apiKey = 'Take Your API key';
	

const Yelp = {
	
	search(term , location , sortBy){
		return fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortyBy}' , {headers:{
			Authorization: 'Bearer ${apiKey}'	
		}}).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (jsonResponse.businesses){
				jsonResponse.businesses.map(business => {
					return {
						id: business.id,
						imageSrc: business.imageSrc,
						name: business.name,
						address: business.address,
						city: business.city,
						state: business.state,
						zipCode: business.zipCode,
						category: business.category,
						rating: business.rating,
						reviewCount: business.reviewCount
					}
				});
			}
		});

	}
}


export default Yelp;
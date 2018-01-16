const apiKey = "fhReoecRQuowgHixJmN5OfkQqt0o6zw6JvPzzB19-QTGUoQ_aXrDu2l0jvW3oz8Db0-NKt58glkKltBEjdcBRY51eAlGmDIV33dAHonGSjjPPwkMADKCIkc4nRVeWnYx";

const Yelp = {
			search(term,location,sortBy){
			return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}",{
			headers: {
				Authorization:`Bearer ${apiKey}`}
				}).then(response=>{
				return response.json();
				}).then(jsonResponse=>{
				if(jsonResponse.business){
				return jsonResponse.businesses.map(business=>({
				id: business.id,
				imageSrc: business.image_url,
				name: business.name,
				address:business.address1,
				city:business.city,
				state:business.state,
				zipCode:business.postal_code,
				category:business.categories[0].title,
				rating:business.rating,
				reviewCount:business.review_count
				}));
			}
		});
	}
};

export default Yelp;
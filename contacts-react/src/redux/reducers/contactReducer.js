const initialState = [
    {
		"id": "1",
		"firstName": "Alfonso",
		"middleName": "Lee",
		"lastName": "George",
		"number": "1499500842",
		"email": "neque@yahoo.com"
	},
	{
		"id": "2",
		"firstName": "Joel",
		"middleName": "Chambers",
		"lastName": "Fisher",
		"number": "7928787357",
		"email": "tincidunt.nunc@hotmail.org"
	},
	{
		"id": "3",
		"firstName": "Nelle",
		"middleName": "Willis",
		"lastName": "Richard",
		"number": "4216523894",
		"email": "mauris.eu@icloud.ca"
	},
	{
		"id": "4",
		"firstName": "Graiden",
		"middleName": "Boyle",
		"lastName": "Fischer",
		"number": "4207577340",
		"email": "ipsum@icloud.org"
	},
	{
		"id": "5",
		"firstName": "Dominique",
		"middleName": "Sharp",
		"lastName": "O'donnell",
		"number": "2243663220",
		"email": "at@yahoo.net"
	}
]

const contactReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_CONTACT": 
            state = [...state, action.payload]
            return state;
        case "UPDATE_CONTACT":
			const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact );
			state = updateState;
			return state;

		case "DELETE_CONTACT":
			const filterContacts = state.filter(contact => contact.id !== action.payload && contact);
			state = filterContacts;
			return state;
        default : 
            return state
    };

};

export default contactReducer;
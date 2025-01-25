const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
				
			],
			contact: [{}],
			contactUpdate: [{}],

			image: "https://i.pravatar.cc/300"

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/alcides/contacts')
					console.log(response);
					const data = await response.json()
					console.log(data);
					
					const contacts = data.contacts
					console.log(contacts);

					setStore({contact : contacts})
					
					console.log(getStore());
					if(!response.ok){
						getActions().createUser()
					}
				} catch (error) {
					
				}
			},
			createUser: async () => {
				try {
					response = await fetch('https://playground.4geeks.com/contact/agendas/alcides', {method:"POST"})
				} catch (error) {
					
				}	
			},

			contactUpdate: (desdeAfuera) =>{
				setStore({contactUpdate : desdeAfuera})
			 },
			
		}
	};
};

export default getState;

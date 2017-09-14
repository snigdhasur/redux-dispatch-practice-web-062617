export let state;


export function managePets(state = { pets: [] }
, action){
	switch(action.type){
		case "ADD_PET":
			return state = {pets: [...state.pets, {name: action.pet.name, species: action.pet.species, id: action.pet.id}]}
		case "REMOVE_PET":
			return state = {pets: state.pets.filter(pet => pet.id !== action.id)}
		default:
			return state
	}

}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	const liList = state.pets.map(pet => `<li>${pet.name}</li>`).join("")
	const container = document.getElementById("container") 
	container.innerHTML = `<ul>${liList}</ul>`
}

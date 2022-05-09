export const state = () => ({
	tasks: JSON.parse(localStorage.getItem('tasks'))||[]
})

export const mutations = {

	ADD_TASK(state, thistask) {
       var datajs=[{content:thistask,done:false},...state.tasks]
        var data=JSON.stringify(datajs)
        localStorage.setItem('tasks',data)
		state.tasks = JSON.parse(localStorage.getItem('tasks'))
	},
	REMOVE_TASK(state, thistask) {
		var datajs=state.tasks.filter((task)=>state.tasks.indexOf(task)!=state.tasks.indexOf(thistask))
		var data=JSON.stringify(datajs)
		localStorage.setItem('tasks',data)
		state.tasks=JSON.parse(localStorage.getItem('tasks'))
		//state.tasks.splice(state.tasks.indexOf(task), 1);
	},
	TOGGLE_TASK(state, thistask) {
		var datajs=state.tasks.map((task)=>{
			if(task==thistask){
				return {content:thistask.content,done:!thistask.done}
			}return task
		})
		var data=JSON.stringify(datajs)
		localStorage.setItem('tasks',data)
		state.tasks=JSON.parse(localStorage.getItem('tasks'))
		//task.done = !task.done;
	}
}
<template>
  <main>
    <b-container class=" d-flex align-items-center justify-content-center">
    <b-card class="w-75 p-0 mt-4 text-center">

  
        <h1 class="mt-3">Task List</h1>
    
        <b-container class="mt-5">
          <b-input-group
      v-for="size in ['lg']"
      :key="size"
      :size="size"
      class="mb-3"
      prepend="Task"
    >
      <b-form-input
                type="text" 
            v-model="newTask"  
            @keypress.enter="addTask" />
      
      <b-input-group-append>
        <b-button @click="addTask" size="sm" text="Button" variant="primary">Add</b-button>
      </b-input-group-append>
    </b-input-group>
        </b-container>
    
          <App class="mt-4"
            v-for="(task, i) in $store.state.tasks"
            :key="i"
            :task="task" />
    </b-card>
      </b-container>

  </main>
</template>

<script>
export default {
  data (){
    return {
      newTask: ''
    }
  },
  methods: {
    addTask () {
      if (this.newTask) {
        this.$store.commit('ADD_TASK', this.newTask);
        this.newTask = '';
      }
    }
  }
}
</script>
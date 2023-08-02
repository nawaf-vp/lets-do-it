<template>
    <div class="flex flex-col"> 
        <!-- navbar -->
        <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-semibold">todo list</h2>
        <button class="text-gray-500 hover:text-gray-900">
           {{isDarkMode ? 'Light' : 'Dark'}}    Mode
        </button>
        </div>
        <div class="flex flex-col">
         <div
            v-for="(task,index) in tasks"
            :key="task.id" 
            class="flex items-center mb-2"
            
             >
             <div class="flex-1">
                <input type="checkbox" 
                      :id="`task-${task.id}`"  
                      :checked="task.isCompleted"
                      @change="toggleTaskCompletion(task)"
                      >
                <label :for="`task-${task.id}`"
                        class="ml-3 text-gray-900"
                        >
                        {{task.title}}
                </label>
             </div>
             <div class="flex-0">
                    <button 
                            @click="editTask(task)"
                            class="text-grey-500 hover:text-gray-900"
                            >
                            Edit
                    </button>
                    <button
                            @click="deleteTask(task)"
                                class="ml-2 text-grey-500 hover:text-gray-900"
                                >
                                delete
                    </button>
            </div> 
            <div class="flex-0">
    <span v-if="!isTaskDue(task)" class="text-gray-500">{{ formatDate(task.time) }}</span>
    <span v-else class="text-red-500">{{ formatDate(task.time) }}</span>
  </div>
         </div>
        </div>    
    </div>
</template>

<!-- SCRIPT -->

<script>
import { ref } from 'vue';
import { format, isAfter } from 'date-fns';
export default {
  name: 'TodoList',
  setup() {
    const tasks = ref([
      {
        id: 1,
        title: 'Task 1',
        isCompleted: false,
        isImportant: false,
        isNoImportant: false,
        isLessImportant: false,
        time: '2022-01-01 10:00',
      },
      {
        id: 2,
        title: 'Task 2',
        isCompleted: false,
        isImportant: false,
        isNoImportant: false,
        isLessImportant: false,
        time: '2022-01-02 11:00',
      },
      {
        id: 3,
        title: 'Task 3',
        isCompleted: false,
        isImportant: false,
        isNoImportant: false,
        isLessImportant: false,
        time: '2022-01-03 12:00',
      },
    ]);
    
    const isDarkMode = ref(false);
    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };
    const toggleTaskCompletion = (task) => {
      task.isCompleted = !task.isCompleted;
    };
    const editTask = (task) => {
      console.log('Edit task', task);
    };
    const deleteTask = (task) => {
      console.log('Delete task', task);
    };
    return {
      tasks,
      isDarkMode,
      toggleDarkMode,
      toggleTaskCompletion,
      editTask,
      deleteTask,
    };
  },
};
const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm');
const isTaskDue = (task) => {
  const now = new Date();
  const taskDate = new Date(task.time);
  return isAfter(taskDate, now);
};
</script>

<!-- styling -->
<style lang="postcss">
@tailwind base;
@tailwind components;
@tailwind utilities;
.completed {
  text-decoration: line-through;
  opacity: 0.5;
}
.important {
  color: red;
}
.no-important {
  color: orange;
}
.less-important {
  color: yellow;
}
</style>
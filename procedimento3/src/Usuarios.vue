<script lang="ts">
import { defineComponent } from 'vue';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export default defineComponent({
  data() {
    return {
      users: [] as User[],
    };
  },
  mounted() {
    this.loadUsers();
  },
  methods: {
    async loadUsers() {
      try {
        const response = await fetch('https://reqres.in/api/users?per_page=10');
        const data = await response.json();
        this.users = data.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>

<template>
  <div class="row">
    <div class="col-4 p-2" v-for="(user, index) in users" :key="index">
      <div class="card mb-3" >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              :src="user.avatar"
              alt="Avatar do usuário"
              class="img-fluid rounded-start test"
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {{ user.first_name }} {{ user.last_name }}
              </h5>
              <p class="card-text">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {authService, usersService} from "@/services";

export default {
  name: 'DashboardContent',
  components: {

  },
  data() {
    return {
      user: [],
    }
  },
  mounted(){
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const uuid_user = authService.getUuid();
        if(uuid_user !== undefined) {
          await usersService.getUserById(uuid_user).then((res) => {
            this.user = res;
          });
        }
      } catch(error) {
        console.error(error);
      }
    },
  },
  computed: {

  }
};
</script>


<template>
  <div id="dashboard-content-container">
    <h1>{{getLang().dashboard_user_welcome}}, {{user.first_name}} {{user.last_name}}</h1>
  </div>
</template>

<style>

#dashboard-content-container {
  width: auto;
  padding: 3% 3%;
  display: flex;
  flex-direction: column;
  color: var(--white);
}

h1 {
  font-size: 2em;
}

</style>

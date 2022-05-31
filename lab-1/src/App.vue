<template>
  <NavBar />
  <div class="container mt-4 bg-light">
    <div class="row mb-3 justify-content-center">
      <button
        class="btn btn-sm btn-primary col-2 m-1"
        @click="showFormBtnClicked"
      >
        Form
      </button>
      <button
        class="btn btn-sm btn-warning col-2 m-1"
        @click="studentBtnclicked"
      >
        Students
      </button>

      <button class="btn btn-sm btn-info col-2 m-1" @click="adminBtnclicked">
        Admin
      </button>
    </div>
    <formComponent v-if="showform" @addingEntity="addNewEntity" />
    <StudentComponent
      :studentsArray="
        entities.filter((ele) => ele.type.toLowerCase() == 'student')
      "
      v-if="showStudents"
      @deletingEntity="deleteEntry"
    />
    <AdminComponent
      :adminsArray="entities.filter((ele) => ele.type.toLowerCase() == 'admin')"
      v-if="showAdmins"
      @deletingEntity="deleteEntry"
    />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import StudentComponent from "./components/StudentComponent.vue";
import formComponent from "./components/formComponent.vue";
import AdminComponent from "./components/AdminComponent.vue";

export default {
  name: "App",
  components: {
    NavBar,
    formComponent,
    StudentComponent,
    AdminComponent,
  },
  data() {
    return {
      showform: true,
      showStudents: false,
      showAdmins: false,
      entities: [
        { name: "yaya", salary: 9000, address: "Alexandria", type: "Admin" },
        {
          name: "john due",
          salary: 9000,
          address: "Alexandria",
          type: "student",
        },
      ],
    };
  },
  methods: {
    showFormBtnClicked() {
      this.showAdmins = false;
      this.showStudents = false;
      this.showform = true;
    },
    studentBtnclicked() {
      this.showform = false;
      this.showAdmins = false;
      this.showStudents = true;
    },
    adminBtnclicked() {
      this.showform = false;
      this.showStudents = false;
      this.showAdmins = true;
    },
    addNewEntity(entityObj) {
      this.entities.push(entityObj);
    },
    deleteEntry(index) {
      this.entities.splice(index, 1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>

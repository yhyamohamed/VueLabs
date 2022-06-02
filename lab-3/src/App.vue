<template>
  <navbar />
  <div class="container mt-4 bg-light p-3">
    <div class="row mb-3 justify-content-center">
      <button
        class="btn btn-sm btn-primary col-2 m-1"
        @click="showing = 'formcomponent'"
      >
        Form
      </button>
      <button
        class="btn btn-sm btn-warning col-2 m-1"
        @click="showing = 'students'"
      >
        Students
      </button>

      <button class="btn btn-sm btn-info col-2 m-1" @click="showing = 'admins'">
        Admin
      </button>
    </div>
    <!-- <component :is="showing"/> -->
    <formcomponent
      v-if="showing == 'formcomponent'"
      @addingentity="addEntity"
    />
    <students
      v-if="showing == 'students'"
      :studentsArray="stdarray"
      @deleteEntry="deleteEntry"
    />
    <admins
      v-if="showing == 'admins'"
      :adminsArray="adminsarray"
      @deleteEntry="deleteEntry"
    />
  </div>
</template>
<style>
@import "./assets/base.css";
</style>
<script>
import navbar from "./components/navbar.vue";
import formcomponent from "./components/formcomponent.vue";
import students from "./components/students.vue";
import admins from "./components/admins.vue";
import { computed, ref } from "vue";
export default {
  name: "App",
  components: {
    navbar,
    formcomponent,
    students,
    admins,
  },
  setup(props) {
    const showing = ref("formcomponent");
    const entities = ref([
      {
        id: 1,
        name: "yaya",
        salary: 9000,
        address: "Alexandria",
        type: "Admin",
      },
      {
        id: 2,
        name: "john due",
        salary: 9000,
        address: "Alexandria",
        type: "student",
      },
    ]);
    const stdarray = computed(() => {
      return entities.value.filter(
        (ele) => ele.type.toLowerCase() == "student"
      );
    });
    const adminsarray = computed(() => {
      return entities.value.filter((ele) => ele.type.toLowerCase() == "admin");
    });
    const addEntity = (obj) => {
      if (obj) {
        entities.value.push(obj);
      }
    };
    const deleteEntry = (id) => {
      let targerIndex = -1;
      entities.value.filter((ele, ind) => {
        if (ele.id == id) targerIndex = ind;
      });
      entities.value.splice(targerIndex, 1);
    };
    return {
      showing,
      entities,
      stdarray,
      adminsarray,
      addEntity,
      deleteEntry,
    };
  },
};
</script>

<script>
  export default {
    methods: {
      closeAddEventPopup() {
        this.$store.commit("setShowAddEvent", false);
      }
    }
  }
</script>

<template>
 <div class="add-event-container">
   <div class="content">
     <div class="close-container" @click="closeAddEventPopup">
       <div class="leftright"></div>
       <div class="rightleft"></div>
     </div>
     <div class="add-event-header"><p>Ajouter un Événement</p></div>
     <form class="add-form" action="/api/events" method="post">
       <label for="name">Nom</label>
       <input id="name" type="text">
       
       <!-- TODO: réfléchir à comment faire pour la description -->
<!--       <label for="description">Description</label>-->
<!--       <textarea id="description" cols="30" rows="10"></textarea>-->

       <label for="max-capacity">Capacité</label>
       <input id="max-capacity" type="number">
       
       <label for="starting-time">Heure de Début</label>
       <input id="starting-time" type="time">

       <label for="finishing-time">Heure de Fin</label>
       <input id="finishing-time" type="time">

       <label for="location">Emplacement</label>
       <select id="location"></select>

       <input id="sumbit-add" type="submit" value="Ajouter">
     </form>
   </div>
 </div>
</template>

<style scoped>
.add-event-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 80px);
  background-color: rgba(0, 0, 0, 0.5);
}

.content {
  position: absolute;
  height: fit-content;
  width: 30%;
  border: 2px solid var(--scnd3);
  background-color: var(--background);
  box-shadow: 0 0 50px rgba(255, 255, 255, 0.2);
  border-radius: 17px;
}

.add-event-header {
  height: fit-content;
  border-radius: 17px;
}

.add-event-header > p {
  color: white;
  font-size: 1.5em;
  margin: 7px 15px;
}

.add-form {
  display: flex;
  width: 60%;
  height: fit-content;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
}

.add-form > label {
  color: white;
  align-self: start;
}

input[type="number"],
input[type="text"],
input[type="time"],
select,
textarea {
  align-self: start;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

#sumbit-add {
  margin: 10px auto 30px;
  border: none;
  background-color: var(--scnd2);
  box-shadow: 0 0 10px var(--scnd2);
  color: white;
  font-size: 1.1em;
  padding: 10px;
  width: 50%;
  border-radius: 13px;
  transition: all 0.3s ease;
}

#sumbit-add:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 10px var(--scnd3);
  cursor: pointer;
}


.close-container {
  position: absolute;
  display: flex;
  align-items: center;
  margin: auto;
  width: 35px;
  height: 35px;
  cursor: pointer;
  top: 5px;
  right: 5px;
}

.leftright {
  height: 4px;
  width: 35px;
  position: absolute;
  background-color: var(--scnd2);
  border-radius: 2px;
  transform: rotate(45deg);
  transition: all .3s ease-in;
}

.rightleft {
  height: 4px;
  width: 35px;
  position: absolute;
  background-color: var(--scnd3);
  border-radius: 2px;
  transform: rotate(-45deg);
  transition: all .3s ease-in;
}

.close-container:hover .leftright {
  transform: rotate(-45deg);
}

.close-container:hover .rightleft {
  transform: rotate(45deg);
}
</style>
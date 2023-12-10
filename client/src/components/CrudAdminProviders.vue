<script setup>

</script>

<template>
  <div class="container">
    <div class="container-table">
      <table>
        <thead>
        <tr>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Mail</th>
          <th>Action</th>
          <th></th>
        </tr>
        </thead>
        <tfoot></tfoot>
        <tbody>
        <tr>
          <td>lorem1</td>
          <td>lorem2</td>
          <td>lorem3</td>
          <td>
            <form>
              <button class="edit-button">Editer<i class=""></i></button>
              <button class="delete-button">Supprimer<i class=""></i></button>
            </form>
          </td>
        </tr>
        <tr>
          <td>lorem1</td>
          <td>lorem2</td>
          <td>lorem3</td>
          <td>
            <form>
              <button class="edit-button">Editer<i class=""></i></button>
              <button class="delete-button">Supprimer<i class=""></i></button>
            </form>
          </td>
        </tr>
        <tr>
          <td>lorem1</td>
          <td>lorem2</td>
          <td>lorem3</td>
          <td>
            <form>
              <button class="edit-button">Editer<i class=""></i></button>
              <button class="delete-button">Supprimer<i class=""></i></button>
            </form>
          </td>
        </tr>
        <tr>
          <td>lorem1</td>
          <td>lorem2</td>
          <td>lorem3</td>
          <td>
            <form>
              <button class="edit-button">Editer<i class=""></i></button>
              <button class="delete-button">Supprimer<i class=""></i></button>
            </form>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <button class="add-button">Ajouter<i class=""></i></button>
  </div>
</template>

<style scoped>


body{
  background-color:lightgray;
}
table{
	width:100%;
  border-collapse: collapse;
  border-radius: 5px;
}

tr:nth-child(even){
  background-color: var(--component-background);
}

td{
  text-align: center;
  padding: 5px;
  border-left: 1px solid var(--background);
}

thead{
  background-color: var(--primary);
  color: var(--white);

}

.container{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50%;
  transform: translate(-35%, -50%);
  background-color:white;
  border-radius: 10px;
}

.container-table{
  border-radius: 5px;
}


.add-button{
  margin-left: calc(51% - 100px);
  width: fit-content;
  background-color: var(--crud-vert);
  border: none;
  color: white;
  padding: 5px 5px;
  margin-top: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.delete-button{
  background-color: var(--crud-rouge);
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

.edit-button{
  background-color: var(--crud-vert);
  margin-right: 10px;
  border: none;
  color: white;
  padding: 5px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
}

</style>
<script>
export default {
  name: 'FooterSection',
  props: {

  },
  components: {

  },
}

</script>

<template>
    <div class="footer">
        <div class="table">
            <table id="first-table">
                <thead>
                    <tr>
                        <th class="first-column">
                            <h3>EZCon</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h4>LE SALON FRANÇAIS DU JEU VIDEO</h4>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
                                do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                Ut enim ad minim veniam, quis nost
                            </p>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table id="scnd-table">
                <thead>
                    <tr>
                        <th class="scnd-column">
                            <h3>Infos pratiques</h3>
                        </th>
                        <th class="thrd-column">
                            <h3>À propos</h3>
                        </th>
                        <th class="fourth-column">
                            <h3>Nos réseaux</h3>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                        <td>
                            <button>ceci est un lien</button>
                        </td>
                        <td>
                            <img id="x" class="logo" src="../assets/reseaux-sociaux/X.png" alt="X logo"/>
                            <img id="insta" class="logo" src="../assets/reseaux-sociaux/Insta.png" alt="Instagram logo"/>
                            <img id="fb" class="logo" src="../assets/reseaux-sociaux/Fb.png" alt="Facebook logo"/>
                            <img id="tiktok" class="logo" src="../assets/reseaux-sociaux/Tiktok.png" alt="Tiktok logo"/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="tfoot-container">
            <div class="tfoot">
                <h4>EZCon @ 2023 | 20 au 25 MAI 2023 | ANDELNAN SALLE D'EXPOSITION</h4>
            </div>
            <div class="logos">
            </div>
        </div>
    </div>
</template>

<style scoped>

.footer {
    background-color: var(--c-asparagus);
    color: white;
    height: auto;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    --table-space: 40px;

    --columns-width: 25%;
    --last-column-width: 100%;

    --footer-margin: 10%;
    --logos-margin: 20%;
    --tfoot-container-height: 40px;
}

.table {
    margin-left: var(--footer-margin);
    margin-top: var(--table-space);
    margin-bottom: var(--table-space);
    display: flex;
    flex-direction: row;
}

#first-table {
    width: 30%;
    text-align: left;
    margin-right: 5%;
}

table {
    width: 100%;
    height: 90%;
    padding-right: var(--footer-margin);
    border-collapse: collapse;
}

.scnd-column, .thrd-column {
    width: var(--columns-width);
    text-align: left;
}

.fourth-column {
    width: var(--last-column-width);
    text-align: left;
}

tbody button {
    font-size: 1rem;
}

tbody td {
    height: 40px;
    text-align: justify;
    padding-right: 3em;
}

tbody button {
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
}

.tfoot-container {
    width: 100%;
    height: var(--tfoot-container-height);
    background-color: var(--c-background);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
}

.tfoot {
    width: auto;
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: var(--footer-margin);
}

.logos {
    width: auto;
    margin-right: var(--logos-margin);
}

.logo{
    width: 3em;
    height: 3em;
    cursor: pointer;
    margin-right: 1.5em;
}

</style>
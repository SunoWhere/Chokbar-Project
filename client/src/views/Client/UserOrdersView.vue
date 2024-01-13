<script>
import SideBar from "@/components/Global/SideBar.vue";
import QRCode from "qrcode-generator"
import {standsService, usersService} from "@/services";

export default {
  name: 'UserOrdersView',
  data () {
    return {
      orders: [],
      qrCodes: [],
      stands: [],
    }
  },
  components: {
    SideBar,
  },
  metaInfo() {
    return {
      title: 'UserordersView'
    }
  },
  mounted() {
    this.getOrders();
  },
  methods: {
    async getOrders() {
      try {
        const uuid_user = usersService.getUuid();
        if(uuid_user !== undefined) {
          await usersService.getOrders(uuid_user).then(async (res) => {
            this.orders = res;
            console.log(this.orders);
          });
        }
      } catch(error) {
        console.error(error);
      }
    },
    generateQRCode(hash) {
      const typeNumber = 0;
      const errorCorrectionLevel = 'L';
      const qr = QRCode(typeNumber, errorCorrectionLevel);
      qr.addData(hash);
      qr.make();

      return qr.createDataURL(10, 0);
    },
    async getStandName(id_stand) {
      if (this.stands && this.stands.length > 0) {
        const stand = await standsService.getStandById(id_stand);

        if (stand) {
          return stand.name;
        }
      }

      return 'Nom inconnu';
    },
  },
  computed: {
    isConnected() {
      return this.$store.state.isConnected;
    },
    getRole() {
      return this.$store.state.role;
    },
  },
}
</script>

<template>
  <div class="dashboard-container">
    <SideBar/>
    <div id="dc" v-if="isConnected && getRole === 'user' && orders !== undefined"> <!-- FIXME: Gérer l'erreur au lieu de mettre !== undefined ici-->

      <div class="table-body">
        <div class="head">
          <h4 class="table-head-title">{{getLang().command_num}}</h4>
          <h4 class="table-head-title">{{getLang().command_stand}}</h4>
          <h4 class="table-head-title">{{getLang().command_state}}</h4>
          <h4 class="table-head-title">QRCode</h4>
        </div>
        <div class="line" v-for="item in orders" :key="item.id_order">
          <div class="td"><p>{{ item.id_order }}</p></div>
          <div class="td"><p>{{item.id_stand}}</p></div>
          <div class="td"><p>{{item.id_order_state_order_state.state}}</p></div>
          <div class="td"><p><img :src="generateQRCode(item.hash)" alt="QR Code" /></p></div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>{{getLang().command_no_commands}}</p>
    </div>
  </div>
</template>

<style scoped>

.dashboard-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
}

#dc {
  width: 100%;
  padding: 50px 50px;
  color: var(--white);
}

p {
  color: var(--white);
}

.head {
  width: 100%;
  display: flex;
  transform: translateY(+20px);
  margin-top: 30px;
  margin-bottom: 30px;
}

.table-head-title {
  width: 25%;
}

th {
  width: 25%;
}

table {
  width: 100%;
}

.td {
  width: 25%;
}

.line {
  height: 60px;
  display: flex;
  flex-direction: row;
}

h2 {
  font-size: 1.1em;
  transform: translateY(-25px);
}

img {
  width: 50px;
  height: 50px;
  transition: scale 0.3s ease-in-out;
}

img:hover {
  scale: 6;
}

</style>
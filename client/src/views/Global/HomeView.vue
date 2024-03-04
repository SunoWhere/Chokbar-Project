<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods: {
  },
  computed: {

  },
  metaInfo() {
    return {
      title: 'Home'
    }
  }
}
</script>

<template>
  <div class="home">
    <div id="title-section">
      <div id="title">
        <div id="title-h1">
          <h1>EZCon</h1>
          <h3>{{ getLang().home_sub_date }}</h3>
        </div>
        <h2>{{ getLang().home_subtitle }}</h2>
        <div class="button-home" @click="$router.push('/Billetterie')">{{ getLang().navbar_billetterie }}</div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-1">
        <div id="pt-content">
          <h3 class="content-subtitle" id="first-sub-title">{{ getLang().home_first_p_title }}</h3>
          <h4 class="content-subtitle" id="scnd-sub-title">{{ getLang().home_first_p_subtitle }}</h4>
          <p class="content-p">
            {{ getLang().home_first_p }}
          </p>
        </div>
        <div class="img" id="borne-arcade"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-2">
        <div id="pt-content">
          <h3 class="content-subtitle">{{ getLang().home_second_p_title }}</h3>
          <p class="content-p">{{ getLang().home_second_p}}</p>
        </div>
        <div class="img" id="tournois"></div>
      </div>
    </div>
    <div class="sub-container">
      <div class="p-content" id="p-content-3">
        <div id="pt-content">
          <h3 class="content-subtitle">{{ getLang().home_third_p_title }}</h3>
          <p class="content-p">{{ getLang().home_third_p }}</p>
          <div id="vr-button-container">
            <div id="vr-inscription-button">{{ getLang().btn_subscribe }}</div>
          </div>
        </div>
        <div class="img" id="vr-img"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.home {
  text-align: center;
  color: white;
  font-size: 40px;
}

#title-h1 h1 {
  font-size: 1.3em;
  overflow: hidden;
  margin-bottom: -15px;
}

#title h2 {
  font-size: 0.7em;
}

#first-sub-title {
  color: var(--scnd2);
  overflow: hidden;
  margin-bottom: -15px;
}

#scnd-sub-title {
  color: var(--scnd3);
}

.content-p {
  font-size: 0.45em;
  text-align: justify;
}

#title-section {
  color: var(--white);
  height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  flex-direction: row;
  background-image: url('../../assets/ezcon.png');
  background-size: cover;
  position: relative;
  overflow: hidden;
}

#title-section::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
}

#title {
  position: absolute;
  top: 35%;
  left: 0%;
  color: var(--white);
  z-index: 2;
  text-align: left;
  width: 100%;
  height: calc(100vh - 80px);
  margin-bottom: 40px;
  margin-left: 15%;
}

.button-home {
  margin-top: 20px;
  width: 10%;
  height: 5%;
  font-size: 17px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--scnd2);
  box-shadow: 0 0 25px -5px var(--scnd3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.button-home:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 25px -5px var(--scnd2);
}

.sub-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  height: 70vh;
}

.sub-container p {
  width: 35%;
}

.sub-container .img {
  border-radius: 7px;
  width: 60%;
  height: 60%;
  background-size: cover;
  background-position: center;
}

#borne-arcade {
  background-image: url('../../assets/2.jpg');
}

#tournois {
  background-image: url('../../assets/3.jpg');
}

#vr-img {
  background-image: url('../../assets/4.jpg');
}

.content-subtitle {
  margin-bottom: 10px;
  text-align: left;
  color: var(--scnd3);
}

.p-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  margin-right: 7%;
}

#pt-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  padding: 10px 40px;
  margin-left: 8%;
}
#pt-content h3 {
  font-size: 1em;
}

#pt-content h4 {
  font-size: 0.85em;
}

#pt-content p {
  width: 80%;
}

#p-content-2 {
  flex-direction: row-reverse;
  margin-right: 0px;
  margin-left: 7%;
}

#vr-inscription-button {
  width: 8vw;
  height: 4vh;
  font-size: 17px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--scnd2);
  box-shadow: 0 0 25px -5px var(--scnd3);
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  margin-top: 10px;
}

#vr-inscription-button:hover {
  background-color: var(--scnd3);
  box-shadow: 0 0 25px -5px var(--scnd2);
}

#vr-button-container {
  width: 100%;
  padding-right: 20%;
  display: flex;
  justify-content: center;
}

h3 {
  font-size: 16px;
  color: var(--scnd2);
}

</style>

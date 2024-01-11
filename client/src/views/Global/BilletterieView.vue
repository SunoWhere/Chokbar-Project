<script>
export default {
  name: 'BilletterieView',
  components: {
  },
  metaInfo() {
    return {
      title: 'Billetterie'
    }
  },
  methods: {
    getLang() {
      return this.$store.state.lang;
    },
  },
}

</script>

<template>
  <section id="pricing-table">
    <div class="price-box-container">
      <div class="price-box">
        <div class="box-top-section">
          <div class="plan-name">
            <strong>{{ getLang().ticketing_name_card_1 }}</strong>
            <span>1 {{ getLang().ticketing_jour }}</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>10</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn" @click="$router.push('/Billetterie/checkout')">{{ getLang().ticketing_reserver }}</a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <span>{{ getLang().ticketing_avantages }}</span>
            </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_events }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_concours }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_commandes }}</span>
          </div>
          <div class="box-features-title">
            <p>Extra</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Goodies</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>{{ getLang().ticketing_priority }}</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>{{ getLang().ticketing_vip }}</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>{{ getLang().ticketing_premiere }}</span>
          </div>
        </div>
      </div>

      <div class="price-box popular">
        <div class="box-top-section">
          <div class="top-bar">
            <span>{{ getLang().ticketing_best_seller }}</span>
          </div>
          <div class="plan-name">
            <strong>{{ getLang().ticketing_name_card_3 }}</strong>
            <span>5 {{ getLang().ticketing_jours }}</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>45</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn" @click="$router.push('/Billetterie/checkout')">{{ getLang().ticketing_reserver }}</a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <p>{{ getLang().ticketing_avantages }}</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_events }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_concours }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_commandes }}</span>
          </div>
          <div class="box-features-title">
            <p>Extra</p>
          </div>
            <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Goodies</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_priority }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_vip }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_premiere }}</span>
          </div>
        </div>
      </div>

      <div class="price-box">
        <div class="box-top-section">
          <div class="plan-name">
            <strong>{{ getLang().ticketing_name_card_2 }}</strong>
            <span>3 {{ getLang().ticketing_jours }}</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>25</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn"  @click="$router.push('/Billetterie/checkout')">{{ getLang().ticketing_reserver }}</a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <p>{{ getLang().ticketing_avantages }}</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_events }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_concours }}</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_commandes }}</span>
          </div>
          <div class="box-features-title">
            <p>Extra</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Goodies</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>{{ getLang().ticketing_priority }}</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>{{ getLang().ticketing_vip }}</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>{{ getLang().ticketing_premiere }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>


a{
  text-decoration: none;
}

section{
  display: flex;
  align-items: center;
  justify-content: center;
}

#pricing-table{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-height: fit-content;
}

.box-top-section{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100px;
}

.price-box-container{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: calc(100vh - 80px);
}

.price-box{
  margin: 10px;
  width: 265px;
  border-radius: 5px;
  height: auto;
}
.box-top-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  border: 1px solid #ebebeb;
  border-top-left-radius: 17px;
  border-top-right-radius: 17px;
  border-bottom: none;
  position: relative;
  background: var(--component-background)
}

.plan-name{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
}
.plan-name strong{
  color:#19181e;
  font-size: 24px;
  margin: 5px 0px;
}
.plan-name span{
  color: #2b2a31;
  font-size: 12.8px;
}

.price-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.price strong{
  font-size: 64px;
  color: #19181e;
}

.price span{
  font-size: 32px;
  padding: 0px;
  margin: 0px;
  color: #292929;
  font-weight: 500;
}

.box-features-title {
  font-weight: 700;
  width: 100%;
  display: flex;
  padding: 10px 20px;
  position: relative;
}

.box-features-section{
  padding: 20px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ebebeb;
  border-top: 1px solid #c7c7c7;
  border-bottom-left-radius: 17px;
  border-bottom-right-radius: 17px;
  background: var(--component-background);
}
.features-box{
  width: 100%;
  display: flex;
  border-radius: 20px;
  padding: 10px 20px;
  position: relative;

}

.check-icon{
  display: flex;
  color: var(--crud-vert);
  margin-right: 7px;
  font-size: 14.4px;
}

.cross-icon{
  display: flex;
  color: var(--crud-rouge);
  margin-right: 7px;
  font-size: 14.4px;
}

.features-box span{
  color: #242424;
  font-size: 12.8px;
}
.features-box:hover{
  background-color: #f6f6f7;
  transition: all ease 0.3s;
}

.Choose-plan-btn{
  margin-top: 20px;
  font-size: 15px;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background-color: var(--scnd1);
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.top-bar{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  width: max-content;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14.4px;
  border-radius: 20px;
  padding: 10px 25px;
  color: #ffffff;
  background-color: var(--accent-color);
  box-shadow: 2px 2px 30px rgba(175, 74, 74, 0);

}

.popular .Choose-plan-btn{
  background-color: var(--accent-color);
  color: #ffffff;
}
.popular .box-features-section{
  border-left: 3px solid var(--accent-color);
  border-right: 3px solid var(--accent-color);
  border-bottom: 3px solid var(--accent-color);
}

.popular .box-top-section{
  border-top: 3px solid var(--accent-color);
  border-left: 3px solid var(--accent-color);
  border-right: 3px solid var(--accent-color);
}
.price-box:hover .box-top-section,
.price-box:hover .box-features-section{
  box-shadow: 2px 2px 30px rgba(255, 255, 255, 0.5);
  transition: all ease 0.2s;
}
@media(max-width:1160px){
  .price-box-container{
    width:800px
  }
  .price-box{
    flex-grow: 1;
  }
}
@media(max-width:810px){
  .price-box-container{
    width: 100%;
  }
}
@media(max-width:570px){
  .price-box{
    width:100%;
    margin: 20px 10px;
    box-shadow: 2px 2px 30px rgba(0,0,0,0.05);
  }
}

</style>

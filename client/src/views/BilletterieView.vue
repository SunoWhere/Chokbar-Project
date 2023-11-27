<script>
export default {
  name: 'BilletterieView',
  components: {
  },
  metaInfo() {
    return {
      title: 'Billetterie'
    }
  }
}

</script>

<template>
  <section id="pricing-table">
    <div class="price-box-container">
      <div class="price-box">
        <div class="box-top-section">
          <div class="plan-name">
            <strong>Visiteur</strong>
            <span>1 jour</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>10</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn" @click="$router.push('/Billetterie/checkout')">Réserver</a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <span>Avantage</span>
            </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Événements</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Concours</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Commande en ligne</span>
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
            <span>File prioritaire</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>Espace VIP</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>Accès aux avants premières</span>
          </div>
        </div>
      </div>

      <div class="price-box popular">
        <div class="box-top-section">
          <div class="top-bar">
            <span>LE PLUS VENDU</span>
          </div>
          <div class="plan-name">
            <strong>Addict</strong>
            <span>5 jours</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>45</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn" @click="$router.push('/Billetterie/checkout')">Réserver </a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <p>Avantage</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Événements</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Concours</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Commande en ligne</span>
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
            <span>File prioritaire</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Espace VIP</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Accès aux avants premières</span>
          </div>
        </div>
      </div>

      <div class="price-box">
        <div class="box-top-section">
          <div class="plan-name">
            <strong>Habitué</strong>
            <span>3 jours</span>
          </div>
          <div class="price-section">
            <strong class="price">
              <strong>25</strong>
              <span>€</span>
            </strong>
          </div>
          <a class="Choose-plan-btn"  @click="$router.push('/Billetterie/checkout')">Réserver</a>
        </div>
        <div class="box-features-section">
          <div class="box-features-title">
            <p>Avantage</p>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Événements</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Concours</span>
          </div>
          <div class="features-box">
            <div class="check-icon">
              <font-awesome-icon icon="fa-solid fa-check" />
            </div>
            <span>Commande en ligne</span>
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
            <span>File prioritaire</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>Espace VIP</span>
          </div>
          <div class="features-box">
            <div class="cross-icon">
              <font-awesome-icon icon="fa-solid fa-xmark" />
            </div>
            <span>Accès aux avants premières</span>
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
  background: var(--c-component-background)
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
  background: var(--c-component-background);
}
.features-box{
  width: 100%;
  display: flex;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  position: relative;

}

.check-icon{
  display: flex;
  color: var(--c-crud-vert);
  margin-right: 7px;
  font-size: 14.4px;
}

.cross-icon{
  display: flex;
  color: var(--c-crud-rouge);
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
  background-color: var(--c-asparagus);
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
  background-color: var(--c-accent-color);
  box-shadow: 2px 2px 30px rgba(175, 74, 74, 0);

}

.popular .Choose-plan-btn{
  background-color: var(--c-accent-color);
  color: #ffffff;
}
.popular .box-features-section{
  border-left: 3px solid var(--c-accent-color);
  border-right: 3px solid var(--c-accent-color);
  border-bottom: 3px solid var(--c-accent-color);
}

.popular .box-top-section{
  border-top: 3px solid var(--c-accent-color);
  border-left: 3px solid var(--c-accent-color);
  border-right: 3px solid var(--c-accent-color);
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

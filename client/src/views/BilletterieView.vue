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
              <strong>10€</strong>
            </strong>
          </div>
          <a href="#" class="Choose-plan-btn">Réserver <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="box-features-section">
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>60-day chat history</span>
            <div class="feature-details">
              <p>Your chats will be lo stored in the archives for 60 days.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Basic widget customization</span>
            <div class="feature-details">
              <p>Customization is limited to changing the theme and colors of the chat widget.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Ticketing system</span>
            <div class="feature-details">
              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Data security</span>
            <div class="feature-details">
              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
            </div>
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
              <strong>45€</strong>
            </strong>
          </div>
          <a href="#" class="Choose-plan-btn">Réserver <i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="box-features-section">
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>60-day chat history</span>
            <div class="feature-details">
              <p>Full customization, including changing the theme, colors, visibility.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Basic widget customization</span>
            <div class="feature-details">
              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Ticketing system</span>
            <div class="feature-details">
              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Data security</span>
            <div class="feature-details">
              <p>Chat and ticket reports plus a daily recap of your account activity.</p>
            </div>
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
              <strong>25€</strong>
            </strong>
          </div>
          <a href="#" class="Choose-plan-btn">Réserver<i class="fas fa-chevron-right"></i></a>
        </div>
        <div class="box-features-section">
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>60-day chat history</span>
            <div class="feature-details">
              <p>Full customization, including changing the theme, colors, visibility.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Basic widget customization</span>
            <div class="feature-details">
              <p>Built-in ticketing system that will allow you to create, manage, and track tougher cases. You can also use it to handle emails and messages left when your LiveChat is offline.</p>
            </div>
          </div>
          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Ticketing system</span>
            <div class="feature-details">
              <p>Secure 256-bit SSL encryption for website visitors and agents connecting to your LiveChat.</p>
            </div>
          </div>

          <div class="features-box">
            <i class="fas fa-check"></i>
            <span>Multiple brandings</span>
            <div class="feature-details">
              <p>All your chats will be stored in the archives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

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


<style>


a{
  text-decoration: none;
}
#pricing-table{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  //background-color: #0C0F0B;
}
.price-box-container{
  display: flex;
  justify-content: center;
  margin-top: 30px;
  flex-wrap: wrap;
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
  font-size: 1.5rem;
  margin: 5px 0px;
}
.plan-name span{
  color: #2b2a31;
  font-size: 0.8rem;
}

.price-section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px;
}
.price strong{
  font-size: 4rem;
  color: #19181e;
}
.price span{
  font-size: 0.8rem;
  padding: 0px;
  margin: 0px;
  color: #292929;
  font-weight: 500;
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

.features-box i{
  color: #462ebd;
  margin-right: 7px;
  font-size: 0.9rem;
}
.features-box span{
  color: #242424;
  font-size: 0.8rem;
}
.features-box:hover{
  background-color: #f6f6f7;
  transition: all ease 0.3s;
}

.feature-details{
  position: absolute;
  bottom:45px;
  left: 50%;
  transform: translateX(-50%);
  width:100%;
  height: auto;
  padding: 10px;
  background-color: #242424;
  color: #ebebeb;
  border-radius: 8px;
  font-size: 0.8rem;
  text-align: center;
  box-shadow: 2px 2px 30px rgba(0,0,0,0.10);
  display: none;
  animation: fade 0.2s;
}
.feature-details:after{
  content: '';
  width:0px;
  height: 0px;
  border-bottom: 5px solid transparent;
  border-left: 7px solid transparent;
  border-top: 7px solid #242424;
  border-right: 5px solid transparent;
  position: absolute;
  left: 50%;
  top: 100%;
}
.features-box:hover .feature-details{
  display:block;
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
  font-size: 0.9rem;
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
  box-shadow: 2px 2px 30px rgba(0,0,0,0.09);
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

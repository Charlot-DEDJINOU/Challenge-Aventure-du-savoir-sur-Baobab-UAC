<script>
import IconQuota from './icons/Icon-Quota.vue';

export default {
  name: 'VisuelItem',
  components : {
    IconQuota
  }
}
</script>
<template>
  <div class="container-visuel">
    <div class="header">
      <img src="../assets/mastercard.png" alt="mastercard" />
      <img src="../assets/baoaba.png" alt="baobab" />
    </div>
    <div class="body">
      <div class="child">
        <h1 class="text-center titre">AVENTURE DU SAVOIR SUR BAOBAB</h1>
        <div class="content">
          <div class="item-img">
            <img src="../assets/rabiatou.jpg" alt="profil" />
            <h1 class="mt-3 fw-bold text-center">TOHOUEGNON DEDJINOU</h1>
          </div>
          <div class="item-text">
            <div>
              <p class="fw-medium">
                <IconQuota />
                Te ne sais jamais à quel point tu es fort , jusqu'au jour où être fort reste ta
                seule opnion <IconQuota class="rotate"/>
              </p>
              <i>Bob Marley</i>
            </div>
            <p class="fw-bold">Challenge bien terminé et certificat reçu avec succès.</p>
          </div>
        </div>
        <p class="invitation">Pour ne plus rater ce challenge exceptionnel</p>
      </div>
    </div>
    <div class="footer">
      <div class="inscription">inscrivez-vous sur baobabplatform.org</div>
      <div class="rejoindre">
        <span>Rejoignez-nous pour la prochiane aventure !</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container-visuel {
  width: 1080px;
  height: 1080px;
  display: flex;
  flex-direction: column;
  zoom: 0.6;
}
.container-visuel .header {
  width: 100%;
  height: 12%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 10px;
}
.container-visuel .header img {
  height: 100px;
  object-fit: contain;
  margin: 0px 20px;
}
.container-visuel .body {
  width: 100%;
  height: 75%;
  background-image: url(../assets/backgroung.jpeg);
  background-position: center;
  background-size: cover;
}
.container-visuel .body .child {
  width: 100%;
  height: 100%;
  background-color: #68bc47d1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.container-visuel .body .child .titre {
  margin-top: 15px;
  font-size: 50px;
  letter-spacing: 2px;
  height: 10%;
}
.container-visuel .body .child .content {
  width: 90%;
  height: 75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container-visuel .body .child .content .item-img {
  width: 50%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container-visuel .body .child .content .item-img h1 {
  font-size: 38px;
  width: 100%;
}
.container-visuel .body .child .content .item-img img {
  width: 470px;
  height: 450px;
  border: 15px solid #f9d71e;
  object-fit: cover;
  object-position: center;
}
.container-visuel .body .child .content .item-text {
  width: 45%;
  height: 100%;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.container-visuel .body .child .content .item-text .rotate {
  transform: rotate(180deg);
}
.container-visuel .body .child .invitation {
  font-size: 52px;
  font-family: 'Marck Script';
  font-style: normal;
  font-weight: 500;
}
.container-visuel .footer {
  width: 100%;
  height: 13%;
}
.container-visuel .footer .inscription {
  width: 100%;
  height: 50%;
  text-align: center;
  background-color: #68bc47;
  color: white;
  font-size: 40px;
  letter-spacing: 2px;
}
.container-visuel .footer .rejoindre {
  width: 100%;
  height: 50%;
  background-image: url(../assets/barre.png);
  display: flex;
  align-items: center;
  justify-content: center;
}
.container-visuel .footer .rejoindre span {
  display: inline-block;
  font-size: 35px;
  font-weight: bold;
}
</style>

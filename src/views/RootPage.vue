<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/food">
          <ion-icon aria-hidden="true" :icon="fastFood" />
          <ion-label>Food</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/order">
          <ion-icon aria-hidden="true" :icon="cart" />
          <ion-label>Order</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/user">
          <ion-icon aria-hidden="true" :icon="personCircle" />
          <ion-label>User</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue'
import { fastFood, cart, personCircle } from 'ionicons/icons'
</script>

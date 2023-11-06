<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Order</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Order</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Order page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

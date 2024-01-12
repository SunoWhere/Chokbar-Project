<template>
  <div>
    <ContactForm/>
  </div>
</template>

<script>
import ContactForm from '@/components/Global/ContactForm.vue';

export default {
  name: 'ContactFormView',
  components: {
    ContactForm,
  },
  methods: {
    getLang() {
      return this.$store.state.lang;
    },
  },
  metaInfo() {
    return {
      title: 'Contact',
    };
  },
};

</script>

<style scoped>
</style>
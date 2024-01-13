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
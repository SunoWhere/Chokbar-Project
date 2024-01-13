const langMixin = {
    methods: {
        getLang() {
            return this.$store.state.lang;
        },
    },
};

export default langMixin;
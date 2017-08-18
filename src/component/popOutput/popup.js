export default {
	timeout:'',
	// 弹窗Action
	popAction (sta) {
		
		this.$store.commit('CHANGE_DIALOG_TEXT',sta);
		
		clearTimeout(this.timeout);
		this.timeout = setTimeout( () => {

			this.$store.commit('SHOW_HIDE_DIALOG_TEXT');
		},1200);
  	}

}


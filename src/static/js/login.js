var app = new Vue({
	el: '#main',
	delimiters: ['[[', ']]'],
	data: {
		showTip: true,
		username: '',
		password: '',
		nameTest: true,
		pwdTest: true,
		nameTip:'用户名至少5位以上',
        pwdTip:'密码至少5位以上'
	},
	methods: {
		stopShowName: function () {
			this.showTip = false;
			this.nameTest = true;
		},
		stopShowPwd:function(){
			this.showTip = false;
			this.pwdTest = true;
		},
		nameCheck:function(){
            if(this.username.trim().length < 5){
                this.nameTest = false;
            }
        },
        pwdCheck:function(){
            if(this.password.trim().length < 5){
                this.pwdTest = false;
            }
        },
	}
})

function check() {
	app.nameCheck();
	app.pwdCheck();
	return app.nameTest && app.pwdTest
}
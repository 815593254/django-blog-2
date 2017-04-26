var app = new Vue({
	el: '#main',
	delimiters: ['[[', ']]'],
	data: {
        showTip:true,
		username: '',
		password: '',
        spassword:'',
        email:'',
		nameTest: true,
		pwdTest: true,
        emailTest:true,
        spwdTest:true,
		nameTip:'用户名至少5位以上',
        pwdTip:'密码至少5位以上',
        emailTip:'请输入正确的邮箱',
        spwdTip:'请输入相同密码'
	},
	methods: {
		nameCheck:function(){
            if(this.username.trim().length < 5){
                this.nameTest = false;
                this.showTip = false;
            }
        },
        pwdCheck:function(){
            if(this.password.trim().length < 5){
                this.pwdTest = false;
                this.showTip = false;
            }
        },
        emailCheck:function(){
            var emailReg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
            if(!emailReg.test(this.email)){
                this.emailTest = false;
                this.showTip = false;
            }
        },
        spwdCheck:function(){
            if(this.spassword != this.password){
                this.spwdTest = false;
                this.showTip = false;
            }
        }
	}
})

function check() {
	app.nameCheck();
	app.pwdCheck();
    app.emailCheck();
    app.spwdCheck();
	return app.nameTest && app.pwdTest && app.emailTest && app.spwdTest
}
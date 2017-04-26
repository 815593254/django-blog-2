var app = new Vue({
	el: '#main',
	delimiters: ['[[', ']]'],
	data: {
		username: '',
		oldpassword: '',
        newpassword:'',
        snewpassword:'',
		nameTest: true,
		opwdTest: true,
        npwdTest: true,
        snpwdTest:true,
		nameTip:'用户名至少5位以上',
        opwdTip:'密码至少5位以上',
        npwdTip:'密码至少5位以上',
        snpwdTip:'请输入相同密码'
	},
	methods: {
		nameCheck:function(){
            if(this.username.trim().length < 5){
                this.nameTest = false;
            }
        },
        opwdCheck:function(){
            if(this.oldpassword.trim().length < 5){
                this.opwdTest = false;
            }
        },
        npwdCheck:function(){
            if(this.newpassword.trim().length < 5){
                this.npwdTest = false;
            }
        },
        snpwdCheck:function(){
            if(this.snewpassword != this.newpassword){
                this.snpwdTest = false;
            }
        }
	}
})

function check() {
	app.nameCheck();
	app.opwdCheck();
    app.npwdCheck();
    app.snpwdCheck();
	return app.nameTest && app.opwdTest && app.npwdTip && snpwdTip
}
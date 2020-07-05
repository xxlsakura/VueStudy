
var app=new Vue({
	el:"#app",
	data:{
		appid:'',
		miyue:'',
		textbefore:'',
	},
	methods:{
		show(){
			let that=this
			var v=$("input[type='radio']:checked").val()
			fanyi2("20200526000470775","aUr8rK_ESm8rctiyQgte",that.textbefore)
			
		}
	}
})
function fanyi2(appid,miyue,textbe){
	var md=MD5(appid+textbe+"1435660288"+miyue)
	
	axios.get("https://fanyi-api.baidu.com/api/trans/vip/translate",{params:{
		q:textbe,from:"en",to:"zh",appid:appid,salt:"1435660288",sign:md
	}}).then(resp=>{
		
			resp.data.trans_result[0].dst
		
		
		
	})
	.catch(err=>{console.log(err)})
	
   let that=this
   alert(that.str)
	 
}
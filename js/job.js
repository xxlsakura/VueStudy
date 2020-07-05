function submit(){
	var name=$("#name").val()
	var phone=$("#phone").val()
	var job=$("input[type='radio']:checked").val()
	if(name!=""&&phone!=""&&job!=null){
		$.ajax({
			type:"GET",
			url:"http://localhost:8080/insertjob",
			data:{
				jname:job,
				uname:name,
				phone:phone
			},
			success:function(data){
				alert(data)
			}
		})
	}else{
		alert("请先填写完整信息!")
	}
	
}

var app=new Vue({
	el:"#app",
	data:{
		joblist:[],
		msg:"",
		alljoblist:[],
		m:''
	},
	mounted() {
		this.queryalljob()
	},
	methods:{
		look(){
			        let that=this
					var name=$("#lookname").val()
					if(name!=""){
						$.ajax({
							type:"GET",
							url:"http://localhost:8080/querybyuname",
							data:{
								uname:name
							},
							success:function(data){
								if(data!=""){
									that.joblist=data
									that.msg=""
								}else{
									that.joblist=[]
									that.msg="暂时没有任务，快去添加任务吧!"
								}
								
							}
						})
					}else{
						alert("请先输入用户名!")
					}
				},
				queryalljob(){
					let that=this
					$.ajax({
						type:"GET",
						url:"http://localhost:8080/queryalljob",
						success:function(data){
							if(data!=""){
								that.alljoblist=data
								that.m=""
							}else{
								that.m="还没有任务申请呢!"
								that.alljoblist=[]
							}
							
						}
					})
				},
				agree(jid){
					$.ajax({
						type:"GET",
						data:{
							jid:jid,
							msg:"agree"
						},
						url:"http://localhost:8080/updatejob",
						success:function(data){
							alert(data)
						}
					})
				},
				refuse(jid){
					$.ajax({
						type:"GET",
						data:{
							jid:jid,
							msg:"refuse"
						},
						url:"http://localhost:8080/updatejob",
						success:function(data){
							alert(data)
						}
					})
				}
				
	}
})

	


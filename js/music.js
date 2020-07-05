var isplaying=false
var app=new Vue({
	el:"#app",
	data:{
		msg:"",
		musiclist:[],
		musicurl:"",
		picurl:"./img/002.jpg",
		commentslist:[],
		videosrc:"",
		musicname:""
	},
	methods:{
		searchMusic(m){
			var that=this
			axios.get("http://musicapi.leanapp.cn/search?keywords="+m)
			.then(function(resp){that.musiclist=resp.data.result.songs
			//console.log(resp)
			}
			,function(err){console.log(err)})
		},
		playMusic(m){
			var that=this
			axios.get("https://autumnfish.cn/song/url?id="+m).then(function(res){
				that.musicurl=res.data.data[0].url;
				console.log(res.data.data[0].url);
			},function(err){
				console.log(err)
			})
			
			axios.get("https://autumnfish.cn/song/detail?ids="+m)
			.then(function(res){
				that.musicname=res.data.songs[0].name;
				that.picurl=res.data.songs[0].al.picUrl;
				
			},function(err){
				console.log(err)
			})
			
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+m)
			.then(function(res){
				that.commentslist=res.data.hotComments
				
			},function(err){
				console.log(err)
			})
		},
		playMv(mvid,id){
			var that=this
			axios.get("https://autumnfish.cn/mv/url?id="+mvid).then(function(res){
				that.videosrc=res.data.data.url;
				//console.log(res.data.data.url)
			}
			,function(err){console.log(err)})
			
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+id)
			.then(function(res){
				that.commentslist=res.data.hotComments
				
			},function(err){
				console.log(err)
			})
			
		},
		play(){
			var that=this
			that.isplaying=true
			var rotation = function (){
			  $("#songimg").rotate({
			    angle:0,
			    animateTo:360,
				duration:6000,
				easing: function (x,t,b,c,d){
				              return c*(t/d)+b;
				           },
			    callback: rotation
			  });
			}
			rotation();
			
		},
		pause(){
			var that=this
			that.isplaying=false
			var rotation = function (){
		
			 $("#songimg").rotate({
				
			   angle:0,
			   animateTo:0,
			 	duration:0,
			 	easing: function (x,t,b,c,d){
			 				              return c*(t/d)+b;
			 				           },
			   callback: rotation
			 });
			}
			rotation();
			
		}
	}
})

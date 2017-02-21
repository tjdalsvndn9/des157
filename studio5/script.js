new Vue({
el:'#app',
data:{
	loaderTrue:true,
	firstPage:false,
	videos:['video1.mp4','video2.mp4','video3.mp4','video4.mp4','video5.mp4','video6.mp4']
},
methods:{
	LoaderGone(){
		setTimeout(()=>{
			this.loaderTrue = false;
			this.firstPage=true;
		},3000)

	},
	randomVideo(){
		
		var i = Math.floor(Math.random() * this.videos.length);
		console.log(this.videos[i]);
		return this.videos[i] +" ";

	}
}

})



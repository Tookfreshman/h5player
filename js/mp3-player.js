//获取音频标签
var audio_player = document.querySelector("audio");
//获取返回上一首歌按钮
//后面的注释省略
var last_song = document.querySelector(".last-song");
var play_pause = document.querySelector(".play-pause");
var next_song = document.querySelector(".next-song");
var curr_time = document.querySelector(".curr-time");
var total_time = document.querySelector(".total-time");
var total_progress = document.querySelector(".total-progress");
var curr_progress = document.querySelector(".curr-progress");
var curr_signal = document.querySelector(".curr-signal");
var fav_song = document.querySelector(".fav-song");
var song_volume = document.querySelector(".song-volume");
var volume_btn = document.querySelector(".volume-btn");
var volume_adjust = document.querySelector(".volume-adjust");
var volume_text = document.querySelector(".volume-text");
var volume_sign = document.querySelector(".volume-sign");
var volume_curr = document.querySelector(".volume-curr");
var volume_curr_sign = document.querySelector(".volume-curr-sign");
var music_name = document.querySelector(".music-name");
var music_singer = document.querySelector(".music-singer");
var song_poster = document.querySelector(".song-poster");
var left_side = document.querySelector(".left-side");
var left_side_li =left_side.querySelectorAll("li");
var left_side_span = left_side.querySelectorAll("span");
var show_lrc_ul = document.querySelector(".show-lrc-ul");
var lrc_poster = document.querySelector(".lrc-poster");
var lrc_name = document.querySelector(".lrc-name");
var music_lrc_bg = document.querySelector(".music-lrc-bg");
function Isplay(){
	if(audio_player.paused){
		audio_player.play();
		play_pause.classList.remove("fa-play");
		play_pause.classList.add("fa-pause");
		play_pause.style.paddingLeft = "0";
		play_pause.title = "暂停";
	}else{
		audio_player.pause();
		play_pause.classList.remove("fa-pause");
		play_pause.classList.add("fa-play");
		play_pause.style.paddingLeft = "4px";
		play_pause.title = "播放";
	}
}
var curr_index = 0;
// 定义音频总时长
var full_time = 0;
//当音频可以播放时
audio_player.oncanplay = function(){
	full_time = audio_player.duration;
	var m  = Math.floor(full_time%3600/60);
	var s = Math.floor(full_time%60);

	m = m<10?"0" + m :	m;
	s = s<10?"0" + s :	s;
	total_time.innerHTML = m + ":" + s ;
	play_pause.onclick = function(){
		Isplay();
	};
	next_song.onclick = function(e){
		curr_index++;
		if(curr_index > song.length - 1){
			curr_index = 0;
		}
		audio_player.src = song[curr_index].src;
		music_name.innerHTML = song[curr_index].name;
		music_singer.innerHTML = song[curr_index].singer;
		song_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		lrc_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		music_lrc_bg.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		lrc_name.innerHTML = song[curr_index].name;
		$(".lrc-info").html("歌手:" + song[curr_index].singer);
		data = {
			time:ttArr[curr_index],
			lrc:ssArr[curr_index]
		};
		str = template('template',data);
		document.querySelector(".show-lrc-ul").innerHTML= str;
		Isplay();
		e.stopPropagation();
	};
	last_song.onclick = function(e){
		curr_index--;
		if(curr_index < 0){
			curr_index = 3;
		}
		audio_player.src = song[curr_index].src;
		music_name.innerHTML = song[curr_index].name;
		music_singer.innerHTML = song[curr_index].singer;
		lrc_name.innerHTML = song[curr_index].name;
		song_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		lrc_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		music_lrc_bg.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		$(".lrc-info").html("歌手:" + song[curr_index].singer);
		data = {
			time:ttArr[curr_index],
			lrc:ssArr[curr_index]
		};
		str = template('template',data);
		document.querySelector(".show-lrc-ul").innerHTML= str;
		Isplay();
		e.stopPropagation();
	};
	total_progress.onmousedown = function(e){
			if(e.offsetX >=540){
				curr_signal.style.left = "540px";
			}else{
				curr_signal.style.left = e.offsetX + "px";
			}
			curr_progress.style.width = e.offsetX + "px";
			audio_player.currentTime = e.offsetX / 550 * full_time;	
	};
};
audio_player.ontimeupdate = function(){
	var cTime = audio_player.currentTime;
	var m  = Math.floor(cTime%3600/60);
	var s = Math.floor(cTime%60);
	m = m<10?"0" + m :	m;
	s = s<10?"0" + s :	s;
	curr_time.innerHTML = m + ":" + s ;
	curr_progress.style.width = cTime /full_time * 550 + "px";
	if(cTime /full_time * 550 >= 540){
		curr_signal.style.left = "540px";
	}else{
		curr_signal.style.left = cTime /full_time * 550 + "px";
	}
	var currentH =120;
	var curr_lrc  = document.querySelectorAll(".show-lrc-ul li");
	for(var i = 0; i<curr_lrc.length;i++){
		if(curr_lrc[i].dataset.time < cTime){
 			show_lrc_ul.style.top = currentH - 40*i +"px";
			$(".show-lrc-ul li").css({"color":"#fff"});
			curr_lrc[i].style.color = "rgb(49,194,124)";
		}
	}
	if(cTime == full_time){
		curr_index++;
		if(curr_index == 4){
			curr_index = 0;
		}
		audio_player.src = song[curr_index].src;
		music_name.innerHTML = song[curr_index].name;
		music_singer.innerHTML = song[curr_index].singer;
		lrc_name.innerHTML = song[curr_index].name;
		song_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		lrc_poster.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';
		music_lrc_bg.style.backgroundImage = 'url("images/poster/' + song[curr_index].name +'.jpg")';

		$(".lrc-info").html("歌手:" + song[curr_index].singer);
		data = {
			time:ttArr[curr_index],
			lrc:ssArr[curr_index]
		};
		str = template('template',data);
		document.querySelector(".show-lrc-ul").innerHTML= str;
		Isplay();
	}
};
fav_song.onclick = function(){
	if(fav_song.classList.contains("fa-heart-o")){
		fav_song.classList.remove("fa-heart-o");
		fav_song.classList.add("fa-heart");
		fav_song.style.color = "rgb(255,106,106)";
		fav_song.title = "取消喜欢";
	}else{
		fav_song.classList.remove("fa-heart");
		fav_song.classList.add("fa-heart-o");
		fav_song.style.color = "";
		fav_song.title = "我喜欢";
	}
};
song_volume.onmousedown = function(e){
	if(	volume_btn.style.display == "block"){
		volume_btn.style.display = "none";
		song_volume.style.color = "rgb(204,204,204)";
	}else{
		volume_btn.style.display = "block";
		song_volume.style.color = "rgb(49,194,124)";
	}
	e.stopPropagation();
};
// 定义音量
var tVolume = audio_player.volume *100;
volume_adjust.onmousedown = function(e){
	if(e.offsetY <= 100){
		volume_curr.style.height = 100 - e.offsetY + "px";
		volume_curr_sign.style.top = e.offsetY -3+ "px";
		tVolume = 100 - e.offsetY;
		console.log(tVolume);
		audio_player.volume = Math.round(tVolume)/100;
		volume_text.innerHTML = Math.round(tVolume)+ "%";
		volume_sign.classList.remove("fa-volume-off");
		volume_sign.classList.remove("fa-volume-down");
		volume_sign.classList.remove("fa-volume-up");
		volume_sign.style.color ="";
		if(audio_player.volume >= 0.5){
			volume_sign.classList.add("fa-volume-up");
		}else if(audio_player.volume < 0.5 && audio_player.volume > 0){
			volume_sign.classList.add("fa-volume-down");
		}else{
			volume_sign.classList.add("fa-volume-off");
			volume_sign.style.color = "rgb(255,106,106)";
		}
	}
	e.stopPropagation();
};
volume_btn.onmousedown = function(e){
	e.stopPropagation();
};
volume_sign.onmousedown = function(e){
	volume_sign.classList.remove("fa-volume-off");
	volume_sign.classList.remove("fa-volume-down");
	volume_sign.classList.remove("fa-volume-up");
	if(audio_player.volume == 0){
		audio_player.volume = tVolume/100;
		volume_sign.style.color ="";
		if(audio_player.volume >= 0.5){
			volume_sign.classList.add("fa-volume-up");
		}else{
			volume_sign.classList.add("fa-volume-down");
		}
	}else{
		audio_player.volume = 0;
		volume_sign.classList.add("fa-volume-off");
		volume_sign.style.color = "rgb(255,106,106)";
	}
	e.stopPropagation();
};
for(var i= 0 ; i < left_side_li.length ; i++){
	left_side_li[i].onclick = function(){
		for(var j = 0 ; j < 6 ; j++){
			left_side_li[j].style.backgroundColor = "";
			left_side_li[j].style.color = "";
			left_side_span[j].style.color = "rgb(113,116,116)";
			left_side_span[2].style.color = "rgb(255,106,106)";
		}
		this.style.backgroundColor = "rgb(49,194,124)";
		this.style.color = "white";
		this.querySelector("span").style.color = "white";
	};
}
$(".song-poster").click(function(e){
	if($(".left-side").is(":hidden")){
		$(".left-side").show();
		$(".top-side").show();
		$(".music-list").show();
		$(".music-lrc").animate({top:"100%"},500);
		$(".song-poster-ph i").delay(200).removeClass("fa-angle-double-down")
		.addClass("fa-angle-double-up");
		this.title = "展开歌曲详情页";
		$(".music-list2").css({"top":"100%"});
	}else{
			$(".left-side").hide();
			$(".top-side").hide();
			$(".music-list").hide();
			$(".music-lrc").animate({top:"0"},500);
			$(".song-poster-ph i").delay(200).removeClass("fa-angle-double-up")
			.addClass("fa-angle-double-down");
			this.title = "关闭歌曲详情页";
			$(".music-list2").css({"top":"100%"});
	}
	e.stopPropagation();
});
$(".my-music-fav").click(function(){
	$(".music-list2").animate({top:"50px"},300);
	$(".music-list1").hide();
});
$(".local-list").click(function(){
	$(".music-list1").show();
	$(".music-list2").css({"top":"100%"});
});

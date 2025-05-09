/**
 * 1.Render songs
 * 2.Scroll top
 * 3.Play/pause/seek
 * 4.CD rotate
 * 5.Next/prev
 * 6.Random
 * 7.Next/Repeat when ended
 * 8.Active song.
 * 9.Scroll active song into view
 * 10.Play song when click
 */

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY = 'PLAYER';

const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const nextBtn = $('.btn-next');
const prevBtn = $('.btn-prev');
const randomBtn = $('.btn-random');
const repeatBtn = $('.btn-repeat');
const playlist = $('.playlist');

const app = {
    currentIndex:0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    config: {},
    songs : [
        {
            name:'Blue',
            singer:'Yung Kai',
            path:'./music/blue.mp3',
            image:'./image/blue.jpg'
        },
        {
            name:'Thap Trap Tu Do',
            singer:'Lý Lữ Ca',
            path:'./music/thap_trap_tu_do.mp3',
            image:'./image/thap_trap_tu_do.jpg'
        },
        {
            name:'Giờ Thì',
            singer:'buitruonglinh',
            path:'./music/gio_thi.mp3',
            image:'./image/gio_thi.jpg'
        },
        {
            name:'Phép Màu',
            singer:'MAYDAYs ft. Minh Tốc',
            path:'./music/phep_mau.mp3',
            image:'./image/phep_mau.jpg'
        },
        {
            name:'Comethru',
            singer:'Jeremy Zucker',
            path:'./music/comethru.mp3',
            image:'./image/comethru.jpg'
        }
    ],
    setConfig: function (key, value) {
        this.config[key] = value;
        // (2/2) Uncomment the line below to use localStorage
        // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
      },
    render: function(){
        const htmls = this.songs.map((song,index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" 
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
            })
        playlist.innerHTML = htmls.join('');
    },
    handleEvents: function(){
        const _this = this;
        const cdWidth = cd.offsetWidth;
        //Xử lý CD quay và dừng
        const cdThumbAnimate = cdThumb.animate([
            {transform: 'rotate(360deg)'}
        ],{
            duration: 10000,//quay trong 10s
            iterations: Infinity//lặp bao nhiêu lần 
        })
        cdThumbAnimate.pause();
        //Xử lý phóng to thu nhỏ CD khi dùng Slow
        document.onscroll = function(){//lắng nghe sự kiện khi mà chúng ta kéo Slow trên document
            //console.log(window.scrollY);//scrollY là số liệu khi kéo Slow
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            //console.log(newCdWidth);
            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }

        //Xử lý khi play
        playBtn.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }else{
                audio.play();
            }
        }
        //khi song đc play
        audio.onplay = function(){
            _this.isPlaying = true;
            player.classList.add('playing');
            cdThumbAnimate.play();
        }
        //khi song bị pause
        audio.onpause = function(){
            _this.isPlaying = false;
            player.classList.remove('playing');
            cdThumbAnimate.pause();
        }
        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100);
                progress.value = progressPercent;
            }
        }
        //Xử lý khi tua xong
        progress.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value;
            audio.currentTime = seekTime;
        }
        //Khi next bài hát
        nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.nextSong();
            }
            audio.play();
        }
        //Khi prev bài hát
        prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong();
            }else{
                _this.prevSong();
            }
            audio.play();
        }
        //Xử lý bật tắt random
        randomBtn.onclick = function(){
            _this.isRandom = !_this.isRandom;
            randomBtn.classList.toggle('active',_this.isRandom);
            //_this.setConfig('isRandom',_this.isRandom);
        }
        //Xử lý bật tắt lặp lại bài hát
        repeatBtn.onclick = function(){
            _this.isRepeat = !_this.isRepeat;
            repeatBtn.classList.toggle('active',_this.isRepeat);
            //_this.setConfig('isRepeat',_this.isRepeat);
        }
        //Xử lý next song khi audio ended
        audio.onended = function(){
            if(_this.isRepeat){
                audio.play();
            }else{
                nextBtn.click();
            }
        }
        //Lắng nghe hành vi click vào playlist 
        playlist.onclick = function(e){
            const songNode = e.target.closest('.song:not(.active)');//thao tác trên elemet ko có class là active
            if(songNode || e.target.closest('.option')){
                //Xử lý click vào playlist 
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                }
                //Xử lý khi click vào option
                if(e.target.closest('.option')){
                    
                }
            }

        }

    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong', {
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    loadCurrentSong:function(){
        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
        this.render();
        this.scrollToActiveSong();
    },
    loadConfig: function () {
        this.isRandom = this.config.isRandom;
        this.isRepeat = this.config.isRepeat;
      },
    nextSong: function(){
        this.currentIndex++;
        if(this.currentIndex >= this.songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function(){
        this.currentIndex--;
        if(this.currentIndex < 0){
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * this.songs.length);
        }while(newIndex === this.currentIndex)
            this.currentIndex = newIndex;
            this.loadCurrentSong();
    },
    scrollToActiveSong: function(){
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',//kéo cho mượt mà
                block: 'nearest'//kéo đến gần phạm vi nhìn thấy
            })
        }, 300);
    },
    start: function(){
        //Gán cấu hình từ config vào ojbect 
        this.loadConfig();
        //định nghĩa các thuộc tính cho object 
        this.defineProperties();
        //Lắng nghe/Sử lý các sự kiện (DOM events) 
        this.handleEvents();
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurrentSong();
        //Render playlist
        this.render();
    }
}
app.start();
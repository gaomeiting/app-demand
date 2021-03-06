

export const audioHandler = {
	data() {
		return {
			currentSongIndex: -1,
			flag: false,
			currentTime: '',
			totalTime: '',
			songReady: false,
			song: false,
			diff: 0
		}
	},
	methods: {
		settingCurrentSong(index) {
			if (index === this.currentSongIndex) {
				//歌曲切换
				this.flag = !this.flag;
				this.flag ? this.$refs.audio.play() : this.$refs.audio.pause()
			} else {
				this.song = true;
				this.currentSongIndex = index
				this.$refs.audio.load()
				setTimeout(() => {
					this.song = false
					this.$refs.audio.play();
				}, 1000)
				this.flag = true;

			}
		},
		ready() {
			this.songReady = true;
		},
		updateTime(e) {
			let currentTime = e.target.currentTime | 0;
			let totalTime = this.$refs.audio && this.$refs.audio.duration | 0;
			let diff = totalTime * 1 - currentTime * 1
			this.diff = diff;
			this.currentTime = this.format(diff);
		},
		end() {
			this.flag = false;
		},
		format(n) {
			if(!n) return '';
			let m = 0;
			let s = 0;
			m = n / 60 | 0;
			s = n % 60;
			let padS = this._pad(s)
			return `${m}:${padS}`
		},
		_pad(num, n = 2) {
			let len = num.toString().length
			while (len < n) {
				num = '0' + num
				len++
			}
			return num
		}
	}
}

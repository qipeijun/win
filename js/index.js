
let app = new Vue({
  el:"#app",
  data(){
    return {
      show:false,
      curImg:1,
      index:0,
      datas:[
        {
          src:'./img/win/乳胶枕.jpg',
          srcW:""
        },
        {
          src:'./img/win/天猫精灵.jpg',
          srcW:""
        },
        {
          src:'./img/win/小米牙刷.jpg',
          srcW:""
        },
        {
          src:'./img/win/小米耳机.jpg',
          srcW:""
        },
        {
          src:'./img/win/小米闹钟.jpg',
          srcW:""
        },
        {
          src:'./img/win/床品四件套.jpg',
          srcW:""
        },
        {
          src:'./img/win/小熊蒸锅.jpg',
          srcW:""
        },
        {
          src:'./img/win/小米灯.jpg',
          srcW:""
        },
        {
          src:'./img/win/帐篷.jpg',
          srcW:""
        },

        {
          src:'./img/win/电磁炉.jpg',
          srcW:""
        },
        {
          src:'./img/win/登山杖.jpg',
          srcW:""
        },
        {
          src:'./img/win/空气炸锅.jpg',
          srcW:""
        },
        {
          src:'./img/win/山地车.jpg',
          srcW:""
        },
        {
          src:'./img/win/m幸运奖.png',
          srcW:"./img/win/幸运奖.jpg"
        },
        {
          src:'./img/win/面包机.jpg',
          srcW:""
        },
        {
          src:'./img/win/m二等奖.png',
          srcW:"./img/win/二等奖.jpg"
        },
        {
          src:'./img/win/m一等奖.png',
          srcW:"./img/win/一等奖.jpg"
        },
        {
          src:'./img/win/m三等奖.png',
          srcW:"./img/win/三等奖.jpg"
        },






      ],
      imgs:[],
    }
  },
  methods:{
    clearDatas(){
      localStorage.removeItem('datas')
    },
    showImg(i,e){
      let node = e.currentTarget;
      let src = '';
      console.log(i);
      if ($(node).find('img').data('win')) {
          src = $(node).find('img').data('win')
      }else {
        src = $(node).find('img').attr('src')
      }
      if (src == './img/click.jpg') {
          return;
      }
      this.show = true;
      this.curImg = src;
      this.index = i;
    },
    hideImg(){
      this.show = false;
      this.imgs.splice(this.index,1,{
        src:'./img/click.jpg',
        srcW:""
      });
      localStorage.datas = JSON.stringify(this.imgs);
    }
  },
  created(){
    AOS.init();
    let {datas} = localStorage;
    if (datas) {
        this.imgs = JSON.parse(datas)
    }else {
      this.imgs = this.datas
    }

  },
  mounted(){

  }
})
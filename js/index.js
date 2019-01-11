
let app = new Vue({
  el:"#app",
  data(){
    return {
      show:false,
      curImg:1,
      index:0,
      datas:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
      imgs:[],
    }
  },
  methods:{
    clearDatas(){
      localStorage.removeItem('datas')
    },
    showImg(n,i){
      if (n>=1000) {
          return;
      }
      this.show = true;
      this.curImg = n;
      this.index = i;
    },
    hideImg(){
      this.show = false;
      this.imgs.splice(this.index,1,1000);
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
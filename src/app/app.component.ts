import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bonus: boolean =false ; //当たり判定
  pre3num: number | undefined; //2個前の
  pre2num: number | undefined; //2個前の
  pre1num: number | undefined; //１個前
  leftnum: number = 1; //左リールの数字
  midnum: number = 3; //中リールの数字
  rightnum: number = 5; //右リールの数字
  game:number=0;//総回転数
  between:number=0;//大当たり間
  // bonus の値に応じて次回の実行間隔を設定
  interval = this.bonus ? 3000 : 100;

//   ngOnInit(){

  //   const interval1 = setInterval(()=>{
  //     if(!this.bonus){
  //       this.slot()
  //     }else{
  //       clearInterval(interval1)
  //     }
  // },100);

  // const interval2 = setInterval(()=>{

  //       if(this.bonus){
  //         this.slot()
  //       }else{
  //         clearInterval(interval2)
  //       }
  //   },3000);

// //   const interval1 = setInterval(() => {
// //     if (!this.bonus) {
// //         setTimeout(() => {
// //             this.slot();
// //         }, 100);
// //     } 
// //     if(this.bonus) {
// //         setTimeout(() => {
// //             this.slot();
// //         }, 5000);
// //     }
// // }, 100);

//  setInterval(this.executeSlot, 100);

//     }

   




   auto() {
    const interval1 = setInterval(()=>{
      if(!this.bonus){
        this.slot()
      }else{
        clearInterval(interval1)
      }
  },100);

  const interval2 = setInterval(()=>{

        if(this.bonus){
          this.slot()
        }else{
          clearInterval(interval2)
        }
    },3000);
    }
    
   

  //ボタンが押されたときの処理
  slot() {
    let sto = this.pre1num;
    this.pre1num = this.pre2num;
    this.pre2num = this.pre3num;
    this.pre3num = Math.floor(Math.random() * 999) + 1;
    this.game+=1;
    this.between+=1;

    if (sto == undefined) {
      this.leftnum = Math.floor(Math.random() * 9) + 1;
      this.midnum = Math.floor(Math.random() * 9) + 1;
      this.rightnum = Math.floor(Math.random() * 9) + 1;
    } else {
      this.leftnum = Math.floor(sto / 100);
      this.midnum = Math.floor((sto / 10) % 10);
      this.rightnum = Math.floor(sto % 10);
    }

    // if(this.pre2num<500){
    //   this.bonus = true;
    // }else{
    //   this.bonus = false;
    // }

    // if(this.pre2num<0){
    //   // alert('チャンス');
    // }

    if (this.predict(this.pre3num)) {
      this.bonus = true;
    }

    if (this.predict(this.pre2num ?? 135)) {
      let audio = document.getElementById('myaudio2')as HTMLAudioElement;
      audio.play();
    }

    if (this.predict(this.pre1num ?? 135)) {
      this.showBox('showbox');
      let audio = document.getElementById('myaudio')as HTMLAudioElement;
      audio.play();
    }

    if (
      this.leftnum == this.midnum &&
      this.midnum == this.rightnum 
    ) {
      // alert('大当たり\n' + this.leftnum + this.midnum + this.rightnum);
      this.between=0;
      this.showBox('showbox1');
      this.bonus=false;
    }
    //this.bonus=true;

    console.log(this.bonus);

  }






  //当たっているかいないかの処理
  predict(i: number): boolean {
    let a = Math.floor(i / 100);
    let b = Math.floor((i / 10) % 10);
    let c = Math.floor(i % 10);

    if (a == b && b == c) {
      return true;
    } else {
      return false;
    }
  }

  //2秒後にcloseboxメソッドの呼び出し
  showBox(x:string) {
    let showbox = document.getElementById(x) as HTMLElement;
    showbox.style.display = 'block';
    let invalidpush = document.getElementById('push') as HTMLButtonElement;
    invalidpush.disabled = true;
    setTimeout(() => {
      this.closebox(x);
    }, 3000);
  }

  //showboxを非表示にする
  closebox(x:string) {
    let showbox = document.getElementById(x) as HTMLElement;
    showbox.style.display = 'none';
    let invalidpush = document.getElementById('push') as HTMLButtonElement;
    invalidpush.disabled = false;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

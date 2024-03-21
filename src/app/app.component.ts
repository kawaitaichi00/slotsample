import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  bonus: boolean = false; //当たり判定
  pre2num: number | undefined; //2個前の
  pre1num: number | undefined; //１個前
  leftnum: number = 1; //左リールの数字
  midnum: number = 3; //中リールの数字
  rightnum: number = 5; //右リールの数字

  //ボタンが押されたときの処理
  slot() {
    let sto = this.pre1num;
    this.pre1num = this.pre2num;
    this.pre2num = Math.floor(Math.random() * 999) + 1;

    if (sto == undefined) {
      this.leftnum = Math.floor(Math.random() * 9) + 1;
      this.midnum = Math.floor(Math.random() * 9) + 1;
      this.rightnum = Math.floor(Math.random() * 9) + 1;
    } else {
      this.leftnum = Math.floor(sto / 100);
      this.midnum = Math.floor((sto / 10) % 10);
      this.rightnum = Math.floor(sto % 10);
    }

    if (this.predict(this.pre2num)) {
      alert('チャンス');
    }

    if (this.predict(this.pre1num ?? 135)) {
      this.showBox();
    }

    if (
      this.leftnum == this.midnum &&
      this.midnum == this.rightnum &&
      this.rightnum == this.leftnum
    ) {
      alert('大当たり\n' + this.leftnum + this.midnum + this.rightnum);
    }
  }

  //当たっているかいないかの処理
  predict(i: number): boolean {
    let a = Math.floor(i / 100);
    let b = Math.floor((i / 10) % 10);
    let c = Math.floor(i % 10);

    if (a == b && b == c && c == a) {
      return true;
    } else {
      return false;
    }
  }

  //５秒後にcloseboxメソッドの呼び出し
  showBox() {
    let showbox = document.getElementById('showbox') as HTMLElement;
    showbox.style.display = 'block';
    setTimeout(() => {
      this.closebox();
    }, 5000);
  }

  //showboxを非表示にする
  closebox() {
    let showbox = document.getElementById('showbox') as HTMLElement;
    showbox.style.display = 'none';
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

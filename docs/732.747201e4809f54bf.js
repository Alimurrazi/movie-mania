"use strict";(self.webpackChunkmovie_mania=self.webpackChunkmovie_mania||[]).push([[732],{2732:(T,l,n)=>{n.r(l),n.d(l,{AppWishlistModule:()=>A});var r=n(6895),f=n(4531),t=n(4650),p=n(1831),c=n(4859),d=n(7392),m=n(1281),v=n(3238);let h=(()=>{class i{constructor(){this._vertical=!1,this._inset=!1}get vertical(){return this._vertical}set vertical(e){this._vertical=(0,m.Ig)(e)}get inset(){return this._inset}set inset(e){this._inset=(0,m.Ig)(e)}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(e,s){2&e&&(t.uIk("aria-orientation",s.vertical?"vertical":"horizontal"),t.ekj("mat-divider-vertical",s.vertical)("mat-divider-horizontal",!s.vertical)("mat-divider-inset",s.inset))},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(e,s){},styles:[".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}"],encapsulation:2,changeDetection:0}),i})(),u=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.BQ,v.BQ]}),i})();function g(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"div",5)(3,"div"),t._UZ(4,"img",6),t.qZA(),t.TgZ(5,"div",7)(6,"div",8),t._uU(7),t.qZA(),t.TgZ(8,"p"),t._uU(9),t.qZA()()(),t.TgZ(10,"div",9)(11,"button",10),t.NdJ("click",function(){const C=t.CHM(e).$implicit,D=t.oxw();return t.KtG(D.removeFromWishList(C))}),t.TgZ(12,"mat-icon"),t._uU(13,"delete"),t.qZA()()()(),t._UZ(14,"mat-divider",11),t.qZA()}if(2&i){const e=o.$implicit;t.xp6(4),t.MGl("src","https://image.tmdb.org/t/p/w220_and_h330_face/",e.poster_path,"",t.LSH),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.overview)}}function x(i,o){1&i&&(t.TgZ(0,"div",12)(1,"div",13),t._uU(2,"Your Wishlist is empty"),t.qZA(),t.TgZ(3,"div",14),t._uU(4,"Add movies and shows to your Wishlist to keep track of what you want to watch."),t.qZA()())}let y=(()=>{class i{constructor(e){this.store=e,this.movieList=[]}ngOnInit(){this.store.select(e=>e.wishList.movies).subscribe(e=>{this.movieList=e})}removeFromWishList(e){this.store.dispatch(new f.Ur(e))}static#t=this.\u0275fac=function(s){return new(s||i)(t.Y36(p.yh))};static#i=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-wishlist"]],decls:3,vars:2,consts:[[1,"container","fx","fx-column"],["class","fx fx-column",4,"ngFor","ngForOf"],["class","fx fx-column fx-justify-center fx-align-center",4,"ngIf"],[1,"fx","fx-column"],[1,"fx","fx-row"],[1,"w-80-p","mt-20","fx","fx-row","fx-justify-start","fx-align-start","fx-gap-12"],[3,"src"],[1,"mt-20"],[1,"primary-title"],[1,"w-20-p","fx","fx-column","fx-justify-center","fx-align-center"],["mat-icon-button","",1,"mat-icon-btn",3,"click"],[1,"mt-16"],[1,"fx","fx-column","fx-justify-center","fx-align-center"],[1,"wishlist-empty"],[1,"wishlist-msg"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0),t.YNc(1,g,15,3,"div",1),t.YNc(2,x,5,0,"div",2),t.qZA()),2&s&&(t.xp6(1),t.Q6J("ngForOf",a.movieList),t.xp6(1),t.Q6J("ngIf",0===a.movieList.length))},dependencies:[r.sg,r.O5,c.RK,d.Hw,h],styles:[".wishlist-empty[_ngcontent-%COMP%]{font-size:18px;margin:25px;text-align:center;font-family:Verdana,Arial,sans-serif;color:#333}.wishlist-msg[_ngcontent-%COMP%]{color:#666;display:inline-block;font-size:16px;margin:5px;text-align:center;font-family:Verdana,Arial,sans-serif}"]})}return i})();var M=n(3792),Z=n(266);const w=[{path:"",component:y}];let A=(()=>{class i{static#t=this.\u0275fac=function(s){return new(s||i)};static#i=this.\u0275mod=t.oAB({type:i});static#e=this.\u0275inj=t.cJS({imports:[r.ez,M.Bz.forChild(w),c.ot,d.Ps,Z.AV,u]})}return i})()}}]);
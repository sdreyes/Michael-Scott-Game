(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),s=a(3),l=a(4),o=a(7),m=a(5),u=a(8);var g=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};var d=function(e){return c.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 pt-2 pb-2"},c.a.createElement("img",{className:"lose"===e.status?"shake img-fluid":"img-fluid",src:e.image,alt:e.id,onClick:function(){return e.imageClick(e.id)}}))};var p=function(e){return c.a.createElement("div",{className:"container"},e.children)};var f=function(e){return c.a.createElement("div",{className:"row justify-content-center"},c.a.createElement("div",{className:"col-lg-9 col-sm-12"},c.a.createElement("div",{className:"row"},e.children)))};var h=function(){return c.a.createElement("div",{className:"jumbotron text-center mb-0"},c.a.createElement("h1",null,"Michael Scott Clicky Game"),c.a.createElement("h4",null,"Click on an image to earn points, but don't click on any more than once!"),c.a.createElement("small",null,'"I hate so much about the things that this game chooses to be"'))};var v=function(e){return c.a.createElement("nav",{className:"navbar sticky-top navbar-dark bg-info d-flex justify-content-around"},c.a.createElement("h3",null,"Score: ",e.score," | Top Score: ",e.topScore))};var E=function(e){return"win"===e.status?c.a.createElement("div",{className:"alert alert-success text-center",role:"alert"},"You win!"):"lose"===e.status?c.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},"You lose!"):"correct"===e.status?c.a.createElement("div",{className:"alert alert-info text-center",role:"alert"},"You guessed correctly!"):c.a.createElement("div",{className:"alert alert-primary text-center",role:"alert"},"Click an image to begin!")},k=a(6),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={images:k,clickedImages:[],score:0,topScore:0,status:""},a.shuffle=function(){a.setState({images:a.state.images.sort(function(){return.5-Math.random()})})},a.resetGame=function(e){a.shuffle(),a.setState({clickedImages:[],score:0,status:e})},a.checkWin=function(){a.state.score===a.state.images.length?(a.playAudio("audio/win.mp3"),a.state.score>a.state.topScore&&a.setState({topScore:a.state.score},function(){return a.resetGame("win")})):a.shuffle()},a.playAudio=function(e){new Audio(e).play()},a.handleClick=function(e){a.state.clickedImages.indexOf(e)>-1?(a.playAudio("audio/lose.mp3"),a.state.score>a.state.topScore?a.setState({topScore:a.state.score},function(){return a.resetGame("lose")}):a.resetGame("lose")):a.setState({score:a.state.score+1,clickedImages:a.state.clickedImages.concat(e),status:"correct"},function(){return a.checkWin()})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(g,null,c.a.createElement(v,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(h,null),c.a.createElement(E,{status:this.state.status}),c.a.createElement(p,null,c.a.createElement(f,{status:this.state.status},this.state.images.map(function(t){return c.a.createElement(d,{imageClick:e.handleClick,status:e.state.status,id:t.id,key:t.id,image:t.img})}))))}}]),t}(n.Component);i.a.render(c.a.createElement(j,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,img:"img/1.jpg"},{id:2,img:"img/2.jpg"},{id:3,img:"img/3.jpg"},{id:4,img:"img/4.jpg"},{id:5,img:"img/5.jpg"},{id:6,img:"img/6.jpg"},{id:7,img:"img/7.jpg"},{id:8,img:"img/8.jpg"},{id:9,img:"img/9.jpg"},{id:10,img:"img/10.jpg"},{id:11,img:"img/11.jpg"},{id:12,img:"img/12.jpg"}]},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6756d401.chunk.js.map
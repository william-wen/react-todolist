(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,n){},143:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(2),s=n.n(r),c=(n(92),n(37)),o=n(38),l=n(42),u=n(39),m=n(17),d=n(41),p=n(145),f=n(40),h=n(84),v=(n(93),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).createTasks=n.createTasks.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"delete",value:function(e){this.props.delete(e)}},{key:"createTasks",value:function(e){var t=this;return i.a.createElement("div",null,i.a.createElement("li",{key:e.key,onClick:function(){return t.delete(e.key)}}," ",e.text," "),i.a.createElement(p.a,{title:"Are you sure you want to delete this item?",placement:"right",onConfirm:function(){return t.delete(e.key)},okText:"Yes",cancelText:"No"},i.a.createElement(f.a,{className:"minus-icon",type:"minus-circle",style:{fontSize:"16px"}})))}},{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return i.a.createElement("ul",{className:"listItem"},i.a.createElement(h.a,{duration:250,easing:"ease-out"},e))}}]),t}(a.Component)),b=(n(142),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).addItem=function(e){if(""!==n._inputElement.value){var t={text:n._inputElement.value,key:Date.now()};n.setState(function(e){return{listItems:e.listItems.concat(t)}})}n._inputElement.value="",e.preventDefault()},n.state={listItems:[]},n.addItem=n.addItem.bind(Object(m.a)(n)),n.deleteItem=n.deleteItem.bind(Object(m.a)(n)),n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"deleteItem",value:function(e){var t=this.state.listItems,n=this.state.listItems.map(function(e){return e.key}).indexOf(e);n>-1&&t.splice(n,1),this.setState({listItems:t})}},{key:"render",value:function(){var e=this;this.state.listItems;return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"page-cover"},i.a.createElement("div",{className:"inputAndButton"},i.a.createElement("h1",null," Todo List "),i.a.createElement("form",{onSubmit:this.addItem},i.a.createElement("input",{ref:function(t){return e._inputElement=t},id:"text-input",placeholder:"Enter Task",autoFocus:"autofocus"}),i.a.createElement("button",{type:"submit",id:"red-button"}," Add "))),i.a.createElement(v,{entries:this.state.listItems,delete:function(t){return e.deleteItem(t)}})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},87:function(e,t,n){e.exports=n(143)},92:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.d2a32eed.chunk.js.map
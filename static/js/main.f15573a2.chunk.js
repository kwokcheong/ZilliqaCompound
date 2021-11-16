(this["webpackJsonpzilliqa-compound"]=this["webpackJsonpzilliqa-compound"]||[]).push([[0],{35:function(e,t,n){},37:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(29),c=n.n(r),l=(n(35),n(7)),s=n(8),o=n(10),u=n(9),h=n(1),p=function(e){var t=e.title;return Object(h.jsx)("header",{className:"header",children:Object(h.jsx)("h1",{children:t})})},d=(n(14),n(37),n(19)),j=n(30),b=function(e){var t=e.tableData,n=e.headingColumns,a=e.title,i=e.breakOn,r=void 0===i?"medium":i,c="table-container__table";"small"===r?c+=" table-container__table--break-sm":"medium"===r?c+=" table-container__table--break-md":" small"===r&&(c+=" table-container__table--break-sm");var l=t.map((function(e,t){var a=[],i=0;for(var r in e)a.push({key:n[i],val:e[r]}),i++;return Object(h.jsx)("tr",{children:a.map((function(e,t){return Object(h.jsx)("td",{"data-heading":e.key,children:e.val},t)}))},t)}));return Object(h.jsxs)("div",{className:"table-container",children:[Object(h.jsx)("div",{className:"table-container__title",children:Object(h.jsx)("h2",{children:a})}),Object(h.jsxs)(j.a,{striped:!0,bordered:!0,variant:"dark",className:c,children:[Object(h.jsx)("thead",{children:Object(h.jsx)("tr",{children:n.map((function(e,t){return Object(h.jsx)("th",{children:e},t)}))})}),Object(h.jsx)("tbody",{children:l})]})]})},m=n(15),v=n.n(m),k=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),a=t.call(this,e),console.log(a.props.item),a.state={compoundWeekly:a.props.item.compoundWeekly,zilPerDay:a.props.item.zilPerDay,zilPerWeek:a.props.item.zilPerWeek,zilPerMonth:a.props.item.zilPerMonth,price:0},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getCoin(),this.interval=setInterval((function(){e.getCoin()}),1e3)}},{key:"getCoin",value:function(){var e=this;v.a.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"sgd",ids:"zilliqa"}}).then((function(t){return e.setState((function(e){return{price:t.data[0].current_price}}))}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"JsonSerializer",value:function(e){for(var t=[],n=0;n<this.props.item.compoundWeekly.length;n++)t.push({week:"".concat(parseInt(n)),compound:"".concat(this.props.item.compoundWeekly[n]),zilperDay:"".concat(this.props.item.zilPerDay[n]),$SGDperDay:"".concat(parseFloat(this.props.item.zilPerDay[n]*this.state.price).toFixed(2)),zilperWeek:"".concat(this.props.item.zilPerWeek[n]),$SGDperWeek:"".concat(parseFloat(this.props.item.zilPerWeek[n]*this.state.price).toFixed(2)),zilperMonth:"".concat(this.props.item.zilPerMonth[n]),$SGDperMonth:"".concat(parseFloat(this.props.item.zilPerMonth[n]*this.state.price).toFixed(2))});return t}},{key:"render",value:function(){return Object(h.jsx)(b,{tableData:this.JsonSerializer(this.props.item),headingColumns:["Week","Compound","Daily","$SGD Per Day","Weekly","$SGD Per Week","Monthly","$SGD Per Month"],title:"Zilliqa Compounded Earnings"})}}]),n}(a.Component),y=n(11),O=n(13),f=n(12),x=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleCapital=function(t){e.setState({capital:t.target.value})},e.handleWeeks=function(t){e.setState({weeks:t.target.value})},e.handleApy=function(t){e.setState({apy:t.target.value})},e.zilliqaPerDay=function(e,t){return(e*(t/36600)).toFixed(2)},e.zilliqaPerWeek=function(e){return(7*e).toFixed(2)},e.zilliqaPerMonth=function(e){return(4*e).toFixed(2)},e.zilliqaCompoundWeekly=function(t,n,a){for(var i=t,r=[],c=[],l=[],s=[],o=0;o<=n;o++)r.push(i.toFixed(2)),c.push(e.zilliqaPerDay(i,a)),l.push(e.zilliqaPerWeek(e.zilliqaPerDay(i,a))),s.push(e.zilliqaPerMonth(e.zilliqaPerWeek(e.zilliqaPerDay(i,a)))),i+=e.zilliqaPerWeek(e.zilliqaPerDay(i,a))*Math.pow(o,0)-10;e.setState((function(e){return{results:{compoundWeekly:r,zilPerDay:c,zilPerWeek:l,zilPerMonth:s}}}))},e.compileForm=function(t){t.preventDefault(),e.zilliqaCompoundWeekly(parseFloat(e.state.capital),parseInt(e.state.weeks),parseFloat(e.state.apy))},e.clearList=function(t){e.setState({capital:"",weeks:"",apy:""})},e.state={capital:"",weeks:"",apy:"",total:"",results:{compoundWeekly:[],zilPerDay:[],zilPerWeek:[],zilPerMonth:[]}},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsxs)(y.a,{onSubmit:this.compileForm,children:[Object(h.jsx)(O.a,{children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(y.a.Label,{children:"Total Amount of Zil"}),Object(h.jsx)(y.a.Control,{type:"text",placeholder:"Enter initial capital",value:this.state.capital,onChange:this.handleCapital})]})}),Object(h.jsx)(O.a,{children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(y.a.Label,{children:"No of Weeks"}),Object(h.jsx)(y.a.Control,{type:"text",placeholder:"Enter Weeks",value:this.state.weeks,onChange:this.handleWeeks})]})}),Object(h.jsx)(O.a,{children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(y.a.Label,{children:"APY"}),Object(h.jsx)(y.a.Control,{type:"text",placeholder:"Enter APY",value:this.state.apy,onChange:this.handleApy})]})}),Object(h.jsx)(O.a,{children:Object(h.jsxs)(f.a,{children:[Object(h.jsx)(d.a,{variant:"info",type:"submit",children:"Calculate"}),Object(h.jsx)(d.a,{variant:"secondary",onClick:this.clearList,children:"Clear List"})]})})]}),0===this.state.results.compoundWeekly.length?"":Object(h.jsx)(k,{item:this.state.results})]})}}]),n}(a.Component),z=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={coin1:""},a}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getCoin(),this.interval=setInterval((function(){e.getCoin()}),1e3)}},{key:"getCoin",value:function(){var e=this;v.a.get("https://api.coingecko.com/api/v3/coins/markets",{params:{vs_currency:"sgd",ids:"zilliqa"}}).then((function(t){return e.setState((function(e){return{coins:t.data[0].current_price}}))}))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:this.state.coins})})}}]),n}(a.Component),P=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={coinsAPI:{coins:"digibyte",vs_currency:"sgd"}},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{title:"Zilliqa Compound Calculator v2"}),Object(h.jsx)(x,{}),Object(h.jsx)(z,{data:this.state.coinsAPI})]})}}]),n}(a.Component);c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f15573a2.chunk.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-073ce7f8"],{"04ca":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"dashboard-editor-container"},[i("div",{staticClass:"filter-container"},[i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"租户（必填）",filterable:""},on:{change:function(e){return t.tenantSelectList()}},model:{value:t.listQuery.tenantId,callback:function(e){t.$set(t.listQuery,"tenantId",e)},expression:"listQuery.tenantId"}},t._l(t.tenantOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"项目（必填）",filterable:""},on:{change:function(e){return t.itemSelectList()}},model:{value:t.listQuery.itemId,callback:function(e){t.$set(t.listQuery,"itemId",e)},expression:"listQuery.itemId"}},t._l(t.itemOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"线程池（必填）",filterable:""},on:{change:function(e){return t.threadPoolSelectList()}},model:{value:t.listQuery.tpId,callback:function(e){t.$set(t.listQuery,"tpId",e)},expression:"listQuery.tpId"}},t._l(t.threadPoolOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1),t._v(" "),i("el-select",{staticClass:"filter-item",staticStyle:{width:"220px"},attrs:{placeholder:"IP : Port（必填）",filterable:""},model:{value:t.listQuery.identify,callback:function(e){t.$set(t.listQuery,"identify",e)},expression:"listQuery.identify"}},t._l(t.identifyOptions,(function(t){return i("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})})),1),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.fetchData}},[t._v("\n      搜索\n    ")]),t._v(" "),i("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-refresh"},on:{click:t.refreshData}},[t._v("\n      重置\n    ")])],1),t._v(" "),t.temp.coreSize?i("el-row",{attrs:{gutter:10}},[i("el-card",{attrs:{shadow:"hover"}},[i("el-descriptions",{attrs:{column:4,border:""}},[i("el-descriptions-item",{attrs:{label:"核心线程"}},[t._v(t._s(t.temp.coreSize))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"最大线程"}},[t._v(t._s(t.temp.maxSize))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"是否报警"}},[t._v("\n          "+t._s(t._f("alarmFilter")(t.temp.isAlarm))+"\n        ")]),t._v(" "),i("el-descriptions-item",{attrs:{label:"已完成任务数"}},[t._v(t._s(t.lastTaskCount))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"核心线程超时"}},[t._v("\n          "+t._s(t._f("allowCoreThreadTimeOutFilter")(t.temp.allowCoreThreadTimeOut))+"\n        ")]),t._v(" "),i("el-descriptions-item",{attrs:{label:"队列类型"}},[t._v("\n          "+t._s(t._f("queueFilter")(t.temp.queueType))+"\n        ")]),t._v(" "),i("el-descriptions-item",{attrs:{label:"队列容量"}},[t._v(t._s(t.temp.capacity))]),t._v(" "),i("el-descriptions-item",{attrs:{label:"拒绝策略"}},[t._v("\n          "+t._s(t._f("rejectedFilter")(t.temp.rejectedType))+"\n        ")]),t._v(" "),i("el-descriptions-item",{attrs:{label:"实例 ID"}},[t._v(t._s(t.listQuery.identify))])],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"16px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData1,times:t.times}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData2,times:t.times}})],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"16px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData3,times:t.times}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData4,times:t.times}})],1)],1)],1),t._v(" "),i("el-row",{staticStyle:{"margin-top":"16px"},attrs:{gutter:10}},[i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData5,times:t.times}})],1)],1),t._v(" "),i("el-col",{attrs:{span:12}},[i("el-card",{attrs:{shadow:"hover"}},[i("line-chart",{attrs:{"chart-data":t.lineChartData6,times:t.times}})],1)],1)],1)],1):i("el-empty",{attrs:{description:"暂无结果"}})],1)},a=[],r=i("c80c"),s=(i("96cf"),i("3b8d")),o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.className,style:{height:t.height,width:t.width}})},l=[],c=(i("7f7f"),i("ed08")),d={data:function(){return{$_sidebarElm:null}},mounted:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},beforeDestroy:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},activated:function(){this.$_initResizeEvent(),this.$_initSidebarResizeEvent()},deactivated:function(){this.$_destroyResizeEvent(),this.$_destroySidebarResizeEvent()},methods:{$_resizeHandler:function(){var t=this;return Object(c["a"])((function(){t.chart&&t.chart.resize()}),100)()},$_initResizeEvent:function(){window.addEventListener("resize",this.$_resizeHandler)},$_destroyResizeEvent:function(){window.removeEventListener("resize",this.$_resizeHandler)},$_sidebarResizeHandler:function(t){"width"===t.propertyName&&this.$_resizeHandler()},$_initSidebarResizeEvent:function(){this.$_sidebarElm=document.getElementsByClassName("sidebar-container")[0],this.$_sidebarElm&&this.$_sidebarElm.addEventListener("transitionend",this.$_sidebarResizeHandler)},$_destroySidebarResizeEvent:function(){this.$_sidebarElm&&this.$_sidebarElm.removeEventListener("transitionend",this.$_sidebarResizeHandler)}}},u={mixins:[d],props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"300px"},autoResize:{type:Boolean,default:!0},chartData:{type:Array,required:!0},times:{type:Array,required:!0}},data:function(){return{chart:null,chartDataFrom:{}}},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},mounted:function(){var t=this;this.$nextTick((function(){t.initChart()}))},beforeDestroy:function(){this.chart&&(this.chart.dispose(),this.chart=null)},methods:{initChart:function(){var t=i("313e");this.chart=t.init(this.$el,"macarons"),this.setOptions()},setOptions:function(){var t=this.chartData.map((function(t){return{name:t.name,type:"line",stack:"Total",areaStyle:{},label:{position:"top"},color:t.color,emphasis:{focus:"series"},smooth:!0,data:t.data,showSymbol:!1}}));this.chart.setOption({tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:this.chartData},toolbox:{feature:{}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:this.times}],yAxis:[{type:"value"}],series:t})}}},h=u,p=i("2877"),f=Object(p["a"])(h,o,l,!1,null,null,null),m=f.exports,v=i("6724"),y=i("3737"),b=i("dd71"),_=i("4d85"),g=i("397f"),w=i("b775");function O(t){return Object(w["a"])({url:"/hippo4j/v1/cs/monitor/info",method:"post",data:t})}function j(t){return Object(w["a"])({url:"/hippo4j/v1/cs/monitor/last/task/count",method:"post",data:t})}var k={name:"Monitor",components:{LineChart:m},directives:{waves:v["a"]},filters:{queueFilter:function(t){var e={1:"ArrayBlockingQueue",2:"LinkedBlockingQueue",3:"LinkedBlockingDeque",4:"SynchronousQueue",5:"LinkedTransferQueue",6:"PriorityBlockingQueue",9:"ResizableLinkedBlockingQueue"};return e[t]},rejectedFilter:function(t){var e={1:"CallerRunsPolicy",2:"AbortPolicy",3:"DiscardPolicy",4:"DiscardOldestPolicy",5:"RunsOldestTaskPolicy",6:"SyncPutQueuePolicy"};return t&&e[t]?e[t]:t?"CustomRejectedPolicy-".concat(t):""},alarmFilter:function(t){return"1"===t?"报警":"忽略"},allowCoreThreadTimeOutFilter:function(t){return"1"===t?"超时":"不超时"}},data:function(){return{lineChartData1:[{name:"activeSizeList",data:[],color:"#264653"}],lineChartData2:[{name:"poolSizeList",data:[],color:"#e9c46a"}],lineChartData3:[{name:"queueSizeList",data:[],color:"#e9c46a"}],lineChartData4:[{name:"queueRemainingCapacityList",data:[],color:"#f4a261"}],lineChartData5:[{name:"completedTaskCountList",data:[],color:"#e76f51"}],lineChartData6:[{name:"rejectCountList",data:[],color:"#e63946"}],times:[],size:500,tenantOptions:[],threadPoolOptions:[],itemOptions:[],identifyOptions:[],listQuery:{current:1,size:10,itemId:"",tpId:"",tenantId:"",identify:"",instanceId:""},temp:{},lastTaskCount:null}},created:function(){var t=Object(s["a"])(Object(r["a"])().mark((function t(){return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.initSelect();case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{fetchData:function(){var t=this;this.listQuery.tenantId?this.listQuery.itemId?this.listQuery.tpId?this.listQuery.identify?(this.listQuery.instanceId=this.listQuery.identify,_["d"](this.listQuery).then((function(e){t.temp=e})),j(this.listQuery).then((function(e){t.lastTaskCount=e.completedTaskCount})),this.initChart()):this.$message.warning("IP : PORT 不允许为空"):this.$message.warning("线程池不允许为空"):this.$message.warning("项目不允许为空"):this.$message.warning("租户不允许为空")},refreshData:function(){this.listQuery.tenantId=null,this.listQuery.itemId=null,this.listQuery.tpId=null,this.listQuery.identify=null,this.itemOptions=[],this.threadPoolOptions=[],this.identifyOptions=[]},initSelect:function(){var t=this;b["c"]({size:this.size}).then((function(e){var i=e||{},n=i.records;t.tenantOptions=n&&n.map((function(t){return{key:t.tenantId,display_name:t.tenantId+" "+t.tenantName}}))}))},tenantSelectList:function(){var t=this;this.listQuery.itemId=null,this.listQuery.tpId=null,this.listQuery.identify=null,this.itemOptions=[],this.threadPoolOptions=[],this.identifyOptions=[];var e={tenantId:this.listQuery.tenantId,size:this.size};y["c"](e).then((function(e){var i=e||{},n=i.records;t.itemOptions=n&&n.map((function(t){return{key:t.itemId,display_name:t.itemId+" "+t.itemName}}))}))},itemSelectList:function(){var t=this;this.listQuery.tpId=null,this.listQuery.identify=null,this.threadPoolOptions=[],this.identifyOptions=[];var e={itemId:this.listQuery.itemId,size:this.size};_["e"](e).then((function(e){var i=e||{},n=i.records;t.threadPoolOptions=n&&n.map((function(t){return{key:t.tpId,display_name:t.tpId}}))}))},threadPoolSelectList:function(){var t=this;this.listQuery.identify=null,this.identifyOptions=[];var e=[this.listQuery.itemId,this.listQuery.tpId];g["a"](e).then((function(e){t.identifyOptions=e&&e.map((function(t){return{key:t.identify,display_name:t.clientAddress}}))}))},initChart:function(){var t=this;O(this.listQuery).then((function(e){var i=e||{},n=i.poolSizeList,a=i.activeSizeList,r=i.queueSizeList,s=i.queueRemainingCapacityList,o=i.completedTaskCountList,l=i.rejectCountList,c=i.times;t.times=c,t.lineChartData1[0].data=a,t.lineChartData2[0].data=n,t.lineChartData3[0].data=r,t.lineChartData4[0].data=s,t.lineChartData5[0].data=o,t.lineChartData6[0].data=l}))}}},C=k,I=(i("3887"),Object(p["a"])(C,n,a,!1,null,"001a3100",null));e["default"]=I.exports},"2ba5":function(t,e,i){},3737:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/query/page",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/update",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/save",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/hippo4j/v1/cs/item/delete/"+t[0]+"/"+t[1],method:"delete"})}},3887:function(t,e,i){"use strict";i("2ba5")},"397f":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/list/instance/"+t[0]+"/"+t[1],method:"get"})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/configs?identify="+t.identify,method:"post",data:t})}},"4d85":function(t,e,i){"use strict";i.d(e,"e",(function(){return a})),i.d(e,"f",(function(){return r})),i.d(e,"d",(function(){return s})),i.d(e,"g",(function(){return o})),i.d(e,"h",(function(){return l})),i.d(e,"j",(function(){return c})),i.d(e,"k",(function(){return d})),i.d(e,"i",(function(){return u})),i.d(e,"b",(function(){return h})),i.d(e,"c",(function(){return p})),i.d(e,"a",(function(){return f}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/query/page",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/list/client/instance/"+t.itemId,method:"get",data:t})}function s(t){return Object(n["a"])({url:"/hippo4j/v1/cs/configs?tpId="+t.tpId+"&itemId="+t.itemId+"&namespace="+t.tenantId+"&instanceId="+t.identify,method:"get"})}function o(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/run/state/"+t.tpId+"?clientAddress="+t.clientAddress,method:"get"})}function l(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/run/thread/state/"+t.tpId+"?clientAddress="+t.clientAddress,method:"get"})}function c(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/web/run/state?clientAddress="+t.clientAddress,method:"get"})}function d(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/web/update/pool",method:"post",data:t})}function u(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:t})}function h(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/save_or_update",method:"post",data:t})}function p(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/delete",method:"delete",data:t})}function f(t){return Object(n["a"])({url:"/hippo4j/v1/cs/thread/pool/alarm/enable/"+t.id+"/"+t.isAlarm,method:"post"})}},6724:function(t,e,i){"use strict";i("8d41");var n="@@wavesContext";function a(t,e){function i(i){var n=Object.assign({},e.value),a=Object.assign({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},n),r=a.ele;if(r){r.style.position="relative",r.style.overflow="hidden";var s=r.getBoundingClientRect(),o=r.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":(o=document.createElement("span"),o.className="waves-ripple",o.style.height=o.style.width=Math.max(s.width,s.height)+"px",r.appendChild(o)),a.type){case"center":o.style.top=s.height/2-o.offsetHeight/2+"px",o.style.left=s.width/2-o.offsetWidth/2+"px";break;default:o.style.top=(i.pageY-s.top-o.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",o.style.left=(i.pageX-s.left-o.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return o.style.backgroundColor=a.color,o.className="waves-ripple z-active",!1}}return t[n]?t[n].removeHandle=i:t[n]={removeHandle:i},i}var r={bind:function(t,e){t.addEventListener("click",a(t,e),!1)},update:function(t,e){t.removeEventListener("click",t[n].removeHandle,!1),t.addEventListener("click",a(t,e),!1)},unbind:function(t){t.removeEventListener("click",t[n].removeHandle,!1),t[n]=null,delete t[n]}},s=function(t){t.directive("waves",r)};window.Vue&&(window.waves=r,Vue.use(s)),r.install=s;e["a"]=r},"8d41":function(t,e,i){},dd71:function(t,e,i){"use strict";i.d(e,"c",(function(){return a})),i.d(e,"d",(function(){return r})),i.d(e,"a",(function(){return s})),i.d(e,"b",(function(){return o}));var n=i("b775");function a(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/query/page",method:"post",data:t})}function r(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/update",method:"post",data:t})}function s(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/save",method:"post",data:t})}function o(t){return Object(n["a"])({url:"/hippo4j/v1/cs/tenant/delete/"+t,method:"delete"})}}}]);
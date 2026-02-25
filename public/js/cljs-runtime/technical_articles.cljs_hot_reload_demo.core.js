goog.provide('technical_articles.cljs_hot_reload_demo.core');
if((typeof technical_articles !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo.core !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo.core.state !== 'undefined')){
} else {
technical_articles.cljs_hot_reload_demo.core.state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"color","color",1011675173),(180),new cljs.core.Keyword(null,"time","time",1385887882),(new Date())], null));
}
if((typeof technical_articles !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo.core !== 'undefined') && (typeof technical_articles.cljs_hot_reload_demo.core.root !== 'undefined')){
} else {
technical_articles.cljs_hot_reload_demo.core.root = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
setInterval((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(technical_articles.cljs_hot_reload_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),(new Date()));
}),(1000));
technical_articles.cljs_hot_reload_demo.core.theme_toggle = (function technical_articles$cljs_hot_reload_demo$core$theme_toggle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"12px"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(technical_articles.cljs_hot_reload_demo.core.state,cljs.core.update,new cljs.core.Keyword(null,"theme","theme",-1247880880),(function (t){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(t,new cljs.core.Keyword(null,"light","light",1918998747))){
return new cljs.core.Keyword(null,"dark","dark",1818973999);
} else {
return new cljs.core.Keyword(null,"light","light",1918998747);
}
}));
})], null),"Toggle Theme"], null);
});
technical_articles.cljs_hot_reload_demo.core.color_slider = (function technical_articles$cljs_hot_reload_demo$core$color_slider(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(360),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(technical_articles.cljs_hot_reload_demo.core.state)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__22296_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(technical_articles.cljs_hot_reload_demo.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),parseInt(p1__22296_SHARP_.target.value));
})], null)], null);
});
technical_articles.cljs_hot_reload_demo.core.app = (function technical_articles$cljs_hot_reload_demo$core$app(){
var map__22297 = cljs.core.deref(technical_articles.cljs_hot_reload_demo.core.state);
var map__22297__$1 = cljs.core.__destructure_map(map__22297);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22297__$1,new cljs.core.Keyword(null,"time","time",1385887882));
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"height","height",1025178622),"100vh",new cljs.core.Keyword(null,"padding","padding",1660304693),"40px",new cljs.core.Keyword(null,"background","background",-863952629),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"#0f172a":"#f8fafc"),new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.Keyword(null,"dark","dark",1818973999)))?"#e5e7eb":"#0f172a"),new cljs.core.Keyword(null,"font-family","font-family",-667419874),"sans-serif"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),"ClojureScript Hot Reload using Shadow-cljs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),"Header 2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Header 3"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [technical_articles.cljs_hot_reload_demo.core.theme_toggle], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current time: ",time.toLocaleTimeString()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Change text color"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [technical_articles.cljs_hot_reload_demo.core.color_slider], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(""+"hsl("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(color)+",70%,50%)")], null)], null),"This UI updates instantly \u2728"], null)], null);
});
technical_articles.cljs_hot_reload_demo.core.init = (function technical_articles$cljs_hot_reload_demo$core$init(){
if(cljs.core.truth_(cljs.core.deref(technical_articles.cljs_hot_reload_demo.core.root))){
} else {
cljs.core.reset_BANG_(technical_articles.cljs_hot_reload_demo.core.root,reagent.dom.client.create_root(document.getElementById("app")));
}

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(technical_articles.cljs_hot_reload_demo.core.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [technical_articles.cljs_hot_reload_demo.core.app], null));
});

//# sourceMappingURL=technical_articles.cljs_hot_reload_demo.core.js.map

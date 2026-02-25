goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20852,p__20853){
var map__20856 = p__20852;
var map__20856__$1 = cljs.core.__destructure_map(map__20856);
var svc = map__20856__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20856__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20857 = p__20853;
var map__20857__$1 = cljs.core.__destructure_map(map__20857);
var msg = map__20857__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20857__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20857__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20860,p__20861){
var map__20864 = p__20860;
var map__20864__$1 = cljs.core.__destructure_map(map__20864);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20865 = p__20861;
var map__20865__$1 = cljs.core.__destructure_map(map__20865);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20865__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20869,p__20870){
var map__20871 = p__20869;
var map__20871__$1 = cljs.core.__destructure_map(map__20871);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20871__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20872 = p__20870;
var map__20872__$1 = cljs.core.__destructure_map(map__20872);
var msg = map__20872__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20872__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20881,tid){
var map__20882 = p__20881;
var map__20882__$1 = cljs.core.__destructure_map(map__20882);
var svc = map__20882__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20882__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20893 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20894 = null;
var count__20895 = (0);
var i__20896 = (0);
while(true){
if((i__20896 < count__20895)){
var vec__20906 = chunk__20894.cljs$core$IIndexed$_nth$arity$2(null,i__20896);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20906,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20906,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20928 = seq__20893;
var G__20929 = chunk__20894;
var G__20930 = count__20895;
var G__20931 = (i__20896 + (1));
seq__20893 = G__20928;
chunk__20894 = G__20929;
count__20895 = G__20930;
i__20896 = G__20931;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__20893);
if(temp__5823__auto__){
var seq__20893__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20893__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__20893__$1);
var G__20934 = cljs.core.chunk_rest(seq__20893__$1);
var G__20935 = c__5673__auto__;
var G__20936 = cljs.core.count(c__5673__auto__);
var G__20937 = (0);
seq__20893 = G__20934;
chunk__20894 = G__20935;
count__20895 = G__20936;
i__20896 = G__20937;
continue;
} else {
var vec__20910 = cljs.core.first(seq__20893__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20910,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20910,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20939 = cljs.core.next(seq__20893__$1);
var G__20940 = null;
var G__20941 = (0);
var G__20942 = (0);
seq__20893 = G__20939;
chunk__20894 = G__20940;
count__20895 = G__20941;
i__20896 = G__20942;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20885_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20885_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20886_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20886_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20887_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20887_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20888_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20888_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20915){
var map__20916 = p__20915;
var map__20916__$1 = cljs.core.__destructure_map(map__20916);
var svc = map__20916__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20916__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map

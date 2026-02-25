goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__13608){
var map__13610 = p__13608;
var map__13610__$1 = cljs.core.__destructure_map(map__13610);
var runtime = map__13610__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13610__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_13997 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_13997)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__13619 = runtime;
var G__13620 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_13997);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__13619,G__13620) : shadow.remote.runtime.shared.process.call(null,G__13619,G__13620));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__13627,res){
var map__13628 = p__13627;
var map__13628__$1 = cljs.core.__destructure_map(map__13628);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13628__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13628__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__13639 = res;
var G__13639__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13639,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__13639);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13639__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__13639__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__13650 = arguments.length;
switch (G__13650) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__13676,msg,handlers,timeout_after_ms){
var map__13677 = p__13676;
var map__13677__$1 = cljs.core.__destructure_map(map__13677);
var runtime = map__13677__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13677__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___14018 = arguments.length;
var i__5877__auto___14019 = (0);
while(true){
if((i__5877__auto___14019 < len__5876__auto___14018)){
args__5882__auto__.push((arguments[i__5877__auto___14019]));

var G__14020 = (i__5877__auto___14019 + (1));
i__5877__auto___14019 = G__14020;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__13695,ev,args){
var map__13696 = p__13695;
var map__13696__$1 = cljs.core.__destructure_map(map__13696);
var runtime = map__13696__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13696__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__13697 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13700 = null;
var count__13701 = (0);
var i__13702 = (0);
while(true){
if((i__13702 < count__13701)){
var ext = chunk__13700.cljs$core$IIndexed$_nth$arity$2(null,i__13702);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14021 = seq__13697;
var G__14022 = chunk__13700;
var G__14023 = count__13701;
var G__14024 = (i__13702 + (1));
seq__13697 = G__14021;
chunk__13700 = G__14022;
count__13701 = G__14023;
i__13702 = G__14024;
continue;
} else {
var G__14025 = seq__13697;
var G__14026 = chunk__13700;
var G__14027 = count__13701;
var G__14028 = (i__13702 + (1));
seq__13697 = G__14025;
chunk__13700 = G__14026;
count__13701 = G__14027;
i__13702 = G__14028;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13697);
if(temp__5823__auto__){
var seq__13697__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13697__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13697__$1);
var G__14029 = cljs.core.chunk_rest(seq__13697__$1);
var G__14030 = c__5673__auto__;
var G__14031 = cljs.core.count(c__5673__auto__);
var G__14032 = (0);
seq__13697 = G__14029;
chunk__13700 = G__14030;
count__13701 = G__14031;
i__13702 = G__14032;
continue;
} else {
var ext = cljs.core.first(seq__13697__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14034 = cljs.core.next(seq__13697__$1);
var G__14035 = null;
var G__14036 = (0);
var G__14037 = (0);
seq__13697 = G__14034;
chunk__13700 = G__14035;
count__13701 = G__14036;
i__13702 = G__14037;
continue;
} else {
var G__14038 = cljs.core.next(seq__13697__$1);
var G__14039 = null;
var G__14040 = (0);
var G__14041 = (0);
seq__13697 = G__14038;
chunk__13700 = G__14039;
count__13701 = G__14040;
i__13702 = G__14041;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq13692){
var G__13693 = cljs.core.first(seq13692);
var seq13692__$1 = cljs.core.next(seq13692);
var G__13694 = cljs.core.first(seq13692__$1);
var seq13692__$2 = cljs.core.next(seq13692__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13693,G__13694,seq13692__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__13762,p__13763){
var map__13764 = p__13762;
var map__13764__$1 = cljs.core.__destructure_map(map__13764);
var runtime = map__13764__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13764__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13765 = p__13763;
var map__13765__$1 = cljs.core.__destructure_map(map__13765);
var msg = map__13765__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13765__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__13766 = cljs.core.deref(state_ref);
var map__13766__$1 = cljs.core.__destructure_map(map__13766);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13766__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13766__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__13776,msg){
var map__13778 = p__13776;
var map__13778__$1 = cljs.core.__destructure_map(map__13778);
var runtime = map__13778__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13778__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__13802,key,p__13803){
var map__13804 = p__13802;
var map__13804__$1 = cljs.core.__destructure_map(map__13804);
var state = map__13804__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13804__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__13805 = p__13803;
var map__13805__$1 = cljs.core.__destructure_map(map__13805);
var spec = map__13805__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13805__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13805__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__13877,key,spec){
var map__13879 = p__13877;
var map__13879__$1 = cljs.core.__destructure_map(map__13879);
var runtime = map__13879__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13879__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___14070 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___14070 == null)){
} else {
var on_welcome_14071 = temp__5827__auto___14070;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14071.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14071.cljs$core$IFn$_invoke$arity$0() : on_welcome_14071.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__13880_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__13880_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__13881_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__13881_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__13882_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__13882_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__13883_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__13883_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__13894_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__13894_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__13897,key){
var map__13898 = p__13897;
var map__13898__$1 = cljs.core.__destructure_map(map__13898);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13898__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__13914,msg){
var map__13917 = p__13914;
var map__13917__$1 = cljs.core.__destructure_map(map__13917);
var runtime = map__13917__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13917__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__13942,p__13943){
var map__13944 = p__13942;
var map__13944__$1 = cljs.core.__destructure_map(map__13944);
var runtime = map__13944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__13945 = p__13943;
var map__13945__$1 = cljs.core.__destructure_map(map__13945);
var msg = map__13945__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13945__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__13969 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__13971 = null;
var count__13972 = (0);
var i__13973 = (0);
while(true){
if((i__13973 < count__13972)){
var map__13987 = chunk__13971.cljs$core$IIndexed$_nth$arity$2(null,i__13973);
var map__13987__$1 = cljs.core.__destructure_map(map__13987);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13987__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14088 = seq__13969;
var G__14089 = chunk__13971;
var G__14090 = count__13972;
var G__14091 = (i__13973 + (1));
seq__13969 = G__14088;
chunk__13971 = G__14089;
count__13972 = G__14090;
i__13973 = G__14091;
continue;
} else {
var G__14092 = seq__13969;
var G__14093 = chunk__13971;
var G__14094 = count__13972;
var G__14095 = (i__13973 + (1));
seq__13969 = G__14092;
chunk__13971 = G__14093;
count__13972 = G__14094;
i__13973 = G__14095;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13969);
if(temp__5823__auto__){
var seq__13969__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13969__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13969__$1);
var G__14097 = cljs.core.chunk_rest(seq__13969__$1);
var G__14098 = c__5673__auto__;
var G__14099 = cljs.core.count(c__5673__auto__);
var G__14100 = (0);
seq__13969 = G__14097;
chunk__13971 = G__14098;
count__13972 = G__14099;
i__13973 = G__14100;
continue;
} else {
var map__13989 = cljs.core.first(seq__13969__$1);
var map__13989__$1 = cljs.core.__destructure_map(map__13989);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13989__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14101 = cljs.core.next(seq__13969__$1);
var G__14102 = null;
var G__14103 = (0);
var G__14104 = (0);
seq__13969 = G__14101;
chunk__13971 = G__14102;
count__13972 = G__14103;
i__13973 = G__14104;
continue;
} else {
var G__14105 = cljs.core.next(seq__13969__$1);
var G__14106 = null;
var G__14107 = (0);
var G__14108 = (0);
seq__13969 = G__14105;
chunk__13971 = G__14106;
count__13972 = G__14107;
i__13973 = G__14108;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map

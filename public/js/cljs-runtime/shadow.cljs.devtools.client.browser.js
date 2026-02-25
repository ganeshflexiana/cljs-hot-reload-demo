goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21862 = arguments.length;
var i__5877__auto___21863 = (0);
while(true){
if((i__5877__auto___21863 < len__5876__auto___21862)){
args__5882__auto__.push((arguments[i__5877__auto___21863]));

var G__21864 = (i__5877__auto___21863 + (1));
i__5877__auto___21863 = G__21864;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21432){
var G__21433 = cljs.core.first(seq21432);
var seq21432__$1 = cljs.core.next(seq21432);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21433,seq21432__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21454 = cljs.core.seq(sources);
var chunk__21455 = null;
var count__21456 = (0);
var i__21457 = (0);
while(true){
if((i__21457 < count__21456)){
var map__21483 = chunk__21455.cljs$core$IIndexed$_nth$arity$2(null,i__21457);
var map__21483__$1 = cljs.core.__destructure_map(map__21483);
var src = map__21483__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21483__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21483__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21483__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21483__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21487){var e_21865 = e21487;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21865);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21865.message))));
}

var G__21866 = seq__21454;
var G__21867 = chunk__21455;
var G__21868 = count__21456;
var G__21869 = (i__21457 + (1));
seq__21454 = G__21866;
chunk__21455 = G__21867;
count__21456 = G__21868;
i__21457 = G__21869;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21454);
if(temp__5823__auto__){
var seq__21454__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21454__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21454__$1);
var G__21870 = cljs.core.chunk_rest(seq__21454__$1);
var G__21871 = c__5673__auto__;
var G__21872 = cljs.core.count(c__5673__auto__);
var G__21873 = (0);
seq__21454 = G__21870;
chunk__21455 = G__21871;
count__21456 = G__21872;
i__21457 = G__21873;
continue;
} else {
var map__21495 = cljs.core.first(seq__21454__$1);
var map__21495__$1 = cljs.core.__destructure_map(map__21495);
var src = map__21495__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21495__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e21498){var e_21874 = e21498;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_21874);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21874.message))));
}

var G__21875 = cljs.core.next(seq__21454__$1);
var G__21876 = null;
var G__21877 = (0);
var G__21878 = (0);
seq__21454 = G__21875;
chunk__21455 = G__21876;
count__21456 = G__21877;
i__21457 = G__21878;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__21524 = cljs.core.seq(js_requires);
var chunk__21525 = null;
var count__21526 = (0);
var i__21527 = (0);
while(true){
if((i__21527 < count__21526)){
var js_ns = chunk__21525.cljs$core$IIndexed$_nth$arity$2(null,i__21527);
var require_str_21879 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21879);


var G__21880 = seq__21524;
var G__21881 = chunk__21525;
var G__21882 = count__21526;
var G__21883 = (i__21527 + (1));
seq__21524 = G__21880;
chunk__21525 = G__21881;
count__21526 = G__21882;
i__21527 = G__21883;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21524);
if(temp__5823__auto__){
var seq__21524__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21524__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21524__$1);
var G__21884 = cljs.core.chunk_rest(seq__21524__$1);
var G__21885 = c__5673__auto__;
var G__21886 = cljs.core.count(c__5673__auto__);
var G__21887 = (0);
seq__21524 = G__21884;
chunk__21525 = G__21885;
count__21526 = G__21886;
i__21527 = G__21887;
continue;
} else {
var js_ns = cljs.core.first(seq__21524__$1);
var require_str_21888 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_21888);


var G__21889 = cljs.core.next(seq__21524__$1);
var G__21890 = null;
var G__21891 = (0);
var G__21892 = (0);
seq__21524 = G__21889;
chunk__21525 = G__21890;
count__21526 = G__21891;
i__21527 = G__21892;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21554){
var map__21555 = p__21554;
var map__21555__$1 = cljs.core.__destructure_map(map__21555);
var msg = map__21555__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21555__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21558(s__21559){
return (new cljs.core.LazySeq(null,(function (){
var s__21559__$1 = s__21559;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__21559__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__21571 = cljs.core.first(xs__6383__auto__);
var map__21571__$1 = cljs.core.__destructure_map(map__21571);
var src = map__21571__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21571__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__21559__$1,map__21571,map__21571__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21555,map__21555__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21558_$_iter__21560(s__21561){
return (new cljs.core.LazySeq(null,((function (s__21559__$1,map__21571,map__21571__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21555,map__21555__$1,msg,info,reload_info){
return (function (){
var s__21561__$1 = s__21561;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__21561__$1);
if(temp__5823__auto____$1){
var s__21561__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21561__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__21561__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__21563 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__21562 = (0);
while(true){
if((i__21562 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__21562);
cljs.core.chunk_append(b__21563,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21893 = (i__21562 + (1));
i__21562 = G__21893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21563),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21558_$_iter__21560(cljs.core.chunk_rest(s__21561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21563),null);
}
} else {
var warning = cljs.core.first(s__21561__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21558_$_iter__21560(cljs.core.rest(s__21561__$2)));
}
} else {
return null;
}
break;
}
});})(s__21559__$1,map__21571,map__21571__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21555,map__21555__$1,msg,info,reload_info))
,null,null));
});})(s__21559__$1,map__21571,map__21571__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__21555,map__21555__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21558(cljs.core.rest(s__21559__$1)));
} else {
var G__21894 = cljs.core.rest(s__21559__$1);
s__21559__$1 = G__21894;
continue;
}
} else {
var G__21895 = cljs.core.rest(s__21559__$1);
s__21559__$1 = G__21895;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21589_21896 = cljs.core.seq(warnings);
var chunk__21590_21897 = null;
var count__21591_21898 = (0);
var i__21592_21899 = (0);
while(true){
if((i__21592_21899 < count__21591_21898)){
var map__21598_21900 = chunk__21590_21897.cljs$core$IIndexed$_nth$arity$2(null,i__21592_21899);
var map__21598_21901__$1 = cljs.core.__destructure_map(map__21598_21900);
var w_21902 = map__21598_21901__$1;
var msg_21903__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21901__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21901__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21901__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598_21901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21906)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21904)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21905)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21903__$1)));


var G__21907 = seq__21589_21896;
var G__21908 = chunk__21590_21897;
var G__21909 = count__21591_21898;
var G__21910 = (i__21592_21899 + (1));
seq__21589_21896 = G__21907;
chunk__21590_21897 = G__21908;
count__21591_21898 = G__21909;
i__21592_21899 = G__21910;
continue;
} else {
var temp__5823__auto___21911 = cljs.core.seq(seq__21589_21896);
if(temp__5823__auto___21911){
var seq__21589_21912__$1 = temp__5823__auto___21911;
if(cljs.core.chunked_seq_QMARK_(seq__21589_21912__$1)){
var c__5673__auto___21913 = cljs.core.chunk_first(seq__21589_21912__$1);
var G__21914 = cljs.core.chunk_rest(seq__21589_21912__$1);
var G__21915 = c__5673__auto___21913;
var G__21916 = cljs.core.count(c__5673__auto___21913);
var G__21917 = (0);
seq__21589_21896 = G__21914;
chunk__21590_21897 = G__21915;
count__21591_21898 = G__21916;
i__21592_21899 = G__21917;
continue;
} else {
var map__21599_21918 = cljs.core.first(seq__21589_21912__$1);
var map__21599_21919__$1 = cljs.core.__destructure_map(map__21599_21918);
var w_21920 = map__21599_21919__$1;
var msg_21921__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21919__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21919__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21923 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21919__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21924 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21599_21919__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21924)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21922)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21923)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21921__$1)));


var G__21925 = cljs.core.next(seq__21589_21912__$1);
var G__21926 = null;
var G__21927 = (0);
var G__21928 = (0);
seq__21589_21896 = G__21925;
chunk__21590_21897 = G__21926;
count__21591_21898 = G__21927;
i__21592_21899 = G__21928;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21553_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21553_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21602 = node_uri;
G__21602.setQuery(null);

G__21602.setPath(new$);

return G__21602;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21604){
var map__21605 = p__21604;
var map__21605__$1 = cljs.core.__destructure_map(map__21605);
var msg = map__21605__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21605__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21614 = cljs.core.seq(updates);
var chunk__21616 = null;
var count__21617 = (0);
var i__21618 = (0);
while(true){
if((i__21618 < count__21617)){
var path = chunk__21616.cljs$core$IIndexed$_nth$arity$2(null,i__21618);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21732_21929 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21736_21930 = null;
var count__21737_21931 = (0);
var i__21738_21932 = (0);
while(true){
if((i__21738_21932 < count__21737_21931)){
var node_21933 = chunk__21736_21930.cljs$core$IIndexed$_nth$arity$2(null,i__21738_21932);
if(cljs.core.not(node_21933.shadow$old)){
var path_match_21934 = shadow.cljs.devtools.client.browser.match_paths(node_21933.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21934)){
var new_link_21935 = (function (){var G__21764 = node_21933.cloneNode(true);
G__21764.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21934)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21764;
})();
(node_21933.shadow$old = true);

(new_link_21935.onload = ((function (seq__21732_21929,chunk__21736_21930,count__21737_21931,i__21738_21932,seq__21614,chunk__21616,count__21617,i__21618,new_link_21935,path_match_21934,node_21933,path,map__21605,map__21605__$1,msg,updates,reload_info){
return (function (e){
var seq__21765_21936 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21767_21937 = null;
var count__21768_21938 = (0);
var i__21769_21939 = (0);
while(true){
if((i__21769_21939 < count__21768_21938)){
var map__21773_21940 = chunk__21767_21937.cljs$core$IIndexed$_nth$arity$2(null,i__21769_21939);
var map__21773_21941__$1 = cljs.core.__destructure_map(map__21773_21940);
var task_21942 = map__21773_21941__$1;
var fn_str_21943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773_21941__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21944 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21773_21941__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21945 = goog.getObjectByName(fn_str_21943,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21944)));

(fn_obj_21945.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21945.cljs$core$IFn$_invoke$arity$2(path,new_link_21935) : fn_obj_21945.call(null,path,new_link_21935));


var G__21946 = seq__21765_21936;
var G__21947 = chunk__21767_21937;
var G__21948 = count__21768_21938;
var G__21949 = (i__21769_21939 + (1));
seq__21765_21936 = G__21946;
chunk__21767_21937 = G__21947;
count__21768_21938 = G__21948;
i__21769_21939 = G__21949;
continue;
} else {
var temp__5823__auto___21950 = cljs.core.seq(seq__21765_21936);
if(temp__5823__auto___21950){
var seq__21765_21951__$1 = temp__5823__auto___21950;
if(cljs.core.chunked_seq_QMARK_(seq__21765_21951__$1)){
var c__5673__auto___21952 = cljs.core.chunk_first(seq__21765_21951__$1);
var G__21953 = cljs.core.chunk_rest(seq__21765_21951__$1);
var G__21954 = c__5673__auto___21952;
var G__21955 = cljs.core.count(c__5673__auto___21952);
var G__21956 = (0);
seq__21765_21936 = G__21953;
chunk__21767_21937 = G__21954;
count__21768_21938 = G__21955;
i__21769_21939 = G__21956;
continue;
} else {
var map__21774_21957 = cljs.core.first(seq__21765_21951__$1);
var map__21774_21958__$1 = cljs.core.__destructure_map(map__21774_21957);
var task_21959 = map__21774_21958__$1;
var fn_str_21960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774_21958__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21774_21958__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21962 = goog.getObjectByName(fn_str_21960,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21961)));

(fn_obj_21962.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21962.cljs$core$IFn$_invoke$arity$2(path,new_link_21935) : fn_obj_21962.call(null,path,new_link_21935));


var G__21963 = cljs.core.next(seq__21765_21951__$1);
var G__21964 = null;
var G__21965 = (0);
var G__21966 = (0);
seq__21765_21936 = G__21963;
chunk__21767_21937 = G__21964;
count__21768_21938 = G__21965;
i__21769_21939 = G__21966;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21933);
});})(seq__21732_21929,chunk__21736_21930,count__21737_21931,i__21738_21932,seq__21614,chunk__21616,count__21617,i__21618,new_link_21935,path_match_21934,node_21933,path,map__21605,map__21605__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21934], 0));

goog.dom.insertSiblingAfter(new_link_21935,node_21933);


var G__21967 = seq__21732_21929;
var G__21968 = chunk__21736_21930;
var G__21969 = count__21737_21931;
var G__21970 = (i__21738_21932 + (1));
seq__21732_21929 = G__21967;
chunk__21736_21930 = G__21968;
count__21737_21931 = G__21969;
i__21738_21932 = G__21970;
continue;
} else {
var G__21971 = seq__21732_21929;
var G__21972 = chunk__21736_21930;
var G__21973 = count__21737_21931;
var G__21974 = (i__21738_21932 + (1));
seq__21732_21929 = G__21971;
chunk__21736_21930 = G__21972;
count__21737_21931 = G__21973;
i__21738_21932 = G__21974;
continue;
}
} else {
var G__21975 = seq__21732_21929;
var G__21976 = chunk__21736_21930;
var G__21977 = count__21737_21931;
var G__21978 = (i__21738_21932 + (1));
seq__21732_21929 = G__21975;
chunk__21736_21930 = G__21976;
count__21737_21931 = G__21977;
i__21738_21932 = G__21978;
continue;
}
} else {
var temp__5823__auto___21979 = cljs.core.seq(seq__21732_21929);
if(temp__5823__auto___21979){
var seq__21732_21980__$1 = temp__5823__auto___21979;
if(cljs.core.chunked_seq_QMARK_(seq__21732_21980__$1)){
var c__5673__auto___21981 = cljs.core.chunk_first(seq__21732_21980__$1);
var G__21982 = cljs.core.chunk_rest(seq__21732_21980__$1);
var G__21983 = c__5673__auto___21981;
var G__21984 = cljs.core.count(c__5673__auto___21981);
var G__21985 = (0);
seq__21732_21929 = G__21982;
chunk__21736_21930 = G__21983;
count__21737_21931 = G__21984;
i__21738_21932 = G__21985;
continue;
} else {
var node_21986 = cljs.core.first(seq__21732_21980__$1);
if(cljs.core.not(node_21986.shadow$old)){
var path_match_21987 = shadow.cljs.devtools.client.browser.match_paths(node_21986.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21987)){
var new_link_21988 = (function (){var G__21775 = node_21986.cloneNode(true);
G__21775.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21987)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21775;
})();
(node_21986.shadow$old = true);

(new_link_21988.onload = ((function (seq__21732_21929,chunk__21736_21930,count__21737_21931,i__21738_21932,seq__21614,chunk__21616,count__21617,i__21618,new_link_21988,path_match_21987,node_21986,seq__21732_21980__$1,temp__5823__auto___21979,path,map__21605,map__21605__$1,msg,updates,reload_info){
return (function (e){
var seq__21776_21989 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21778_21990 = null;
var count__21779_21991 = (0);
var i__21780_21992 = (0);
while(true){
if((i__21780_21992 < count__21779_21991)){
var map__21784_21993 = chunk__21778_21990.cljs$core$IIndexed$_nth$arity$2(null,i__21780_21992);
var map__21784_21994__$1 = cljs.core.__destructure_map(map__21784_21993);
var task_21995 = map__21784_21994__$1;
var fn_str_21996 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784_21994__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21784_21994__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21998 = goog.getObjectByName(fn_str_21996,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21997)));

(fn_obj_21998.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21998.cljs$core$IFn$_invoke$arity$2(path,new_link_21988) : fn_obj_21998.call(null,path,new_link_21988));


var G__21999 = seq__21776_21989;
var G__22000 = chunk__21778_21990;
var G__22001 = count__21779_21991;
var G__22002 = (i__21780_21992 + (1));
seq__21776_21989 = G__21999;
chunk__21778_21990 = G__22000;
count__21779_21991 = G__22001;
i__21780_21992 = G__22002;
continue;
} else {
var temp__5823__auto___22003__$1 = cljs.core.seq(seq__21776_21989);
if(temp__5823__auto___22003__$1){
var seq__21776_22004__$1 = temp__5823__auto___22003__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21776_22004__$1)){
var c__5673__auto___22005 = cljs.core.chunk_first(seq__21776_22004__$1);
var G__22006 = cljs.core.chunk_rest(seq__21776_22004__$1);
var G__22007 = c__5673__auto___22005;
var G__22008 = cljs.core.count(c__5673__auto___22005);
var G__22009 = (0);
seq__21776_21989 = G__22006;
chunk__21778_21990 = G__22007;
count__21779_21991 = G__22008;
i__21780_21992 = G__22009;
continue;
} else {
var map__21785_22010 = cljs.core.first(seq__21776_22004__$1);
var map__21785_22011__$1 = cljs.core.__destructure_map(map__21785_22010);
var task_22012 = map__21785_22011__$1;
var fn_str_22013 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21785_22011__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21785_22011__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22015 = goog.getObjectByName(fn_str_22013,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22014)));

(fn_obj_22015.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22015.cljs$core$IFn$_invoke$arity$2(path,new_link_21988) : fn_obj_22015.call(null,path,new_link_21988));


var G__22016 = cljs.core.next(seq__21776_22004__$1);
var G__22017 = null;
var G__22018 = (0);
var G__22019 = (0);
seq__21776_21989 = G__22016;
chunk__21778_21990 = G__22017;
count__21779_21991 = G__22018;
i__21780_21992 = G__22019;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21986);
});})(seq__21732_21929,chunk__21736_21930,count__21737_21931,i__21738_21932,seq__21614,chunk__21616,count__21617,i__21618,new_link_21988,path_match_21987,node_21986,seq__21732_21980__$1,temp__5823__auto___21979,path,map__21605,map__21605__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21987], 0));

goog.dom.insertSiblingAfter(new_link_21988,node_21986);


var G__22020 = cljs.core.next(seq__21732_21980__$1);
var G__22021 = null;
var G__22022 = (0);
var G__22023 = (0);
seq__21732_21929 = G__22020;
chunk__21736_21930 = G__22021;
count__21737_21931 = G__22022;
i__21738_21932 = G__22023;
continue;
} else {
var G__22024 = cljs.core.next(seq__21732_21980__$1);
var G__22025 = null;
var G__22026 = (0);
var G__22027 = (0);
seq__21732_21929 = G__22024;
chunk__21736_21930 = G__22025;
count__21737_21931 = G__22026;
i__21738_21932 = G__22027;
continue;
}
} else {
var G__22028 = cljs.core.next(seq__21732_21980__$1);
var G__22029 = null;
var G__22030 = (0);
var G__22031 = (0);
seq__21732_21929 = G__22028;
chunk__21736_21930 = G__22029;
count__21737_21931 = G__22030;
i__21738_21932 = G__22031;
continue;
}
}
} else {
}
}
break;
}


var G__22032 = seq__21614;
var G__22033 = chunk__21616;
var G__22034 = count__21617;
var G__22035 = (i__21618 + (1));
seq__21614 = G__22032;
chunk__21616 = G__22033;
count__21617 = G__22034;
i__21618 = G__22035;
continue;
} else {
var G__22036 = seq__21614;
var G__22037 = chunk__21616;
var G__22038 = count__21617;
var G__22039 = (i__21618 + (1));
seq__21614 = G__22036;
chunk__21616 = G__22037;
count__21617 = G__22038;
i__21618 = G__22039;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__21614);
if(temp__5823__auto__){
var seq__21614__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21614__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21614__$1);
var G__22040 = cljs.core.chunk_rest(seq__21614__$1);
var G__22041 = c__5673__auto__;
var G__22042 = cljs.core.count(c__5673__auto__);
var G__22043 = (0);
seq__21614 = G__22040;
chunk__21616 = G__22041;
count__21617 = G__22042;
i__21618 = G__22043;
continue;
} else {
var path = cljs.core.first(seq__21614__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21786_22044 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21790_22045 = null;
var count__21791_22046 = (0);
var i__21792_22047 = (0);
while(true){
if((i__21792_22047 < count__21791_22046)){
var node_22048 = chunk__21790_22045.cljs$core$IIndexed$_nth$arity$2(null,i__21792_22047);
if(cljs.core.not(node_22048.shadow$old)){
var path_match_22049 = shadow.cljs.devtools.client.browser.match_paths(node_22048.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22049)){
var new_link_22050 = (function (){var G__21818 = node_22048.cloneNode(true);
G__21818.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22049)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21818;
})();
(node_22048.shadow$old = true);

(new_link_22050.onload = ((function (seq__21786_22044,chunk__21790_22045,count__21791_22046,i__21792_22047,seq__21614,chunk__21616,count__21617,i__21618,new_link_22050,path_match_22049,node_22048,path,seq__21614__$1,temp__5823__auto__,map__21605,map__21605__$1,msg,updates,reload_info){
return (function (e){
var seq__21819_22051 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21821_22052 = null;
var count__21822_22053 = (0);
var i__21823_22054 = (0);
while(true){
if((i__21823_22054 < count__21822_22053)){
var map__21827_22055 = chunk__21821_22052.cljs$core$IIndexed$_nth$arity$2(null,i__21823_22054);
var map__21827_22056__$1 = cljs.core.__destructure_map(map__21827_22055);
var task_22057 = map__21827_22056__$1;
var fn_str_22058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21827_22056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21827_22056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22060 = goog.getObjectByName(fn_str_22058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22059)));

(fn_obj_22060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22060.cljs$core$IFn$_invoke$arity$2(path,new_link_22050) : fn_obj_22060.call(null,path,new_link_22050));


var G__22061 = seq__21819_22051;
var G__22062 = chunk__21821_22052;
var G__22063 = count__21822_22053;
var G__22064 = (i__21823_22054 + (1));
seq__21819_22051 = G__22061;
chunk__21821_22052 = G__22062;
count__21822_22053 = G__22063;
i__21823_22054 = G__22064;
continue;
} else {
var temp__5823__auto___22065__$1 = cljs.core.seq(seq__21819_22051);
if(temp__5823__auto___22065__$1){
var seq__21819_22066__$1 = temp__5823__auto___22065__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21819_22066__$1)){
var c__5673__auto___22067 = cljs.core.chunk_first(seq__21819_22066__$1);
var G__22068 = cljs.core.chunk_rest(seq__21819_22066__$1);
var G__22069 = c__5673__auto___22067;
var G__22070 = cljs.core.count(c__5673__auto___22067);
var G__22071 = (0);
seq__21819_22051 = G__22068;
chunk__21821_22052 = G__22069;
count__21822_22053 = G__22070;
i__21823_22054 = G__22071;
continue;
} else {
var map__21828_22072 = cljs.core.first(seq__21819_22066__$1);
var map__21828_22073__$1 = cljs.core.__destructure_map(map__21828_22072);
var task_22074 = map__21828_22073__$1;
var fn_str_22075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828_22073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828_22073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22077 = goog.getObjectByName(fn_str_22075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22076)));

(fn_obj_22077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22077.cljs$core$IFn$_invoke$arity$2(path,new_link_22050) : fn_obj_22077.call(null,path,new_link_22050));


var G__22078 = cljs.core.next(seq__21819_22066__$1);
var G__22079 = null;
var G__22080 = (0);
var G__22081 = (0);
seq__21819_22051 = G__22078;
chunk__21821_22052 = G__22079;
count__21822_22053 = G__22080;
i__21823_22054 = G__22081;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22048);
});})(seq__21786_22044,chunk__21790_22045,count__21791_22046,i__21792_22047,seq__21614,chunk__21616,count__21617,i__21618,new_link_22050,path_match_22049,node_22048,path,seq__21614__$1,temp__5823__auto__,map__21605,map__21605__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22049], 0));

goog.dom.insertSiblingAfter(new_link_22050,node_22048);


var G__22082 = seq__21786_22044;
var G__22083 = chunk__21790_22045;
var G__22084 = count__21791_22046;
var G__22085 = (i__21792_22047 + (1));
seq__21786_22044 = G__22082;
chunk__21790_22045 = G__22083;
count__21791_22046 = G__22084;
i__21792_22047 = G__22085;
continue;
} else {
var G__22086 = seq__21786_22044;
var G__22087 = chunk__21790_22045;
var G__22088 = count__21791_22046;
var G__22089 = (i__21792_22047 + (1));
seq__21786_22044 = G__22086;
chunk__21790_22045 = G__22087;
count__21791_22046 = G__22088;
i__21792_22047 = G__22089;
continue;
}
} else {
var G__22090 = seq__21786_22044;
var G__22091 = chunk__21790_22045;
var G__22092 = count__21791_22046;
var G__22093 = (i__21792_22047 + (1));
seq__21786_22044 = G__22090;
chunk__21790_22045 = G__22091;
count__21791_22046 = G__22092;
i__21792_22047 = G__22093;
continue;
}
} else {
var temp__5823__auto___22094__$1 = cljs.core.seq(seq__21786_22044);
if(temp__5823__auto___22094__$1){
var seq__21786_22095__$1 = temp__5823__auto___22094__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21786_22095__$1)){
var c__5673__auto___22096 = cljs.core.chunk_first(seq__21786_22095__$1);
var G__22097 = cljs.core.chunk_rest(seq__21786_22095__$1);
var G__22098 = c__5673__auto___22096;
var G__22099 = cljs.core.count(c__5673__auto___22096);
var G__22100 = (0);
seq__21786_22044 = G__22097;
chunk__21790_22045 = G__22098;
count__21791_22046 = G__22099;
i__21792_22047 = G__22100;
continue;
} else {
var node_22101 = cljs.core.first(seq__21786_22095__$1);
if(cljs.core.not(node_22101.shadow$old)){
var path_match_22102 = shadow.cljs.devtools.client.browser.match_paths(node_22101.getAttribute("href"),path);
if(cljs.core.truth_(path_match_22102)){
var new_link_22103 = (function (){var G__21829 = node_22101.cloneNode(true);
G__21829.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_22102)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__21829;
})();
(node_22101.shadow$old = true);

(new_link_22103.onload = ((function (seq__21786_22044,chunk__21790_22045,count__21791_22046,i__21792_22047,seq__21614,chunk__21616,count__21617,i__21618,new_link_22103,path_match_22102,node_22101,seq__21786_22095__$1,temp__5823__auto___22094__$1,path,seq__21614__$1,temp__5823__auto__,map__21605,map__21605__$1,msg,updates,reload_info){
return (function (e){
var seq__21830_22104 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21832_22105 = null;
var count__21833_22106 = (0);
var i__21834_22107 = (0);
while(true){
if((i__21834_22107 < count__21833_22106)){
var map__21838_22108 = chunk__21832_22105.cljs$core$IIndexed$_nth$arity$2(null,i__21834_22107);
var map__21838_22109__$1 = cljs.core.__destructure_map(map__21838_22108);
var task_22110 = map__21838_22109__$1;
var fn_str_22111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21838_22109__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21838_22109__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22113 = goog.getObjectByName(fn_str_22111,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22112)));

(fn_obj_22113.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22113.cljs$core$IFn$_invoke$arity$2(path,new_link_22103) : fn_obj_22113.call(null,path,new_link_22103));


var G__22114 = seq__21830_22104;
var G__22115 = chunk__21832_22105;
var G__22116 = count__21833_22106;
var G__22117 = (i__21834_22107 + (1));
seq__21830_22104 = G__22114;
chunk__21832_22105 = G__22115;
count__21833_22106 = G__22116;
i__21834_22107 = G__22117;
continue;
} else {
var temp__5823__auto___22118__$2 = cljs.core.seq(seq__21830_22104);
if(temp__5823__auto___22118__$2){
var seq__21830_22119__$1 = temp__5823__auto___22118__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21830_22119__$1)){
var c__5673__auto___22120 = cljs.core.chunk_first(seq__21830_22119__$1);
var G__22121 = cljs.core.chunk_rest(seq__21830_22119__$1);
var G__22122 = c__5673__auto___22120;
var G__22123 = cljs.core.count(c__5673__auto___22120);
var G__22124 = (0);
seq__21830_22104 = G__22121;
chunk__21832_22105 = G__22122;
count__21833_22106 = G__22123;
i__21834_22107 = G__22124;
continue;
} else {
var map__21839_22125 = cljs.core.first(seq__21830_22119__$1);
var map__21839_22126__$1 = cljs.core.__destructure_map(map__21839_22125);
var task_22127 = map__21839_22126__$1;
var fn_str_22128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839_22126__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_22129 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21839_22126__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_22130 = goog.getObjectByName(fn_str_22128,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_22129)));

(fn_obj_22130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_22130.cljs$core$IFn$_invoke$arity$2(path,new_link_22103) : fn_obj_22130.call(null,path,new_link_22103));


var G__22131 = cljs.core.next(seq__21830_22119__$1);
var G__22132 = null;
var G__22133 = (0);
var G__22134 = (0);
seq__21830_22104 = G__22131;
chunk__21832_22105 = G__22132;
count__21833_22106 = G__22133;
i__21834_22107 = G__22134;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_22101);
});})(seq__21786_22044,chunk__21790_22045,count__21791_22046,i__21792_22047,seq__21614,chunk__21616,count__21617,i__21618,new_link_22103,path_match_22102,node_22101,seq__21786_22095__$1,temp__5823__auto___22094__$1,path,seq__21614__$1,temp__5823__auto__,map__21605,map__21605__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_22102], 0));

goog.dom.insertSiblingAfter(new_link_22103,node_22101);


var G__22135 = cljs.core.next(seq__21786_22095__$1);
var G__22136 = null;
var G__22137 = (0);
var G__22138 = (0);
seq__21786_22044 = G__22135;
chunk__21790_22045 = G__22136;
count__21791_22046 = G__22137;
i__21792_22047 = G__22138;
continue;
} else {
var G__22139 = cljs.core.next(seq__21786_22095__$1);
var G__22140 = null;
var G__22141 = (0);
var G__22142 = (0);
seq__21786_22044 = G__22139;
chunk__21790_22045 = G__22140;
count__21791_22046 = G__22141;
i__21792_22047 = G__22142;
continue;
}
} else {
var G__22143 = cljs.core.next(seq__21786_22095__$1);
var G__22144 = null;
var G__22145 = (0);
var G__22146 = (0);
seq__21786_22044 = G__22143;
chunk__21790_22045 = G__22144;
count__21791_22046 = G__22145;
i__21792_22047 = G__22146;
continue;
}
}
} else {
}
}
break;
}


var G__22147 = cljs.core.next(seq__21614__$1);
var G__22148 = null;
var G__22149 = (0);
var G__22150 = (0);
seq__21614 = G__22147;
chunk__21616 = G__22148;
count__21617 = G__22149;
i__21618 = G__22150;
continue;
} else {
var G__22151 = cljs.core.next(seq__21614__$1);
var G__22152 = null;
var G__22153 = (0);
var G__22154 = (0);
seq__21614 = G__22151;
chunk__21616 = G__22152;
count__21617 = G__22153;
i__21618 = G__22154;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21841 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21841) : success.call(null,G__21841));
}catch (e21840){var e = e21840;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21842,success,fail){
var map__21843 = p__21842;
var map__21843__$1 = cljs.core.__destructure_map(map__21843);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21843__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21845 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21845) : success.call(null,G__21845));
}catch (e21844){var e = e21844;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21846,done,error){
var map__21847 = p__21846;
var map__21847__$1 = cljs.core.__destructure_map(map__21847);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21847__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21848,done,error){
var map__21849 = p__21848;
var map__21849__$1 = cljs.core.__destructure_map(map__21849);
var msg = map__21849__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21849__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21849__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21849__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21850){
var map__21851 = p__21850;
var map__21851__$1 = cljs.core.__destructure_map(map__21851);
var src = map__21851__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21851__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21852 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21852) : done.call(null,G__21852));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21853){
var map__21854 = p__21853;
var map__21854__$1 = cljs.core.__destructure_map(map__21854);
var msg__$1 = map__21854__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21854__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21855){var ex = e21855;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21856){
var map__21857 = p__21856;
var map__21857__$1 = cljs.core.__destructure_map(map__21857);
var env = map__21857__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21857__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21858){
var map__21859 = p__21858;
var map__21859__$1 = cljs.core.__destructure_map(map__21859);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21860){
var map__21861 = p__21860;
var map__21861__$1 = cljs.core.__destructure_map(map__21861);
var svc = map__21861__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21861__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map

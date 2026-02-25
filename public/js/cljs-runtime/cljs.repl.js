goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18629){
var map__18633 = p__18629;
var map__18633__$1 = cljs.core.__destructure_map(map__18633);
var m = map__18633__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18633__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18670_19200 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18671_19201 = null;
var count__18672_19202 = (0);
var i__18673_19203 = (0);
while(true){
if((i__18673_19203 < count__18672_19202)){
var f_19204 = chunk__18671_19201.cljs$core$IIndexed$_nth$arity$2(null,i__18673_19203);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19204], 0));


var G__19205 = seq__18670_19200;
var G__19206 = chunk__18671_19201;
var G__19207 = count__18672_19202;
var G__19208 = (i__18673_19203 + (1));
seq__18670_19200 = G__19205;
chunk__18671_19201 = G__19206;
count__18672_19202 = G__19207;
i__18673_19203 = G__19208;
continue;
} else {
var temp__5823__auto___19209 = cljs.core.seq(seq__18670_19200);
if(temp__5823__auto___19209){
var seq__18670_19210__$1 = temp__5823__auto___19209;
if(cljs.core.chunked_seq_QMARK_(seq__18670_19210__$1)){
var c__5673__auto___19211 = cljs.core.chunk_first(seq__18670_19210__$1);
var G__19212 = cljs.core.chunk_rest(seq__18670_19210__$1);
var G__19213 = c__5673__auto___19211;
var G__19214 = cljs.core.count(c__5673__auto___19211);
var G__19215 = (0);
seq__18670_19200 = G__19212;
chunk__18671_19201 = G__19213;
count__18672_19202 = G__19214;
i__18673_19203 = G__19215;
continue;
} else {
var f_19217 = cljs.core.first(seq__18670_19210__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19217], 0));


var G__19218 = cljs.core.next(seq__18670_19210__$1);
var G__19219 = null;
var G__19220 = (0);
var G__19221 = (0);
seq__18670_19200 = G__19218;
chunk__18671_19201 = G__19219;
count__18672_19202 = G__19220;
i__18673_19203 = G__19221;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19222 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19222], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19222)))?cljs.core.second(arglists_19222):arglists_19222)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18718_19225 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18719_19226 = null;
var count__18720_19227 = (0);
var i__18721_19228 = (0);
while(true){
if((i__18721_19228 < count__18720_19227)){
var vec__18751_19230 = chunk__18719_19226.cljs$core$IIndexed$_nth$arity$2(null,i__18721_19228);
var name_19231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751_19230,(0),null);
var map__18754_19232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18751_19230,(1),null);
var map__18754_19233__$1 = cljs.core.__destructure_map(map__18754_19232);
var doc_19234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754_19233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18754_19233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19235], 0));

if(cljs.core.truth_(doc_19234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19234], 0));
} else {
}


var G__19236 = seq__18718_19225;
var G__19237 = chunk__18719_19226;
var G__19238 = count__18720_19227;
var G__19239 = (i__18721_19228 + (1));
seq__18718_19225 = G__19236;
chunk__18719_19226 = G__19237;
count__18720_19227 = G__19238;
i__18721_19228 = G__19239;
continue;
} else {
var temp__5823__auto___19241 = cljs.core.seq(seq__18718_19225);
if(temp__5823__auto___19241){
var seq__18718_19242__$1 = temp__5823__auto___19241;
if(cljs.core.chunked_seq_QMARK_(seq__18718_19242__$1)){
var c__5673__auto___19244 = cljs.core.chunk_first(seq__18718_19242__$1);
var G__19246 = cljs.core.chunk_rest(seq__18718_19242__$1);
var G__19247 = c__5673__auto___19244;
var G__19248 = cljs.core.count(c__5673__auto___19244);
var G__19249 = (0);
seq__18718_19225 = G__19246;
chunk__18719_19226 = G__19247;
count__18720_19227 = G__19248;
i__18721_19228 = G__19249;
continue;
} else {
var vec__18767_19250 = cljs.core.first(seq__18718_19242__$1);
var name_19251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18767_19250,(0),null);
var map__18770_19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18767_19250,(1),null);
var map__18770_19253__$1 = cljs.core.__destructure_map(map__18770_19252);
var doc_19254 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770_19253__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19255 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18770_19253__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19251], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19255], 0));

if(cljs.core.truth_(doc_19254)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19254], 0));
} else {
}


var G__19263 = cljs.core.next(seq__18718_19242__$1);
var G__19264 = null;
var G__19265 = (0);
var G__19266 = (0);
seq__18718_19225 = G__19263;
chunk__18719_19226 = G__19264;
count__18720_19227 = G__19265;
i__18721_19228 = G__19266;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18781 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18782 = null;
var count__18783 = (0);
var i__18784 = (0);
while(true){
if((i__18784 < count__18783)){
var role = chunk__18782.cljs$core$IIndexed$_nth$arity$2(null,i__18784);
var temp__5823__auto___19271__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19271__$1)){
var spec_19274 = temp__5823__auto___19271__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19274)], 0));
} else {
}


var G__19278 = seq__18781;
var G__19279 = chunk__18782;
var G__19280 = count__18783;
var G__19281 = (i__18784 + (1));
seq__18781 = G__19278;
chunk__18782 = G__19279;
count__18783 = G__19280;
i__18784 = G__19281;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__18781);
if(temp__5823__auto____$1){
var seq__18781__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18781__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18781__$1);
var G__19282 = cljs.core.chunk_rest(seq__18781__$1);
var G__19283 = c__5673__auto__;
var G__19285 = cljs.core.count(c__5673__auto__);
var G__19286 = (0);
seq__18781 = G__19282;
chunk__18782 = G__19283;
count__18783 = G__19285;
i__18784 = G__19286;
continue;
} else {
var role = cljs.core.first(seq__18781__$1);
var temp__5823__auto___19288__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___19288__$2)){
var spec_19290 = temp__5823__auto___19288__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_19290)], 0));
} else {
}


var G__19292 = cljs.core.next(seq__18781__$1);
var G__19293 = null;
var G__19294 = (0);
var G__19295 = (0);
seq__18781 = G__19292;
chunk__18782 = G__19293;
count__18783 = G__19294;
i__18784 = G__19295;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18941 = datafied_throwable;
var map__18941__$1 = cljs.core.__destructure_map(map__18941);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18941__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18941__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18943 = cljs.core.last(via);
var map__18943__$1 = cljs.core.__destructure_map(map__18943);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18943__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18943__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18943__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18948 = data;
var map__18948__$1 = cljs.core.__destructure_map(map__18948);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18948__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18948__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18948__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18953 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18953__$1 = cljs.core.__destructure_map(map__18953);
var top_data = map__18953__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18953__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18993 = phase;
var G__18993__$1 = (((G__18993 instanceof cljs.core.Keyword))?G__18993.fqn:null);
switch (G__18993__$1) {
case "read-source":
var map__18995 = data;
var map__18995__$1 = cljs.core.__destructure_map(map__18995);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18995__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18997 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18997__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18997,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18997);
var G__18997__$2 = (cljs.core.truth_((function (){var fexpr__19007 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19007.cljs$core$IFn$_invoke$arity$1 ? fexpr__19007.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19007.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18997__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18997__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18997__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18997__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19011 = top_data;
var G__19011__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19011,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19011);
var G__19011__$2 = (cljs.core.truth_((function (){var fexpr__19015 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19015.cljs$core$IFn$_invoke$arity$1 ? fexpr__19015.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19015.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19011__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19011__$1);
var G__19011__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19011__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19011__$2);
var G__19011__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19011__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19011__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19011__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19011__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19024 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19024,(3),null);
var G__19034 = top_data;
var G__19034__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19034);
var G__19034__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19034__$1);
var G__19034__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19034__$2);
var G__19034__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19034__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19034__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19034__$4;
}

break;
case "execution":
var vec__19047 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19047,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18907_SHARP_){
var or__5142__auto__ = (p1__18907_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__19054 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19054.cljs$core$IFn$_invoke$arity$1 ? fexpr__19054.cljs$core$IFn$_invoke$arity$1(p1__18907_SHARP_) : fexpr__19054.call(null,p1__18907_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__19064 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19064__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19064);
var G__19064__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19064__$1);
var G__19064__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19064__$2);
var G__19064__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19064__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19064__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19064__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18993__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19095){
var map__19100 = p__19095;
var map__19100__$1 = cljs.core.__destructure_map(map__19100);
var triage_data = map__19100__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19100__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__19113 = phase;
var G__19113__$1 = (((G__19113 instanceof cljs.core.Keyword))?G__19113.fqn:null);
switch (G__19113__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19115 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19116 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19117 = loc;
var G__19118 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19121_19319 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19122_19320 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19123_19321 = true;
var _STAR_print_fn_STAR__temp_val__19124_19322 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19123_19321);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19124_19322);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19089_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19089_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19122_19320);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19121_19319);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19115,G__19116,G__19117,G__19118) : format.call(null,G__19115,G__19116,G__19117,G__19118));

break;
case "macroexpansion":
var G__19132 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19133 = cause_type;
var G__19134 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19135 = loc;
var G__19136 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19132,G__19133,G__19134,G__19135,G__19136) : format.call(null,G__19132,G__19133,G__19134,G__19135,G__19136));

break;
case "compile-syntax-check":
var G__19140 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19141 = cause_type;
var G__19142 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19143 = loc;
var G__19144 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19140,G__19141,G__19142,G__19143,G__19144) : format.call(null,G__19140,G__19141,G__19142,G__19143,G__19144));

break;
case "compilation":
var G__19154 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19155 = cause_type;
var G__19156 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19157 = loc;
var G__19158 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19154,G__19155,G__19156,G__19157,G__19158) : format.call(null,G__19154,G__19155,G__19156,G__19157,G__19158));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19161 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19162 = symbol;
var G__19163 = loc;
var G__19164 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19168_19334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19169_19335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19170_19336 = true;
var _STAR_print_fn_STAR__temp_val__19171_19337 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19170_19336);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19171_19337);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19091_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19091_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19169_19335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19168_19334);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19161,G__19162,G__19163,G__19164) : format.call(null,G__19161,G__19162,G__19163,G__19164));
} else {
var G__19182 = "Execution error%s at %s(%s).\n%s\n";
var G__19183 = cause_type;
var G__19184 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__19185 = loc;
var G__19186 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19182,G__19183,G__19184,G__19185,G__19186) : format.call(null,G__19182,G__19183,G__19184,G__19185,G__19186));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19113__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map

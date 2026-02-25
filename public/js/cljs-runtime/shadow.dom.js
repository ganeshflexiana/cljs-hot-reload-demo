goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_15123 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_15123(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_15128 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_15128(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__13518 = coll;
var G__13519 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__13518,G__13519) : shadow.dom.lazy_native_coll_seq.call(null,G__13518,G__13519));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__13552 = arguments.length;
switch (G__13552) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__13558 = arguments.length;
switch (G__13558) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__13570 = arguments.length;
switch (G__13570) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__13585 = arguments.length;
switch (G__13585) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__13602 = arguments.length;
switch (G__13602) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__13617 = arguments.length;
switch (G__13617) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13632){if((e13632 instanceof Object)){
var e = e13632;
return console.log("didnt support attachEvent",el,e);
} else {
throw e13632;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__13642 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__13643 = null;
var count__13644 = (0);
var i__13645 = (0);
while(true){
if((i__13645 < count__13644)){
var el = chunk__13643.cljs$core$IIndexed$_nth$arity$2(null,i__13645);
var handler_15206__$1 = ((function (seq__13642,chunk__13643,count__13644,i__13645,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13642,chunk__13643,count__13644,i__13645,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15206__$1);


var G__15211 = seq__13642;
var G__15212 = chunk__13643;
var G__15213 = count__13644;
var G__15214 = (i__13645 + (1));
seq__13642 = G__15211;
chunk__13643 = G__15212;
count__13644 = G__15213;
i__13645 = G__15214;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13642);
if(temp__5823__auto__){
var seq__13642__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13642__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13642__$1);
var G__15216 = cljs.core.chunk_rest(seq__13642__$1);
var G__15217 = c__5673__auto__;
var G__15218 = cljs.core.count(c__5673__auto__);
var G__15219 = (0);
seq__13642 = G__15216;
chunk__13643 = G__15217;
count__13644 = G__15218;
i__13645 = G__15219;
continue;
} else {
var el = cljs.core.first(seq__13642__$1);
var handler_15221__$1 = ((function (seq__13642,chunk__13643,count__13644,i__13645,el,seq__13642__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13642,chunk__13643,count__13644,i__13645,el,seq__13642__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_15221__$1);


var G__15228 = cljs.core.next(seq__13642__$1);
var G__15229 = null;
var G__15230 = (0);
var G__15231 = (0);
seq__13642 = G__15228;
chunk__13643 = G__15229;
count__13644 = G__15230;
i__13645 = G__15231;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__13675 = arguments.length;
switch (G__13675) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__13706 = cljs.core.seq(events);
var chunk__13707 = null;
var count__13708 = (0);
var i__13709 = (0);
while(true){
if((i__13709 < count__13708)){
var vec__13727 = chunk__13707.cljs$core$IIndexed$_nth$arity$2(null,i__13709);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13727,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15283 = seq__13706;
var G__15284 = chunk__13707;
var G__15285 = count__13708;
var G__15286 = (i__13709 + (1));
seq__13706 = G__15283;
chunk__13707 = G__15284;
count__13708 = G__15285;
i__13709 = G__15286;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13706);
if(temp__5823__auto__){
var seq__13706__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13706__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13706__$1);
var G__15290 = cljs.core.chunk_rest(seq__13706__$1);
var G__15291 = c__5673__auto__;
var G__15292 = cljs.core.count(c__5673__auto__);
var G__15293 = (0);
seq__13706 = G__15290;
chunk__13707 = G__15291;
count__13708 = G__15292;
i__13709 = G__15293;
continue;
} else {
var vec__13735 = cljs.core.first(seq__13706__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13735,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13735,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__15295 = cljs.core.next(seq__13706__$1);
var G__15296 = null;
var G__15297 = (0);
var G__15298 = (0);
seq__13706 = G__15295;
chunk__13707 = G__15296;
count__13708 = G__15297;
i__13709 = G__15298;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__13746 = cljs.core.seq(styles);
var chunk__13747 = null;
var count__13748 = (0);
var i__13749 = (0);
while(true){
if((i__13749 < count__13748)){
var vec__13784 = chunk__13747.cljs$core$IIndexed$_nth$arity$2(null,i__13749);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13784,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15301 = seq__13746;
var G__15302 = chunk__13747;
var G__15303 = count__13748;
var G__15304 = (i__13749 + (1));
seq__13746 = G__15301;
chunk__13747 = G__15302;
count__13748 = G__15303;
i__13749 = G__15304;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__13746);
if(temp__5823__auto__){
var seq__13746__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13746__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__13746__$1);
var G__15306 = cljs.core.chunk_rest(seq__13746__$1);
var G__15307 = c__5673__auto__;
var G__15308 = cljs.core.count(c__5673__auto__);
var G__15309 = (0);
seq__13746 = G__15306;
chunk__13747 = G__15307;
count__13748 = G__15308;
i__13749 = G__15309;
continue;
} else {
var vec__13797 = cljs.core.first(seq__13746__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13797,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__15311 = cljs.core.next(seq__13746__$1);
var G__15312 = null;
var G__15313 = (0);
var G__15314 = (0);
seq__13746 = G__15311;
chunk__13747 = G__15312;
count__13748 = G__15313;
i__13749 = G__15314;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__13810_15316 = key;
var G__13810_15317__$1 = (((G__13810_15316 instanceof cljs.core.Keyword))?G__13810_15316.fqn:null);
switch (G__13810_15317__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_15337 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_15337,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_15337,"aria-");
}
})())){
el.setAttribute(ks_15337,value);
} else {
(el[ks_15337] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__13884){
var map__13885 = p__13884;
var map__13885__$1 = cljs.core.__destructure_map(map__13885);
var props = map__13885__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13885__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__13887 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13887,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__13891 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__13891,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__13891;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__13895 = arguments.length;
switch (G__13895) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__13899){
var vec__13900 = p__13899;
var seq__13901 = cljs.core.seq(vec__13900);
var first__13902 = cljs.core.first(seq__13901);
var seq__13901__$1 = cljs.core.next(seq__13901);
var nn = first__13902;
var first__13902__$1 = cljs.core.first(seq__13901__$1);
var seq__13901__$2 = cljs.core.next(seq__13901__$1);
var np = first__13902__$1;
var nc = seq__13901__$2;
var node = vec__13900;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13908 = nn;
var G__13909 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13908,G__13909) : create_fn.call(null,G__13908,G__13909));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__13915 = nn;
var G__13916 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__13915,G__13916) : create_fn.call(null,G__13915,G__13916));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__13926 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13926,(1),null);
var seq__13929_15380 = cljs.core.seq(node_children);
var chunk__13930_15381 = null;
var count__13931_15382 = (0);
var i__13932_15383 = (0);
while(true){
if((i__13932_15383 < count__13931_15382)){
var child_struct_15386 = chunk__13930_15381.cljs$core$IIndexed$_nth$arity$2(null,i__13932_15383);
var children_15387 = shadow.dom.dom_node(child_struct_15386);
if(cljs.core.seq_QMARK_(children_15387)){
var seq__14011_15393 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15387));
var chunk__14013_15394 = null;
var count__14014_15395 = (0);
var i__14015_15396 = (0);
while(true){
if((i__14015_15396 < count__14014_15395)){
var child_15397 = chunk__14013_15394.cljs$core$IIndexed$_nth$arity$2(null,i__14015_15396);
if(cljs.core.truth_(child_15397)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15397);


var G__15399 = seq__14011_15393;
var G__15400 = chunk__14013_15394;
var G__15401 = count__14014_15395;
var G__15402 = (i__14015_15396 + (1));
seq__14011_15393 = G__15399;
chunk__14013_15394 = G__15400;
count__14014_15395 = G__15401;
i__14015_15396 = G__15402;
continue;
} else {
var G__15405 = seq__14011_15393;
var G__15406 = chunk__14013_15394;
var G__15407 = count__14014_15395;
var G__15408 = (i__14015_15396 + (1));
seq__14011_15393 = G__15405;
chunk__14013_15394 = G__15406;
count__14014_15395 = G__15407;
i__14015_15396 = G__15408;
continue;
}
} else {
var temp__5823__auto___15410 = cljs.core.seq(seq__14011_15393);
if(temp__5823__auto___15410){
var seq__14011_15411__$1 = temp__5823__auto___15410;
if(cljs.core.chunked_seq_QMARK_(seq__14011_15411__$1)){
var c__5673__auto___15412 = cljs.core.chunk_first(seq__14011_15411__$1);
var G__15413 = cljs.core.chunk_rest(seq__14011_15411__$1);
var G__15414 = c__5673__auto___15412;
var G__15415 = cljs.core.count(c__5673__auto___15412);
var G__15416 = (0);
seq__14011_15393 = G__15413;
chunk__14013_15394 = G__15414;
count__14014_15395 = G__15415;
i__14015_15396 = G__15416;
continue;
} else {
var child_15418 = cljs.core.first(seq__14011_15411__$1);
if(cljs.core.truth_(child_15418)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15418);


var G__15419 = cljs.core.next(seq__14011_15411__$1);
var G__15420 = null;
var G__15421 = (0);
var G__15422 = (0);
seq__14011_15393 = G__15419;
chunk__14013_15394 = G__15420;
count__14014_15395 = G__15421;
i__14015_15396 = G__15422;
continue;
} else {
var G__15423 = cljs.core.next(seq__14011_15411__$1);
var G__15424 = null;
var G__15425 = (0);
var G__15426 = (0);
seq__14011_15393 = G__15423;
chunk__14013_15394 = G__15424;
count__14014_15395 = G__15425;
i__14015_15396 = G__15426;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15387);
}


var G__15430 = seq__13929_15380;
var G__15431 = chunk__13930_15381;
var G__15432 = count__13931_15382;
var G__15433 = (i__13932_15383 + (1));
seq__13929_15380 = G__15430;
chunk__13930_15381 = G__15431;
count__13931_15382 = G__15432;
i__13932_15383 = G__15433;
continue;
} else {
var temp__5823__auto___15435 = cljs.core.seq(seq__13929_15380);
if(temp__5823__auto___15435){
var seq__13929_15437__$1 = temp__5823__auto___15435;
if(cljs.core.chunked_seq_QMARK_(seq__13929_15437__$1)){
var c__5673__auto___15438 = cljs.core.chunk_first(seq__13929_15437__$1);
var G__15439 = cljs.core.chunk_rest(seq__13929_15437__$1);
var G__15440 = c__5673__auto___15438;
var G__15441 = cljs.core.count(c__5673__auto___15438);
var G__15442 = (0);
seq__13929_15380 = G__15439;
chunk__13930_15381 = G__15440;
count__13931_15382 = G__15441;
i__13932_15383 = G__15442;
continue;
} else {
var child_struct_15445 = cljs.core.first(seq__13929_15437__$1);
var children_15446 = shadow.dom.dom_node(child_struct_15445);
if(cljs.core.seq_QMARK_(children_15446)){
var seq__14058_15447 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_15446));
var chunk__14060_15448 = null;
var count__14061_15449 = (0);
var i__14062_15450 = (0);
while(true){
if((i__14062_15450 < count__14061_15449)){
var child_15454 = chunk__14060_15448.cljs$core$IIndexed$_nth$arity$2(null,i__14062_15450);
if(cljs.core.truth_(child_15454)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15454);


var G__15456 = seq__14058_15447;
var G__15457 = chunk__14060_15448;
var G__15458 = count__14061_15449;
var G__15459 = (i__14062_15450 + (1));
seq__14058_15447 = G__15456;
chunk__14060_15448 = G__15457;
count__14061_15449 = G__15458;
i__14062_15450 = G__15459;
continue;
} else {
var G__15460 = seq__14058_15447;
var G__15461 = chunk__14060_15448;
var G__15462 = count__14061_15449;
var G__15463 = (i__14062_15450 + (1));
seq__14058_15447 = G__15460;
chunk__14060_15448 = G__15461;
count__14061_15449 = G__15462;
i__14062_15450 = G__15463;
continue;
}
} else {
var temp__5823__auto___15465__$1 = cljs.core.seq(seq__14058_15447);
if(temp__5823__auto___15465__$1){
var seq__14058_15466__$1 = temp__5823__auto___15465__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14058_15466__$1)){
var c__5673__auto___15467 = cljs.core.chunk_first(seq__14058_15466__$1);
var G__15469 = cljs.core.chunk_rest(seq__14058_15466__$1);
var G__15470 = c__5673__auto___15467;
var G__15471 = cljs.core.count(c__5673__auto___15467);
var G__15472 = (0);
seq__14058_15447 = G__15469;
chunk__14060_15448 = G__15470;
count__14061_15449 = G__15471;
i__14062_15450 = G__15472;
continue;
} else {
var child_15475 = cljs.core.first(seq__14058_15466__$1);
if(cljs.core.truth_(child_15475)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_15475);


var G__15476 = cljs.core.next(seq__14058_15466__$1);
var G__15477 = null;
var G__15478 = (0);
var G__15479 = (0);
seq__14058_15447 = G__15476;
chunk__14060_15448 = G__15477;
count__14061_15449 = G__15478;
i__14062_15450 = G__15479;
continue;
} else {
var G__15482 = cljs.core.next(seq__14058_15466__$1);
var G__15483 = null;
var G__15484 = (0);
var G__15485 = (0);
seq__14058_15447 = G__15482;
chunk__14060_15448 = G__15483;
count__14061_15449 = G__15484;
i__14062_15450 = G__15485;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_15446);
}


var G__15486 = cljs.core.next(seq__13929_15437__$1);
var G__15487 = null;
var G__15488 = (0);
var G__15489 = (0);
seq__13929_15380 = G__15486;
chunk__13930_15381 = G__15487;
count__13931_15382 = G__15488;
i__13932_15383 = G__15489;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__14115 = cljs.core.seq(node);
var chunk__14116 = null;
var count__14117 = (0);
var i__14118 = (0);
while(true){
if((i__14118 < count__14117)){
var n = chunk__14116.cljs$core$IIndexed$_nth$arity$2(null,i__14118);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15506 = seq__14115;
var G__15507 = chunk__14116;
var G__15508 = count__14117;
var G__15509 = (i__14118 + (1));
seq__14115 = G__15506;
chunk__14116 = G__15507;
count__14117 = G__15508;
i__14118 = G__15509;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14115);
if(temp__5823__auto__){
var seq__14115__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14115__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14115__$1);
var G__15511 = cljs.core.chunk_rest(seq__14115__$1);
var G__15512 = c__5673__auto__;
var G__15513 = cljs.core.count(c__5673__auto__);
var G__15514 = (0);
seq__14115 = G__15511;
chunk__14116 = G__15512;
count__14117 = G__15513;
i__14118 = G__15514;
continue;
} else {
var n = cljs.core.first(seq__14115__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__15517 = cljs.core.next(seq__14115__$1);
var G__15518 = null;
var G__15519 = (0);
var G__15520 = (0);
seq__14115 = G__15517;
chunk__14116 = G__15518;
count__14117 = G__15519;
i__14118 = G__15520;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__14140 = arguments.length;
switch (G__14140) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__14144 = arguments.length;
switch (G__14144) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__14261 = arguments.length;
switch (G__14261) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___15597 = arguments.length;
var i__5877__auto___15598 = (0);
while(true){
if((i__5877__auto___15598 < len__5876__auto___15597)){
args__5882__auto__.push((arguments[i__5877__auto___15598]));

var G__15599 = (i__5877__auto___15598 + (1));
i__5877__auto___15598 = G__15599;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__14407_15601 = cljs.core.seq(nodes);
var chunk__14408_15602 = null;
var count__14409_15603 = (0);
var i__14410_15604 = (0);
while(true){
if((i__14410_15604 < count__14409_15603)){
var node_15605 = chunk__14408_15602.cljs$core$IIndexed$_nth$arity$2(null,i__14410_15604);
fragment.appendChild(shadow.dom._to_dom(node_15605));


var G__15609 = seq__14407_15601;
var G__15610 = chunk__14408_15602;
var G__15611 = count__14409_15603;
var G__15612 = (i__14410_15604 + (1));
seq__14407_15601 = G__15609;
chunk__14408_15602 = G__15610;
count__14409_15603 = G__15611;
i__14410_15604 = G__15612;
continue;
} else {
var temp__5823__auto___15614 = cljs.core.seq(seq__14407_15601);
if(temp__5823__auto___15614){
var seq__14407_15615__$1 = temp__5823__auto___15614;
if(cljs.core.chunked_seq_QMARK_(seq__14407_15615__$1)){
var c__5673__auto___15616 = cljs.core.chunk_first(seq__14407_15615__$1);
var G__15617 = cljs.core.chunk_rest(seq__14407_15615__$1);
var G__15618 = c__5673__auto___15616;
var G__15619 = cljs.core.count(c__5673__auto___15616);
var G__15620 = (0);
seq__14407_15601 = G__15617;
chunk__14408_15602 = G__15618;
count__14409_15603 = G__15619;
i__14410_15604 = G__15620;
continue;
} else {
var node_15623 = cljs.core.first(seq__14407_15615__$1);
fragment.appendChild(shadow.dom._to_dom(node_15623));


var G__15624 = cljs.core.next(seq__14407_15615__$1);
var G__15625 = null;
var G__15626 = (0);
var G__15627 = (0);
seq__14407_15601 = G__15624;
chunk__14408_15602 = G__15625;
count__14409_15603 = G__15626;
i__14410_15604 = G__15627;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq14392){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14392));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__14432_15635 = cljs.core.seq(scripts);
var chunk__14433_15636 = null;
var count__14434_15637 = (0);
var i__14435_15638 = (0);
while(true){
if((i__14435_15638 < count__14434_15637)){
var vec__14477_15641 = chunk__14433_15636.cljs$core$IIndexed$_nth$arity$2(null,i__14435_15638);
var script_tag_15642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477_15641,(0),null);
var script_body_15643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14477_15641,(1),null);
eval(script_body_15643);


var G__15645 = seq__14432_15635;
var G__15646 = chunk__14433_15636;
var G__15647 = count__14434_15637;
var G__15648 = (i__14435_15638 + (1));
seq__14432_15635 = G__15645;
chunk__14433_15636 = G__15646;
count__14434_15637 = G__15647;
i__14435_15638 = G__15648;
continue;
} else {
var temp__5823__auto___15650 = cljs.core.seq(seq__14432_15635);
if(temp__5823__auto___15650){
var seq__14432_15653__$1 = temp__5823__auto___15650;
if(cljs.core.chunked_seq_QMARK_(seq__14432_15653__$1)){
var c__5673__auto___15655 = cljs.core.chunk_first(seq__14432_15653__$1);
var G__15657 = cljs.core.chunk_rest(seq__14432_15653__$1);
var G__15658 = c__5673__auto___15655;
var G__15659 = cljs.core.count(c__5673__auto___15655);
var G__15660 = (0);
seq__14432_15635 = G__15657;
chunk__14433_15636 = G__15658;
count__14434_15637 = G__15659;
i__14435_15638 = G__15660;
continue;
} else {
var vec__14486_15661 = cljs.core.first(seq__14432_15653__$1);
var script_tag_15662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486_15661,(0),null);
var script_body_15663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14486_15661,(1),null);
eval(script_body_15663);


var G__15666 = cljs.core.next(seq__14432_15653__$1);
var G__15667 = null;
var G__15668 = (0);
var G__15669 = (0);
seq__14432_15635 = G__15666;
chunk__14433_15636 = G__15667;
count__14434_15637 = G__15668;
i__14435_15638 = G__15669;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__14489){
var vec__14490 = p__14489;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14490,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__14495 = arguments.length;
switch (G__14495) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__14522 = cljs.core.seq(style_keys);
var chunk__14523 = null;
var count__14524 = (0);
var i__14525 = (0);
while(true){
if((i__14525 < count__14524)){
var it = chunk__14523.cljs$core$IIndexed$_nth$arity$2(null,i__14525);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15688 = seq__14522;
var G__15689 = chunk__14523;
var G__15690 = count__14524;
var G__15691 = (i__14525 + (1));
seq__14522 = G__15688;
chunk__14523 = G__15689;
count__14524 = G__15690;
i__14525 = G__15691;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__14522);
if(temp__5823__auto__){
var seq__14522__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14522__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__14522__$1);
var G__15697 = cljs.core.chunk_rest(seq__14522__$1);
var G__15698 = c__5673__auto__;
var G__15699 = cljs.core.count(c__5673__auto__);
var G__15700 = (0);
seq__14522 = G__15697;
chunk__14523 = G__15698;
count__14524 = G__15699;
i__14525 = G__15700;
continue;
} else {
var it = cljs.core.first(seq__14522__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__15709 = cljs.core.next(seq__14522__$1);
var G__15711 = null;
var G__15712 = (0);
var G__15713 = (0);
seq__14522 = G__15709;
chunk__14523 = G__15711;
count__14524 = G__15712;
i__14525 = G__15713;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14561,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14622 = k14561;
var G__14622__$1 = (((G__14622 instanceof cljs.core.Keyword))?G__14622.fqn:null);
switch (G__14622__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14561,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14630){
var vec__14631 = p__14630;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14631,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14631,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14560){
var self__ = this;
var G__14560__$1 = this;
return (new cljs.core.RecordIter((0),G__14560__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14562,other14563){
var self__ = this;
var this14562__$1 = this;
return (((!((other14563 == null)))) && ((((this14562__$1.constructor === other14563.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14562__$1.x,other14563.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14562__$1.y,other14563.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14562__$1.__extmap,other14563.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14561){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14686 = k14561;
var G__14686__$1 = (((G__14686 instanceof cljs.core.Keyword))?G__14686.fqn:null);
switch (G__14686__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14561);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14560){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14689 = cljs.core.keyword_identical_QMARK_;
var expr__14690 = k__5457__auto__;
if(cljs.core.truth_((pred__14689.cljs$core$IFn$_invoke$arity$2 ? pred__14689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__14690) : pred__14689.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__14690)))){
return (new shadow.dom.Coordinate(G__14560,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14689.cljs$core$IFn$_invoke$arity$2 ? pred__14689.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__14690) : pred__14689.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__14690)))){
return (new shadow.dom.Coordinate(self__.x,G__14560,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14560),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14560){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__14560,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__14591){
var extmap__5490__auto__ = (function (){var G__14700 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14591,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__14591)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14700);
} else {
return G__14700;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__14591),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__14591),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k14719,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__14724 = k14719;
var G__14724__$1 = (((G__14724 instanceof cljs.core.Keyword))?G__14724.fqn:null);
switch (G__14724__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14719,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__14725){
var vec__14726 = p__14725;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14726,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14718){
var self__ = this;
var G__14718__$1 = this;
return (new cljs.core.RecordIter((0),G__14718__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this14720,other14721){
var self__ = this;
var this14720__$1 = this;
return (((!((other14721 == null)))) && ((((this14720__$1.constructor === other14721.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.w,other14721.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.h,other14721.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this14720__$1.__extmap,other14721.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k14719){
var self__ = this;
var this__5455__auto____$1 = this;
var G__14749 = k14719;
var G__14749__$1 = (((G__14749 instanceof cljs.core.Keyword))?G__14749.fqn:null);
switch (G__14749__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k14719);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__14718){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__14751 = cljs.core.keyword_identical_QMARK_;
var expr__14752 = k__5457__auto__;
if(cljs.core.truth_((pred__14751.cljs$core$IFn$_invoke$arity$2 ? pred__14751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__14752) : pred__14751.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__14752)))){
return (new shadow.dom.Size(G__14718,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14751.cljs$core$IFn$_invoke$arity$2 ? pred__14751.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__14752) : pred__14751.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__14752)))){
return (new shadow.dom.Size(self__.w,G__14718,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__14718),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__14718){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__14718,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__14722){
var extmap__5490__auto__ = (function (){var G__14770 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14722,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__14722)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__14770);
} else {
return G__14770;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__14722),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__14722),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__15916 = (i + (1));
var G__15917 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__15916;
ret = G__15917;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14801){
var vec__14802 = p__14801;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14802,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14802,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__14813 = arguments.length;
switch (G__14813) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__15947 = ps;
var G__15948 = (i + (1));
el__$1 = G__15947;
i = G__15948;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__14861 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14861,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__14868_15955 = cljs.core.seq(props);
var chunk__14869_15956 = null;
var count__14870_15957 = (0);
var i__14871_15958 = (0);
while(true){
if((i__14871_15958 < count__14870_15957)){
var vec__14892_15961 = chunk__14869_15956.cljs$core$IIndexed$_nth$arity$2(null,i__14871_15958);
var k_15962 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892_15961,(0),null);
var v_15963 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14892_15961,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_15962);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15962),v_15963);


var G__15965 = seq__14868_15955;
var G__15966 = chunk__14869_15956;
var G__15967 = count__14870_15957;
var G__15968 = (i__14871_15958 + (1));
seq__14868_15955 = G__15965;
chunk__14869_15956 = G__15966;
count__14870_15957 = G__15967;
i__14871_15958 = G__15968;
continue;
} else {
var temp__5823__auto___15970 = cljs.core.seq(seq__14868_15955);
if(temp__5823__auto___15970){
var seq__14868_15972__$1 = temp__5823__auto___15970;
if(cljs.core.chunked_seq_QMARK_(seq__14868_15972__$1)){
var c__5673__auto___15973 = cljs.core.chunk_first(seq__14868_15972__$1);
var G__15975 = cljs.core.chunk_rest(seq__14868_15972__$1);
var G__15976 = c__5673__auto___15973;
var G__15977 = cljs.core.count(c__5673__auto___15973);
var G__15978 = (0);
seq__14868_15955 = G__15975;
chunk__14869_15956 = G__15976;
count__14870_15957 = G__15977;
i__14871_15958 = G__15978;
continue;
} else {
var vec__14916_15979 = cljs.core.first(seq__14868_15972__$1);
var k_15980 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916_15979,(0),null);
var v_15981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14916_15979,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_15980);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_15980),v_15981);


var G__15985 = cljs.core.next(seq__14868_15972__$1);
var G__15986 = null;
var G__15987 = (0);
var G__15988 = (0);
seq__14868_15955 = G__15985;
chunk__14869_15956 = G__15986;
count__14870_15957 = G__15987;
i__14871_15958 = G__15988;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__14938 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14938,(1),null);
var seq__14942_15991 = cljs.core.seq(node_children);
var chunk__14944_15992 = null;
var count__14945_15993 = (0);
var i__14946_15994 = (0);
while(true){
if((i__14946_15994 < count__14945_15993)){
var child_struct_15995 = chunk__14944_15992.cljs$core$IIndexed$_nth$arity$2(null,i__14946_15994);
if((!((child_struct_15995 == null)))){
if(typeof child_struct_15995 === 'string'){
var text_16000 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16000)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_15995)));
} else {
var children_16001 = shadow.dom.svg_node(child_struct_15995);
if(cljs.core.seq_QMARK_(children_16001)){
var seq__15013_16004 = cljs.core.seq(children_16001);
var chunk__15015_16005 = null;
var count__15016_16006 = (0);
var i__15017_16007 = (0);
while(true){
if((i__15017_16007 < count__15016_16006)){
var child_16009 = chunk__15015_16005.cljs$core$IIndexed$_nth$arity$2(null,i__15017_16007);
if(cljs.core.truth_(child_16009)){
node.appendChild(child_16009);


var G__16010 = seq__15013_16004;
var G__16011 = chunk__15015_16005;
var G__16012 = count__15016_16006;
var G__16013 = (i__15017_16007 + (1));
seq__15013_16004 = G__16010;
chunk__15015_16005 = G__16011;
count__15016_16006 = G__16012;
i__15017_16007 = G__16013;
continue;
} else {
var G__16016 = seq__15013_16004;
var G__16017 = chunk__15015_16005;
var G__16018 = count__15016_16006;
var G__16019 = (i__15017_16007 + (1));
seq__15013_16004 = G__16016;
chunk__15015_16005 = G__16017;
count__15016_16006 = G__16018;
i__15017_16007 = G__16019;
continue;
}
} else {
var temp__5823__auto___16021 = cljs.core.seq(seq__15013_16004);
if(temp__5823__auto___16021){
var seq__15013_16022__$1 = temp__5823__auto___16021;
if(cljs.core.chunked_seq_QMARK_(seq__15013_16022__$1)){
var c__5673__auto___16024 = cljs.core.chunk_first(seq__15013_16022__$1);
var G__16025 = cljs.core.chunk_rest(seq__15013_16022__$1);
var G__16026 = c__5673__auto___16024;
var G__16027 = cljs.core.count(c__5673__auto___16024);
var G__16028 = (0);
seq__15013_16004 = G__16025;
chunk__15015_16005 = G__16026;
count__15016_16006 = G__16027;
i__15017_16007 = G__16028;
continue;
} else {
var child_16029 = cljs.core.first(seq__15013_16022__$1);
if(cljs.core.truth_(child_16029)){
node.appendChild(child_16029);


var G__16030 = cljs.core.next(seq__15013_16022__$1);
var G__16031 = null;
var G__16032 = (0);
var G__16033 = (0);
seq__15013_16004 = G__16030;
chunk__15015_16005 = G__16031;
count__15016_16006 = G__16032;
i__15017_16007 = G__16033;
continue;
} else {
var G__16034 = cljs.core.next(seq__15013_16022__$1);
var G__16035 = null;
var G__16036 = (0);
var G__16037 = (0);
seq__15013_16004 = G__16034;
chunk__15015_16005 = G__16035;
count__15016_16006 = G__16036;
i__15017_16007 = G__16037;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16001);
}
}


var G__16040 = seq__14942_15991;
var G__16041 = chunk__14944_15992;
var G__16042 = count__14945_15993;
var G__16043 = (i__14946_15994 + (1));
seq__14942_15991 = G__16040;
chunk__14944_15992 = G__16041;
count__14945_15993 = G__16042;
i__14946_15994 = G__16043;
continue;
} else {
var G__16044 = seq__14942_15991;
var G__16045 = chunk__14944_15992;
var G__16047 = count__14945_15993;
var G__16048 = (i__14946_15994 + (1));
seq__14942_15991 = G__16044;
chunk__14944_15992 = G__16045;
count__14945_15993 = G__16047;
i__14946_15994 = G__16048;
continue;
}
} else {
var temp__5823__auto___16049 = cljs.core.seq(seq__14942_15991);
if(temp__5823__auto___16049){
var seq__14942_16050__$1 = temp__5823__auto___16049;
if(cljs.core.chunked_seq_QMARK_(seq__14942_16050__$1)){
var c__5673__auto___16051 = cljs.core.chunk_first(seq__14942_16050__$1);
var G__16052 = cljs.core.chunk_rest(seq__14942_16050__$1);
var G__16053 = c__5673__auto___16051;
var G__16054 = cljs.core.count(c__5673__auto___16051);
var G__16055 = (0);
seq__14942_15991 = G__16052;
chunk__14944_15992 = G__16053;
count__14945_15993 = G__16054;
i__14946_15994 = G__16055;
continue;
} else {
var child_struct_16056 = cljs.core.first(seq__14942_16050__$1);
if((!((child_struct_16056 == null)))){
if(typeof child_struct_16056 === 'string'){
var text_16058 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16058)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16056)));
} else {
var children_16059 = shadow.dom.svg_node(child_struct_16056);
if(cljs.core.seq_QMARK_(children_16059)){
var seq__15042_16060 = cljs.core.seq(children_16059);
var chunk__15044_16061 = null;
var count__15045_16062 = (0);
var i__15046_16063 = (0);
while(true){
if((i__15046_16063 < count__15045_16062)){
var child_16064 = chunk__15044_16061.cljs$core$IIndexed$_nth$arity$2(null,i__15046_16063);
if(cljs.core.truth_(child_16064)){
node.appendChild(child_16064);


var G__16067 = seq__15042_16060;
var G__16068 = chunk__15044_16061;
var G__16069 = count__15045_16062;
var G__16070 = (i__15046_16063 + (1));
seq__15042_16060 = G__16067;
chunk__15044_16061 = G__16068;
count__15045_16062 = G__16069;
i__15046_16063 = G__16070;
continue;
} else {
var G__16072 = seq__15042_16060;
var G__16073 = chunk__15044_16061;
var G__16074 = count__15045_16062;
var G__16075 = (i__15046_16063 + (1));
seq__15042_16060 = G__16072;
chunk__15044_16061 = G__16073;
count__15045_16062 = G__16074;
i__15046_16063 = G__16075;
continue;
}
} else {
var temp__5823__auto___16076__$1 = cljs.core.seq(seq__15042_16060);
if(temp__5823__auto___16076__$1){
var seq__15042_16077__$1 = temp__5823__auto___16076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15042_16077__$1)){
var c__5673__auto___16078 = cljs.core.chunk_first(seq__15042_16077__$1);
var G__16079 = cljs.core.chunk_rest(seq__15042_16077__$1);
var G__16080 = c__5673__auto___16078;
var G__16081 = cljs.core.count(c__5673__auto___16078);
var G__16082 = (0);
seq__15042_16060 = G__16079;
chunk__15044_16061 = G__16080;
count__15045_16062 = G__16081;
i__15046_16063 = G__16082;
continue;
} else {
var child_16083 = cljs.core.first(seq__15042_16077__$1);
if(cljs.core.truth_(child_16083)){
node.appendChild(child_16083);


var G__16084 = cljs.core.next(seq__15042_16077__$1);
var G__16085 = null;
var G__16086 = (0);
var G__16087 = (0);
seq__15042_16060 = G__16084;
chunk__15044_16061 = G__16085;
count__15045_16062 = G__16086;
i__15046_16063 = G__16087;
continue;
} else {
var G__16089 = cljs.core.next(seq__15042_16077__$1);
var G__16090 = null;
var G__16091 = (0);
var G__16092 = (0);
seq__15042_16060 = G__16089;
chunk__15044_16061 = G__16090;
count__15045_16062 = G__16091;
i__15046_16063 = G__16092;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16059);
}
}


var G__16095 = cljs.core.next(seq__14942_16050__$1);
var G__16096 = null;
var G__16097 = (0);
var G__16098 = (0);
seq__14942_15991 = G__16095;
chunk__14944_15992 = G__16096;
count__14945_15993 = G__16097;
i__14946_15994 = G__16098;
continue;
} else {
var G__16099 = cljs.core.next(seq__14942_16050__$1);
var G__16100 = null;
var G__16101 = (0);
var G__16102 = (0);
seq__14942_15991 = G__16099;
chunk__14944_15992 = G__16100;
count__14945_15993 = G__16101;
i__14946_15994 = G__16102;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16106 = arguments.length;
var i__5877__auto___16107 = (0);
while(true){
if((i__5877__auto___16107 < len__5876__auto___16106)){
args__5882__auto__.push((arguments[i__5877__auto___16107]));

var G__16108 = (i__5877__auto___16107 + (1));
i__5877__auto___16107 = G__16108;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq15085){
var G__15088 = cljs.core.first(seq15085);
var seq15085__$1 = cljs.core.next(seq15085);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15088,seq15085__$1);
}));


//# sourceMappingURL=shadow.dom.js.map

goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14681 = (function (f,blockable,meta14682){
this.f = f;
this.blockable = blockable;
this.meta14682 = meta14682;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14683,meta14682__$1){
var self__ = this;
var _14683__$1 = this;
return (new cljs.core.async.t_cljs$core$async14681(self__.f,self__.blockable,meta14682__$1));
}));

(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14683){
var self__ = this;
var _14683__$1 = this;
return self__.meta14682;
}));

(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14681.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14681.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14682","meta14682",1402705711,null)], null);
}));

(cljs.core.async.t_cljs$core$async14681.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14681.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14681");

(cljs.core.async.t_cljs$core$async14681.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14681");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14681.
 */
cljs.core.async.__GT_t_cljs$core$async14681 = (function cljs$core$async$__GT_t_cljs$core$async14681(f,blockable,meta14682){
return (new cljs.core.async.t_cljs$core$async14681(f,blockable,meta14682));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14680 = arguments.length;
switch (G__14680) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14681(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14698 = arguments.length;
switch (G__14698) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14707 = arguments.length;
switch (G__14707) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14710 = arguments.length;
switch (G__14710) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_18449 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18449) : fn1.call(null,val_18449));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_18449) : fn1.call(null,val_18449));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14731 = arguments.length;
switch (G__14731) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___18463 = n;
var x_18464 = (0);
while(true){
if((x_18464 < n__5741__auto___18463)){
(a[x_18464] = x_18464);

var G__18465 = (x_18464 + (1));
x_18464 = G__18465;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14741 = (function (flag,meta14742){
this.flag = flag;
this.meta14742 = meta14742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14743,meta14742__$1){
var self__ = this;
var _14743__$1 = this;
return (new cljs.core.async.t_cljs$core$async14741(self__.flag,meta14742__$1));
}));

(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14743){
var self__ = this;
var _14743__$1 = this;
return self__.meta14742;
}));

(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14741.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14742","meta14742",-428150116,null)], null);
}));

(cljs.core.async.t_cljs$core$async14741.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14741");

(cljs.core.async.t_cljs$core$async14741.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14741");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14741.
 */
cljs.core.async.__GT_t_cljs$core$async14741 = (function cljs$core$async$__GT_t_cljs$core$async14741(flag,meta14742){
return (new cljs.core.async.t_cljs$core$async14741(flag,meta14742));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14741(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14765 = (function (flag,cb,meta14766){
this.flag = flag;
this.cb = cb;
this.meta14766 = meta14766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14767,meta14766__$1){
var self__ = this;
var _14767__$1 = this;
return (new cljs.core.async.t_cljs$core$async14765(self__.flag,self__.cb,meta14766__$1));
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14767){
var self__ = this;
var _14767__$1 = this;
return self__.meta14766;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14766","meta14766",860635932,null)], null);
}));

(cljs.core.async.t_cljs$core$async14765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14765");

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async14765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14765.
 */
cljs.core.async.__GT_t_cljs$core$async14765 = (function cljs$core$async$__GT_t_cljs$core$async14765(flag,cb,meta14766){
return (new cljs.core.async.t_cljs$core$async14765(flag,cb,meta14766));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14765(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_18477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_18477)){
if((!(((port_18477.cljs$core$IFn$_invoke$arity$1 ? port_18477.cljs$core$IFn$_invoke$arity$1((1)) : port_18477.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__18478 = (i + (1));
i = G__18478;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14781_SHARP_){
var G__14791 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14781_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14791) : fret.call(null,G__14791));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__14782_SHARP_){
var G__14793 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14782_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14793) : fret.call(null,G__14793));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__18482 = (i + (1));
i = G__18482;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18486 = arguments.length;
var i__5877__auto___18487 = (0);
while(true){
if((i__5877__auto___18487 < len__5876__auto___18486)){
args__5882__auto__.push((arguments[i__5877__auto___18487]));

var G__18488 = (i__5877__auto___18487 + (1));
i__5877__auto___18487 = G__18488;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14823){
var map__14824 = p__14823;
var map__14824__$1 = cljs.core.__destructure_map(map__14824);
var opts = map__14824__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14810){
var G__14811 = cljs.core.first(seq14810);
var seq14810__$1 = cljs.core.next(seq14810);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14811,seq14810__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14837 = arguments.length;
switch (G__14837) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14564__auto___18491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_14922){
var state_val_14928 = (state_14922[(1)]);
if((state_val_14928 === (7))){
var inst_14912 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14948_18493 = state_14922__$1;
(statearr_14948_18493[(2)] = inst_14912);

(statearr_14948_18493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (1))){
var state_14922__$1 = state_14922;
var statearr_14949_18494 = state_14922__$1;
(statearr_14949_18494[(2)] = null);

(statearr_14949_18494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (4))){
var inst_14866 = (state_14922[(7)]);
var inst_14866__$1 = (state_14922[(2)]);
var inst_14891 = (inst_14866__$1 == null);
var state_14922__$1 = (function (){var statearr_14960 = state_14922;
(statearr_14960[(7)] = inst_14866__$1);

return statearr_14960;
})();
if(cljs.core.truth_(inst_14891)){
var statearr_14961_18495 = state_14922__$1;
(statearr_14961_18495[(1)] = (5));

} else {
var statearr_14963_18496 = state_14922__$1;
(statearr_14963_18496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (13))){
var state_14922__$1 = state_14922;
var statearr_14965_18497 = state_14922__$1;
(statearr_14965_18497[(2)] = null);

(statearr_14965_18497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (6))){
var inst_14866 = (state_14922[(7)]);
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14922__$1,(11),to,inst_14866);
} else {
if((state_val_14928 === (3))){
var inst_14914 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14922__$1,inst_14914);
} else {
if((state_val_14928 === (12))){
var state_14922__$1 = state_14922;
var statearr_14971_18501 = state_14922__$1;
(statearr_14971_18501[(2)] = null);

(statearr_14971_18501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (2))){
var state_14922__$1 = state_14922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14922__$1,(4),from);
} else {
if((state_val_14928 === (11))){
var inst_14904 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
if(cljs.core.truth_(inst_14904)){
var statearr_14972_18502 = state_14922__$1;
(statearr_14972_18502[(1)] = (12));

} else {
var statearr_14973_18503 = state_14922__$1;
(statearr_14973_18503[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (9))){
var state_14922__$1 = state_14922;
var statearr_14974_18504 = state_14922__$1;
(statearr_14974_18504[(2)] = null);

(statearr_14974_18504[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (5))){
var state_14922__$1 = state_14922;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14982_18505 = state_14922__$1;
(statearr_14982_18505[(1)] = (8));

} else {
var statearr_14987_18506 = state_14922__$1;
(statearr_14987_18506[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (14))){
var inst_14910 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14992_18507 = state_14922__$1;
(statearr_14992_18507[(2)] = inst_14910);

(statearr_14992_18507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (10))){
var inst_14901 = (state_14922[(2)]);
var state_14922__$1 = state_14922;
var statearr_14997_18508 = state_14922__$1;
(statearr_14997_18508[(2)] = inst_14901);

(statearr_14997_18508[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14928 === (8))){
var inst_14898 = cljs.core.async.close_BANG_(to);
var state_14922__$1 = state_14922;
var statearr_14998_18509 = state_14922__$1;
(statearr_14998_18509[(2)] = inst_14898);

(statearr_14998_18509[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15003 = [null,null,null,null,null,null,null,null];
(statearr_15003[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15003[(1)] = (1));

return statearr_15003;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_14922){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_14922);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15004){var ex__13458__auto__ = e15004;
var statearr_15005_18513 = state_14922;
(statearr_15005_18513[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_14922[(4)]))){
var statearr_15006_18514 = state_14922;
(statearr_15006_18514[(1)] = cljs.core.first((state_14922[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18515 = state_14922;
state_14922 = G__18515;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_14922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_14922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15007 = f__14565__auto__();
(statearr_15007[(6)] = c__14564__auto___18491);

return statearr_15007;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15019){
var vec__15021 = p__15019;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15021,(1),null);
var job = vec__15021;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14564__auto___18516 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15029){
var state_val_15030 = (state_15029[(1)]);
if((state_val_15030 === (1))){
var state_15029__$1 = state_15029;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15029__$1,(2),res,v);
} else {
if((state_val_15030 === (2))){
var inst_15026 = (state_15029[(2)]);
var inst_15027 = cljs.core.async.close_BANG_(res);
var state_15029__$1 = (function (){var statearr_15035 = state_15029;
(statearr_15035[(7)] = inst_15026);

return statearr_15035;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15029__$1,inst_15027);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15040 = [null,null,null,null,null,null,null,null];
(statearr_15040[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_15040[(1)] = (1));

return statearr_15040;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_15029){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15029);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15048){var ex__13458__auto__ = e15048;
var statearr_15049_18518 = state_15029;
(statearr_15049_18518[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15029[(4)]))){
var statearr_15051_18519 = state_15029;
(statearr_15051_18519[(1)] = cljs.core.first((state_15029[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18520 = state_15029;
state_15029 = G__18520;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_15029){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_15029);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15053 = f__14565__auto__();
(statearr_15053[(6)] = c__14564__auto___18516);

return statearr_15053;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15058){
var vec__15059 = p__15058;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15059,(1),null);
var job = vec__15059;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___18521 = n;
var __18522 = (0);
while(true){
if((__18522 < n__5741__auto___18521)){
var G__15063_18524 = type;
var G__15063_18525__$1 = (((G__15063_18524 instanceof cljs.core.Keyword))?G__15063_18524.fqn:null);
switch (G__15063_18525__$1) {
case "compute":
var c__14564__auto___18527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18522,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = ((function (__18522,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function (state_15080){
var state_val_15081 = (state_15080[(1)]);
if((state_val_15081 === (1))){
var state_15080__$1 = state_15080;
var statearr_15082_18529 = state_15080__$1;
(statearr_15082_18529[(2)] = null);

(statearr_15082_18529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15081 === (2))){
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15080__$1,(4),jobs);
} else {
if((state_val_15081 === (3))){
var inst_15078 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15080__$1,inst_15078);
} else {
if((state_val_15081 === (4))){
var inst_15070 = (state_15080[(2)]);
var inst_15071 = process__$1(inst_15070);
var state_15080__$1 = state_15080;
if(cljs.core.truth_(inst_15071)){
var statearr_15083_18533 = state_15080__$1;
(statearr_15083_18533[(1)] = (5));

} else {
var statearr_15084_18534 = state_15080__$1;
(statearr_15084_18534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15081 === (5))){
var state_15080__$1 = state_15080;
var statearr_15086_18537 = state_15080__$1;
(statearr_15086_18537[(2)] = null);

(statearr_15086_18537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15081 === (6))){
var state_15080__$1 = state_15080;
var statearr_15089_18538 = state_15080__$1;
(statearr_15089_18538[(2)] = null);

(statearr_15089_18538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15081 === (7))){
var inst_15076 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
var statearr_15090_18539 = state_15080__$1;
(statearr_15090_18539[(2)] = inst_15076);

(statearr_15090_18539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18522,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
;
return ((function (__18522,switch__13454__auto__,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15092 = [null,null,null,null,null,null,null];
(statearr_15092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_15092[(1)] = (1));

return statearr_15092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_15080){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15080);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15094){var ex__13458__auto__ = e15094;
var statearr_15095_18540 = state_15080;
(statearr_15095_18540[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15080[(4)]))){
var statearr_15096_18541 = state_15080;
(statearr_15096_18541[(1)] = cljs.core.first((state_15080[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18542 = state_15080;
state_15080 = G__18542;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_15080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_15080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(__18522,switch__13454__auto__,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
})();
var state__14566__auto__ = (function (){var statearr_15097 = f__14565__auto__();
(statearr_15097[(6)] = c__14564__auto___18527);

return statearr_15097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
});})(__18522,c__14564__auto___18527,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
);


break;
case "async":
var c__14564__auto___18543 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__18522,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = ((function (__18522,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function (state_15113){
var state_val_15114 = (state_15113[(1)]);
if((state_val_15114 === (1))){
var state_15113__$1 = state_15113;
var statearr_15117_18544 = state_15113__$1;
(statearr_15117_18544[(2)] = null);

(statearr_15117_18544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (2))){
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15113__$1,(4),jobs);
} else {
if((state_val_15114 === (3))){
var inst_15111 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15113__$1,inst_15111);
} else {
if((state_val_15114 === (4))){
var inst_15100 = (state_15113[(2)]);
var inst_15103 = async(inst_15100);
var state_15113__$1 = state_15113;
if(cljs.core.truth_(inst_15103)){
var statearr_15122_18546 = state_15113__$1;
(statearr_15122_18546[(1)] = (5));

} else {
var statearr_15124_18547 = state_15113__$1;
(statearr_15124_18547[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (5))){
var state_15113__$1 = state_15113;
var statearr_15125_18548 = state_15113__$1;
(statearr_15125_18548[(2)] = null);

(statearr_15125_18548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (6))){
var state_15113__$1 = state_15113;
var statearr_15126_18549 = state_15113__$1;
(statearr_15126_18549[(2)] = null);

(statearr_15126_18549[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15114 === (7))){
var inst_15109 = (state_15113[(2)]);
var state_15113__$1 = state_15113;
var statearr_15127_18550 = state_15113__$1;
(statearr_15127_18550[(2)] = inst_15109);

(statearr_15127_18550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__18522,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
;
return ((function (__18522,switch__13454__auto__,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15129 = [null,null,null,null,null,null,null];
(statearr_15129[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_15129[(1)] = (1));

return statearr_15129;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_15113){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15113);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15131){var ex__13458__auto__ = e15131;
var statearr_15133_18551 = state_15113;
(statearr_15133_18551[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15113[(4)]))){
var statearr_15135_18552 = state_15113;
(statearr_15135_18552[(1)] = cljs.core.first((state_15113[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18554 = state_15113;
state_15113 = G__18554;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_15113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_15113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
;})(__18522,switch__13454__auto__,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
})();
var state__14566__auto__ = (function (){var statearr_15138 = f__14565__auto__();
(statearr_15138[(6)] = c__14564__auto___18543);

return statearr_15138;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
});})(__18522,c__14564__auto___18543,G__15063_18524,G__15063_18525__$1,n__5741__auto___18521,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15063_18525__$1))));

}

var G__18555 = (__18522 + (1));
__18522 = G__18555;
continue;
} else {
}
break;
}

var c__14564__auto___18556 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15168){
var state_val_15169 = (state_15168[(1)]);
if((state_val_15169 === (7))){
var inst_15162 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
var statearr_15175_18557 = state_15168__$1;
(statearr_15175_18557[(2)] = inst_15162);

(statearr_15175_18557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15169 === (1))){
var state_15168__$1 = state_15168;
var statearr_15176_18559 = state_15168__$1;
(statearr_15176_18559[(2)] = null);

(statearr_15176_18559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15169 === (4))){
var inst_15142 = (state_15168[(7)]);
var inst_15142__$1 = (state_15168[(2)]);
var inst_15143 = (inst_15142__$1 == null);
var state_15168__$1 = (function (){var statearr_15179 = state_15168;
(statearr_15179[(7)] = inst_15142__$1);

return statearr_15179;
})();
if(cljs.core.truth_(inst_15143)){
var statearr_15180_18561 = state_15168__$1;
(statearr_15180_18561[(1)] = (5));

} else {
var statearr_15183_18562 = state_15168__$1;
(statearr_15183_18562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15169 === (6))){
var inst_15142 = (state_15168[(7)]);
var inst_15148 = (state_15168[(8)]);
var inst_15148__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15149 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15152 = [inst_15142,inst_15148__$1];
var inst_15153 = (new cljs.core.PersistentVector(null,2,(5),inst_15149,inst_15152,null));
var state_15168__$1 = (function (){var statearr_15188 = state_15168;
(statearr_15188[(8)] = inst_15148__$1);

return statearr_15188;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15168__$1,(8),jobs,inst_15153);
} else {
if((state_val_15169 === (3))){
var inst_15164 = (state_15168[(2)]);
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15168__$1,inst_15164);
} else {
if((state_val_15169 === (2))){
var state_15168__$1 = state_15168;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15168__$1,(4),from);
} else {
if((state_val_15169 === (9))){
var inst_15158 = (state_15168[(2)]);
var state_15168__$1 = (function (){var statearr_15190 = state_15168;
(statearr_15190[(9)] = inst_15158);

return statearr_15190;
})();
var statearr_15192_18563 = state_15168__$1;
(statearr_15192_18563[(2)] = null);

(statearr_15192_18563[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15169 === (5))){
var inst_15145 = cljs.core.async.close_BANG_(jobs);
var state_15168__$1 = state_15168;
var statearr_15194_18564 = state_15168__$1;
(statearr_15194_18564[(2)] = inst_15145);

(statearr_15194_18564[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15169 === (8))){
var inst_15148 = (state_15168[(8)]);
var inst_15155 = (state_15168[(2)]);
var state_15168__$1 = (function (){var statearr_15196 = state_15168;
(statearr_15196[(10)] = inst_15155);

return statearr_15196;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15168__$1,(9),results,inst_15148);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15202 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15202[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_15202[(1)] = (1));

return statearr_15202;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_15168){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15168);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15203){var ex__13458__auto__ = e15203;
var statearr_15205_18570 = state_15168;
(statearr_15205_18570[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15168[(4)]))){
var statearr_15207_18571 = state_15168;
(statearr_15207_18571[(1)] = cljs.core.first((state_15168[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18572 = state_15168;
state_15168 = G__18572;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_15168){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_15168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15215 = f__14565__auto__();
(statearr_15215[(6)] = c__14564__auto___18556);

return statearr_15215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


var c__14564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15269){
var state_val_15271 = (state_15269[(1)]);
if((state_val_15271 === (7))){
var inst_15264 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15276_18579 = state_15269__$1;
(statearr_15276_18579[(2)] = inst_15264);

(statearr_15276_18579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (20))){
var state_15269__$1 = state_15269;
var statearr_15277_18580 = state_15269__$1;
(statearr_15277_18580[(2)] = null);

(statearr_15277_18580[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (1))){
var state_15269__$1 = state_15269;
var statearr_15280_18581 = state_15269__$1;
(statearr_15280_18581[(2)] = null);

(statearr_15280_18581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (4))){
var inst_15223 = (state_15269[(7)]);
var inst_15223__$1 = (state_15269[(2)]);
var inst_15224 = (inst_15223__$1 == null);
var state_15269__$1 = (function (){var statearr_15289 = state_15269;
(statearr_15289[(7)] = inst_15223__$1);

return statearr_15289;
})();
if(cljs.core.truth_(inst_15224)){
var statearr_15294_18583 = state_15269__$1;
(statearr_15294_18583[(1)] = (5));

} else {
var statearr_15299_18585 = state_15269__$1;
(statearr_15299_18585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (15))){
var inst_15244 = (state_15269[(8)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15269__$1,(18),to,inst_15244);
} else {
if((state_val_15271 === (21))){
var inst_15259 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15305_18587 = state_15269__$1;
(statearr_15305_18587[(2)] = inst_15259);

(statearr_15305_18587[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (13))){
var inst_15261 = (state_15269[(2)]);
var state_15269__$1 = (function (){var statearr_15310 = state_15269;
(statearr_15310[(9)] = inst_15261);

return statearr_15310;
})();
var statearr_15315_18591 = state_15269__$1;
(statearr_15315_18591[(2)] = null);

(statearr_15315_18591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (6))){
var inst_15223 = (state_15269[(7)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(11),inst_15223);
} else {
if((state_val_15271 === (17))){
var inst_15254 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
if(cljs.core.truth_(inst_15254)){
var statearr_15324_18595 = state_15269__$1;
(statearr_15324_18595[(1)] = (19));

} else {
var statearr_15325_18596 = state_15269__$1;
(statearr_15325_18596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (3))){
var inst_15266 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15269__$1,inst_15266);
} else {
if((state_val_15271 === (12))){
var inst_15240 = (state_15269[(10)]);
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(14),inst_15240);
} else {
if((state_val_15271 === (2))){
var state_15269__$1 = state_15269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15269__$1,(4),results);
} else {
if((state_val_15271 === (19))){
var state_15269__$1 = state_15269;
var statearr_15330_18597 = state_15269__$1;
(statearr_15330_18597[(2)] = null);

(statearr_15330_18597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (11))){
var inst_15240 = (state_15269[(2)]);
var state_15269__$1 = (function (){var statearr_15332 = state_15269;
(statearr_15332[(10)] = inst_15240);

return statearr_15332;
})();
var statearr_15334_18598 = state_15269__$1;
(statearr_15334_18598[(2)] = null);

(statearr_15334_18598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (9))){
var state_15269__$1 = state_15269;
var statearr_15336_18599 = state_15269__$1;
(statearr_15336_18599[(2)] = null);

(statearr_15336_18599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (5))){
var state_15269__$1 = state_15269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15339_18601 = state_15269__$1;
(statearr_15339_18601[(1)] = (8));

} else {
var statearr_15341_18602 = state_15269__$1;
(statearr_15341_18602[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (14))){
var inst_15244 = (state_15269[(8)]);
var inst_15248 = (state_15269[(11)]);
var inst_15244__$1 = (state_15269[(2)]);
var inst_15247 = (inst_15244__$1 == null);
var inst_15248__$1 = cljs.core.not(inst_15247);
var state_15269__$1 = (function (){var statearr_15344 = state_15269;
(statearr_15344[(8)] = inst_15244__$1);

(statearr_15344[(11)] = inst_15248__$1);

return statearr_15344;
})();
if(inst_15248__$1){
var statearr_15345_18607 = state_15269__$1;
(statearr_15345_18607[(1)] = (15));

} else {
var statearr_15347_18608 = state_15269__$1;
(statearr_15347_18608[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (16))){
var inst_15248 = (state_15269[(11)]);
var state_15269__$1 = state_15269;
var statearr_15348_18609 = state_15269__$1;
(statearr_15348_18609[(2)] = inst_15248);

(statearr_15348_18609[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (10))){
var inst_15235 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15352_18610 = state_15269__$1;
(statearr_15352_18610[(2)] = inst_15235);

(statearr_15352_18610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (18))){
var inst_15251 = (state_15269[(2)]);
var state_15269__$1 = state_15269;
var statearr_15354_18614 = state_15269__$1;
(statearr_15354_18614[(2)] = inst_15251);

(statearr_15354_18614[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15271 === (8))){
var inst_15232 = cljs.core.async.close_BANG_(to);
var state_15269__$1 = state_15269;
var statearr_15356_18615 = state_15269__$1;
(statearr_15356_18615[(2)] = inst_15232);

(statearr_15356_18615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_15365 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15365[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__);

(statearr_15365[(1)] = (1));

return statearr_15365;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1 = (function (state_15269){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15269);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15368){var ex__13458__auto__ = e15368;
var statearr_15370_18616 = state_15269;
(statearr_15370_18616[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15269[(4)]))){
var statearr_15374_18618 = state_15269;
(statearr_15374_18618[(1)] = cljs.core.first((state_15269[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18619 = state_15269;
state_15269 = G__18619;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__ = function(state_15269){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1.call(this,state_15269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15378 = f__14565__auto__();
(statearr_15378[(6)] = c__14564__auto__);

return statearr_15378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

return c__14564__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15385 = arguments.length;
switch (G__15385) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15436 = arguments.length;
switch (G__15436) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15500 = arguments.length;
switch (G__15500) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14564__auto___18669 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15556){
var state_val_15557 = (state_15556[(1)]);
if((state_val_15557 === (7))){
var inst_15552 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15566_18674 = state_15556__$1;
(statearr_15566_18674[(2)] = inst_15552);

(statearr_15566_18674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (1))){
var state_15556__$1 = state_15556;
var statearr_15568_18675 = state_15556__$1;
(statearr_15568_18675[(2)] = null);

(statearr_15568_18675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (4))){
var inst_15523 = (state_15556[(7)]);
var inst_15523__$1 = (state_15556[(2)]);
var inst_15526 = (inst_15523__$1 == null);
var state_15556__$1 = (function (){var statearr_15574 = state_15556;
(statearr_15574[(7)] = inst_15523__$1);

return statearr_15574;
})();
if(cljs.core.truth_(inst_15526)){
var statearr_15576_18684 = state_15556__$1;
(statearr_15576_18684[(1)] = (5));

} else {
var statearr_15577_18685 = state_15556__$1;
(statearr_15577_18685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (13))){
var state_15556__$1 = state_15556;
var statearr_15580_18686 = state_15556__$1;
(statearr_15580_18686[(2)] = null);

(statearr_15580_18686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (6))){
var inst_15523 = (state_15556[(7)]);
var inst_15533 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15523) : p.call(null,inst_15523));
var state_15556__$1 = state_15556;
if(cljs.core.truth_(inst_15533)){
var statearr_15584_18690 = state_15556__$1;
(statearr_15584_18690[(1)] = (9));

} else {
var statearr_15586_18691 = state_15556__$1;
(statearr_15586_18691[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (3))){
var inst_15554 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15556__$1,inst_15554);
} else {
if((state_val_15557 === (12))){
var state_15556__$1 = state_15556;
var statearr_15594_18692 = state_15556__$1;
(statearr_15594_18692[(2)] = null);

(statearr_15594_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (2))){
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15556__$1,(4),ch);
} else {
if((state_val_15557 === (11))){
var inst_15523 = (state_15556[(7)]);
var inst_15541 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15556__$1,(8),inst_15541,inst_15523);
} else {
if((state_val_15557 === (9))){
var state_15556__$1 = state_15556;
var statearr_15613_18694 = state_15556__$1;
(statearr_15613_18694[(2)] = tc);

(statearr_15613_18694[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (5))){
var inst_15528 = cljs.core.async.close_BANG_(tc);
var inst_15530 = cljs.core.async.close_BANG_(fc);
var state_15556__$1 = (function (){var statearr_15628 = state_15556;
(statearr_15628[(8)] = inst_15528);

return statearr_15628;
})();
var statearr_15631_18698 = state_15556__$1;
(statearr_15631_18698[(2)] = inst_15530);

(statearr_15631_18698[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (14))){
var inst_15550 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
var statearr_15639_18700 = state_15556__$1;
(statearr_15639_18700[(2)] = inst_15550);

(statearr_15639_18700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (10))){
var state_15556__$1 = state_15556;
var statearr_15644_18702 = state_15556__$1;
(statearr_15644_18702[(2)] = fc);

(statearr_15644_18702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15557 === (8))){
var inst_15545 = (state_15556[(2)]);
var state_15556__$1 = state_15556;
if(cljs.core.truth_(inst_15545)){
var statearr_15654_18704 = state_15556__$1;
(statearr_15654_18704[(1)] = (12));

} else {
var statearr_15656_18710 = state_15556__$1;
(statearr_15656_18710[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15671 = [null,null,null,null,null,null,null,null,null];
(statearr_15671[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15671[(1)] = (1));

return statearr_15671;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15556){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15556);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15673){var ex__13458__auto__ = e15673;
var statearr_15674_18713 = state_15556;
(statearr_15674_18713[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15556[(4)]))){
var statearr_15677_18715 = state_15556;
(statearr_15677_18715[(1)] = cljs.core.first((state_15556[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18722 = state_15556;
state_15556 = G__18722;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15556){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15682 = f__14565__auto__();
(statearr_15682[(6)] = c__14564__auto___18669);

return statearr_15682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15724){
var state_val_15725 = (state_15724[(1)]);
if((state_val_15725 === (7))){
var inst_15720 = (state_15724[(2)]);
var state_15724__$1 = state_15724;
var statearr_15733_18729 = state_15724__$1;
(statearr_15733_18729[(2)] = inst_15720);

(statearr_15733_18729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (1))){
var inst_15692 = init;
var inst_15693 = inst_15692;
var state_15724__$1 = (function (){var statearr_15738 = state_15724;
(statearr_15738[(7)] = inst_15693);

return statearr_15738;
})();
var statearr_15739_18731 = state_15724__$1;
(statearr_15739_18731[(2)] = null);

(statearr_15739_18731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (4))){
var inst_15696 = (state_15724[(8)]);
var inst_15696__$1 = (state_15724[(2)]);
var inst_15701 = (inst_15696__$1 == null);
var state_15724__$1 = (function (){var statearr_15741 = state_15724;
(statearr_15741[(8)] = inst_15696__$1);

return statearr_15741;
})();
if(cljs.core.truth_(inst_15701)){
var statearr_15745_18732 = state_15724__$1;
(statearr_15745_18732[(1)] = (5));

} else {
var statearr_15746_18733 = state_15724__$1;
(statearr_15746_18733[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (6))){
var inst_15693 = (state_15724[(7)]);
var inst_15696 = (state_15724[(8)]);
var inst_15706 = (state_15724[(9)]);
var inst_15706__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15693,inst_15696) : f.call(null,inst_15693,inst_15696));
var inst_15708 = cljs.core.reduced_QMARK_(inst_15706__$1);
var state_15724__$1 = (function (){var statearr_15751 = state_15724;
(statearr_15751[(9)] = inst_15706__$1);

return statearr_15751;
})();
if(inst_15708){
var statearr_15752_18736 = state_15724__$1;
(statearr_15752_18736[(1)] = (8));

} else {
var statearr_15754_18737 = state_15724__$1;
(statearr_15754_18737[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (3))){
var inst_15722 = (state_15724[(2)]);
var state_15724__$1 = state_15724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15724__$1,inst_15722);
} else {
if((state_val_15725 === (2))){
var state_15724__$1 = state_15724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15724__$1,(4),ch);
} else {
if((state_val_15725 === (9))){
var inst_15706 = (state_15724[(9)]);
var inst_15693 = inst_15706;
var state_15724__$1 = (function (){var statearr_15763 = state_15724;
(statearr_15763[(7)] = inst_15693);

return statearr_15763;
})();
var statearr_15764_18744 = state_15724__$1;
(statearr_15764_18744[(2)] = null);

(statearr_15764_18744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (5))){
var inst_15693 = (state_15724[(7)]);
var state_15724__$1 = state_15724;
var statearr_15766_18745 = state_15724__$1;
(statearr_15766_18745[(2)] = inst_15693);

(statearr_15766_18745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (10))){
var inst_15718 = (state_15724[(2)]);
var state_15724__$1 = state_15724;
var statearr_15770_18746 = state_15724__$1;
(statearr_15770_18746[(2)] = inst_15718);

(statearr_15770_18746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15725 === (8))){
var inst_15706 = (state_15724[(9)]);
var inst_15714 = cljs.core.deref(inst_15706);
var state_15724__$1 = state_15724;
var statearr_15773_18750 = state_15724__$1;
(statearr_15773_18750[(2)] = inst_15714);

(statearr_15773_18750[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13455__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13455__auto____0 = (function (){
var statearr_15779 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15779[(0)] = cljs$core$async$reduce_$_state_machine__13455__auto__);

(statearr_15779[(1)] = (1));

return statearr_15779;
});
var cljs$core$async$reduce_$_state_machine__13455__auto____1 = (function (state_15724){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15724);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15780){var ex__13458__auto__ = e15780;
var statearr_15782_18759 = state_15724;
(statearr_15782_18759[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15724[(4)]))){
var statearr_15783_18761 = state_15724;
(statearr_15783_18761[(1)] = cljs.core.first((state_15724[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18764 = state_15724;
state_15724 = G__18764;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13455__auto__ = function(state_15724){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13455__auto____1.call(this,state_15724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13455__auto____0;
cljs$core$async$reduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13455__auto____1;
return cljs$core$async$reduce_$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15788 = f__14565__auto__();
(statearr_15788[(6)] = c__14564__auto__);

return statearr_15788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

return c__14564__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15803){
var state_val_15804 = (state_15803[(1)]);
if((state_val_15804 === (1))){
var inst_15798 = cljs.core.async.reduce(f__$1,init,ch);
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15803__$1,(2),inst_15798);
} else {
if((state_val_15804 === (2))){
var inst_15800 = (state_15803[(2)]);
var inst_15801 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15800) : f__$1.call(null,inst_15800));
var state_15803__$1 = state_15803;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15803__$1,inst_15801);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13455__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13455__auto____0 = (function (){
var statearr_15818 = [null,null,null,null,null,null,null];
(statearr_15818[(0)] = cljs$core$async$transduce_$_state_machine__13455__auto__);

(statearr_15818[(1)] = (1));

return statearr_15818;
});
var cljs$core$async$transduce_$_state_machine__13455__auto____1 = (function (state_15803){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15803);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15822){var ex__13458__auto__ = e15822;
var statearr_15824_18772 = state_15803;
(statearr_15824_18772[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15803[(4)]))){
var statearr_15827_18773 = state_15803;
(statearr_15827_18773[(1)] = cljs.core.first((state_15803[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18776 = state_15803;
state_15803 = G__18776;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13455__auto__ = function(state_15803){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13455__auto____1.call(this,state_15803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13455__auto____0;
cljs$core$async$transduce_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13455__auto____1;
return cljs$core$async$transduce_$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15831 = f__14565__auto__();
(statearr_15831[(6)] = c__14564__auto__);

return statearr_15831;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

return c__14564__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15837 = arguments.length;
switch (G__15837) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_15872){
var state_val_15875 = (state_15872[(1)]);
if((state_val_15875 === (7))){
var inst_15851 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
var statearr_15880_18785 = state_15872__$1;
(statearr_15880_18785[(2)] = inst_15851);

(statearr_15880_18785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (1))){
var inst_15845 = cljs.core.seq(coll);
var inst_15846 = inst_15845;
var state_15872__$1 = (function (){var statearr_15883 = state_15872;
(statearr_15883[(7)] = inst_15846);

return statearr_15883;
})();
var statearr_15884_18792 = state_15872__$1;
(statearr_15884_18792[(2)] = null);

(statearr_15884_18792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (4))){
var inst_15846 = (state_15872[(7)]);
var inst_15849 = cljs.core.first(inst_15846);
var state_15872__$1 = state_15872;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15872__$1,(7),ch,inst_15849);
} else {
if((state_val_15875 === (13))){
var inst_15865 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
var statearr_15894_18794 = state_15872__$1;
(statearr_15894_18794[(2)] = inst_15865);

(statearr_15894_18794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (6))){
var inst_15854 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
if(cljs.core.truth_(inst_15854)){
var statearr_15896_18795 = state_15872__$1;
(statearr_15896_18795[(1)] = (8));

} else {
var statearr_15898_18796 = state_15872__$1;
(statearr_15898_18796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (3))){
var inst_15869 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15872__$1,inst_15869);
} else {
if((state_val_15875 === (12))){
var state_15872__$1 = state_15872;
var statearr_15902_18801 = state_15872__$1;
(statearr_15902_18801[(2)] = null);

(statearr_15902_18801[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (2))){
var inst_15846 = (state_15872[(7)]);
var state_15872__$1 = state_15872;
if(cljs.core.truth_(inst_15846)){
var statearr_15904_18809 = state_15872__$1;
(statearr_15904_18809[(1)] = (4));

} else {
var statearr_15905_18819 = state_15872__$1;
(statearr_15905_18819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (11))){
var inst_15862 = cljs.core.async.close_BANG_(ch);
var state_15872__$1 = state_15872;
var statearr_15910_18822 = state_15872__$1;
(statearr_15910_18822[(2)] = inst_15862);

(statearr_15910_18822[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (9))){
var state_15872__$1 = state_15872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15914_18823 = state_15872__$1;
(statearr_15914_18823[(1)] = (11));

} else {
var statearr_15915_18824 = state_15872__$1;
(statearr_15915_18824[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (5))){
var inst_15846 = (state_15872[(7)]);
var state_15872__$1 = state_15872;
var statearr_15925_18826 = state_15872__$1;
(statearr_15925_18826[(2)] = inst_15846);

(statearr_15925_18826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (10))){
var inst_15867 = (state_15872[(2)]);
var state_15872__$1 = state_15872;
var statearr_15928_18827 = state_15872__$1;
(statearr_15928_18827[(2)] = inst_15867);

(statearr_15928_18827[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15875 === (8))){
var inst_15846 = (state_15872[(7)]);
var inst_15856 = cljs.core.next(inst_15846);
var inst_15846__$1 = inst_15856;
var state_15872__$1 = (function (){var statearr_15934 = state_15872;
(statearr_15934[(7)] = inst_15846__$1);

return statearr_15934;
})();
var statearr_15935_18838 = state_15872__$1;
(statearr_15935_18838[(2)] = null);

(statearr_15935_18838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_15940 = [null,null,null,null,null,null,null,null];
(statearr_15940[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_15940[(1)] = (1));

return statearr_15940;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_15872){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_15872);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e15943){var ex__13458__auto__ = e15943;
var statearr_15945_18841 = state_15872;
(statearr_15945_18841[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_15872[(4)]))){
var statearr_15946_18842 = state_15872;
(statearr_15946_18842[(1)] = cljs.core.first((state_15872[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18851 = state_15872;
state_15872 = G__18851;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_15872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_15872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_15951 = f__14565__auto__();
(statearr_15951[(6)] = c__14564__auto__);

return statearr_15951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

return c__14564__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15974 = arguments.length;
switch (G__15974) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18896 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18896(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18905 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18905(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18930 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18930(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18960 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18960(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16135 = (function (ch,cs,meta16136){
this.ch = ch;
this.cs = cs;
this.meta16136 = meta16136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16137,meta16136__$1){
var self__ = this;
var _16137__$1 = this;
return (new cljs.core.async.t_cljs$core$async16135(self__.ch,self__.cs,meta16136__$1));
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16137){
var self__ = this;
var _16137__$1 = this;
return self__.meta16136;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async16135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta16136","meta16136",-1280763079,null)], null);
}));

(cljs.core.async.t_cljs$core$async16135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16135");

(cljs.core.async.t_cljs$core$async16135.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16135.
 */
cljs.core.async.__GT_t_cljs$core$async16135 = (function cljs$core$async$__GT_t_cljs$core$async16135(ch,cs,meta16136){
return (new cljs.core.async.t_cljs$core$async16135(ch,cs,meta16136));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async16135(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14564__auto___19000 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_16320){
var state_val_16321 = (state_16320[(1)]);
if((state_val_16321 === (7))){
var inst_16316 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16322_19005 = state_16320__$1;
(statearr_16322_19005[(2)] = inst_16316);

(statearr_16322_19005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (20))){
var inst_16201 = (state_16320[(7)]);
var inst_16221 = cljs.core.first(inst_16201);
var inst_16222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(0),null);
var inst_16223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16221,(1),null);
var state_16320__$1 = (function (){var statearr_16323 = state_16320;
(statearr_16323[(8)] = inst_16222);

return statearr_16323;
})();
if(cljs.core.truth_(inst_16223)){
var statearr_16324_19009 = state_16320__$1;
(statearr_16324_19009[(1)] = (22));

} else {
var statearr_16325_19010 = state_16320__$1;
(statearr_16325_19010[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (27))){
var inst_16251 = (state_16320[(9)]);
var inst_16253 = (state_16320[(10)]);
var inst_16262 = (state_16320[(11)]);
var inst_16162 = (state_16320[(12)]);
var inst_16262__$1 = cljs.core._nth(inst_16251,inst_16253);
var inst_16263 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16262__$1,inst_16162,done);
var state_16320__$1 = (function (){var statearr_16333 = state_16320;
(statearr_16333[(11)] = inst_16262__$1);

return statearr_16333;
})();
if(cljs.core.truth_(inst_16263)){
var statearr_16334_19014 = state_16320__$1;
(statearr_16334_19014[(1)] = (30));

} else {
var statearr_16335_19018 = state_16320__$1;
(statearr_16335_19018[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (1))){
var state_16320__$1 = state_16320;
var statearr_16337_19019 = state_16320__$1;
(statearr_16337_19019[(2)] = null);

(statearr_16337_19019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (24))){
var inst_16201 = (state_16320[(7)]);
var inst_16228 = (state_16320[(2)]);
var inst_16229 = cljs.core.next(inst_16201);
var inst_16173 = inst_16229;
var inst_16174 = null;
var inst_16175 = (0);
var inst_16176 = (0);
var state_16320__$1 = (function (){var statearr_16339 = state_16320;
(statearr_16339[(13)] = inst_16228);

(statearr_16339[(14)] = inst_16173);

(statearr_16339[(15)] = inst_16174);

(statearr_16339[(16)] = inst_16175);

(statearr_16339[(17)] = inst_16176);

return statearr_16339;
})();
var statearr_16340_19021 = state_16320__$1;
(statearr_16340_19021[(2)] = null);

(statearr_16340_19021[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (39))){
var state_16320__$1 = state_16320;
var statearr_16348_19023 = state_16320__$1;
(statearr_16348_19023[(2)] = null);

(statearr_16348_19023[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (4))){
var inst_16162 = (state_16320[(12)]);
var inst_16162__$1 = (state_16320[(2)]);
var inst_16163 = (inst_16162__$1 == null);
var state_16320__$1 = (function (){var statearr_16353 = state_16320;
(statearr_16353[(12)] = inst_16162__$1);

return statearr_16353;
})();
if(cljs.core.truth_(inst_16163)){
var statearr_16354_19031 = state_16320__$1;
(statearr_16354_19031[(1)] = (5));

} else {
var statearr_16355_19033 = state_16320__$1;
(statearr_16355_19033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (15))){
var inst_16176 = (state_16320[(17)]);
var inst_16173 = (state_16320[(14)]);
var inst_16174 = (state_16320[(15)]);
var inst_16175 = (state_16320[(16)]);
var inst_16193 = (state_16320[(2)]);
var inst_16195 = (inst_16176 + (1));
var tmp16341 = inst_16173;
var tmp16342 = inst_16175;
var tmp16343 = inst_16174;
var inst_16173__$1 = tmp16341;
var inst_16174__$1 = tmp16343;
var inst_16175__$1 = tmp16342;
var inst_16176__$1 = inst_16195;
var state_16320__$1 = (function (){var statearr_16361 = state_16320;
(statearr_16361[(18)] = inst_16193);

(statearr_16361[(14)] = inst_16173__$1);

(statearr_16361[(15)] = inst_16174__$1);

(statearr_16361[(16)] = inst_16175__$1);

(statearr_16361[(17)] = inst_16176__$1);

return statearr_16361;
})();
var statearr_16363_19037 = state_16320__$1;
(statearr_16363_19037[(2)] = null);

(statearr_16363_19037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (21))){
var inst_16232 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16367_19039 = state_16320__$1;
(statearr_16367_19039[(2)] = inst_16232);

(statearr_16367_19039[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (31))){
var inst_16262 = (state_16320[(11)]);
var inst_16266 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16262);
var state_16320__$1 = state_16320;
var statearr_16375_19043 = state_16320__$1;
(statearr_16375_19043[(2)] = inst_16266);

(statearr_16375_19043[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (32))){
var inst_16253 = (state_16320[(10)]);
var inst_16250 = (state_16320[(19)]);
var inst_16251 = (state_16320[(9)]);
var inst_16252 = (state_16320[(20)]);
var inst_16268 = (state_16320[(2)]);
var inst_16276 = (inst_16253 + (1));
var tmp16364 = inst_16252;
var tmp16365 = inst_16251;
var tmp16366 = inst_16250;
var inst_16250__$1 = tmp16366;
var inst_16251__$1 = tmp16365;
var inst_16252__$1 = tmp16364;
var inst_16253__$1 = inst_16276;
var state_16320__$1 = (function (){var statearr_16376 = state_16320;
(statearr_16376[(21)] = inst_16268);

(statearr_16376[(19)] = inst_16250__$1);

(statearr_16376[(9)] = inst_16251__$1);

(statearr_16376[(20)] = inst_16252__$1);

(statearr_16376[(10)] = inst_16253__$1);

return statearr_16376;
})();
var statearr_16380_19052 = state_16320__$1;
(statearr_16380_19052[(2)] = null);

(statearr_16380_19052[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (40))){
var inst_16288 = (state_16320[(22)]);
var inst_16292 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_16288);
var state_16320__$1 = state_16320;
var statearr_16383_19055 = state_16320__$1;
(statearr_16383_19055[(2)] = inst_16292);

(statearr_16383_19055[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (33))){
var inst_16279 = (state_16320[(23)]);
var inst_16281 = cljs.core.chunked_seq_QMARK_(inst_16279);
var state_16320__$1 = state_16320;
if(inst_16281){
var statearr_16385_19057 = state_16320__$1;
(statearr_16385_19057[(1)] = (36));

} else {
var statearr_16386_19059 = state_16320__$1;
(statearr_16386_19059[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (13))){
var inst_16187 = (state_16320[(24)]);
var inst_16190 = cljs.core.async.close_BANG_(inst_16187);
var state_16320__$1 = state_16320;
var statearr_16388_19065 = state_16320__$1;
(statearr_16388_19065[(2)] = inst_16190);

(statearr_16388_19065[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (22))){
var inst_16222 = (state_16320[(8)]);
var inst_16225 = cljs.core.async.close_BANG_(inst_16222);
var state_16320__$1 = state_16320;
var statearr_16389_19066 = state_16320__$1;
(statearr_16389_19066[(2)] = inst_16225);

(statearr_16389_19066[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (36))){
var inst_16279 = (state_16320[(23)]);
var inst_16283 = cljs.core.chunk_first(inst_16279);
var inst_16284 = cljs.core.chunk_rest(inst_16279);
var inst_16285 = cljs.core.count(inst_16283);
var inst_16250 = inst_16284;
var inst_16251 = inst_16283;
var inst_16252 = inst_16285;
var inst_16253 = (0);
var state_16320__$1 = (function (){var statearr_16394 = state_16320;
(statearr_16394[(19)] = inst_16250);

(statearr_16394[(9)] = inst_16251);

(statearr_16394[(20)] = inst_16252);

(statearr_16394[(10)] = inst_16253);

return statearr_16394;
})();
var statearr_16396_19074 = state_16320__$1;
(statearr_16396_19074[(2)] = null);

(statearr_16396_19074[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (41))){
var inst_16279 = (state_16320[(23)]);
var inst_16294 = (state_16320[(2)]);
var inst_16295 = cljs.core.next(inst_16279);
var inst_16250 = inst_16295;
var inst_16251 = null;
var inst_16252 = (0);
var inst_16253 = (0);
var state_16320__$1 = (function (){var statearr_16401 = state_16320;
(statearr_16401[(25)] = inst_16294);

(statearr_16401[(19)] = inst_16250);

(statearr_16401[(9)] = inst_16251);

(statearr_16401[(20)] = inst_16252);

(statearr_16401[(10)] = inst_16253);

return statearr_16401;
})();
var statearr_16402_19083 = state_16320__$1;
(statearr_16402_19083[(2)] = null);

(statearr_16402_19083[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (43))){
var state_16320__$1 = state_16320;
var statearr_16403_19084 = state_16320__$1;
(statearr_16403_19084[(2)] = null);

(statearr_16403_19084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (29))){
var inst_16303 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16408_19087 = state_16320__$1;
(statearr_16408_19087[(2)] = inst_16303);

(statearr_16408_19087[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (44))){
var inst_16313 = (state_16320[(2)]);
var state_16320__$1 = (function (){var statearr_16412 = state_16320;
(statearr_16412[(26)] = inst_16313);

return statearr_16412;
})();
var statearr_16413_19088 = state_16320__$1;
(statearr_16413_19088[(2)] = null);

(statearr_16413_19088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (6))){
var inst_16242 = (state_16320[(27)]);
var inst_16241 = cljs.core.deref(cs);
var inst_16242__$1 = cljs.core.keys(inst_16241);
var inst_16243 = cljs.core.count(inst_16242__$1);
var inst_16244 = cljs.core.reset_BANG_(dctr,inst_16243);
var inst_16249 = cljs.core.seq(inst_16242__$1);
var inst_16250 = inst_16249;
var inst_16251 = null;
var inst_16252 = (0);
var inst_16253 = (0);
var state_16320__$1 = (function (){var statearr_16416 = state_16320;
(statearr_16416[(27)] = inst_16242__$1);

(statearr_16416[(28)] = inst_16244);

(statearr_16416[(19)] = inst_16250);

(statearr_16416[(9)] = inst_16251);

(statearr_16416[(20)] = inst_16252);

(statearr_16416[(10)] = inst_16253);

return statearr_16416;
})();
var statearr_16417_19099 = state_16320__$1;
(statearr_16417_19099[(2)] = null);

(statearr_16417_19099[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (28))){
var inst_16250 = (state_16320[(19)]);
var inst_16279 = (state_16320[(23)]);
var inst_16279__$1 = cljs.core.seq(inst_16250);
var state_16320__$1 = (function (){var statearr_16423 = state_16320;
(statearr_16423[(23)] = inst_16279__$1);

return statearr_16423;
})();
if(inst_16279__$1){
var statearr_16424_19101 = state_16320__$1;
(statearr_16424_19101[(1)] = (33));

} else {
var statearr_16425_19102 = state_16320__$1;
(statearr_16425_19102[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (25))){
var inst_16253 = (state_16320[(10)]);
var inst_16252 = (state_16320[(20)]);
var inst_16258 = (inst_16253 < inst_16252);
var inst_16260 = inst_16258;
var state_16320__$1 = state_16320;
if(cljs.core.truth_(inst_16260)){
var statearr_16426_19103 = state_16320__$1;
(statearr_16426_19103[(1)] = (27));

} else {
var statearr_16428_19104 = state_16320__$1;
(statearr_16428_19104[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (34))){
var state_16320__$1 = state_16320;
var statearr_16429_19105 = state_16320__$1;
(statearr_16429_19105[(2)] = null);

(statearr_16429_19105[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (17))){
var state_16320__$1 = state_16320;
var statearr_16430_19108 = state_16320__$1;
(statearr_16430_19108[(2)] = null);

(statearr_16430_19108[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (3))){
var inst_16318 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16320__$1,inst_16318);
} else {
if((state_val_16321 === (12))){
var inst_16237 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16432_19114 = state_16320__$1;
(statearr_16432_19114[(2)] = inst_16237);

(statearr_16432_19114[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (2))){
var state_16320__$1 = state_16320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16320__$1,(4),ch);
} else {
if((state_val_16321 === (23))){
var state_16320__$1 = state_16320;
var statearr_16434_19119 = state_16320__$1;
(statearr_16434_19119[(2)] = null);

(statearr_16434_19119[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (35))){
var inst_16301 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16439_19120 = state_16320__$1;
(statearr_16439_19120[(2)] = inst_16301);

(statearr_16439_19120[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (19))){
var inst_16201 = (state_16320[(7)]);
var inst_16209 = cljs.core.chunk_first(inst_16201);
var inst_16210 = cljs.core.chunk_rest(inst_16201);
var inst_16214 = cljs.core.count(inst_16209);
var inst_16173 = inst_16210;
var inst_16174 = inst_16209;
var inst_16175 = inst_16214;
var inst_16176 = (0);
var state_16320__$1 = (function (){var statearr_16443 = state_16320;
(statearr_16443[(14)] = inst_16173);

(statearr_16443[(15)] = inst_16174);

(statearr_16443[(16)] = inst_16175);

(statearr_16443[(17)] = inst_16176);

return statearr_16443;
})();
var statearr_16444_19129 = state_16320__$1;
(statearr_16444_19129[(2)] = null);

(statearr_16444_19129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (11))){
var inst_16173 = (state_16320[(14)]);
var inst_16201 = (state_16320[(7)]);
var inst_16201__$1 = cljs.core.seq(inst_16173);
var state_16320__$1 = (function (){var statearr_16446 = state_16320;
(statearr_16446[(7)] = inst_16201__$1);

return statearr_16446;
})();
if(inst_16201__$1){
var statearr_16447_19130 = state_16320__$1;
(statearr_16447_19130[(1)] = (16));

} else {
var statearr_16448_19131 = state_16320__$1;
(statearr_16448_19131[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (9))){
var inst_16239 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16449_19139 = state_16320__$1;
(statearr_16449_19139[(2)] = inst_16239);

(statearr_16449_19139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (5))){
var inst_16169 = cljs.core.deref(cs);
var inst_16170 = cljs.core.seq(inst_16169);
var inst_16173 = inst_16170;
var inst_16174 = null;
var inst_16175 = (0);
var inst_16176 = (0);
var state_16320__$1 = (function (){var statearr_16451 = state_16320;
(statearr_16451[(14)] = inst_16173);

(statearr_16451[(15)] = inst_16174);

(statearr_16451[(16)] = inst_16175);

(statearr_16451[(17)] = inst_16176);

return statearr_16451;
})();
var statearr_16452_19153 = state_16320__$1;
(statearr_16452_19153[(2)] = null);

(statearr_16452_19153[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (14))){
var state_16320__$1 = state_16320;
var statearr_16453_19159 = state_16320__$1;
(statearr_16453_19159[(2)] = null);

(statearr_16453_19159[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (45))){
var inst_16309 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16454_19160 = state_16320__$1;
(statearr_16454_19160[(2)] = inst_16309);

(statearr_16454_19160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (26))){
var inst_16242 = (state_16320[(27)]);
var inst_16305 = (state_16320[(2)]);
var inst_16306 = cljs.core.seq(inst_16242);
var state_16320__$1 = (function (){var statearr_16459 = state_16320;
(statearr_16459[(29)] = inst_16305);

return statearr_16459;
})();
if(inst_16306){
var statearr_16460_19165 = state_16320__$1;
(statearr_16460_19165[(1)] = (42));

} else {
var statearr_16462_19166 = state_16320__$1;
(statearr_16462_19166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (16))){
var inst_16201 = (state_16320[(7)]);
var inst_16207 = cljs.core.chunked_seq_QMARK_(inst_16201);
var state_16320__$1 = state_16320;
if(inst_16207){
var statearr_16466_19172 = state_16320__$1;
(statearr_16466_19172[(1)] = (19));

} else {
var statearr_16467_19173 = state_16320__$1;
(statearr_16467_19173[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (38))){
var inst_16298 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16468_19174 = state_16320__$1;
(statearr_16468_19174[(2)] = inst_16298);

(statearr_16468_19174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (30))){
var state_16320__$1 = state_16320;
var statearr_16469_19177 = state_16320__$1;
(statearr_16469_19177[(2)] = null);

(statearr_16469_19177[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (10))){
var inst_16174 = (state_16320[(15)]);
var inst_16176 = (state_16320[(17)]);
var inst_16186 = cljs.core._nth(inst_16174,inst_16176);
var inst_16187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16186,(0),null);
var inst_16188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16186,(1),null);
var state_16320__$1 = (function (){var statearr_16471 = state_16320;
(statearr_16471[(24)] = inst_16187);

return statearr_16471;
})();
if(cljs.core.truth_(inst_16188)){
var statearr_16472_19179 = state_16320__$1;
(statearr_16472_19179[(1)] = (13));

} else {
var statearr_16473_19180 = state_16320__$1;
(statearr_16473_19180[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (18))){
var inst_16235 = (state_16320[(2)]);
var state_16320__$1 = state_16320;
var statearr_16474_19181 = state_16320__$1;
(statearr_16474_19181[(2)] = inst_16235);

(statearr_16474_19181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (42))){
var state_16320__$1 = state_16320;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16320__$1,(45),dchan);
} else {
if((state_val_16321 === (37))){
var inst_16279 = (state_16320[(23)]);
var inst_16288 = (state_16320[(22)]);
var inst_16162 = (state_16320[(12)]);
var inst_16288__$1 = cljs.core.first(inst_16279);
var inst_16289 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_16288__$1,inst_16162,done);
var state_16320__$1 = (function (){var statearr_16481 = state_16320;
(statearr_16481[(22)] = inst_16288__$1);

return statearr_16481;
})();
if(cljs.core.truth_(inst_16289)){
var statearr_16482_19192 = state_16320__$1;
(statearr_16482_19192[(1)] = (39));

} else {
var statearr_16483_19193 = state_16320__$1;
(statearr_16483_19193[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16321 === (8))){
var inst_16176 = (state_16320[(17)]);
var inst_16175 = (state_16320[(16)]);
var inst_16180 = (inst_16176 < inst_16175);
var inst_16181 = inst_16180;
var state_16320__$1 = state_16320;
if(cljs.core.truth_(inst_16181)){
var statearr_16484_19194 = state_16320__$1;
(statearr_16484_19194[(1)] = (10));

} else {
var statearr_16485_19195 = state_16320__$1;
(statearr_16485_19195[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13455__auto__ = null;
var cljs$core$async$mult_$_state_machine__13455__auto____0 = (function (){
var statearr_16486 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16486[(0)] = cljs$core$async$mult_$_state_machine__13455__auto__);

(statearr_16486[(1)] = (1));

return statearr_16486;
});
var cljs$core$async$mult_$_state_machine__13455__auto____1 = (function (state_16320){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_16320);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e16487){var ex__13458__auto__ = e16487;
var statearr_16490_19196 = state_16320;
(statearr_16490_19196[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_16320[(4)]))){
var statearr_16491_19197 = state_16320;
(statearr_16491_19197[(1)] = cljs.core.first((state_16320[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19198 = state_16320;
state_16320 = G__19198;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13455__auto__ = function(state_16320){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13455__auto____1.call(this,state_16320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13455__auto____0;
cljs$core$async$mult_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13455__auto____1;
return cljs$core$async$mult_$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_16492 = f__14565__auto__();
(statearr_16492[(6)] = c__14564__auto___19000);

return statearr_16492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16496 = arguments.length;
switch (G__16496) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_19216 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_19216(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_19223 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_19223(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_19229 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_19229(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_19240 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_19240(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_19262 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_19262(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19270 = arguments.length;
var i__5877__auto___19273 = (0);
while(true){
if((i__5877__auto___19273 < len__5876__auto___19270)){
args__5882__auto__.push((arguments[i__5877__auto___19273]));

var G__19275 = (i__5877__auto___19273 + (1));
i__5877__auto___19273 = G__19275;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16531){
var map__16532 = p__16531;
var map__16532__$1 = cljs.core.__destructure_map(map__16532);
var opts = map__16532__$1;
var statearr_16533_19284 = state;
(statearr_16533_19284[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16534_19289 = state;
(statearr_16534_19289[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_16535_19291 = state;
(statearr_16535_19291[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16522){
var G__16523 = cljs.core.first(seq16522);
var seq16522__$1 = cljs.core.next(seq16522);
var G__16524 = cljs.core.first(seq16522__$1);
var seq16522__$2 = cljs.core.next(seq16522__$1);
var G__16525 = cljs.core.first(seq16522__$2);
var seq16522__$3 = cljs.core.next(seq16522__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16523,G__16524,G__16525,seq16522__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16552 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16553){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16553 = meta16553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16554,meta16553__$1){
var self__ = this;
var _16554__$1 = this;
return (new cljs.core.async.t_cljs$core$async16552(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16553__$1));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16554){
var self__ = this;
var _16554__$1 = this;
return self__.meta16553;
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16552.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16553","meta16553",629583031,null)], null);
}));

(cljs.core.async.t_cljs$core$async16552.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16552");

(cljs.core.async.t_cljs$core$async16552.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16552");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16552.
 */
cljs.core.async.__GT_t_cljs$core$async16552 = (function cljs$core$async$__GT_t_cljs$core$async16552(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16553){
return (new cljs.core.async.t_cljs$core$async16552(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16553));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16552(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14564__auto___19324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_16664){
var state_val_16665 = (state_16664[(1)]);
if((state_val_16665 === (7))){
var inst_16619 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
if(cljs.core.truth_(inst_16619)){
var statearr_16669_19329 = state_16664__$1;
(statearr_16669_19329[(1)] = (8));

} else {
var statearr_16672_19331 = state_16664__$1;
(statearr_16672_19331[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (20))){
var inst_16611 = (state_16664[(7)]);
var state_16664__$1 = state_16664;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16664__$1,(23),out,inst_16611);
} else {
if((state_val_16665 === (1))){
var inst_16592 = calc_state();
var inst_16593 = cljs.core.__destructure_map(inst_16592);
var inst_16595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16593,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16593,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16593,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16598 = inst_16592;
var state_16664__$1 = (function (){var statearr_16674 = state_16664;
(statearr_16674[(8)] = inst_16595);

(statearr_16674[(9)] = inst_16596);

(statearr_16674[(10)] = inst_16597);

(statearr_16674[(11)] = inst_16598);

return statearr_16674;
})();
var statearr_16675_19338 = state_16664__$1;
(statearr_16675_19338[(2)] = null);

(statearr_16675_19338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (24))){
var inst_16601 = (state_16664[(12)]);
var inst_16598 = inst_16601;
var state_16664__$1 = (function (){var statearr_16677 = state_16664;
(statearr_16677[(11)] = inst_16598);

return statearr_16677;
})();
var statearr_16678_19339 = state_16664__$1;
(statearr_16678_19339[(2)] = null);

(statearr_16678_19339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (4))){
var inst_16611 = (state_16664[(7)]);
var inst_16613 = (state_16664[(13)]);
var inst_16610 = (state_16664[(2)]);
var inst_16611__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16610,(0),null);
var inst_16612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16610,(1),null);
var inst_16613__$1 = (inst_16611__$1 == null);
var state_16664__$1 = (function (){var statearr_16679 = state_16664;
(statearr_16679[(7)] = inst_16611__$1);

(statearr_16679[(14)] = inst_16612);

(statearr_16679[(13)] = inst_16613__$1);

return statearr_16679;
})();
if(cljs.core.truth_(inst_16613__$1)){
var statearr_16680_19345 = state_16664__$1;
(statearr_16680_19345[(1)] = (5));

} else {
var statearr_16681_19347 = state_16664__$1;
(statearr_16681_19347[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (15))){
var inst_16603 = (state_16664[(15)]);
var inst_16634 = (state_16664[(16)]);
var inst_16634__$1 = cljs.core.empty_QMARK_(inst_16603);
var state_16664__$1 = (function (){var statearr_16682 = state_16664;
(statearr_16682[(16)] = inst_16634__$1);

return statearr_16682;
})();
if(inst_16634__$1){
var statearr_16683_19348 = state_16664__$1;
(statearr_16683_19348[(1)] = (17));

} else {
var statearr_16684_19349 = state_16664__$1;
(statearr_16684_19349[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (21))){
var inst_16601 = (state_16664[(12)]);
var inst_16598 = inst_16601;
var state_16664__$1 = (function (){var statearr_16685 = state_16664;
(statearr_16685[(11)] = inst_16598);

return statearr_16685;
})();
var statearr_16688_19354 = state_16664__$1;
(statearr_16688_19354[(2)] = null);

(statearr_16688_19354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (13))){
var inst_16627 = (state_16664[(2)]);
var inst_16628 = calc_state();
var inst_16598 = inst_16628;
var state_16664__$1 = (function (){var statearr_16691 = state_16664;
(statearr_16691[(17)] = inst_16627);

(statearr_16691[(11)] = inst_16598);

return statearr_16691;
})();
var statearr_16692_19357 = state_16664__$1;
(statearr_16692_19357[(2)] = null);

(statearr_16692_19357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (22))){
var inst_16654 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
var statearr_16694_19358 = state_16664__$1;
(statearr_16694_19358[(2)] = inst_16654);

(statearr_16694_19358[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (6))){
var inst_16612 = (state_16664[(14)]);
var inst_16616 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16612,change);
var state_16664__$1 = state_16664;
var statearr_16695_19359 = state_16664__$1;
(statearr_16695_19359[(2)] = inst_16616);

(statearr_16695_19359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (25))){
var state_16664__$1 = state_16664;
var statearr_16697_19361 = state_16664__$1;
(statearr_16697_19361[(2)] = null);

(statearr_16697_19361[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (17))){
var inst_16604 = (state_16664[(18)]);
var inst_16612 = (state_16664[(14)]);
var inst_16636 = (inst_16604.cljs$core$IFn$_invoke$arity$1 ? inst_16604.cljs$core$IFn$_invoke$arity$1(inst_16612) : inst_16604.call(null,inst_16612));
var inst_16637 = cljs.core.not(inst_16636);
var state_16664__$1 = state_16664;
var statearr_16702_19363 = state_16664__$1;
(statearr_16702_19363[(2)] = inst_16637);

(statearr_16702_19363[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (3))){
var inst_16658 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16664__$1,inst_16658);
} else {
if((state_val_16665 === (12))){
var state_16664__$1 = state_16664;
var statearr_16703_19364 = state_16664__$1;
(statearr_16703_19364[(2)] = null);

(statearr_16703_19364[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (2))){
var inst_16598 = (state_16664[(11)]);
var inst_16601 = (state_16664[(12)]);
var inst_16601__$1 = cljs.core.__destructure_map(inst_16598);
var inst_16603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16601__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16601__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16601__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16664__$1 = (function (){var statearr_16706 = state_16664;
(statearr_16706[(12)] = inst_16601__$1);

(statearr_16706[(15)] = inst_16603);

(statearr_16706[(18)] = inst_16604);

return statearr_16706;
})();
return cljs.core.async.ioc_alts_BANG_(state_16664__$1,(4),inst_16605);
} else {
if((state_val_16665 === (23))){
var inst_16645 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
if(cljs.core.truth_(inst_16645)){
var statearr_16707_19368 = state_16664__$1;
(statearr_16707_19368[(1)] = (24));

} else {
var statearr_16708_19369 = state_16664__$1;
(statearr_16708_19369[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (19))){
var inst_16640 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
var statearr_16709_19371 = state_16664__$1;
(statearr_16709_19371[(2)] = inst_16640);

(statearr_16709_19371[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (11))){
var inst_16612 = (state_16664[(14)]);
var inst_16624 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16612);
var state_16664__$1 = state_16664;
var statearr_16710_19372 = state_16664__$1;
(statearr_16710_19372[(2)] = inst_16624);

(statearr_16710_19372[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (9))){
var inst_16603 = (state_16664[(15)]);
var inst_16612 = (state_16664[(14)]);
var inst_16631 = (state_16664[(19)]);
var inst_16631__$1 = (inst_16603.cljs$core$IFn$_invoke$arity$1 ? inst_16603.cljs$core$IFn$_invoke$arity$1(inst_16612) : inst_16603.call(null,inst_16612));
var state_16664__$1 = (function (){var statearr_16735 = state_16664;
(statearr_16735[(19)] = inst_16631__$1);

return statearr_16735;
})();
if(cljs.core.truth_(inst_16631__$1)){
var statearr_16736_19373 = state_16664__$1;
(statearr_16736_19373[(1)] = (14));

} else {
var statearr_16741_19374 = state_16664__$1;
(statearr_16741_19374[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (5))){
var inst_16613 = (state_16664[(13)]);
var state_16664__$1 = state_16664;
var statearr_16750_19377 = state_16664__$1;
(statearr_16750_19377[(2)] = inst_16613);

(statearr_16750_19377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (14))){
var inst_16631 = (state_16664[(19)]);
var state_16664__$1 = state_16664;
var statearr_16753_19381 = state_16664__$1;
(statearr_16753_19381[(2)] = inst_16631);

(statearr_16753_19381[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (26))){
var inst_16650 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
var statearr_16756_19382 = state_16664__$1;
(statearr_16756_19382[(2)] = inst_16650);

(statearr_16756_19382[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (16))){
var inst_16642 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
if(cljs.core.truth_(inst_16642)){
var statearr_16757_19383 = state_16664__$1;
(statearr_16757_19383[(1)] = (20));

} else {
var statearr_16758_19384 = state_16664__$1;
(statearr_16758_19384[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (10))){
var inst_16656 = (state_16664[(2)]);
var state_16664__$1 = state_16664;
var statearr_16761_19386 = state_16664__$1;
(statearr_16761_19386[(2)] = inst_16656);

(statearr_16761_19386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (18))){
var inst_16634 = (state_16664[(16)]);
var state_16664__$1 = state_16664;
var statearr_16766_19388 = state_16664__$1;
(statearr_16766_19388[(2)] = inst_16634);

(statearr_16766_19388[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16665 === (8))){
var inst_16611 = (state_16664[(7)]);
var inst_16621 = (inst_16611 == null);
var state_16664__$1 = state_16664;
if(cljs.core.truth_(inst_16621)){
var statearr_16768_19390 = state_16664__$1;
(statearr_16768_19390[(1)] = (11));

} else {
var statearr_16769_19391 = state_16664__$1;
(statearr_16769_19391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13455__auto__ = null;
var cljs$core$async$mix_$_state_machine__13455__auto____0 = (function (){
var statearr_16776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16776[(0)] = cljs$core$async$mix_$_state_machine__13455__auto__);

(statearr_16776[(1)] = (1));

return statearr_16776;
});
var cljs$core$async$mix_$_state_machine__13455__auto____1 = (function (state_16664){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_16664);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e16777){var ex__13458__auto__ = e16777;
var statearr_16778_19392 = state_16664;
(statearr_16778_19392[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_16664[(4)]))){
var statearr_16779_19393 = state_16664;
(statearr_16779_19393[(1)] = cljs.core.first((state_16664[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19394 = state_16664;
state_16664 = G__19394;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13455__auto__ = function(state_16664){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13455__auto____1.call(this,state_16664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13455__auto____0;
cljs$core$async$mix_$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13455__auto____1;
return cljs$core$async$mix_$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_16784 = f__14565__auto__();
(statearr_16784[(6)] = c__14564__auto___19324);

return statearr_16784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_19395 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_19395(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_19404 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_19404(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_19414 = (function() {
var G__19415 = null;
var G__19415__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__19415__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__19415 = function(p,v){
switch(arguments.length){
case 1:
return G__19415__1.call(this,p);
case 2:
return G__19415__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__19415.cljs$core$IFn$_invoke$arity$1 = G__19415__1;
G__19415.cljs$core$IFn$_invoke$arity$2 = G__19415__2;
return G__19415;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16820 = arguments.length;
switch (G__16820) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19414(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_19414(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16854 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16855){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16855 = meta16855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16856,meta16855__$1){
var self__ = this;
var _16856__$1 = this;
return (new cljs.core.async.t_cljs$core$async16854(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16855__$1));
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16856){
var self__ = this;
var _16856__$1 = this;
return self__.meta16855;
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16854.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16854.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16855","meta16855",-60475605,null)], null);
}));

(cljs.core.async.t_cljs$core$async16854.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16854.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16854");

(cljs.core.async.t_cljs$core$async16854.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async16854");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16854.
 */
cljs.core.async.__GT_t_cljs$core$async16854 = (function cljs$core$async$__GT_t_cljs$core$async16854(ch,topic_fn,buf_fn,mults,ensure_mult,meta16855){
return (new cljs.core.async.t_cljs$core$async16854(ch,topic_fn,buf_fn,mults,ensure_mult,meta16855));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16843 = arguments.length;
switch (G__16843) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16829_SHARP_){
if(cljs.core.truth_((p1__16829_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16829_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16829_SHARP_.call(null,topic)))){
return p1__16829_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16829_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16854(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14564__auto___19445 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_16941){
var state_val_16942 = (state_16941[(1)]);
if((state_val_16942 === (7))){
var inst_16937 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16944_19448 = state_16941__$1;
(statearr_16944_19448[(2)] = inst_16937);

(statearr_16944_19448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (20))){
var state_16941__$1 = state_16941;
var statearr_16945_19449 = state_16941__$1;
(statearr_16945_19449[(2)] = null);

(statearr_16945_19449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (1))){
var state_16941__$1 = state_16941;
var statearr_16950_19450 = state_16941__$1;
(statearr_16950_19450[(2)] = null);

(statearr_16950_19450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (24))){
var inst_16920 = (state_16941[(7)]);
var inst_16929 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16920);
var state_16941__$1 = state_16941;
var statearr_16954_19451 = state_16941__$1;
(statearr_16954_19451[(2)] = inst_16929);

(statearr_16954_19451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (4))){
var inst_16870 = (state_16941[(8)]);
var inst_16870__$1 = (state_16941[(2)]);
var inst_16871 = (inst_16870__$1 == null);
var state_16941__$1 = (function (){var statearr_16958 = state_16941;
(statearr_16958[(8)] = inst_16870__$1);

return statearr_16958;
})();
if(cljs.core.truth_(inst_16871)){
var statearr_16959_19452 = state_16941__$1;
(statearr_16959_19452[(1)] = (5));

} else {
var statearr_16960_19453 = state_16941__$1;
(statearr_16960_19453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (15))){
var inst_16914 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16961_19455 = state_16941__$1;
(statearr_16961_19455[(2)] = inst_16914);

(statearr_16961_19455[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (21))){
var inst_16934 = (state_16941[(2)]);
var state_16941__$1 = (function (){var statearr_16962 = state_16941;
(statearr_16962[(9)] = inst_16934);

return statearr_16962;
})();
var statearr_16963_19459 = state_16941__$1;
(statearr_16963_19459[(2)] = null);

(statearr_16963_19459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (13))){
var inst_16896 = (state_16941[(10)]);
var inst_16898 = cljs.core.chunked_seq_QMARK_(inst_16896);
var state_16941__$1 = state_16941;
if(inst_16898){
var statearr_16973_19460 = state_16941__$1;
(statearr_16973_19460[(1)] = (16));

} else {
var statearr_16974_19463 = state_16941__$1;
(statearr_16974_19463[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (22))){
var inst_16926 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
if(cljs.core.truth_(inst_16926)){
var statearr_16975_19464 = state_16941__$1;
(statearr_16975_19464[(1)] = (23));

} else {
var statearr_16976_19467 = state_16941__$1;
(statearr_16976_19467[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (6))){
var inst_16870 = (state_16941[(8)]);
var inst_16920 = (state_16941[(7)]);
var inst_16922 = (state_16941[(11)]);
var inst_16920__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16870) : topic_fn.call(null,inst_16870));
var inst_16921 = cljs.core.deref(mults);
var inst_16922__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16921,inst_16920__$1);
var state_16941__$1 = (function (){var statearr_16977 = state_16941;
(statearr_16977[(7)] = inst_16920__$1);

(statearr_16977[(11)] = inst_16922__$1);

return statearr_16977;
})();
if(cljs.core.truth_(inst_16922__$1)){
var statearr_16978_19468 = state_16941__$1;
(statearr_16978_19468[(1)] = (19));

} else {
var statearr_16979_19469 = state_16941__$1;
(statearr_16979_19469[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (25))){
var inst_16931 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16980_19470 = state_16941__$1;
(statearr_16980_19470[(2)] = inst_16931);

(statearr_16980_19470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (17))){
var inst_16896 = (state_16941[(10)]);
var inst_16905 = cljs.core.first(inst_16896);
var inst_16906 = cljs.core.async.muxch_STAR_(inst_16905);
var inst_16907 = cljs.core.async.close_BANG_(inst_16906);
var inst_16908 = cljs.core.next(inst_16896);
var inst_16880 = inst_16908;
var inst_16881 = null;
var inst_16882 = (0);
var inst_16883 = (0);
var state_16941__$1 = (function (){var statearr_16986 = state_16941;
(statearr_16986[(12)] = inst_16907);

(statearr_16986[(13)] = inst_16880);

(statearr_16986[(14)] = inst_16881);

(statearr_16986[(15)] = inst_16882);

(statearr_16986[(16)] = inst_16883);

return statearr_16986;
})();
var statearr_16987_19471 = state_16941__$1;
(statearr_16987_19471[(2)] = null);

(statearr_16987_19471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (3))){
var inst_16939 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16941__$1,inst_16939);
} else {
if((state_val_16942 === (12))){
var inst_16916 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16988_19472 = state_16941__$1;
(statearr_16988_19472[(2)] = inst_16916);

(statearr_16988_19472[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (2))){
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16941__$1,(4),ch);
} else {
if((state_val_16942 === (23))){
var state_16941__$1 = state_16941;
var statearr_16995_19473 = state_16941__$1;
(statearr_16995_19473[(2)] = null);

(statearr_16995_19473[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (19))){
var inst_16922 = (state_16941[(11)]);
var inst_16870 = (state_16941[(8)]);
var inst_16924 = cljs.core.async.muxch_STAR_(inst_16922);
var state_16941__$1 = state_16941;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16941__$1,(22),inst_16924,inst_16870);
} else {
if((state_val_16942 === (11))){
var inst_16880 = (state_16941[(13)]);
var inst_16896 = (state_16941[(10)]);
var inst_16896__$1 = cljs.core.seq(inst_16880);
var state_16941__$1 = (function (){var statearr_16996 = state_16941;
(statearr_16996[(10)] = inst_16896__$1);

return statearr_16996;
})();
if(inst_16896__$1){
var statearr_16997_19476 = state_16941__$1;
(statearr_16997_19476[(1)] = (13));

} else {
var statearr_16998_19477 = state_16941__$1;
(statearr_16998_19477[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (9))){
var inst_16918 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_16999_19478 = state_16941__$1;
(statearr_16999_19478[(2)] = inst_16918);

(statearr_16999_19478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (5))){
var inst_16877 = cljs.core.deref(mults);
var inst_16878 = cljs.core.vals(inst_16877);
var inst_16879 = cljs.core.seq(inst_16878);
var inst_16880 = inst_16879;
var inst_16881 = null;
var inst_16882 = (0);
var inst_16883 = (0);
var state_16941__$1 = (function (){var statearr_17002 = state_16941;
(statearr_17002[(13)] = inst_16880);

(statearr_17002[(14)] = inst_16881);

(statearr_17002[(15)] = inst_16882);

(statearr_17002[(16)] = inst_16883);

return statearr_17002;
})();
var statearr_17007_19482 = state_16941__$1;
(statearr_17007_19482[(2)] = null);

(statearr_17007_19482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (14))){
var state_16941__$1 = state_16941;
var statearr_17013_19487 = state_16941__$1;
(statearr_17013_19487[(2)] = null);

(statearr_17013_19487[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (16))){
var inst_16896 = (state_16941[(10)]);
var inst_16900 = cljs.core.chunk_first(inst_16896);
var inst_16901 = cljs.core.chunk_rest(inst_16896);
var inst_16902 = cljs.core.count(inst_16900);
var inst_16880 = inst_16901;
var inst_16881 = inst_16900;
var inst_16882 = inst_16902;
var inst_16883 = (0);
var state_16941__$1 = (function (){var statearr_17015 = state_16941;
(statearr_17015[(13)] = inst_16880);

(statearr_17015[(14)] = inst_16881);

(statearr_17015[(15)] = inst_16882);

(statearr_17015[(16)] = inst_16883);

return statearr_17015;
})();
var statearr_17017_19489 = state_16941__$1;
(statearr_17017_19489[(2)] = null);

(statearr_17017_19489[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (10))){
var inst_16881 = (state_16941[(14)]);
var inst_16883 = (state_16941[(16)]);
var inst_16880 = (state_16941[(13)]);
var inst_16882 = (state_16941[(15)]);
var inst_16888 = cljs.core._nth(inst_16881,inst_16883);
var inst_16889 = cljs.core.async.muxch_STAR_(inst_16888);
var inst_16890 = cljs.core.async.close_BANG_(inst_16889);
var inst_16893 = (inst_16883 + (1));
var tmp17009 = inst_16881;
var tmp17010 = inst_16880;
var tmp17011 = inst_16882;
var inst_16880__$1 = tmp17010;
var inst_16881__$1 = tmp17009;
var inst_16882__$1 = tmp17011;
var inst_16883__$1 = inst_16893;
var state_16941__$1 = (function (){var statearr_17018 = state_16941;
(statearr_17018[(17)] = inst_16890);

(statearr_17018[(13)] = inst_16880__$1);

(statearr_17018[(14)] = inst_16881__$1);

(statearr_17018[(15)] = inst_16882__$1);

(statearr_17018[(16)] = inst_16883__$1);

return statearr_17018;
})();
var statearr_17019_19491 = state_16941__$1;
(statearr_17019_19491[(2)] = null);

(statearr_17019_19491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (18))){
var inst_16911 = (state_16941[(2)]);
var state_16941__$1 = state_16941;
var statearr_17020_19492 = state_16941__$1;
(statearr_17020_19492[(2)] = inst_16911);

(statearr_17020_19492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16942 === (8))){
var inst_16883 = (state_16941[(16)]);
var inst_16882 = (state_16941[(15)]);
var inst_16885 = (inst_16883 < inst_16882);
var inst_16886 = inst_16885;
var state_16941__$1 = state_16941;
if(cljs.core.truth_(inst_16886)){
var statearr_17031_19494 = state_16941__$1;
(statearr_17031_19494[(1)] = (10));

} else {
var statearr_17036_19495 = state_16941__$1;
(statearr_17036_19495[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_17041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17041[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_17041[(1)] = (1));

return statearr_17041;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_16941){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_16941);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17042){var ex__13458__auto__ = e17042;
var statearr_17049_19499 = state_16941;
(statearr_17049_19499[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_16941[(4)]))){
var statearr_17050_19500 = state_16941;
(statearr_17050_19500[(1)] = cljs.core.first((state_16941[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19501 = state_16941;
state_16941 = G__19501;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_16941){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_16941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17051 = f__14565__auto__();
(statearr_17051[(6)] = c__14564__auto___19445);

return statearr_17051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__17059 = arguments.length;
switch (G__17059) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__17084 = arguments.length;
switch (G__17084) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__17095 = arguments.length;
switch (G__17095) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14564__auto___19527 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_17165){
var state_val_17166 = (state_17165[(1)]);
if((state_val_17166 === (7))){
var state_17165__$1 = state_17165;
var statearr_17169_19528 = state_17165__$1;
(statearr_17169_19528[(2)] = null);

(statearr_17169_19528[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (1))){
var state_17165__$1 = state_17165;
var statearr_17170_19532 = state_17165__$1;
(statearr_17170_19532[(2)] = null);

(statearr_17170_19532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (4))){
var inst_17114 = (state_17165[(7)]);
var inst_17113 = (state_17165[(8)]);
var inst_17116 = (inst_17114 < inst_17113);
var state_17165__$1 = state_17165;
if(cljs.core.truth_(inst_17116)){
var statearr_17171_19535 = state_17165__$1;
(statearr_17171_19535[(1)] = (6));

} else {
var statearr_17172_19536 = state_17165__$1;
(statearr_17172_19536[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (15))){
var inst_17149 = (state_17165[(9)]);
var inst_17154 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_17149);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17165__$1,(17),out,inst_17154);
} else {
if((state_val_17166 === (13))){
var inst_17149 = (state_17165[(9)]);
var inst_17149__$1 = (state_17165[(2)]);
var inst_17150 = cljs.core.some(cljs.core.nil_QMARK_,inst_17149__$1);
var state_17165__$1 = (function (){var statearr_17181 = state_17165;
(statearr_17181[(9)] = inst_17149__$1);

return statearr_17181;
})();
if(cljs.core.truth_(inst_17150)){
var statearr_17182_19540 = state_17165__$1;
(statearr_17182_19540[(1)] = (14));

} else {
var statearr_17183_19541 = state_17165__$1;
(statearr_17183_19541[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (6))){
var state_17165__$1 = state_17165;
var statearr_17188_19543 = state_17165__$1;
(statearr_17188_19543[(2)] = null);

(statearr_17188_19543[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (17))){
var inst_17156 = (state_17165[(2)]);
var state_17165__$1 = (function (){var statearr_17193 = state_17165;
(statearr_17193[(10)] = inst_17156);

return statearr_17193;
})();
var statearr_17195_19545 = state_17165__$1;
(statearr_17195_19545[(2)] = null);

(statearr_17195_19545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (3))){
var inst_17161 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17165__$1,inst_17161);
} else {
if((state_val_17166 === (12))){
var _ = (function (){var statearr_17205 = state_17165;
(statearr_17205[(4)] = cljs.core.rest((state_17165[(4)])));

return statearr_17205;
})();
var state_17165__$1 = state_17165;
var ex17192 = (state_17165__$1[(2)]);
var statearr_17206_19546 = state_17165__$1;
(statearr_17206_19546[(5)] = ex17192);


if((ex17192 instanceof Object)){
var statearr_17224_19547 = state_17165__$1;
(statearr_17224_19547[(1)] = (11));

(statearr_17224_19547[(5)] = null);

} else {
throw ex17192;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (2))){
var inst_17112 = cljs.core.reset_BANG_(dctr,cnt);
var inst_17113 = cnt;
var inst_17114 = (0);
var state_17165__$1 = (function (){var statearr_17226 = state_17165;
(statearr_17226[(11)] = inst_17112);

(statearr_17226[(8)] = inst_17113);

(statearr_17226[(7)] = inst_17114);

return statearr_17226;
})();
var statearr_17229_19548 = state_17165__$1;
(statearr_17229_19548[(2)] = null);

(statearr_17229_19548[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (11))){
var inst_17124 = (state_17165[(2)]);
var inst_17125 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_17165__$1 = (function (){var statearr_17230 = state_17165;
(statearr_17230[(12)] = inst_17124);

return statearr_17230;
})();
var statearr_17231_19549 = state_17165__$1;
(statearr_17231_19549[(2)] = inst_17125);

(statearr_17231_19549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (9))){
var inst_17114 = (state_17165[(7)]);
var _ = (function (){var statearr_17235 = state_17165;
(statearr_17235[(4)] = cljs.core.cons((12),(state_17165[(4)])));

return statearr_17235;
})();
var inst_17131 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_17114) : chs__$1.call(null,inst_17114));
var inst_17132 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_17114) : done.call(null,inst_17114));
var inst_17133 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_17131,inst_17132);
var ___$1 = (function (){var statearr_17236 = state_17165;
(statearr_17236[(4)] = cljs.core.rest((state_17165[(4)])));

return statearr_17236;
})();
var state_17165__$1 = state_17165;
var statearr_17238_19552 = state_17165__$1;
(statearr_17238_19552[(2)] = inst_17133);

(statearr_17238_19552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (5))){
var inst_17146 = (state_17165[(2)]);
var state_17165__$1 = (function (){var statearr_17241 = state_17165;
(statearr_17241[(13)] = inst_17146);

return statearr_17241;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17165__$1,(13),dchan);
} else {
if((state_val_17166 === (14))){
var inst_17152 = cljs.core.async.close_BANG_(out);
var state_17165__$1 = state_17165;
var statearr_17245_19556 = state_17165__$1;
(statearr_17245_19556[(2)] = inst_17152);

(statearr_17245_19556[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (16))){
var inst_17159 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17247_19557 = state_17165__$1;
(statearr_17247_19557[(2)] = inst_17159);

(statearr_17247_19557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (10))){
var inst_17114 = (state_17165[(7)]);
var inst_17136 = (state_17165[(2)]);
var inst_17137 = (inst_17114 + (1));
var inst_17114__$1 = inst_17137;
var state_17165__$1 = (function (){var statearr_17250 = state_17165;
(statearr_17250[(14)] = inst_17136);

(statearr_17250[(7)] = inst_17114__$1);

return statearr_17250;
})();
var statearr_17253_19562 = state_17165__$1;
(statearr_17253_19562[(2)] = null);

(statearr_17253_19562[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17166 === (8))){
var inst_17144 = (state_17165[(2)]);
var state_17165__$1 = state_17165;
var statearr_17256_19563 = state_17165__$1;
(statearr_17256_19563[(2)] = inst_17144);

(statearr_17256_19563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_17257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17257[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_17257[(1)] = (1));

return statearr_17257;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_17165){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_17165);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17259){var ex__13458__auto__ = e17259;
var statearr_17261_19565 = state_17165;
(statearr_17261_19565[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_17165[(4)]))){
var statearr_17265_19566 = state_17165;
(statearr_17265_19566[(1)] = cljs.core.first((state_17165[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19567 = state_17165;
state_17165 = G__19567;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_17165){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_17165);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17269 = f__14565__auto__();
(statearr_17269[(6)] = c__14564__auto___19527);

return statearr_17269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__17275 = arguments.length;
switch (G__17275) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_17315){
var state_val_17316 = (state_17315[(1)]);
if((state_val_17316 === (7))){
var inst_17287 = (state_17315[(7)]);
var inst_17288 = (state_17315[(8)]);
var inst_17287__$1 = (state_17315[(2)]);
var inst_17288__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17287__$1,(0),null);
var inst_17289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_17287__$1,(1),null);
var inst_17290 = (inst_17288__$1 == null);
var state_17315__$1 = (function (){var statearr_17321 = state_17315;
(statearr_17321[(7)] = inst_17287__$1);

(statearr_17321[(8)] = inst_17288__$1);

(statearr_17321[(9)] = inst_17289);

return statearr_17321;
})();
if(cljs.core.truth_(inst_17290)){
var statearr_17322_19572 = state_17315__$1;
(statearr_17322_19572[(1)] = (8));

} else {
var statearr_17323_19573 = state_17315__$1;
(statearr_17323_19573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (1))){
var inst_17276 = cljs.core.vec(chs);
var inst_17277 = inst_17276;
var state_17315__$1 = (function (){var statearr_17327 = state_17315;
(statearr_17327[(10)] = inst_17277);

return statearr_17327;
})();
var statearr_17328_19574 = state_17315__$1;
(statearr_17328_19574[(2)] = null);

(statearr_17328_19574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (4))){
var inst_17277 = (state_17315[(10)]);
var state_17315__$1 = state_17315;
return cljs.core.async.ioc_alts_BANG_(state_17315__$1,(7),inst_17277);
} else {
if((state_val_17316 === (6))){
var inst_17308 = (state_17315[(2)]);
var state_17315__$1 = state_17315;
var statearr_17336_19575 = state_17315__$1;
(statearr_17336_19575[(2)] = inst_17308);

(statearr_17336_19575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (3))){
var inst_17310 = (state_17315[(2)]);
var state_17315__$1 = state_17315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17315__$1,inst_17310);
} else {
if((state_val_17316 === (2))){
var inst_17277 = (state_17315[(10)]);
var inst_17279 = cljs.core.count(inst_17277);
var inst_17280 = (inst_17279 > (0));
var state_17315__$1 = state_17315;
if(cljs.core.truth_(inst_17280)){
var statearr_17341_19576 = state_17315__$1;
(statearr_17341_19576[(1)] = (4));

} else {
var statearr_17342_19577 = state_17315__$1;
(statearr_17342_19577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (11))){
var inst_17277 = (state_17315[(10)]);
var inst_17301 = (state_17315[(2)]);
var tmp17340 = inst_17277;
var inst_17277__$1 = tmp17340;
var state_17315__$1 = (function (){var statearr_17343 = state_17315;
(statearr_17343[(11)] = inst_17301);

(statearr_17343[(10)] = inst_17277__$1);

return statearr_17343;
})();
var statearr_17348_19578 = state_17315__$1;
(statearr_17348_19578[(2)] = null);

(statearr_17348_19578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (9))){
var inst_17288 = (state_17315[(8)]);
var state_17315__$1 = state_17315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17315__$1,(11),out,inst_17288);
} else {
if((state_val_17316 === (5))){
var inst_17306 = cljs.core.async.close_BANG_(out);
var state_17315__$1 = state_17315;
var statearr_17358_19580 = state_17315__$1;
(statearr_17358_19580[(2)] = inst_17306);

(statearr_17358_19580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (10))){
var inst_17304 = (state_17315[(2)]);
var state_17315__$1 = state_17315;
var statearr_17366_19581 = state_17315__$1;
(statearr_17366_19581[(2)] = inst_17304);

(statearr_17366_19581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17316 === (8))){
var inst_17277 = (state_17315[(10)]);
var inst_17287 = (state_17315[(7)]);
var inst_17288 = (state_17315[(8)]);
var inst_17289 = (state_17315[(9)]);
var inst_17296 = (function (){var cs = inst_17277;
var vec__17282 = inst_17287;
var v = inst_17288;
var c = inst_17289;
return (function (p1__17271_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__17271_SHARP_);
});
})();
var inst_17297 = cljs.core.filterv(inst_17296,inst_17277);
var inst_17277__$1 = inst_17297;
var state_17315__$1 = (function (){var statearr_17367 = state_17315;
(statearr_17367[(10)] = inst_17277__$1);

return statearr_17367;
})();
var statearr_17368_19583 = state_17315__$1;
(statearr_17368_19583[(2)] = null);

(statearr_17368_19583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_17374 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17374[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_17374[(1)] = (1));

return statearr_17374;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_17315){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_17315);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17379){var ex__13458__auto__ = e17379;
var statearr_17381_19588 = state_17315;
(statearr_17381_19588[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_17315[(4)]))){
var statearr_17383_19589 = state_17315;
(statearr_17383_19589[(1)] = cljs.core.first((state_17315[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19590 = state_17315;
state_17315 = G__19590;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_17315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_17315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17385 = f__14565__auto__();
(statearr_17385[(6)] = c__14564__auto___19571);

return statearr_17385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__17389 = arguments.length;
switch (G__17389) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19592 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_17414){
var state_val_17415 = (state_17414[(1)]);
if((state_val_17415 === (7))){
var inst_17396 = (state_17414[(7)]);
var inst_17396__$1 = (state_17414[(2)]);
var inst_17397 = (inst_17396__$1 == null);
var inst_17398 = cljs.core.not(inst_17397);
var state_17414__$1 = (function (){var statearr_17420 = state_17414;
(statearr_17420[(7)] = inst_17396__$1);

return statearr_17420;
})();
if(inst_17398){
var statearr_17421_19596 = state_17414__$1;
(statearr_17421_19596[(1)] = (8));

} else {
var statearr_17422_19597 = state_17414__$1;
(statearr_17422_19597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (1))){
var inst_17391 = (0);
var state_17414__$1 = (function (){var statearr_17425 = state_17414;
(statearr_17425[(8)] = inst_17391);

return statearr_17425;
})();
var statearr_17426_19598 = state_17414__$1;
(statearr_17426_19598[(2)] = null);

(statearr_17426_19598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (4))){
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17414__$1,(7),ch);
} else {
if((state_val_17415 === (6))){
var inst_17409 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17429_19599 = state_17414__$1;
(statearr_17429_19599[(2)] = inst_17409);

(statearr_17429_19599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (3))){
var inst_17411 = (state_17414[(2)]);
var inst_17412 = cljs.core.async.close_BANG_(out);
var state_17414__$1 = (function (){var statearr_17432 = state_17414;
(statearr_17432[(9)] = inst_17411);

return statearr_17432;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17414__$1,inst_17412);
} else {
if((state_val_17415 === (2))){
var inst_17391 = (state_17414[(8)]);
var inst_17393 = (inst_17391 < n);
var state_17414__$1 = state_17414;
if(cljs.core.truth_(inst_17393)){
var statearr_17434_19606 = state_17414__$1;
(statearr_17434_19606[(1)] = (4));

} else {
var statearr_17435_19607 = state_17414__$1;
(statearr_17435_19607[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (11))){
var inst_17391 = (state_17414[(8)]);
var inst_17401 = (state_17414[(2)]);
var inst_17402 = (inst_17391 + (1));
var inst_17391__$1 = inst_17402;
var state_17414__$1 = (function (){var statearr_17437 = state_17414;
(statearr_17437[(10)] = inst_17401);

(statearr_17437[(8)] = inst_17391__$1);

return statearr_17437;
})();
var statearr_17438_19611 = state_17414__$1;
(statearr_17438_19611[(2)] = null);

(statearr_17438_19611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (9))){
var state_17414__$1 = state_17414;
var statearr_17439_19612 = state_17414__$1;
(statearr_17439_19612[(2)] = null);

(statearr_17439_19612[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (5))){
var state_17414__$1 = state_17414;
var statearr_17442_19613 = state_17414__$1;
(statearr_17442_19613[(2)] = null);

(statearr_17442_19613[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (10))){
var inst_17406 = (state_17414[(2)]);
var state_17414__$1 = state_17414;
var statearr_17443_19614 = state_17414__$1;
(statearr_17443_19614[(2)] = inst_17406);

(statearr_17443_19614[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17415 === (8))){
var inst_17396 = (state_17414[(7)]);
var state_17414__$1 = state_17414;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17414__$1,(11),out,inst_17396);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_17447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17447[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_17447[(1)] = (1));

return statearr_17447;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_17414){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_17414);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17448){var ex__13458__auto__ = e17448;
var statearr_17449_19618 = state_17414;
(statearr_17449_19618[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_17414[(4)]))){
var statearr_17450_19623 = state_17414;
(statearr_17450_19623[(1)] = cljs.core.first((state_17414[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19624 = state_17414;
state_17414 = G__19624;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_17414){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_17414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17451 = f__14565__auto__();
(statearr_17451[(6)] = c__14564__auto___19592);

return statearr_17451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17490 = (function (f,ch,meta17456,_,fn1,meta17491){
this.f = f;
this.ch = ch;
this.meta17456 = meta17456;
this._ = _;
this.fn1 = fn1;
this.meta17491 = meta17491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17492,meta17491__$1){
var self__ = this;
var _17492__$1 = this;
return (new cljs.core.async.t_cljs$core$async17490(self__.f,self__.ch,self__.meta17456,self__._,self__.fn1,meta17491__$1));
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17492){
var self__ = this;
var _17492__$1 = this;
return self__.meta17491;
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17490.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17454_SHARP_){
var G__17498 = (((p1__17454_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17454_SHARP_) : self__.f.call(null,p1__17454_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17498) : f1.call(null,G__17498));
});
}));

(cljs.core.async.t_cljs$core$async17490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17456","meta17456",1528833573,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17455","cljs.core.async/t_cljs$core$async17455",-363071834,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17491","meta17491",1420550045,null)], null);
}));

(cljs.core.async.t_cljs$core$async17490.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17490");

(cljs.core.async.t_cljs$core$async17490.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17490");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17490.
 */
cljs.core.async.__GT_t_cljs$core$async17490 = (function cljs$core$async$__GT_t_cljs$core$async17490(f,ch,meta17456,_,fn1,meta17491){
return (new cljs.core.async.t_cljs$core$async17490(f,ch,meta17456,_,fn1,meta17491));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17455 = (function (f,ch,meta17456){
this.f = f;
this.ch = ch;
this.meta17456 = meta17456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17457,meta17456__$1){
var self__ = this;
var _17457__$1 = this;
return (new cljs.core.async.t_cljs$core$async17455(self__.f,self__.ch,meta17456__$1));
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17457){
var self__ = this;
var _17457__$1 = this;
return self__.meta17456;
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17490(self__.f,self__.ch,self__.meta17456,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17515 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17515) : self__.f.call(null,G__17515));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17455.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17455.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17456","meta17456",1528833573,null)], null);
}));

(cljs.core.async.t_cljs$core$async17455.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17455.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17455");

(cljs.core.async.t_cljs$core$async17455.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17455");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17455.
 */
cljs.core.async.__GT_t_cljs$core$async17455 = (function cljs$core$async$__GT_t_cljs$core$async17455(f,ch,meta17456){
return (new cljs.core.async.t_cljs$core$async17455(f,ch,meta17456));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17455(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17534 = (function (f,ch,meta17535){
this.f = f;
this.ch = ch;
this.meta17535 = meta17535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17536,meta17535__$1){
var self__ = this;
var _17536__$1 = this;
return (new cljs.core.async.t_cljs$core$async17534(self__.f,self__.ch,meta17535__$1));
}));

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17536){
var self__ = this;
var _17536__$1 = this;
return self__.meta17535;
}));

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17534.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17535","meta17535",1948636629,null)], null);
}));

(cljs.core.async.t_cljs$core$async17534.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17534");

(cljs.core.async.t_cljs$core$async17534.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17534");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17534.
 */
cljs.core.async.__GT_t_cljs$core$async17534 = (function cljs$core$async$__GT_t_cljs$core$async17534(f,ch,meta17535){
return (new cljs.core.async.t_cljs$core$async17534(f,ch,meta17535));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17534(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17576 = (function (p,ch,meta17577){
this.p = p;
this.ch = ch;
this.meta17577 = meta17577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17578,meta17577__$1){
var self__ = this;
var _17578__$1 = this;
return (new cljs.core.async.t_cljs$core$async17576(self__.p,self__.ch,meta17577__$1));
}));

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17578){
var self__ = this;
var _17578__$1 = this;
return self__.meta17577;
}));

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17576.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17577","meta17577",-443471232,null)], null);
}));

(cljs.core.async.t_cljs$core$async17576.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17576.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17576");

(cljs.core.async.t_cljs$core$async17576.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async17576");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17576.
 */
cljs.core.async.__GT_t_cljs$core$async17576 = (function cljs$core$async$__GT_t_cljs$core$async17576(p,ch,meta17577){
return (new cljs.core.async.t_cljs$core$async17576(p,ch,meta17577));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17576(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17622 = arguments.length;
switch (G__17622) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_17651){
var state_val_17652 = (state_17651[(1)]);
if((state_val_17652 === (7))){
var inst_17646 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17660_19664 = state_17651__$1;
(statearr_17660_19664[(2)] = inst_17646);

(statearr_17660_19664[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (1))){
var state_17651__$1 = state_17651;
var statearr_17662_19667 = state_17651__$1;
(statearr_17662_19667[(2)] = null);

(statearr_17662_19667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (4))){
var inst_17631 = (state_17651[(7)]);
var inst_17631__$1 = (state_17651[(2)]);
var inst_17632 = (inst_17631__$1 == null);
var state_17651__$1 = (function (){var statearr_17664 = state_17651;
(statearr_17664[(7)] = inst_17631__$1);

return statearr_17664;
})();
if(cljs.core.truth_(inst_17632)){
var statearr_17674_19671 = state_17651__$1;
(statearr_17674_19671[(1)] = (5));

} else {
var statearr_17675_19672 = state_17651__$1;
(statearr_17675_19672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (6))){
var inst_17631 = (state_17651[(7)]);
var inst_17637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17631) : p.call(null,inst_17631));
var state_17651__$1 = state_17651;
if(cljs.core.truth_(inst_17637)){
var statearr_17676_19673 = state_17651__$1;
(statearr_17676_19673[(1)] = (8));

} else {
var statearr_17677_19674 = state_17651__$1;
(statearr_17677_19674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (3))){
var inst_17648 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17651__$1,inst_17648);
} else {
if((state_val_17652 === (2))){
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17651__$1,(4),ch);
} else {
if((state_val_17652 === (11))){
var inst_17640 = (state_17651[(2)]);
var state_17651__$1 = state_17651;
var statearr_17698_19676 = state_17651__$1;
(statearr_17698_19676[(2)] = inst_17640);

(statearr_17698_19676[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (9))){
var state_17651__$1 = state_17651;
var statearr_17700_19679 = state_17651__$1;
(statearr_17700_19679[(2)] = null);

(statearr_17700_19679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (5))){
var inst_17635 = cljs.core.async.close_BANG_(out);
var state_17651__$1 = state_17651;
var statearr_17702_19684 = state_17651__$1;
(statearr_17702_19684[(2)] = inst_17635);

(statearr_17702_19684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (10))){
var inst_17643 = (state_17651[(2)]);
var state_17651__$1 = (function (){var statearr_17704 = state_17651;
(statearr_17704[(8)] = inst_17643);

return statearr_17704;
})();
var statearr_17705_19685 = state_17651__$1;
(statearr_17705_19685[(2)] = null);

(statearr_17705_19685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17652 === (8))){
var inst_17631 = (state_17651[(7)]);
var state_17651__$1 = state_17651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17651__$1,(11),out,inst_17631);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_17708 = [null,null,null,null,null,null,null,null,null];
(statearr_17708[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_17708[(1)] = (1));

return statearr_17708;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_17651){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_17651);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17709){var ex__13458__auto__ = e17709;
var statearr_17710_19686 = state_17651;
(statearr_17710_19686[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_17651[(4)]))){
var statearr_17716_19687 = state_17651;
(statearr_17716_19687[(1)] = cljs.core.first((state_17651[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19688 = state_17651;
state_17651 = G__19688;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_17651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_17651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17720 = f__14565__auto__();
(statearr_17720[(6)] = c__14564__auto___19653);

return statearr_17720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17736 = arguments.length;
switch (G__17736) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14564__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_17834){
var state_val_17835 = (state_17834[(1)]);
if((state_val_17835 === (7))){
var inst_17815 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17837_19707 = state_17834__$1;
(statearr_17837_19707[(2)] = inst_17815);

(statearr_17837_19707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (20))){
var inst_17770 = (state_17834[(7)]);
var inst_17788 = (state_17834[(2)]);
var inst_17790 = cljs.core.next(inst_17770);
var inst_17756 = inst_17790;
var inst_17757 = null;
var inst_17758 = (0);
var inst_17759 = (0);
var state_17834__$1 = (function (){var statearr_17839 = state_17834;
(statearr_17839[(8)] = inst_17788);

(statearr_17839[(9)] = inst_17756);

(statearr_17839[(10)] = inst_17757);

(statearr_17839[(11)] = inst_17758);

(statearr_17839[(12)] = inst_17759);

return statearr_17839;
})();
var statearr_17840_19709 = state_17834__$1;
(statearr_17840_19709[(2)] = null);

(statearr_17840_19709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (1))){
var state_17834__$1 = state_17834;
var statearr_17841_19711 = state_17834__$1;
(statearr_17841_19711[(2)] = null);

(statearr_17841_19711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (4))){
var inst_17744 = (state_17834[(13)]);
var inst_17744__$1 = (state_17834[(2)]);
var inst_17745 = (inst_17744__$1 == null);
var state_17834__$1 = (function (){var statearr_17844 = state_17834;
(statearr_17844[(13)] = inst_17744__$1);

return statearr_17844;
})();
if(cljs.core.truth_(inst_17745)){
var statearr_17845_19716 = state_17834__$1;
(statearr_17845_19716[(1)] = (5));

} else {
var statearr_17846_19717 = state_17834__$1;
(statearr_17846_19717[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (15))){
var state_17834__$1 = state_17834;
var statearr_17864_19718 = state_17834__$1;
(statearr_17864_19718[(2)] = null);

(statearr_17864_19718[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (21))){
var state_17834__$1 = state_17834;
var statearr_17865_19723 = state_17834__$1;
(statearr_17865_19723[(2)] = null);

(statearr_17865_19723[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (13))){
var inst_17759 = (state_17834[(12)]);
var inst_17756 = (state_17834[(9)]);
var inst_17757 = (state_17834[(10)]);
var inst_17758 = (state_17834[(11)]);
var inst_17766 = (state_17834[(2)]);
var inst_17767 = (inst_17759 + (1));
var tmp17857 = inst_17758;
var tmp17858 = inst_17757;
var tmp17859 = inst_17756;
var inst_17756__$1 = tmp17859;
var inst_17757__$1 = tmp17858;
var inst_17758__$1 = tmp17857;
var inst_17759__$1 = inst_17767;
var state_17834__$1 = (function (){var statearr_17867 = state_17834;
(statearr_17867[(14)] = inst_17766);

(statearr_17867[(9)] = inst_17756__$1);

(statearr_17867[(10)] = inst_17757__$1);

(statearr_17867[(11)] = inst_17758__$1);

(statearr_17867[(12)] = inst_17759__$1);

return statearr_17867;
})();
var statearr_17869_19727 = state_17834__$1;
(statearr_17869_19727[(2)] = null);

(statearr_17869_19727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (22))){
var state_17834__$1 = state_17834;
var statearr_17871_19728 = state_17834__$1;
(statearr_17871_19728[(2)] = null);

(statearr_17871_19728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (6))){
var inst_17744 = (state_17834[(13)]);
var inst_17754 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17744) : f.call(null,inst_17744));
var inst_17755 = cljs.core.seq(inst_17754);
var inst_17756 = inst_17755;
var inst_17757 = null;
var inst_17758 = (0);
var inst_17759 = (0);
var state_17834__$1 = (function (){var statearr_17872 = state_17834;
(statearr_17872[(9)] = inst_17756);

(statearr_17872[(10)] = inst_17757);

(statearr_17872[(11)] = inst_17758);

(statearr_17872[(12)] = inst_17759);

return statearr_17872;
})();
var statearr_17873_19733 = state_17834__$1;
(statearr_17873_19733[(2)] = null);

(statearr_17873_19733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (17))){
var inst_17770 = (state_17834[(7)]);
var inst_17777 = cljs.core.chunk_first(inst_17770);
var inst_17778 = cljs.core.chunk_rest(inst_17770);
var inst_17779 = cljs.core.count(inst_17777);
var inst_17756 = inst_17778;
var inst_17757 = inst_17777;
var inst_17758 = inst_17779;
var inst_17759 = (0);
var state_17834__$1 = (function (){var statearr_17876 = state_17834;
(statearr_17876[(9)] = inst_17756);

(statearr_17876[(10)] = inst_17757);

(statearr_17876[(11)] = inst_17758);

(statearr_17876[(12)] = inst_17759);

return statearr_17876;
})();
var statearr_17882_19736 = state_17834__$1;
(statearr_17882_19736[(2)] = null);

(statearr_17882_19736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (3))){
var inst_17817 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17834__$1,inst_17817);
} else {
if((state_val_17835 === (12))){
var inst_17804 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17901_19738 = state_17834__$1;
(statearr_17901_19738[(2)] = inst_17804);

(statearr_17901_19738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (2))){
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17834__$1,(4),in$);
} else {
if((state_val_17835 === (23))){
var inst_17813 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17913_19739 = state_17834__$1;
(statearr_17913_19739[(2)] = inst_17813);

(statearr_17913_19739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (19))){
var inst_17796 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17921_19740 = state_17834__$1;
(statearr_17921_19740[(2)] = inst_17796);

(statearr_17921_19740[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (11))){
var inst_17756 = (state_17834[(9)]);
var inst_17770 = (state_17834[(7)]);
var inst_17770__$1 = cljs.core.seq(inst_17756);
var state_17834__$1 = (function (){var statearr_17923 = state_17834;
(statearr_17923[(7)] = inst_17770__$1);

return statearr_17923;
})();
if(inst_17770__$1){
var statearr_17924_19742 = state_17834__$1;
(statearr_17924_19742[(1)] = (14));

} else {
var statearr_17928_19743 = state_17834__$1;
(statearr_17928_19743[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (9))){
var inst_17806 = (state_17834[(2)]);
var inst_17808 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17834__$1 = (function (){var statearr_17931 = state_17834;
(statearr_17931[(15)] = inst_17806);

return statearr_17931;
})();
if(cljs.core.truth_(inst_17808)){
var statearr_17932_19744 = state_17834__$1;
(statearr_17932_19744[(1)] = (21));

} else {
var statearr_17935_19749 = state_17834__$1;
(statearr_17935_19749[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (5))){
var inst_17747 = cljs.core.async.close_BANG_(out);
var state_17834__$1 = state_17834;
var statearr_17940_19752 = state_17834__$1;
(statearr_17940_19752[(2)] = inst_17747);

(statearr_17940_19752[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (14))){
var inst_17770 = (state_17834[(7)]);
var inst_17773 = cljs.core.chunked_seq_QMARK_(inst_17770);
var state_17834__$1 = state_17834;
if(inst_17773){
var statearr_17945_19754 = state_17834__$1;
(statearr_17945_19754[(1)] = (17));

} else {
var statearr_17946_19755 = state_17834__$1;
(statearr_17946_19755[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (16))){
var inst_17802 = (state_17834[(2)]);
var state_17834__$1 = state_17834;
var statearr_17950_19756 = state_17834__$1;
(statearr_17950_19756[(2)] = inst_17802);

(statearr_17950_19756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17835 === (10))){
var inst_17757 = (state_17834[(10)]);
var inst_17759 = (state_17834[(12)]);
var inst_17764 = cljs.core._nth(inst_17757,inst_17759);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17834__$1,(13),out,inst_17764);
} else {
if((state_val_17835 === (18))){
var inst_17770 = (state_17834[(7)]);
var inst_17784 = cljs.core.first(inst_17770);
var state_17834__$1 = state_17834;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17834__$1,(20),out,inst_17784);
} else {
if((state_val_17835 === (8))){
var inst_17759 = (state_17834[(12)]);
var inst_17758 = (state_17834[(11)]);
var inst_17761 = (inst_17759 < inst_17758);
var inst_17762 = inst_17761;
var state_17834__$1 = state_17834;
if(cljs.core.truth_(inst_17762)){
var statearr_17958_19757 = state_17834__$1;
(statearr_17958_19757[(1)] = (10));

} else {
var statearr_17960_19758 = state_17834__$1;
(statearr_17960_19758[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0 = (function (){
var statearr_17963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17963[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__);

(statearr_17963[(1)] = (1));

return statearr_17963;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1 = (function (state_17834){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_17834);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e17968){var ex__13458__auto__ = e17968;
var statearr_17970_19759 = state_17834;
(statearr_17970_19759[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_17834[(4)]))){
var statearr_17977_19760 = state_17834;
(statearr_17977_19760[(1)] = cljs.core.first((state_17834[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19761 = state_17834;
state_17834 = G__19761;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__ = function(state_17834){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1.call(this,state_17834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13455__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_17984 = f__14565__auto__();
(statearr_17984[(6)] = c__14564__auto__);

return statearr_17984;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));

return c__14564__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17989 = arguments.length;
switch (G__17989) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17993 = arguments.length;
switch (G__17993) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19776 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_18052){
var state_val_18053 = (state_18052[(1)]);
if((state_val_18053 === (7))){
var inst_18043 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18059_19782 = state_18052__$1;
(statearr_18059_19782[(2)] = inst_18043);

(statearr_18059_19782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (1))){
var inst_18024 = null;
var state_18052__$1 = (function (){var statearr_18060 = state_18052;
(statearr_18060[(7)] = inst_18024);

return statearr_18060;
})();
var statearr_18062_19783 = state_18052__$1;
(statearr_18062_19783[(2)] = null);

(statearr_18062_19783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (4))){
var inst_18027 = (state_18052[(8)]);
var inst_18027__$1 = (state_18052[(2)]);
var inst_18028 = (inst_18027__$1 == null);
var inst_18029 = cljs.core.not(inst_18028);
var state_18052__$1 = (function (){var statearr_18068 = state_18052;
(statearr_18068[(8)] = inst_18027__$1);

return statearr_18068;
})();
if(inst_18029){
var statearr_18069_19784 = state_18052__$1;
(statearr_18069_19784[(1)] = (5));

} else {
var statearr_18070_19785 = state_18052__$1;
(statearr_18070_19785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (6))){
var state_18052__$1 = state_18052;
var statearr_18074_19786 = state_18052__$1;
(statearr_18074_19786[(2)] = null);

(statearr_18074_19786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (3))){
var inst_18045 = (state_18052[(2)]);
var inst_18047 = cljs.core.async.close_BANG_(out);
var state_18052__$1 = (function (){var statearr_18075 = state_18052;
(statearr_18075[(9)] = inst_18045);

return statearr_18075;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18052__$1,inst_18047);
} else {
if((state_val_18053 === (2))){
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18052__$1,(4),ch);
} else {
if((state_val_18053 === (11))){
var inst_18027 = (state_18052[(8)]);
var inst_18037 = (state_18052[(2)]);
var inst_18024 = inst_18027;
var state_18052__$1 = (function (){var statearr_18080 = state_18052;
(statearr_18080[(10)] = inst_18037);

(statearr_18080[(7)] = inst_18024);

return statearr_18080;
})();
var statearr_18081_19789 = state_18052__$1;
(statearr_18081_19789[(2)] = null);

(statearr_18081_19789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (9))){
var inst_18027 = (state_18052[(8)]);
var state_18052__$1 = state_18052;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18052__$1,(11),out,inst_18027);
} else {
if((state_val_18053 === (5))){
var inst_18027 = (state_18052[(8)]);
var inst_18024 = (state_18052[(7)]);
var inst_18031 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18027,inst_18024);
var state_18052__$1 = state_18052;
if(inst_18031){
var statearr_18090_19792 = state_18052__$1;
(statearr_18090_19792[(1)] = (8));

} else {
var statearr_18091_19793 = state_18052__$1;
(statearr_18091_19793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (10))){
var inst_18040 = (state_18052[(2)]);
var state_18052__$1 = state_18052;
var statearr_18093_19795 = state_18052__$1;
(statearr_18093_19795[(2)] = inst_18040);

(statearr_18093_19795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18053 === (8))){
var inst_18024 = (state_18052[(7)]);
var tmp18088 = inst_18024;
var inst_18024__$1 = tmp18088;
var state_18052__$1 = (function (){var statearr_18099 = state_18052;
(statearr_18099[(7)] = inst_18024__$1);

return statearr_18099;
})();
var statearr_18103_19800 = state_18052__$1;
(statearr_18103_19800[(2)] = null);

(statearr_18103_19800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_18107 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18107[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_18107[(1)] = (1));

return statearr_18107;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_18052){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_18052);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e18109){var ex__13458__auto__ = e18109;
var statearr_18110_19804 = state_18052;
(statearr_18110_19804[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_18052[(4)]))){
var statearr_18112_19805 = state_18052;
(statearr_18112_19805[(1)] = cljs.core.first((state_18052[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19806 = state_18052;
state_18052 = G__19806;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_18052){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_18052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_18113 = f__14565__auto__();
(statearr_18113[(6)] = c__14564__auto___19776);

return statearr_18113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__18118 = arguments.length;
switch (G__18118) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19812 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_18169){
var state_val_18170 = (state_18169[(1)]);
if((state_val_18170 === (7))){
var inst_18165 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18173_19817 = state_18169__$1;
(statearr_18173_19817[(2)] = inst_18165);

(statearr_18173_19817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (1))){
var inst_18129 = (new Array(n));
var inst_18132 = inst_18129;
var inst_18133 = (0);
var state_18169__$1 = (function (){var statearr_18175 = state_18169;
(statearr_18175[(7)] = inst_18132);

(statearr_18175[(8)] = inst_18133);

return statearr_18175;
})();
var statearr_18177_19818 = state_18169__$1;
(statearr_18177_19818[(2)] = null);

(statearr_18177_19818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (4))){
var inst_18137 = (state_18169[(9)]);
var inst_18137__$1 = (state_18169[(2)]);
var inst_18138 = (inst_18137__$1 == null);
var inst_18139 = cljs.core.not(inst_18138);
var state_18169__$1 = (function (){var statearr_18178 = state_18169;
(statearr_18178[(9)] = inst_18137__$1);

return statearr_18178;
})();
if(inst_18139){
var statearr_18179_19819 = state_18169__$1;
(statearr_18179_19819[(1)] = (5));

} else {
var statearr_18180_19823 = state_18169__$1;
(statearr_18180_19823[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (15))){
var inst_18159 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18181_19824 = state_18169__$1;
(statearr_18181_19824[(2)] = inst_18159);

(statearr_18181_19824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (13))){
var state_18169__$1 = state_18169;
var statearr_18182_19825 = state_18169__$1;
(statearr_18182_19825[(2)] = null);

(statearr_18182_19825[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (6))){
var inst_18133 = (state_18169[(8)]);
var inst_18155 = (inst_18133 > (0));
var state_18169__$1 = state_18169;
if(cljs.core.truth_(inst_18155)){
var statearr_18186_19828 = state_18169__$1;
(statearr_18186_19828[(1)] = (12));

} else {
var statearr_18189_19830 = state_18169__$1;
(statearr_18189_19830[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (3))){
var inst_18167 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18169__$1,inst_18167);
} else {
if((state_val_18170 === (12))){
var inst_18132 = (state_18169[(7)]);
var inst_18157 = cljs.core.vec(inst_18132);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18169__$1,(15),out,inst_18157);
} else {
if((state_val_18170 === (2))){
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18169__$1,(4),ch);
} else {
if((state_val_18170 === (11))){
var inst_18149 = (state_18169[(2)]);
var inst_18150 = (new Array(n));
var inst_18132 = inst_18150;
var inst_18133 = (0);
var state_18169__$1 = (function (){var statearr_18190 = state_18169;
(statearr_18190[(10)] = inst_18149);

(statearr_18190[(7)] = inst_18132);

(statearr_18190[(8)] = inst_18133);

return statearr_18190;
})();
var statearr_18191_19834 = state_18169__$1;
(statearr_18191_19834[(2)] = null);

(statearr_18191_19834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (9))){
var inst_18132 = (state_18169[(7)]);
var inst_18147 = cljs.core.vec(inst_18132);
var state_18169__$1 = state_18169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18169__$1,(11),out,inst_18147);
} else {
if((state_val_18170 === (5))){
var inst_18132 = (state_18169[(7)]);
var inst_18133 = (state_18169[(8)]);
var inst_18137 = (state_18169[(9)]);
var inst_18142 = (state_18169[(11)]);
var inst_18141 = (inst_18132[inst_18133] = inst_18137);
var inst_18142__$1 = (inst_18133 + (1));
var inst_18143 = (inst_18142__$1 < n);
var state_18169__$1 = (function (){var statearr_18193 = state_18169;
(statearr_18193[(12)] = inst_18141);

(statearr_18193[(11)] = inst_18142__$1);

return statearr_18193;
})();
if(cljs.core.truth_(inst_18143)){
var statearr_18194_19847 = state_18169__$1;
(statearr_18194_19847[(1)] = (8));

} else {
var statearr_18196_19848 = state_18169__$1;
(statearr_18196_19848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (14))){
var inst_18162 = (state_18169[(2)]);
var inst_18163 = cljs.core.async.close_BANG_(out);
var state_18169__$1 = (function (){var statearr_18198 = state_18169;
(statearr_18198[(13)] = inst_18162);

return statearr_18198;
})();
var statearr_18200_19850 = state_18169__$1;
(statearr_18200_19850[(2)] = inst_18163);

(statearr_18200_19850[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (10))){
var inst_18153 = (state_18169[(2)]);
var state_18169__$1 = state_18169;
var statearr_18201_19851 = state_18169__$1;
(statearr_18201_19851[(2)] = inst_18153);

(statearr_18201_19851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18170 === (8))){
var inst_18132 = (state_18169[(7)]);
var inst_18142 = (state_18169[(11)]);
var tmp18197 = inst_18132;
var inst_18132__$1 = tmp18197;
var inst_18133 = inst_18142;
var state_18169__$1 = (function (){var statearr_18203 = state_18169;
(statearr_18203[(7)] = inst_18132__$1);

(statearr_18203[(8)] = inst_18133);

return statearr_18203;
})();
var statearr_18204_19856 = state_18169__$1;
(statearr_18204_19856[(2)] = null);

(statearr_18204_19856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_18206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18206[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_18206[(1)] = (1));

return statearr_18206;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_18169){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_18169);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e18211){var ex__13458__auto__ = e18211;
var statearr_18212_19865 = state_18169;
(statearr_18212_19865[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_18169[(4)]))){
var statearr_18214_19866 = state_18169;
(statearr_18214_19866[(1)] = cljs.core.first((state_18169[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19870 = state_18169;
state_18169 = G__19870;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_18169){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_18169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_18218 = f__14565__auto__();
(statearr_18218[(6)] = c__14564__auto___19812);

return statearr_18218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__18226 = arguments.length;
switch (G__18226) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14564__auto___19882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14565__auto__ = (function (){var switch__13454__auto__ = (function (state_18287){
var state_val_18288 = (state_18287[(1)]);
if((state_val_18288 === (7))){
var inst_18279 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18295_19889 = state_18287__$1;
(statearr_18295_19889[(2)] = inst_18279);

(statearr_18295_19889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (1))){
var inst_18233 = [];
var inst_18234 = inst_18233;
var inst_18235 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_18287__$1 = (function (){var statearr_18301 = state_18287;
(statearr_18301[(7)] = inst_18234);

(statearr_18301[(8)] = inst_18235);

return statearr_18301;
})();
var statearr_18303_19896 = state_18287__$1;
(statearr_18303_19896[(2)] = null);

(statearr_18303_19896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (4))){
var inst_18241 = (state_18287[(9)]);
var inst_18241__$1 = (state_18287[(2)]);
var inst_18242 = (inst_18241__$1 == null);
var inst_18243 = cljs.core.not(inst_18242);
var state_18287__$1 = (function (){var statearr_18313 = state_18287;
(statearr_18313[(9)] = inst_18241__$1);

return statearr_18313;
})();
if(inst_18243){
var statearr_18315_19897 = state_18287__$1;
(statearr_18315_19897[(1)] = (5));

} else {
var statearr_18316_19898 = state_18287__$1;
(statearr_18316_19898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (15))){
var inst_18234 = (state_18287[(7)]);
var inst_18270 = cljs.core.vec(inst_18234);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18287__$1,(18),out,inst_18270);
} else {
if((state_val_18288 === (13))){
var inst_18264 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18318_19906 = state_18287__$1;
(statearr_18318_19906[(2)] = inst_18264);

(statearr_18318_19906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (6))){
var inst_18234 = (state_18287[(7)]);
var inst_18267 = inst_18234.length;
var inst_18268 = (inst_18267 > (0));
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18268)){
var statearr_18342_19907 = state_18287__$1;
(statearr_18342_19907[(1)] = (15));

} else {
var statearr_18344_19908 = state_18287__$1;
(statearr_18344_19908[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (17))){
var inst_18275 = (state_18287[(2)]);
var inst_18277 = cljs.core.async.close_BANG_(out);
var state_18287__$1 = (function (){var statearr_18346 = state_18287;
(statearr_18346[(10)] = inst_18275);

return statearr_18346;
})();
var statearr_18347_19909 = state_18287__$1;
(statearr_18347_19909[(2)] = inst_18277);

(statearr_18347_19909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (3))){
var inst_18281 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18287__$1,inst_18281);
} else {
if((state_val_18288 === (12))){
var inst_18234 = (state_18287[(7)]);
var inst_18257 = cljs.core.vec(inst_18234);
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18287__$1,(14),out,inst_18257);
} else {
if((state_val_18288 === (2))){
var state_18287__$1 = state_18287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18287__$1,(4),ch);
} else {
if((state_val_18288 === (11))){
var inst_18234 = (state_18287[(7)]);
var inst_18241 = (state_18287[(9)]);
var inst_18246 = (state_18287[(11)]);
var inst_18254 = inst_18234.push(inst_18241);
var tmp18353 = inst_18234;
var inst_18234__$1 = tmp18353;
var inst_18235 = inst_18246;
var state_18287__$1 = (function (){var statearr_18363 = state_18287;
(statearr_18363[(12)] = inst_18254);

(statearr_18363[(7)] = inst_18234__$1);

(statearr_18363[(8)] = inst_18235);

return statearr_18363;
})();
var statearr_18366_19926 = state_18287__$1;
(statearr_18366_19926[(2)] = null);

(statearr_18366_19926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (9))){
var inst_18235 = (state_18287[(8)]);
var inst_18250 = cljs.core.keyword_identical_QMARK_(inst_18235,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_18287__$1 = state_18287;
var statearr_18371_19927 = state_18287__$1;
(statearr_18371_19927[(2)] = inst_18250);

(statearr_18371_19927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (5))){
var inst_18241 = (state_18287[(9)]);
var inst_18246 = (state_18287[(11)]);
var inst_18235 = (state_18287[(8)]);
var inst_18247 = (state_18287[(13)]);
var inst_18246__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_18241) : f.call(null,inst_18241));
var inst_18247__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18246__$1,inst_18235);
var state_18287__$1 = (function (){var statearr_18372 = state_18287;
(statearr_18372[(11)] = inst_18246__$1);

(statearr_18372[(13)] = inst_18247__$1);

return statearr_18372;
})();
if(inst_18247__$1){
var statearr_18373_19930 = state_18287__$1;
(statearr_18373_19930[(1)] = (8));

} else {
var statearr_18374_19931 = state_18287__$1;
(statearr_18374_19931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (14))){
var inst_18241 = (state_18287[(9)]);
var inst_18246 = (state_18287[(11)]);
var inst_18259 = (state_18287[(2)]);
var inst_18260 = [];
var inst_18261 = inst_18260.push(inst_18241);
var inst_18234 = inst_18260;
var inst_18235 = inst_18246;
var state_18287__$1 = (function (){var statearr_18375 = state_18287;
(statearr_18375[(14)] = inst_18259);

(statearr_18375[(15)] = inst_18261);

(statearr_18375[(7)] = inst_18234);

(statearr_18375[(8)] = inst_18235);

return statearr_18375;
})();
var statearr_18376_19932 = state_18287__$1;
(statearr_18376_19932[(2)] = null);

(statearr_18376_19932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (16))){
var state_18287__$1 = state_18287;
var statearr_18378_19933 = state_18287__$1;
(statearr_18378_19933[(2)] = null);

(statearr_18378_19933[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (10))){
var inst_18252 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
if(cljs.core.truth_(inst_18252)){
var statearr_18380_19934 = state_18287__$1;
(statearr_18380_19934[(1)] = (11));

} else {
var statearr_18381_19935 = state_18287__$1;
(statearr_18381_19935[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (18))){
var inst_18272 = (state_18287[(2)]);
var state_18287__$1 = state_18287;
var statearr_18382_19945 = state_18287__$1;
(statearr_18382_19945[(2)] = inst_18272);

(statearr_18382_19945[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18288 === (8))){
var inst_18247 = (state_18287[(13)]);
var state_18287__$1 = state_18287;
var statearr_18383_19946 = state_18287__$1;
(statearr_18383_19946[(2)] = inst_18247);

(statearr_18383_19946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13455__auto__ = null;
var cljs$core$async$state_machine__13455__auto____0 = (function (){
var statearr_18387 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18387[(0)] = cljs$core$async$state_machine__13455__auto__);

(statearr_18387[(1)] = (1));

return statearr_18387;
});
var cljs$core$async$state_machine__13455__auto____1 = (function (state_18287){
while(true){
var ret_value__13456__auto__ = (function (){try{while(true){
var result__13457__auto__ = switch__13454__auto__(state_18287);
if(cljs.core.keyword_identical_QMARK_(result__13457__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13457__auto__;
}
break;
}
}catch (e18391){var ex__13458__auto__ = e18391;
var statearr_18396_19954 = state_18287;
(statearr_18396_19954[(2)] = ex__13458__auto__);


if(cljs.core.seq((state_18287[(4)]))){
var statearr_18402_19957 = state_18287;
(statearr_18402_19957[(1)] = cljs.core.first((state_18287[(4)])));

} else {
throw ex__13458__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19959 = state_18287;
state_18287 = G__19959;
continue;
} else {
return ret_value__13456__auto__;
}
break;
}
});
cljs$core$async$state_machine__13455__auto__ = function(state_18287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13455__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13455__auto____1.call(this,state_18287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13455__auto____0;
cljs$core$async$state_machine__13455__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13455__auto____1;
return cljs$core$async$state_machine__13455__auto__;
})()
})();
var state__14566__auto__ = (function (){var statearr_18408 = f__14565__auto__();
(statearr_18408[(6)] = c__14564__auto___19882);

return statearr_18408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14566__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map

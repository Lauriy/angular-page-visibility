import { Injectable, ɵɵdefineInjectable, ReflectiveInjector, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
var AngularPageVisibilityStateEnum = {
    VISIBLE: 0,
    HIDDEN: 1,
    PRERENDER: 2,
    UNLOADED: 3,
};
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.VISIBLE] = 'VISIBLE';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.HIDDEN] = 'HIDDEN';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.PRERENDER] = 'PRERENDER';
AngularPageVisibilityStateEnum[AngularPageVisibilityStateEnum.UNLOADED] = 'UNLOADED';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var HiddenKeyConstant = /** @class */ (function () {
    function HiddenKeyConstant() {
    }
    HiddenKeyConstant.DEFAULT = "hidden";
    HiddenKeyConstant.MS = "msHidden";
    HiddenKeyConstant.WEB_KIT = "webkitHidden";
    return HiddenKeyConstant;
}());
if (false) {
    /** @type {?} */
    HiddenKeyConstant.DEFAULT;
    /** @type {?} */
    HiddenKeyConstant.MS;
    /** @type {?} */
    HiddenKeyConstant.WEB_KIT;
}
var VisibilityStatusConstant = /** @class */ (function () {
    function VisibilityStatusConstant() {
    }
    VisibilityStatusConstant.VISIBLE = "visible";
    VisibilityStatusConstant.HIDDEN = "hidden";
    VisibilityStatusConstant.PRERENDER = "prerender";
    VisibilityStatusConstant.UNLOADED = "unloaded";
    return VisibilityStatusConstant;
}());
if (false) {
    /** @type {?} */
    VisibilityStatusConstant.VISIBLE;
    /** @type {?} */
    VisibilityStatusConstant.HIDDEN;
    /** @type {?} */
    VisibilityStatusConstant.PRERENDER;
    /** @type {?} */
    VisibilityStatusConstant.UNLOADED;
}
var AngularPageVisibilityService = /** @class */ (function () {
    function AngularPageVisibilityService() {
        this.onPageVisibleSource = new Subject();
        this.onPageHiddenSource = new Subject();
        this.onPagePrerenderSource = new Subject();
        this.onPageUnloadedSource = new Subject();
        this.onPageVisibilityChangeSource = new Subject();
        this.$onPageVisible = this.onPageVisibleSource.asObservable();
        this.$onPageHidden = this.onPageHiddenSource.asObservable();
        this.$onPagePrerender = this.onPagePrerenderSource.asObservable();
        this.$onPageUnloaded = this.onPageUnloadedSource.asObservable();
        this.$onPageVisibilityChange = this.onPageVisibilityChangeSource.asObservable();
        this.addEventListenerVibilityChange();
    }
    /**
     * @return {?}
     */
    AngularPageVisibilityService.prototype.isPageVisible = /**
     * @return {?}
     */
    function () {
        return (VisibilityStatusConstant.VISIBLE === this.getVisibilityState() ||
            !this.isHidden());
    };
    /**
     * @return {?}
     */
    AngularPageVisibilityService.prototype.isPageHidden = /**
     * @return {?}
     */
    function () {
        return (VisibilityStatusConstant.HIDDEN === this.getVisibilityState() ||
            this.isHidden());
    };
    /**
     * @return {?}
     */
    AngularPageVisibilityService.prototype.isPagePrerender = /**
     * @return {?}
     */
    function () {
        return VisibilityStatusConstant.PRERENDER === this.getVisibilityState();
    };
    /**
     * @return {?}
     */
    AngularPageVisibilityService.prototype.isPageUnloaded = /**
     * @return {?}
     */
    function () {
        return VisibilityStatusConstant.UNLOADED === this.getVisibilityState();
    };
    /**
     * @private
     * @return {?}
     */
    AngularPageVisibilityService.prototype.isHidden = /**
     * @private
     * @return {?}
     */
    function () {
        return document[this.hidden];
    };
    /**
     * @private
     * @return {?}
     */
    AngularPageVisibilityService.prototype.getVisibilityState = /**
     * @private
     * @return {?}
     */
    function () {
        return document[this.visibilityState];
    };
    /**
     * @private
     * @return {?}
     */
    AngularPageVisibilityService.prototype.defineBrowserSupport = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof document[HiddenKeyConstant.DEFAULT] !== "undefined") {
            // Opera 12.10 and Firefox 18 and later support
            this.hidden = HiddenKeyConstant.DEFAULT;
            this.visibilityChange = "visibilitychange";
            this.visibilityState = "visibilityState";
        }
        else if (typeof document[HiddenKeyConstant.MS] !== "undefined") {
            this.hidden = HiddenKeyConstant.MS;
            this.visibilityChange = "msvisibilitychange";
            this.visibilityState = "msVisibilityState";
        }
        else if (typeof document[HiddenKeyConstant.WEB_KIT] !== "undefined") {
            this.hidden = HiddenKeyConstant.WEB_KIT;
            this.visibilityChange = "webkitvisibilitychange";
            this.visibilityState = "webkitVisibilityState";
        }
    };
    /**
     * @private
     * @return {?}
     */
    AngularPageVisibilityService.prototype.addEventListenerVibilityChange = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.defineBrowserSupport();
        document.addEventListener(this.visibilityChange, (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var vibilityState = _this.getVisibilityState();
            switch (vibilityState) {
                case VisibilityStatusConstant.VISIBLE:
                    _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                    _this.onPageVisibleSource.next();
                    break;
                case VisibilityStatusConstant.HIDDEN:
                    _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                    _this.onPageHiddenSource.next();
                    break;
                case VisibilityStatusConstant.PRERENDER:
                    _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.PRERENDER);
                    _this.onPagePrerenderSource.next();
                    break;
                case VisibilityStatusConstant.UNLOADED:
                    _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.UNLOADED);
                    _this.onPageUnloadedSource.next();
                    break;
                default:
                    if (_this.isHidden()) {
                        _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                        _this.onPageHiddenSource.next();
                    }
                    else {
                        _this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                        _this.onPageVisibleSource.next();
                    }
            }
        }), false);
    };
    AngularPageVisibilityService.decorators = [
        { type: Injectable, args: [{
                    providedIn: "root"
                },] }
    ];
    /** @nocollapse */
    AngularPageVisibilityService.ctorParameters = function () { return []; };
    /** @nocollapse */ AngularPageVisibilityService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularPageVisibilityService_Factory() { return new AngularPageVisibilityService(); }, token: AngularPageVisibilityService, providedIn: "root" });
    return AngularPageVisibilityService;
}());
if (false) {
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.onPageVisibleSource;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.onPageHiddenSource;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.onPagePrerenderSource;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.onPageUnloadedSource;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.onPageVisibilityChangeSource;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.hidden;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.visibilityChange;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.visibilityState;
    /**
     * @type {?}
     * @private
     */
    AngularPageVisibilityService.prototype.document;
    /** @type {?} */
    AngularPageVisibilityService.prototype.$onPageVisible;
    /** @type {?} */
    AngularPageVisibilityService.prototype.$onPageHidden;
    /** @type {?} */
    AngularPageVisibilityService.prototype.$onPagePrerender;
    /** @type {?} */
    AngularPageVisibilityService.prototype.$onPageUnloaded;
    /** @type {?} */
    AngularPageVisibilityService.prototype.$onPageVisibilityChange;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var providers = [AngularPageVisibilityService];
/** @type {?} */
var injector = ReflectiveInjector.resolveAndCreate(providers);
/** @type {?} */
var pageVisibilityService = injector.get(AngularPageVisibilityService);
/**
 * @return {?}
 */
function OnPageVisibilityChange() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        var originalMethod = descriptor.value;
        /** @type {?} */
        var originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        var onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageHiddenSubscription = pageVisibilityService.$onPageVisibilityChange
                .subscribe((/**
             * @param {?} visibilityState
             * @return {?}
             */
            function (visibilityState) { return originalMethod.call(_this, [visibilityState]); }));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        var originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageHiddenSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageHidden() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        var originalMethod = descriptor.value;
        /** @type {?} */
        var originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        var onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageHiddenSubscription = pageVisibilityService.$onPageHidden.subscribe((/**
             * @return {?}
             */
            function () { return originalMethod.call(_this); }));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        var originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageHiddenSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageVisible() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        var originalMethod = descriptor.value;
        /** @type {?} */
        var originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        var onPageVisibleSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageVisibleSubscription = pageVisibilityService.$onPageVisible.subscribe((/**
             * @return {?}
             */
            function () { return originalMethod.call(_this); }));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        var originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageVisibleSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPagePrerender() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        var originalMethod = descriptor.value;
        /** @type {?} */
        var originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        var onPagePrerenderSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPagePrerenderSubscription = pageVisibilityService.$onPagePrerender.subscribe((/**
             * @return {?}
             */
            function () { return originalMethod.call(_this); }));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        var originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPagePrerenderSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}
/**
 * @return {?}
 */
function OnPageUnloaded() {
    return (/**
     * @param {?} target
     * @param {?} propertyKey
     * @param {?} descriptor
     * @return {?}
     */
    function (target, propertyKey, descriptor) {
        /** @type {?} */
        var originalMethod = descriptor.value;
        /** @type {?} */
        var originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        var onPageUnloadedSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageUnloadedSubscription = pageVisibilityService.$onPageUnloaded.subscribe((/**
             * @return {?}
             */
            function () { return originalMethod.call(_this); }));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        var originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            onPageUnloadedSubscription.unsubscribe();
            if (originalNgOnDestroy) {
                originalNgOnDestroy.call(this, args);
            }
        });
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularPageVisibilityModule = /** @class */ (function () {
    function AngularPageVisibilityModule() {
    }
    AngularPageVisibilityModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [],
                    providers: [AngularPageVisibilityService],
                    exports: []
                },] }
    ];
    return AngularPageVisibilityModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AngularPageVisibilityModule, AngularPageVisibilityService, AngularPageVisibilityStateEnum, OnPageHidden, OnPagePrerender, OnPageUnloaded, OnPageVisibilityChange, OnPageVisible };
//# sourceMappingURL=angular-page-visibility.js.map

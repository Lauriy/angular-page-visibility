import { Injectable, ɵɵdefineInjectable, ReflectiveInjector, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const AngularPageVisibilityStateEnum = {
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
class HiddenKeyConstant {
}
HiddenKeyConstant.DEFAULT = "hidden";
HiddenKeyConstant.MS = "msHidden";
HiddenKeyConstant.WEB_KIT = "webkitHidden";
if (false) {
    /** @type {?} */
    HiddenKeyConstant.DEFAULT;
    /** @type {?} */
    HiddenKeyConstant.MS;
    /** @type {?} */
    HiddenKeyConstant.WEB_KIT;
}
class VisibilityStatusConstant {
}
VisibilityStatusConstant.VISIBLE = "visible";
VisibilityStatusConstant.HIDDEN = "hidden";
VisibilityStatusConstant.PRERENDER = "prerender";
VisibilityStatusConstant.UNLOADED = "unloaded";
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
class AngularPageVisibilityService {
    constructor() {
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
    isPageVisible() {
        return (VisibilityStatusConstant.VISIBLE === this.getVisibilityState() ||
            !this.isHidden());
    }
    /**
     * @return {?}
     */
    isPageHidden() {
        return (VisibilityStatusConstant.HIDDEN === this.getVisibilityState() ||
            this.isHidden());
    }
    /**
     * @return {?}
     */
    isPagePrerender() {
        return VisibilityStatusConstant.PRERENDER === this.getVisibilityState();
    }
    /**
     * @return {?}
     */
    isPageUnloaded() {
        return VisibilityStatusConstant.UNLOADED === this.getVisibilityState();
    }
    /**
     * @private
     * @return {?}
     */
    isHidden() {
        return document[this.hidden];
    }
    /**
     * @private
     * @return {?}
     */
    getVisibilityState() {
        return document[this.visibilityState];
    }
    /**
     * @private
     * @return {?}
     */
    defineBrowserSupport() {
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
    }
    /**
     * @private
     * @return {?}
     */
    addEventListenerVibilityChange() {
        this.defineBrowserSupport();
        document.addEventListener(this.visibilityChange, (/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const vibilityState = this.getVisibilityState();
            switch (vibilityState) {
                case VisibilityStatusConstant.VISIBLE:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                    this.onPageVisibleSource.next();
                    break;
                case VisibilityStatusConstant.HIDDEN:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                    this.onPageHiddenSource.next();
                    break;
                case VisibilityStatusConstant.PRERENDER:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.PRERENDER);
                    this.onPagePrerenderSource.next();
                    break;
                case VisibilityStatusConstant.UNLOADED:
                    this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.UNLOADED);
                    this.onPageUnloadedSource.next();
                    break;
                default:
                    if (this.isHidden()) {
                        this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.HIDDEN);
                        this.onPageHiddenSource.next();
                    }
                    else {
                        this.onPageVisibilityChangeSource.next(AngularPageVisibilityStateEnum.VISIBLE);
                        this.onPageVisibleSource.next();
                    }
            }
        }), false);
    }
}
AngularPageVisibilityService.decorators = [
    { type: Injectable, args: [{
                providedIn: "root"
            },] }
];
/** @nocollapse */
AngularPageVisibilityService.ctorParameters = () => [];
/** @nocollapse */ AngularPageVisibilityService.ngInjectableDef = ɵɵdefineInjectable({ factory: function AngularPageVisibilityService_Factory() { return new AngularPageVisibilityService(); }, token: AngularPageVisibilityService, providedIn: "root" });
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
const providers = [AngularPageVisibilityService];
/** @type {?} */
const injector = ReflectiveInjector.resolveAndCreate(providers);
/** @type {?} */
const pageVisibilityService = injector.get(AngularPageVisibilityService);
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
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription = pageVisibilityService.$onPageVisibilityChange
                .subscribe((/**
             * @param {?} visibilityState
             * @return {?}
             */
            (visibilityState) => originalMethod.call(this, [visibilityState])));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
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
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageHiddenSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageHiddenSubscription = pageVisibilityService.$onPageHidden.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
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
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageVisibleSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageVisibleSubscription = pageVisibilityService.$onPageVisible.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
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
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPagePrerenderSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPagePrerenderSubscription = pageVisibilityService.$onPagePrerender.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
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
        const originalMethod = descriptor.value;
        /** @type {?} */
        const originalNgOnInit = target.ngOnInit;
        /** @type {?} */
        let onPageUnloadedSubscription;
        target.ngOnInit = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
            onPageUnloadedSubscription = pageVisibilityService.$onPageUnloaded.subscribe((/**
             * @return {?}
             */
            () => originalMethod.call(this)));
            if (originalNgOnInit) {
                originalNgOnInit.call(this, args);
            }
        });
        /** @type {?} */
        const originalNgOnDestroy = target.ngOnDestroy;
        target.ngOnDestroy = (/**
         * @param {...?} args
         * @return {?}
         */
        function (...args) {
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
class AngularPageVisibilityModule {
}
AngularPageVisibilityModule.decorators = [
    { type: NgModule, args: [{
                imports: [],
                declarations: [],
                providers: [AngularPageVisibilityService],
                exports: []
            },] }
];

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

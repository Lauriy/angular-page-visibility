/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AngularPageVisibilityStateEnum } from "./angular-page-visibility.state.enum";
import * as i0 from "@angular/core";
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
    /** @nocollapse */ AngularPageVisibilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularPageVisibilityService_Factory() { return new AngularPageVisibilityService(); }, token: AngularPageVisibilityService, providedIn: "root" });
    return AngularPageVisibilityService;
}());
export { AngularPageVisibilityService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFdEY7SUFBQTtJQUlBLENBQUM7SUFIUSx5QkFBTyxHQUFHLFFBQVEsQ0FBQztJQUNuQixvQkFBRSxHQUFHLFVBQVUsQ0FBQztJQUNoQix5QkFBTyxHQUFHLGNBQWMsQ0FBQztJQUNsQyx3QkFBQztDQUFBLEFBSkQsSUFJQzs7O0lBSEMsMEJBQTBCOztJQUMxQixxQkFBdUI7O0lBQ3ZCLDBCQUFnQzs7QUFHbEM7SUFBQTtJQUtBLENBQUM7SUFKUSxnQ0FBTyxHQUFHLFNBQVMsQ0FBQztJQUNwQiwrQkFBTSxHQUFHLFFBQVEsQ0FBQztJQUNsQixrQ0FBUyxHQUFHLFdBQVcsQ0FBQztJQUN4QixpQ0FBUSxHQUFHLFVBQVUsQ0FBQztJQUMvQiwrQkFBQztDQUFBLEFBTEQsSUFLQzs7O0lBSkMsaUNBQTJCOztJQUMzQixnQ0FBeUI7O0lBQ3pCLG1DQUErQjs7SUFDL0Isa0NBQTZCOztBQUcvQjtJQXlCRTtRQXJCUSx3QkFBbUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN6RCx1QkFBa0IsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUN4RCwwQkFBcUIsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMzRCx5QkFBb0IsR0FBa0IsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMxRCxpQ0FBNEIsR0FFaEMsSUFBSSxPQUFPLEVBQWtDLENBQUM7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QUUsTUFBTTtpQkFDbkI7Ozs7O3VDQW5CRDtDQTZJQyxBQTVIRCxJQTRIQztTQXpIWSw0QkFBNEI7Ozs7OztJQUN2QywyREFBaUU7Ozs7O0lBQ2pFLDBEQUFnRTs7Ozs7SUFDaEUsNkRBQW1FOzs7OztJQUNuRSw0REFBa0U7Ozs7O0lBQ2xFLG9FQUVrRDs7Ozs7SUFDbEQsOENBQXVCOzs7OztJQUN2Qix3REFBaUM7Ozs7O0lBQ2pDLHVEQUFnQzs7Ozs7SUFDaEMsZ0RBQTJCOztJQUMzQixzREFBMkU7O0lBQzNFLHFEQUF5RTs7SUFDekUsd0RBRThDOztJQUM5Qyx1REFBNkU7O0lBQzdFLCtEQUVxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCB9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgeyBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0gfSBmcm9tIFwiLi9hbmd1bGFyLXBhZ2UtdmlzaWJpbGl0eS5zdGF0ZS5lbnVtXCI7XG5cbmNsYXNzIEhpZGRlbktleUNvbnN0YW50IHtcbiAgc3RhdGljIERFRkFVTFQgPSBcImhpZGRlblwiO1xuICBzdGF0aWMgTVMgPSBcIm1zSGlkZGVuXCI7XG4gIHN0YXRpYyBXRUJfS0lUID0gXCJ3ZWJraXRIaWRkZW5cIjtcbn1cblxuY2xhc3MgVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50IHtcbiAgc3RhdGljIFZJU0lCTEUgPSBcInZpc2libGVcIjtcbiAgc3RhdGljIEhJRERFTiA9IFwiaGlkZGVuXCI7XG4gIHN0YXRpYyBQUkVSRU5ERVIgPSBcInByZXJlbmRlclwiO1xuICBzdGF0aWMgVU5MT0FERUQgPSBcInVubG9hZGVkXCI7XG59XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U2VydmljZSB7XG4gIHByaXZhdGUgb25QYWdlVmlzaWJsZVNvdXJjZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgb25QYWdlSGlkZGVuU291cmNlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvblBhZ2VQcmVyZW5kZXJTb3VyY2U6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG9uUGFnZVVubG9hZGVkU291cmNlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlOiBTdWJqZWN0PFxuICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bVxuICA+ID0gbmV3IFN1YmplY3Q8QW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtPigpO1xuICBwcml2YXRlIGhpZGRlbjogc3RyaW5nO1xuICBwcml2YXRlIHZpc2liaWxpdHlDaGFuZ2U6IHN0cmluZztcbiAgcHJpdmF0ZSB2aXNpYmlsaXR5U3RhdGU6IHN0cmluZztcbiAgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnQ7XG4gICRvblBhZ2VWaXNpYmxlOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5vblBhZ2VWaXNpYmxlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAkb25QYWdlSGlkZGVuOiBPYnNlcnZhYmxlPHZvaWQ+ID0gdGhpcy5vblBhZ2VIaWRkZW5Tb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICRvblBhZ2VQcmVyZW5kZXI6IE9ic2VydmFibGU8XG4gICAgdm9pZFxuICA+ID0gdGhpcy5vblBhZ2VQcmVyZW5kZXJTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICRvblBhZ2VVbmxvYWRlZDogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMub25QYWdlVW5sb2FkZWRTb3VyY2UuYXNPYnNlcnZhYmxlKCk7XG4gICRvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlOiBPYnNlcnZhYmxlPFxuICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bVxuICA+ID0gdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lclZpYmlsaXR5Q2hhbmdlKCk7XG4gIH1cblxuICBpc1BhZ2VWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBWaXNpYmlsaXR5U3RhdHVzQ29uc3RhbnQuVklTSUJMRSA9PT0gdGhpcy5nZXRWaXNpYmlsaXR5U3RhdGUoKSB8fFxuICAgICAgIXRoaXMuaXNIaWRkZW4oKVxuICAgICk7XG4gIH1cblxuICBpc1BhZ2VIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5ISURERU4gPT09IHRoaXMuZ2V0VmlzaWJpbGl0eVN0YXRlKCkgfHxcbiAgICAgIHRoaXMuaXNIaWRkZW4oKVxuICAgICk7XG4gIH1cblxuICBpc1BhZ2VQcmVyZW5kZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5QUkVSRU5ERVIgPT09IHRoaXMuZ2V0VmlzaWJpbGl0eVN0YXRlKCk7XG4gIH1cblxuICBpc1BhZ2VVbmxvYWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50LlVOTE9BREVEID09PSB0aGlzLmdldFZpc2liaWxpdHlTdGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0hpZGRlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZG9jdW1lbnRbdGhpcy5oaWRkZW5dO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRWaXNpYmlsaXR5U3RhdGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZG9jdW1lbnRbdGhpcy52aXNpYmlsaXR5U3RhdGVdO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWZpbmVCcm93c2VyU3VwcG9ydCgpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50W0hpZGRlbktleUNvbnN0YW50LkRFRkFVTFRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAvLyBPcGVyYSAxMi4xMCBhbmQgRmlyZWZveCAxOCBhbmQgbGF0ZXIgc3VwcG9ydFxuICAgICAgdGhpcy5oaWRkZW4gPSBIaWRkZW5LZXlDb25zdGFudC5ERUZBVUxUO1xuICAgICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlID0gXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgICB0aGlzLnZpc2liaWxpdHlTdGF0ZSA9IFwidmlzaWJpbGl0eVN0YXRlXCI7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZG9jdW1lbnRbSGlkZGVuS2V5Q29uc3RhbnQuTVNdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmhpZGRlbiA9IEhpZGRlbktleUNvbnN0YW50Lk1TO1xuICAgICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlID0gXCJtc3Zpc2liaWxpdHljaGFuZ2VcIjtcbiAgICAgIHRoaXMudmlzaWJpbGl0eVN0YXRlID0gXCJtc1Zpc2liaWxpdHlTdGF0ZVwiO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50W0hpZGRlbktleUNvbnN0YW50LldFQl9LSVRdICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0aGlzLmhpZGRlbiA9IEhpZGRlbktleUNvbnN0YW50LldFQl9LSVQ7XG4gICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UgPSBcIndlYmtpdHZpc2liaWxpdHljaGFuZ2VcIjtcbiAgICAgIHRoaXMudmlzaWJpbGl0eVN0YXRlID0gXCJ3ZWJraXRWaXNpYmlsaXR5U3RhdGVcIjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJWaWJpbGl0eUNoYW5nZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlZmluZUJyb3dzZXJTdXBwb3J0KCk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgY29uc3QgdmliaWxpdHlTdGF0ZSA9IHRoaXMuZ2V0VmlzaWJpbGl0eVN0YXRlKCk7XG4gICAgICAgIHN3aXRjaCAodmliaWxpdHlTdGF0ZSkge1xuICAgICAgICAgIGNhc2UgVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50LlZJU0lCTEU6XG4gICAgICAgICAgICB0aGlzLm9uUGFnZVZpc2liaWxpdHlDaGFuZ2VTb3VyY2UubmV4dChcbiAgICAgICAgICAgICAgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtLlZJU0lCTEVcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uUGFnZVZpc2libGVTb3VyY2UubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBWaXNpYmlsaXR5U3RhdHVzQ29uc3RhbnQuSElEREVOOlxuICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bS5ISURERU5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uUGFnZUhpZGRlblNvdXJjZS5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5QUkVSRU5ERVI6XG4gICAgICAgICAgICB0aGlzLm9uUGFnZVZpc2liaWxpdHlDaGFuZ2VTb3VyY2UubmV4dChcbiAgICAgICAgICAgICAgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtLlBSRVJFTkRFUlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMub25QYWdlUHJlcmVuZGVyU291cmNlLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50LlVOTE9BREVEOlxuICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bS5VTkxPQURFRFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMub25QYWdlVW5sb2FkZWRTb3VyY2UubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSGlkZGVuKCkpIHtcbiAgICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgICAgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtLkhJRERFTlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLm9uUGFnZUhpZGRlblNvdXJjZS5uZXh0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLm9uUGFnZVZpc2liaWxpdHlDaGFuZ2VTb3VyY2UubmV4dChcbiAgICAgICAgICAgICAgICBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0uVklTSUJMRVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLm9uUGFnZVZpc2libGVTb3VyY2UubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9XG59XG4iXX0=
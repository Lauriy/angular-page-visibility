/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { AngularPageVisibilityStateEnum } from "./angular-page-visibility.state.enum";
import * as i0 from "@angular/core";
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
export class AngularPageVisibilityService {
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
/** @nocollapse */ AngularPageVisibilityService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function AngularPageVisibilityService_Factory() { return new AngularPageVisibilityService(); }, token: AngularPageVisibilityService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMzQyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQzs7QUFFdEYsTUFBTSxpQkFBaUI7O0FBQ2QseUJBQU8sR0FBRyxRQUFRLENBQUM7QUFDbkIsb0JBQUUsR0FBRyxVQUFVLENBQUM7QUFDaEIseUJBQU8sR0FBRyxjQUFjLENBQUM7OztJQUZoQywwQkFBMEI7O0lBQzFCLHFCQUF1Qjs7SUFDdkIsMEJBQWdDOztBQUdsQyxNQUFNLHdCQUF3Qjs7QUFDckIsZ0NBQU8sR0FBRyxTQUFTLENBQUM7QUFDcEIsK0JBQU0sR0FBRyxRQUFRLENBQUM7QUFDbEIsa0NBQVMsR0FBRyxXQUFXLENBQUM7QUFDeEIsaUNBQVEsR0FBRyxVQUFVLENBQUM7OztJQUg3QixpQ0FBMkI7O0lBQzNCLGdDQUF5Qjs7SUFDekIsbUNBQStCOztJQUMvQixrQ0FBNkI7O0FBTS9CLE1BQU0sT0FBTyw0QkFBNEI7SUFzQnZDO1FBckJRLHdCQUFtQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3pELHVCQUFrQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQ3hELDBCQUFxQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzNELHlCQUFvQixHQUFrQixJQUFJLE9BQU8sRUFBUSxDQUFDO1FBQzFELGlDQUE0QixHQUVoQyxJQUFJLE9BQU8sRUFBa0MsQ0FBQztRQUtsRCxtQkFBYyxHQUFxQixJQUFJLENBQUMsbUJBQW1CLENB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O0lBQ2xELDhDQUF1Qjs7Ozs7SUFDdkIsd0RBQWlDOzs7OztJQUNqQyx1REFBZ0M7Ozs7O0lBQ2hDLGdEQUEyQjs7SUFDM0Isc0RBQTJFOztJQUMzRSxxREFBeUU7O0lBQ3pFLHdEQUU4Qzs7SUFDOUMsdURBQTZFOztJQUM3RSwrREFFcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtIH0gZnJvbSBcIi4vYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuc3RhdGUuZW51bVwiO1xuXG5jbGFzcyBIaWRkZW5LZXlDb25zdGFudCB7XG4gIHN0YXRpYyBERUZBVUxUID0gXCJoaWRkZW5cIjtcbiAgc3RhdGljIE1TID0gXCJtc0hpZGRlblwiO1xuICBzdGF0aWMgV0VCX0tJVCA9IFwid2Via2l0SGlkZGVuXCI7XG59XG5cbmNsYXNzIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudCB7XG4gIHN0YXRpYyBWSVNJQkxFID0gXCJ2aXNpYmxlXCI7XG4gIHN0YXRpYyBISURERU4gPSBcImhpZGRlblwiO1xuICBzdGF0aWMgUFJFUkVOREVSID0gXCJwcmVyZW5kZXJcIjtcbiAgc3RhdGljIFVOTE9BREVEID0gXCJ1bmxvYWRlZFwiO1xufVxuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVNlcnZpY2Uge1xuICBwcml2YXRlIG9uUGFnZVZpc2libGVTb3VyY2U6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBwcml2YXRlIG9uUGFnZUhpZGRlblNvdXJjZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgb25QYWdlUHJlcmVuZGVyU291cmNlOiBTdWJqZWN0PHZvaWQ+ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBvblBhZ2VVbmxvYWRlZFNvdXJjZTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIHByaXZhdGUgb25QYWdlVmlzaWJpbGl0eUNoYW5nZVNvdXJjZTogU3ViamVjdDxcbiAgICBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW1cbiAgPiA9IG5ldyBTdWJqZWN0PEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bT4oKTtcbiAgcHJpdmF0ZSBoaWRkZW46IHN0cmluZztcbiAgcHJpdmF0ZSB2aXNpYmlsaXR5Q2hhbmdlOiBzdHJpbmc7XG4gIHByaXZhdGUgdmlzaWJpbGl0eVN0YXRlOiBzdHJpbmc7XG4gIHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50O1xuICAkb25QYWdlVmlzaWJsZTogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMub25QYWdlVmlzaWJsZVNvdXJjZS5hc09ic2VydmFibGUoKTtcbiAgJG9uUGFnZUhpZGRlbjogT2JzZXJ2YWJsZTx2b2lkPiA9IHRoaXMub25QYWdlSGlkZGVuU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAkb25QYWdlUHJlcmVuZGVyOiBPYnNlcnZhYmxlPFxuICAgIHZvaWRcbiAgPiA9IHRoaXMub25QYWdlUHJlcmVuZGVyU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAkb25QYWdlVW5sb2FkZWQ6IE9ic2VydmFibGU8dm9pZD4gPSB0aGlzLm9uUGFnZVVubG9hZGVkU291cmNlLmFzT2JzZXJ2YWJsZSgpO1xuICAkb25QYWdlVmlzaWJpbGl0eUNoYW5nZTogT2JzZXJ2YWJsZTxcbiAgICBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW1cbiAgPiA9IHRoaXMub25QYWdlVmlzaWJpbGl0eUNoYW5nZVNvdXJjZS5hc09ic2VydmFibGUoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJWaWJpbGl0eUNoYW5nZSgpO1xuICB9XG5cbiAgaXNQYWdlVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50LlZJU0lCTEUgPT09IHRoaXMuZ2V0VmlzaWJpbGl0eVN0YXRlKCkgfHxcbiAgICAgICF0aGlzLmlzSGlkZGVuKClcbiAgICApO1xuICB9XG5cbiAgaXNQYWdlSGlkZGVuKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICBWaXNpYmlsaXR5U3RhdHVzQ29uc3RhbnQuSElEREVOID09PSB0aGlzLmdldFZpc2liaWxpdHlTdGF0ZSgpIHx8XG4gICAgICB0aGlzLmlzSGlkZGVuKClcbiAgICApO1xuICB9XG5cbiAgaXNQYWdlUHJlcmVuZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBWaXNpYmlsaXR5U3RhdHVzQ29uc3RhbnQuUFJFUkVOREVSID09PSB0aGlzLmdldFZpc2liaWxpdHlTdGF0ZSgpO1xuICB9XG5cbiAgaXNQYWdlVW5sb2FkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5VTkxPQURFRCA9PT0gdGhpcy5nZXRWaXNpYmlsaXR5U3RhdGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNIaWRkZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGRvY3VtZW50W3RoaXMuaGlkZGVuXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VmlzaWJpbGl0eVN0YXRlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRvY3VtZW50W3RoaXMudmlzaWJpbGl0eVN0YXRlXTtcbiAgfVxuXG4gIHByaXZhdGUgZGVmaW5lQnJvd3NlclN1cHBvcnQoKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudFtIaWRkZW5LZXlDb25zdGFudC5ERUZBVUxUXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgLy8gT3BlcmEgMTIuMTAgYW5kIEZpcmVmb3ggMTggYW5kIGxhdGVyIHN1cHBvcnRcbiAgICAgIHRoaXMuaGlkZGVuID0gSGlkZGVuS2V5Q29uc3RhbnQuREVGQVVMVDtcbiAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwidmlzaWJpbGl0eWNoYW5nZVwiO1xuICAgICAgdGhpcy52aXNpYmlsaXR5U3RhdGUgPSBcInZpc2liaWxpdHlTdGF0ZVwiO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGRvY3VtZW50W0hpZGRlbktleUNvbnN0YW50Lk1TXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5oaWRkZW4gPSBIaWRkZW5LZXlDb25zdGFudC5NUztcbiAgICAgIHRoaXMudmlzaWJpbGl0eUNoYW5nZSA9IFwibXN2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgICB0aGlzLnZpc2liaWxpdHlTdGF0ZSA9IFwibXNWaXNpYmlsaXR5U3RhdGVcIjtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudFtIaWRkZW5LZXlDb25zdGFudC5XRUJfS0lUXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdGhpcy5oaWRkZW4gPSBIaWRkZW5LZXlDb25zdGFudC5XRUJfS0lUO1xuICAgICAgdGhpcy52aXNpYmlsaXR5Q2hhbmdlID0gXCJ3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlXCI7XG4gICAgICB0aGlzLnZpc2liaWxpdHlTdGF0ZSA9IFwid2Via2l0VmlzaWJpbGl0eVN0YXRlXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhZGRFdmVudExpc3RlbmVyVmliaWxpdHlDaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5kZWZpbmVCcm93c2VyU3VwcG9ydCgpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICB0aGlzLnZpc2liaWxpdHlDaGFuZ2UsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpYmlsaXR5U3RhdGUgPSB0aGlzLmdldFZpc2liaWxpdHlTdGF0ZSgpO1xuICAgICAgICBzd2l0Y2ggKHZpYmlsaXR5U3RhdGUpIHtcbiAgICAgICAgICBjYXNlIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5WSVNJQkxFOlxuICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bS5WSVNJQkxFXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmxlU291cmNlLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgVmlzaWJpbGl0eVN0YXR1c0NvbnN0YW50LkhJRERFTjpcbiAgICAgICAgICAgIHRoaXMub25QYWdlVmlzaWJpbGl0eUNoYW5nZVNvdXJjZS5uZXh0KFxuICAgICAgICAgICAgICBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0uSElEREVOXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5vblBhZ2VIaWRkZW5Tb3VyY2UubmV4dCgpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBWaXNpYmlsaXR5U3RhdHVzQ29uc3RhbnQuUFJFUkVOREVSOlxuICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bS5QUkVSRU5ERVJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uUGFnZVByZXJlbmRlclNvdXJjZS5uZXh0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFZpc2liaWxpdHlTdGF0dXNDb25zdGFudC5VTkxPQURFRDpcbiAgICAgICAgICAgIHRoaXMub25QYWdlVmlzaWJpbGl0eUNoYW5nZVNvdXJjZS5uZXh0KFxuICAgICAgICAgICAgICBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0uVU5MT0FERURcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLm9uUGFnZVVubG9hZGVkU291cmNlLm5leHQoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAodGhpcy5pc0hpZGRlbigpKSB7XG4gICAgICAgICAgICAgIHRoaXMub25QYWdlVmlzaWJpbGl0eUNoYW5nZVNvdXJjZS5uZXh0KFxuICAgICAgICAgICAgICAgIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bS5ISURERU5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5vblBhZ2VIaWRkZW5Tb3VyY2UubmV4dCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmlsaXR5Q2hhbmdlU291cmNlLm5leHQoXG4gICAgICAgICAgICAgICAgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtLlZJU0lCTEVcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgdGhpcy5vblBhZ2VWaXNpYmxlU291cmNlLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfVxufVxuIl19
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReflectiveInjector } from '@angular/core';
import { AngularPageVisibilityService } from './angular-page-visibility.service';
/** @type {?} */
const providers = [AngularPageVisibilityService];
/** @type {?} */
const injector = ReflectiveInjector.resolveAndCreate(providers);
/** @type {?} */
const pageVisibilityService = injector.get(AngularPageVisibilityService);
/**
 * @return {?}
 */
export function OnPageVisibilityChange() {
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
export function OnPageHidden() {
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
export function OnPageVisible() {
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
export function OnPagePrerender() {
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
export function OnPageUnloaded() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LmRlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7TUFJM0UsU0FBUyxHQUFlLENBQUUsNEJBQTRCLENBQUU7O01BQ3hELFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBRSxTQUFTLENBQUU7O01BQzNELHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUUsNEJBQTRCLENBQUU7Ozs7QUFFMUUsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQzs7Ozs7O0lBQU8sVUFBVyxNQUFXLEVBQUcsV0FBbUIsRUFBRyxVQUE4Qjs7Y0FDNUUsY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLOztjQUNqQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUTs7WUFDcEMsd0JBQXNDO1FBQzFDLE1BQU0sQ0FBQyxRQUFROzs7O1FBQUcsVUFBUyxHQUFHLElBQUk7WUFDaEMsd0JBQXdCLEdBQUcscUJBQXFCLENBQUMsdUJBQXVCO2lCQUN2RSxTQUFTOzs7O1lBQUUsQ0FBRSxlQUErQyxFQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFFLGVBQWUsQ0FBRSxDQUFDLEVBQUMsQ0FBQztZQUNuSCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFBLENBQUM7O2NBQ0ksbUJBQW1CLEdBQUcsTUFBTSxDQUFDLFdBQVc7UUFDOUMsTUFBTSxD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LElBQUksQ0FBQyxDQUFDO2FBQ3RDO1FBQ0gsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDLEVBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvdmlkZXIsIFJlZmxlY3RpdmVJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U2VydmljZSB9IGZyb20gJy4vYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuc2VydmljZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0gfSBmcm9tICcuL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LnN0YXRlLmVudW0nO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmNvbnN0IHByb3ZpZGVyczogUHJvdmlkZXJbXSA9IFsgQW5ndWxhclBhZ2VWaXNpYmlsaXR5U2VydmljZSBdO1xuY29uc3QgaW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZSggcHJvdmlkZXJzICk7XG5jb25zdCBwYWdlVmlzaWJpbGl0eVNlcnZpY2UgPSBpbmplY3Rvci5nZXQoIEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVNlcnZpY2UgKTtcblxuZXhwb3J0IGZ1bmN0aW9uIE9uUGFnZVZpc2liaWxpdHlDaGFuZ2UgKCk6IE1ldGhvZERlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbiAoIHRhcmdldDogYW55ICwgcHJvcGVydHlLZXk6IHN0cmluZyAsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uSW5pdCA9IHRhcmdldC5uZ09uSW5pdDtcbiAgICBsZXQgb25QYWdlSGlkZGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgdGFyZ2V0Lm5nT25Jbml0ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlSGlkZGVuU3Vic2NyaXB0aW9uID0gcGFnZVZpc2liaWxpdHlTZXJ2aWNlLiRvblBhZ2VWaXNpYmlsaXR5Q2hhbmdlXG4gICAgICAuc3Vic2NyaWJlKCAoIHZpc2liaWxpdHlTdGF0ZTogQW5ndWxhclBhZ2VWaXNpYmlsaXR5U3RhdGVFbnVtICkgPT4gb3JpZ2luYWxNZXRob2QuY2FsbCh0aGlzLCBbIHZpc2liaWxpdHlTdGF0ZSBdKSk7XG4gICAgICBpZiAob3JpZ2luYWxOZ09uSW5pdCkge1xuICAgICAgICBvcmlnaW5hbE5nT25Jbml0LmNhbGwodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25EZXN0cm95ID0gdGFyZ2V0Lm5nT25EZXN0cm95O1xuICAgIHRhcmdldC5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIG9uUGFnZUhpZGRlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkRlc3Ryb3kpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uRGVzdHJveS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPblBhZ2VIaWRkZW4gKCk6IE1ldGhvZERlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbiAoIHRhcmdldDogYW55ICwgcHJvcGVydHlLZXk6IHN0cmluZyAsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uSW5pdCA9IHRhcmdldC5uZ09uSW5pdDtcbiAgICBsZXQgb25QYWdlSGlkZGVuU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgdGFyZ2V0Lm5nT25Jbml0ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlSGlkZGVuU3Vic2NyaXB0aW9uID0gcGFnZVZpc2liaWxpdHlTZXJ2aWNlLiRvblBhZ2VIaWRkZW4uc3Vic2NyaWJlKCgpID0+IG9yaWdpbmFsTWV0aG9kLmNhbGwodGhpcykpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkluaXQpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uSW5pdC5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uRGVzdHJveSA9IHRhcmdldC5uZ09uRGVzdHJveTtcbiAgICB0YXJnZXQubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VIaWRkZW5TdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25EZXN0cm95KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkRlc3Ryb3kuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT25QYWdlVmlzaWJsZSAoKTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICggdGFyZ2V0OiBhbnkgLCBwcm9wZXJ0eUtleTogc3RyaW5nICwgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICkge1xuICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25Jbml0ID0gdGFyZ2V0Lm5nT25Jbml0O1xuICAgIGxldCBvblBhZ2VWaXNpYmxlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgdGFyZ2V0Lm5nT25Jbml0ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlVmlzaWJsZVN1YnNjcmlwdGlvbiA9IHBhZ2VWaXNpYmlsaXR5U2VydmljZS4kb25QYWdlVmlzaWJsZS5zdWJzY3JpYmUoKCkgPT4gb3JpZ2luYWxNZXRob2QuY2FsbCh0aGlzKSk7XG4gICAgICBpZiAob3JpZ2luYWxOZ09uSW5pdCkge1xuICAgICAgICBvcmlnaW5hbE5nT25Jbml0LmNhbGwodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25EZXN0cm95ID0gdGFyZ2V0Lm5nT25EZXN0cm95O1xuICAgIHRhcmdldC5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIG9uUGFnZVZpc2libGVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25EZXN0cm95KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkRlc3Ryb3kuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT25QYWdlUHJlcmVuZGVyICgpOiBNZXRob2REZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24gKCB0YXJnZXQ6IGFueSAsIHByb3BlcnR5S2V5OiBzdHJpbmcgLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkluaXQgPSB0YXJnZXQubmdPbkluaXQ7XG4gICAgbGV0IG9uUGFnZVByZXJlbmRlclN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIHRhcmdldC5uZ09uSW5pdCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIG9uUGFnZVByZXJlbmRlclN1YnNjcmlwdGlvbiA9IHBhZ2VWaXNpYmlsaXR5U2VydmljZS4kb25QYWdlUHJlcmVuZGVyLnN1YnNjcmliZSgoKSA9PiBvcmlnaW5hbE1ldGhvZC5jYWxsKHRoaXMpKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25Jbml0KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkluaXQuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkRlc3Ryb3kgPSB0YXJnZXQubmdPbkRlc3Ryb3k7XG4gICAgdGFyZ2V0Lm5nT25EZXN0cm95ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlUHJlcmVuZGVyU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob3JpZ2luYWxOZ09uRGVzdHJveSkge1xuICAgICAgICBvcmlnaW5hbE5nT25EZXN0cm95LmNhbGwodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9uUGFnZVVubG9hZGVkICgpOiBNZXRob2REZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24gKCB0YXJnZXQ6IGFueSAsIHByb3BlcnR5S2V5OiBzdHJpbmcgLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkluaXQgPSB0YXJnZXQubmdPbkluaXQ7XG4gICAgbGV0IG9uUGFnZVVubG9hZGVkU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgdGFyZ2V0Lm5nT25Jbml0ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlVW5sb2FkZWRTdWJzY3JpcHRpb24gPSBwYWdlVmlzaWJpbGl0eVNlcnZpY2UuJG9uUGFnZVVubG9hZGVkLnN1YnNjcmliZSgoKSA9PiBvcmlnaW5hbE1ldGhvZC5jYWxsKHRoaXMpKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25Jbml0KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkluaXQuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkRlc3Ryb3kgPSB0YXJnZXQubmdPbkRlc3Ryb3k7XG4gICAgdGFyZ2V0Lm5nT25EZXN0cm95ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlVW5sb2FkZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25EZXN0cm95KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkRlc3Ryb3kuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIl19
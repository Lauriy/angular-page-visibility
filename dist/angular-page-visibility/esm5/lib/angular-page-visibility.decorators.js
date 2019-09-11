/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ReflectiveInjector } from '@angular/core';
import { AngularPageVisibilityService } from './angular-page-visibility.service';
/** @type {?} */
var providers = [AngularPageVisibilityService];
/** @type {?} */
var injector = ReflectiveInjector.resolveAndCreate(providers);
/** @type {?} */
var pageVisibilityService = injector.get(AngularPageVisibilityService);
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
export function OnPageHidden() {
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
export function OnPageVisible() {
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
export function OnPagePrerender() {
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
export function OnPageUnloaded() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LyIsInNvdXJjZXMiOlsibGliL2FuZ3VsYXItcGFnZS12aXNpYmlsaXR5LmRlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBWSxrQkFBa0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM3RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7SUFJM0UsU0FBUyxHQUFlLENBQUUsNEJBQTRCLENBQUU7O0lBQ3hELFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBRSxTQUFTLENBQUU7O0lBQzNELHFCQUFxQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUUsNEJBQTRCLENBQUU7Ozs7QUFFMUUsTUFBTSxVQUFVLHNCQUFzQjtJQUNwQzs7Ozs7O0lBQU8sVUFBVyxNQUFXLEVBQUcsV0FBbUIsRUFBRyxVQUE4Qjs7WUFDNUUsY0FBYyxHQUFHLFVBQVUsQ0FBQyxLQUFLOztZQUNqQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsUUFBUTs7WUFDcEMsd0JBQXNDO1FBQzFDLE1BQU0sQ0FBQyxRQUFROzs7O1FBQUc7WUFBQSxpQkFNakI7WUFOMEIsY0FBTztpQkFBUCxVQUFPLEVBQVAscUJBQU8sRUFBUCxJQUFPO2dCQUFQLHlCQUFPOztZQUNoQyx3QkFBd0IsR0FBRyxxQkFBcUIsQ0FBQyx1QkFBdUI7aUJBQ3ZFLFNBQVM7Ozs7WUFBRSxVQUFFLGVBQStDLElBQU0sT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksRUFBRSxDQUFFLGVBQWUsQ0FBRSxDQUFDLEVBQTlDLENBQThDLEVBQUMsQ0FBQztZQUNuSCxJQUFJLGdCQUFnQixFQUFFO2dCQUNwQixnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ25DO1FBQ0gs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QUFHO1lBQUEsaUJBS2pCO1lBTDBCLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDaEMsMEJBQTBCLEdBQUcscUJBQXFCLENBQUMsZUFBZSxDQUFDLFNBQVM7OztZQUFDLGNBQU0sT0FBQSxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxFQUF6QixDQUF5QixFQUFDLENBQUM7WUFDOUcsSUFBSSxnQkFBZ0IsRUFBRTtnQkFDcEIsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQSxDQUFDOztZQUNJLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxXQUFXO1FBQzlDLE1BQU0sQ0FBQyxXQUFXOzs7O1FBQUc7WUFBUyxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAseUJBQU87O1lBQ25DLDBCQUEwQixDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pDLElBQUksbUJBQW1CLEVBQUU7Z0JBQ3ZCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDdEM7UUFDSCxDQUFDLENBQUEsQ0FBQztJQUNKLENBQUMsRUFBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcm92aWRlciwgUmVmbGVjdGl2ZUluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBbmd1bGFyUGFnZVZpc2liaWxpdHlTZXJ2aWNlIH0gZnJvbSAnLi9hbmd1bGFyLXBhZ2UtdmlzaWJpbGl0eS5zZXJ2aWNlJztcbmltcG9ydCB7IEFuZ3VsYXJQYWdlVmlzaWJpbGl0eVN0YXRlRW51bSB9IGZyb20gJy4vYW5ndWxhci1wYWdlLXZpc2liaWxpdHkuc3RhdGUuZW51bSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuY29uc3QgcHJvdmlkZXJzOiBQcm92aWRlcltdID0gWyBBbmd1bGFyUGFnZVZpc2liaWxpdHlTZXJ2aWNlIF07XG5jb25zdCBpbmplY3RvciA9IFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKCBwcm92aWRlcnMgKTtcbmNvbnN0IHBhZ2VWaXNpYmlsaXR5U2VydmljZSA9IGluamVjdG9yLmdldCggQW5ndWxhclBhZ2VWaXNpYmlsaXR5U2VydmljZSApO1xuXG5leHBvcnQgZnVuY3Rpb24gT25QYWdlVmlzaWJpbGl0eUNoYW5nZSAoKTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICggdGFyZ2V0OiBhbnkgLCBwcm9wZXJ0eUtleTogc3RyaW5nICwgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICkge1xuICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25Jbml0ID0gdGFyZ2V0Lm5nT25Jbml0O1xuICAgIGxldCBvblBhZ2VIaWRkZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICB0YXJnZXQubmdPbkluaXQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VIaWRkZW5TdWJzY3JpcHRpb24gPSBwYWdlVmlzaWJpbGl0eVNlcnZpY2UuJG9uUGFnZVZpc2liaWxpdHlDaGFuZ2VcbiAgICAgIC5zdWJzY3JpYmUoICggdmlzaWJpbGl0eVN0YXRlOiBBbmd1bGFyUGFnZVZpc2liaWxpdHlTdGF0ZUVudW0gKSA9PiBvcmlnaW5hbE1ldGhvZC5jYWxsKHRoaXMsIFsgdmlzaWJpbGl0eVN0YXRlIF0pKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25Jbml0KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkluaXQuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkRlc3Ryb3kgPSB0YXJnZXQubmdPbkRlc3Ryb3k7XG4gICAgdGFyZ2V0Lm5nT25EZXN0cm95ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlSGlkZGVuU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBpZiAob3JpZ2luYWxOZ09uRGVzdHJveSkge1xuICAgICAgICBvcmlnaW5hbE5nT25EZXN0cm95LmNhbGwodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIE9uUGFnZUhpZGRlbiAoKTogTWV0aG9kRGVjb3JhdG9yIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICggdGFyZ2V0OiBhbnkgLCBwcm9wZXJ0eUtleTogc3RyaW5nICwgZGVzY3JpcHRvcjogUHJvcGVydHlEZXNjcmlwdG9yICkge1xuICAgIGNvbnN0IG9yaWdpbmFsTWV0aG9kID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25Jbml0ID0gdGFyZ2V0Lm5nT25Jbml0O1xuICAgIGxldCBvblBhZ2VIaWRkZW5TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICB0YXJnZXQubmdPbkluaXQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VIaWRkZW5TdWJzY3JpcHRpb24gPSBwYWdlVmlzaWJpbGl0eVNlcnZpY2UuJG9uUGFnZUhpZGRlbi5zdWJzY3JpYmUoKCkgPT4gb3JpZ2luYWxNZXRob2QuY2FsbCh0aGlzKSk7XG4gICAgICBpZiAob3JpZ2luYWxOZ09uSW5pdCkge1xuICAgICAgICBvcmlnaW5hbE5nT25Jbml0LmNhbGwodGhpcywgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvcmlnaW5hbE5nT25EZXN0cm95ID0gdGFyZ2V0Lm5nT25EZXN0cm95O1xuICAgIHRhcmdldC5uZ09uRGVzdHJveSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIG9uUGFnZUhpZGRlblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkRlc3Ryb3kpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uRGVzdHJveS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPblBhZ2VWaXNpYmxlICgpOiBNZXRob2REZWNvcmF0b3Ige1xuICByZXR1cm4gZnVuY3Rpb24gKCB0YXJnZXQ6IGFueSAsIHByb3BlcnR5S2V5OiBzdHJpbmcgLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IgKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkluaXQgPSB0YXJnZXQubmdPbkluaXQ7XG4gICAgbGV0IG9uUGFnZVZpc2libGVTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICB0YXJnZXQubmdPbkluaXQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VWaXNpYmxlU3Vic2NyaXB0aW9uID0gcGFnZVZpc2liaWxpdHlTZXJ2aWNlLiRvblBhZ2VWaXNpYmxlLnN1YnNjcmliZSgoKSA9PiBvcmlnaW5hbE1ldGhvZC5jYWxsKHRoaXMpKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25Jbml0KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkluaXQuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IG9yaWdpbmFsTmdPbkRlc3Ryb3kgPSB0YXJnZXQubmdPbkRlc3Ryb3k7XG4gICAgdGFyZ2V0Lm5nT25EZXN0cm95ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlVmlzaWJsZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkRlc3Ryb3kpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uRGVzdHJveS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBPblBhZ2VQcmVyZW5kZXIgKCk6IE1ldGhvZERlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbiAoIHRhcmdldDogYW55ICwgcHJvcGVydHlLZXk6IHN0cmluZyAsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uSW5pdCA9IHRhcmdldC5uZ09uSW5pdDtcbiAgICBsZXQgb25QYWdlUHJlcmVuZGVyU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgdGFyZ2V0Lm5nT25Jbml0ID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgb25QYWdlUHJlcmVuZGVyU3Vic2NyaXB0aW9uID0gcGFnZVZpc2liaWxpdHlTZXJ2aWNlLiRvblBhZ2VQcmVyZW5kZXIuc3Vic2NyaWJlKCgpID0+IG9yaWdpbmFsTWV0aG9kLmNhbGwodGhpcykpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkluaXQpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uSW5pdC5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uRGVzdHJveSA9IHRhcmdldC5uZ09uRGVzdHJveTtcbiAgICB0YXJnZXQubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VQcmVyZW5kZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIGlmIChvcmlnaW5hbE5nT25EZXN0cm95KSB7XG4gICAgICAgIG9yaWdpbmFsTmdPbkRlc3Ryb3kuY2FsbCh0aGlzLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gT25QYWdlVW5sb2FkZWQgKCk6IE1ldGhvZERlY29yYXRvciB7XG4gIHJldHVybiBmdW5jdGlvbiAoIHRhcmdldDogYW55ICwgcHJvcGVydHlLZXk6IHN0cmluZyAsIGRlc2NyaXB0b3I6IFByb3BlcnR5RGVzY3JpcHRvciApIHtcbiAgICBjb25zdCBvcmlnaW5hbE1ldGhvZCA9IGRlc2NyaXB0b3IudmFsdWU7XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uSW5pdCA9IHRhcmdldC5uZ09uSW5pdDtcbiAgICBsZXQgb25QYWdlVW5sb2FkZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICB0YXJnZXQubmdPbkluaXQgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VVbmxvYWRlZFN1YnNjcmlwdGlvbiA9IHBhZ2VWaXNpYmlsaXR5U2VydmljZS4kb25QYWdlVW5sb2FkZWQuc3Vic2NyaWJlKCgpID0+IG9yaWdpbmFsTWV0aG9kLmNhbGwodGhpcykpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkluaXQpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uSW5pdC5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3JpZ2luYWxOZ09uRGVzdHJveSA9IHRhcmdldC5uZ09uRGVzdHJveTtcbiAgICB0YXJnZXQubmdPbkRlc3Ryb3kgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgICBvblBhZ2VVbmxvYWRlZFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgaWYgKG9yaWdpbmFsTmdPbkRlc3Ryb3kpIHtcbiAgICAgICAgb3JpZ2luYWxOZ09uRGVzdHJveS5jYWxsKHRoaXMsIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG4iXX0=
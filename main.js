(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n\nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n\nhr.star-light {\n    border-color: #fff;\n}\n\nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhyLnN0YXItbGlnaHQsXG5oci5zdGFyLXByaW1hcnkge1xuICAgIG1hcmdpbjogMjVweCBhdXRvIDMwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oci5zdGFyLWxpZ2h0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtLjhlbTtcbiAgICBwYWRkaW5nOiAwIC4yNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuaHIuc3Rhci1saWdodCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5oci5zdGFyLWxpZ2h0OmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThiYzljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>About Us</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n    <div class=\"col-md-9\">\n        <p>Welcome to Meeting Planner!</p>\n<p>The project is about meeting scheduling system. It has two module one is\nAdmin and another is normal user. For this project frontend technology is Angular\nand backend technology is NodeJs and database is MongoDB.</p>\n\n<p>In user management system their are three functionality signup,\nlogin and forgot password, new user can signup and previous user can login. For\nlogin we check authentication by compairing email and password with database.\nIn authorization system there are two roles one is admin and another is normal\nuser which can perform different functionality depending on their role. In User\nSlots management system(Flow for Admin User)upon login, admin User go to\ndashboard and see all normal users in list format, upon clicking on particular user\nadmin go to users current calender. The Planner Views looks similar to Google or\noutlook calendars .Planner shows only current year upon clicking on day's cell.</p>\n<p>In admin Flow admin can create new meeting, make changes in meeting\ndetail form, delete meeting. While inError Views and messages all kinds of errors,\nexceptions and messages are handled properly in angular such that user should\naware of what happing in system.</p>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\n    margin: 0 0 10px;\n}\n  \npre{\n    background-color: #f5f5f5;\n    padding: 15px;\n}\n  \nhr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n  \nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n  \nhr.star-light {\n    border-color: #fff;\n}\n  \nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n  \n.userList{\n    margin-top:57px;\n}\n  \n@media (min-width: 320px) and (max-width: 480px) {\n    .userList{\n        margin-top:0px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tZGFzaGJvYXJkL2FkbWluLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGFBQWE7QUFDakI7O0FBRUE7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgze1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG59XG4gIFxucHJle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgcGFkZGluZzogMTVweDtcbn1cblxuaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59XG5cbi51c2VyTGlzdHtcbiAgICBtYXJnaW4tdG9wOjU3cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC51c2VyTGlzdHtcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2>Admin Dashboard</h2>\n                <hr class=\"star-primary\">\n            </div>\n        </div>\n    </div>\n    <div class=\"col-md-8\" id=\"calenderDiv\">\n      <ng-template #modalContent let-close=\"close\">\n        <div class=\"modal-body\">\n          <div>\n            Meeting Title:\n            <pre>{{ modalData?.event.title }}</pre>\n          </div>\n          <div>\n            Details:\n            <table>\n              <tr>\n                <th>Purpose:</th>\n                <td>{{ modalData?.event.purpose }}</td>\n              </tr>\n              <tr>\n                <th>Where:</th>\n                <td>{{ modalData?.event.where }}</td>\n              </tr>\n              <tr>\n                  <th>Start:</th>\n                  <td>Date :{{ modalData?.event.startDate }} &amp; Time:{{ modalData?.event.startTime }} </td>\n              </tr>\n              <tr>\n                  <th>End:</th>\n                  <td>Date :{{ modalData?.event.endDate }} &amp; Time:{{ modalData?.event.endTime }} </td>\n              </tr>\n            </table>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n        </div>\n      </ng-template>\n      <div class=\"row text-center\">\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarPreviousView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Previous\n            </div>\n            <div\n              class=\"btn btn-outline-secondary\"\n              mwlCalendarToday\n              [(viewDate)]=\"viewDate\">\n              Today\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              mwlCalendarNextView\n              [view]=\"view\"\n              [(viewDate)]=\"viewDate\"\n              (viewDateChange)=\"activeDayIsOpen = false\">\n              Next\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"btn-group\">\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = CalendarView.Month\"\n              [class.active]=\"view === CalendarView.Month\">\n              Month\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = CalendarView.Week\"\n              [class.active]=\"view === CalendarView.Week\">\n              Week\n            </div>\n            <div\n              class=\"btn btn-primary\"\n              (click)=\"view = CalendarView.Day\"\n              [class.active]=\"view === CalendarView.Day\">\n              Day\n            </div>\n          </div>\n        </div>\n      </div>\n      <br>\n      <div [ngSwitch]=\"view\">\n        <mwl-calendar-month-view\n          *ngSwitchCase=\"CalendarView.Month\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          [activeDayIsOpen]=\"activeDayIsOpen\"\n          (dayClicked)=\"dayClicked($event.day)\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-month-view>\n        <mwl-calendar-week-view\n          *ngSwitchCase=\"CalendarView.Week\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-week-view>\n        <mwl-calendar-day-view\n          *ngSwitchCase=\"CalendarView.Day\"\n          [viewDate]=\"viewDate\"\n          [events]=\"events\"\n          [refresh]=\"refresh\"\n          (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n          (eventTimesChanged)=\"eventTimesChanged($event)\">\n        </mwl-calendar-day-view>\n      </div>\n      \n      <br><br><br>\n      <button type=\"submit\" id=\"createMeetinButton\" (click)=\"createMeetingView()\" style=\"margin:10px auto;\" class=\"btn btn-success\">Create Meeting</button>\n      <!-- Add meeting from Start -->\n      <div id=\"addMeetingToList\" style=\"background-color:aqua;padding: 10px;border-radius: 6px;display: none;\">\n          <form #createBlogForm=\"ngForm\" (ngSubmit)=\"addMeeting()\">\n              <h3 class=\"text-center\">Add Meeting</h3>\n            <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" #titleVal=\"ngModel\" name=\"title\" [(ngModel)]=\"title\" (keyup)=\"refresh.next()\" placeholder=\"Enter Title\" required>\n              </div>\n              <div [hidden]=\"titleVal.valid || titleVal.pristine\" class=\"alert alert-danger\">\n                  Title is required \n              </div>\n        \n              <div class=\"form-group\">\n                  <label>Purpose</label>\n                  <input type=\"text\" class=\"form-control\" #purposeVal=\"ngModel\" name=\"purpose\" [(ngModel)]=\"purpose\" (keyup)=\"refresh.next()\" placeholder=\"Enter Purpose\" required>\n              </div>\n              <div [hidden]=\"purposeVal.valid || purposeVal.pristine\" class=\"alert alert-danger\">\n                  Purpose is Required \n              </div>\n    \n              <div class=\"form-group\">\n                  <label>Where</label>\n                  <input type=\"text\" class=\"form-control\" #whereVal=\"ngModel\" name=\"where\" [(ngModel)]=\"where\" (keyup)=\"refresh.next()\" placeholder=\"Enter Location of Meeting\" required>\n              </div>\n              <div [hidden]=\"whereVal.valid || whereVal.pristine\" class=\"alert alert-danger\">\n                  Enter Location of Meeting\n              </div>\n    \n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input class=\"form-control\" type=\"text\" mwlFlatpickr name=\"startDate\" [(ngModel)]=\"startDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet Start Date & time\" required/>\n              </div>\n        \n              <div class=\"form-group\">\n                  <label>End Date</label>\n                  <input class=\"form-control\" type=\"text\" mwlFlatpickr name=\"endDate\" [(ngModel)]=\"endDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet End Date & time\" required/>\n              </div>\n        \n              <div class=\"form-group\">\n                  <label>Color:</label>\n                  <input type=\"color\" name=\"color\" [(ngModel)]=\"color\" (change)=\"refresh.next()\">\n              </div>\n        \n              <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createBlogForm.form.valid\">Add Meeting</button>\n            </form>\n            <!-- add meeting form end -->\n      </div>\n      <!-- Update form Start -->\n      <div id=\"updateMeetingList\" style=\"display: none;background-color:lightgray;padding: 10px;border-radius: 6px;\">\n          <form #createUpdateForm=\"ngForm\" (ngSubmit)=\"updateMeeting()\">\n              <input type=\"hidden\" name=\"meetingId\" id=\"meeting-id\">\n              <input type=\"hidden\" name=\"meetingSetTO\" id=\"meeting-setTo\">\n              <h3 class=\"text-center\">Update Meeting</h3>\n              <div class=\"form-group\">\n                  <label>Title</label>\n                  <input type=\"text\" class=\"form-control\" #titleVal=\"ngModel\" id=\"ud-title\" name=\"title\" [(ngModel)]=\"title\" (keyup)=\"refresh.next()\" placeholder=\"Enter Title\" autofocus required>\n              </div>\n              <div [hidden]=\"titleVal.valid || titleVal.pristine\" class=\"alert alert-danger\">\n                  Title is required \n              </div>\n        \n              <div class=\"form-group\">\n                  <label>Purpose</label>\n                  <input type=\"text\" class=\"form-control\" #purposeVal=\"ngModel\" id=\"ud-purpose\" name=\"purpose\" [(ngModel)]=\"purpose\" (keyup)=\"refresh.next()\" placeholder=\"Enter Purpose\" required>\n              </div>\n              <div [hidden]=\"purposeVal.valid || purposeVal.pristine\" class=\"alert alert-danger\">\n                  Purpose is Required \n              </div>\n    \n              <div class=\"form-group\">\n                  <label>Where</label>\n                  <input type=\"text\" class=\"form-control\" #whereVal=\"ngModel\" id=\"ud-where\" name=\"where\" [(ngModel)]=\"where\" (keyup)=\"refresh.next()\" placeholder=\"Enter Location of Meeting\" required>\n              </div>\n              <div [hidden]=\"whereVal.valid || whereVal.pristine\" class=\"alert alert-danger\">\n                  Enter Location of Meeting\n              </div>\n    \n              <div class=\"form-group\">\n                <label>Start Date</label>\n                <input class=\"form-control\" type=\"type\" mwlFlatpickr id=\"ud-starts\" name=\"startDate\" [(ngModel)]=\"startDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet New Start Date & time\" required/>\n              </div>\n        \n              <div class=\"form-group\">\n                  <label>End Date</label>\n                  <input class=\"form-control\" type=\"text\" mwlFlatpickr id=\"ud-ends\" name=\"endDate\" [(ngModel)]=\"endDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet New End Date & time\" required/>\n              </div>\n        \n              <div class=\"form-group\">\n                  <label>Color:</label>\n                  <input type=\"color\" id=\"ud-color\" name=\"color\" [(ngModel)]=\"color\" (change)=\"refresh.next()\">\n              </div>\n        \n              <button type=\"submit\" class=\"btn btn-primary\">Update Meeting</button>\n             \n          </form>\n      </div>\n      <!-- Update form Start -->\n      <br><br><br>\n      <!-- All Meeting List Start -->\n      <h3>Meeting List<div class=\"clearfix\"></div></h3>\n      <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          \n          <thead>\n            <tr>\n              <th>Sr.No.</th>\n              <th>Meeting Title</th>\n              <th>Purpose</th>\n              <th>Where</th>\n              <th>Starts</th>\n              <th>Ends</th>\n              <th>Set By</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          \n          <tbody>\n            <tr *ngFor=\"let event of eventList; let index = index\">\n              <td>\n                {{index+1}}\n              </td>\n              <td>\n                {{event.title}}\n              </td>\n              <td>\n                {{event.purpose}}\n              </td>\n              <td>\n                {{event.where}}\n              </td>\n              <td>\n                {{event.startDate}}<br>{{event.startTime}}\n              </td>\n              <td>\n                {{event.endDate}}<br>{{event.endTime}}\n              </td>\n              <td>\n                {{event.setBy}}\n              </td>\n              <td>\n                <button class=\"btn btn-primary\" (click)=\"updateMeetView(event)\">Update</button><button class=\"btn btn-danger\" (click)=\"deleteMeet(event,index)\">Delete</button>\n              </td>\n            </tr>\n          </tbody>\n          \n        </table>\n      </div>\n      <!-- All Meeting List End -->\n    </div>\n    <!-- User List Start -->\n    <div class=\"col-md-4 userList\">\n        <h3>Users List<div class=\"clearfix\"></div></h3>\n        <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          \n            <thead>\n              <tr>\n                <th>Sr.No.</th>\n                <th>Name</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n          \n            <tbody>\n              <tr *ngFor=\"let user of userList; let index = index\">\n                <td>\n                  {{index+1}}\n                </td>\n                <td>\n                  {{user.firstName}} {{user.lastName}}\n                </td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"specificUser(user)\">View Calender</button>\n                </td>\n              </tr>\n            </tbody>\n          \n          </table>\n          </div>\n    </div>\n    <!-- User List Start -->\n  </div>\n  <br><br><br> \n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_10__);











var colors = {
    red: {
        primary: '#ad2121'
    },
    blue: {
        primary: '#1e90ff'
    },
    yellow: {
        primary: '#e3bc08'
    }
};
var AdminDashboardComponent = /** @class */ (function () {
    function AdminDashboardComponent(modal, toastr, Router, appService) {
        this.modal = modal;
        this.toastr = toastr;
        this.Router = Router;
        this.appService = appService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        this.eventList = [];
        this.meetSetTo = "all";
        this.userListPut();
    }
    AdminDashboardComponent.prototype.pensilUpdateMeeting = function (event) {
        console.log(event);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#addMeetingToList").css({ "display": "block" });
        this.title = event.title;
        this.purpose = event.purpose;
        this.where = event.where;
        this.startDate = event.start;
        this.endDate = event.end;
        this.color = event.color.primary;
        var meetData = {
            title: this.title,
            purpose: this.purpose,
            where: this.where,
            startDate: this.startDate,
            endDate: this.endDate,
            color: this.color,
            meetId: event.meetId,
            setTo: "all"
        };
        console.log("updated data", meetData);
    };
    AdminDashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    AdminDashboardComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    AdminDashboardComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        console.log(">>", this.modalData);
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    AdminDashboardComponent.prototype.addEvent = function (events) {
        var data = { setBy: '', start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()), end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()), title: 'New event', color: colors.red };
        this.events.push({
            title: 'New event',
            start: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["startOfDay"])(new Date()),
            end: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["endOfDay"])(new Date()),
            color: colors.red,
            draggable: true,
            resizable: {
                beforeStart: true,
                afterEnd: true
            }
        });
        this.appService.saveMeeting(data);
        this.refresh.next();
    };
    AdminDashboardComponent.prototype.removeEvent = function (index, e) {
        this.events.splice(index, 1);
        this.refresh.next();
    };
    AdminDashboardComponent.prototype.userListPut = function () {
        var _this = this;
        this.appService.getUserList().subscribe(function (apiResponse) {
            console.log(apiResponse);
            _this.userList = apiResponse.data;
            console.log(_this.userList);
            _this.refresh.next();
        }, function (err) {
            console.log("subscribe error");
        });
    }; //userListPut end here
    AdminDashboardComponent.prototype.allInOne = function () {
        var _this = this;
        this.appService.getMeeting().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
                var meetArray = apiResponse.data;
                for (var i = 0; i < meetArray.length; i++) {
                    _this.eventList.push({
                        index: i,
                        setBy: meetArray[i].setBy,
                        setTo: meetArray[i].setTo,
                        meetId: meetArray[i].meetId,
                        title: meetArray[i].title,
                        where: meetArray[i].where,
                        actions: _this.actions,
                        color: { primary: meetArray[i].color, secondary: "#FAE3E3" },
                        purpose: meetArray[i].purpose,
                        start: new Date(meetArray[i].start),
                        end: new Date(meetArray[i].end),
                        startDate: new Date(meetArray[i].start).toLocaleDateString(),
                        startTime: new Date(meetArray[i].start).toLocaleTimeString(),
                        endDate: new Date(meetArray[i].end).toLocaleDateString(),
                        endTime: new Date(meetArray[i].end).toLocaleTimeString()
                    });
                    _this.refresh.next();
                    // this.events.push(
                    //   {
                    //     start:new Date(meetArray[i].start),
                    //     end:  new Date(meetArray[i].end),
                    //     title: meetArray[i].title,
                    //     color: {primary: meetArray[i].color, secondary: "#FAE3E3"},
                    //     actions: this.actions,
                    //     allDay: true,
                    //     resizable: {
                    //       beforeStart: true,
                    //       afterEnd: true
                    //     },
                    //     draggable: true,
                    //   }
                    // );
                    _this.refresh.next();
                }
                _this.events = _this.eventList;
            }
            else {
                console.log("api res error");
            }
        }, function (err) {
            console.log("subscribe error");
        });
    }; //allInOne End here
    AdminDashboardComponent.prototype.createMeetingView = function () {
        jquery__WEBPACK_IMPORTED_MODULE_10__("#addMeetingToList").css({ "display": "block" });
        jquery__WEBPACK_IMPORTED_MODULE_10__("#createMeetinButton").css({ "display": "none" });
        jquery__WEBPACK_IMPORTED_MODULE_10__("#updateMeetingList").css({ "display": "none" });
    }; //createMeetingView end
    AdminDashboardComponent.prototype.specificUser = function (user) {
        window.scrollTo(0, 0);
        var fullName = user.firstName + " " + user.lastName;
        this.Router.navigate(['userCal', user.userId, fullName]);
    }; //specificUser end
    AdminDashboardComponent.prototype.updateMeetView = function (data) {
        jquery__WEBPACK_IMPORTED_MODULE_10__("#createMeetinButton").css({ "display": "block" });
        jquery__WEBPACK_IMPORTED_MODULE_10__("#addMeetingToList").css({ 'display': 'none' });
        jquery__WEBPACK_IMPORTED_MODULE_10__("#updateMeetingList").css({ 'display': 'block' });
        jquery__WEBPACK_IMPORTED_MODULE_10__("#meeting-setTo").val(data.setTo);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#meeting-id").val(data.meetId);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-title").val(data.title);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-title").trigger("change");
        jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-purpose").val(data.purpose);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-where").val(data.where);
        jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-color").val(data.color.primary);
    }; //updateMeetView end
    AdminDashboardComponent.prototype.updateMeeting = function () {
        var _this = this;
        console.log("update meeting called");
        if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-title").val()) {
            this.toastr.warning("Enter Title");
        }
        else if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-purpose").val()) {
            this.toastr.warning("Enter Purpose");
        }
        else if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-where").val()) {
            this.toastr.warning("Enter Location");
        }
        else if (!this.startDate) {
            this.toastr.warning("Enter Start Date and Time");
        }
        else if (!this.endDate) {
            this.toastr.warning("Enter End Date and Time");
        }
        else if (!jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-color").val()) {
            this.toastr.warning("Enter Color");
        }
        else {
            var meetData = {
                title: jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-title").val(),
                purpose: jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-purpose").val(),
                where: jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-where").val(),
                startDate: this.startDate,
                endDate: this.endDate,
                color: jquery__WEBPACK_IMPORTED_MODULE_10__("#ud-color").val(),
                meetId: jquery__WEBPACK_IMPORTED_MODULE_10__("#meeting-id").val(),
                setTo: jquery__WEBPACK_IMPORTED_MODULE_10__("#meeting-setTo").val()
            };
            console.log("meetDate", meetData);
            this.appService.updateMeeting(meetData).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success("Meeting Updated Successfull");
                    _this.meetSetTo = "all";
                    _this.refresh.next();
                    location.reload();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
    }; //updateMeeting end
    AdminDashboardComponent.prototype.deleteMeet = function (event, index) {
        var _this = this;
        console.log("event", event);
        if (event.meetId) {
            this.appService.deleteMeeting(event).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success("Meeting Deleted Successfull");
                    _this.eventList.splice(index, 1);
                    _this.refresh.next();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
        else {
            this.toastr.warning("Error In Deleting Meeting");
        }
    }; //deleteMeet end
    AdminDashboardComponent.prototype.addMeeting = function () {
        var _this = this;
        if (!this.title) {
            this.toastr.warning("Enter Title");
        }
        else if (!this.purpose) {
            this.toastr.warning("Enter Purpose");
        }
        else if (!this.where) {
            this.toastr.warning("Enter Location");
        }
        else if (!this.startDate) {
            this.toastr.warning("Enter Start Date and Time");
        }
        else if (!this.endDate) {
            this.toastr.warning("Enter End Date and Time");
        }
        else if (!this.color) {
            this.toastr.warning("Enter Color");
        }
        else {
            var meetData = {
                title: this.title,
                purpose: this.purpose,
                where: this.where,
                startDate: this.startDate,
                endDate: this.endDate,
                color: this.color,
                setTo: "all",
                email: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("email")
            };
            console.log("meetData", meetData);
            this.appService.saveMeeting(meetData).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    _this.toastr.success("Meeting Added Successfull");
                    _this.meetSetTo = "all";
                    _this.refresh.next();
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
    }; //addMeeting end
    AdminDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allInOne();
        var getUserInfoFromLocalStorage = function () {
            var role = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("role");
            var authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("authtoken");
            if (role == "user") {
                _this.Router.navigate(['/mDashboard']);
            }
            else if (authToken == null) {
                _this.Router.navigate(['/']);
            }
        }; //getUserInfoFromLocalStorage
        getUserInfoFromLocalStorage();
    }; //ngOnInit end
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], AdminDashboardComponent.prototype, "modalContent", void 0);
    AdminDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-dashboard',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./admin-dashboard.component.html */ "./src/app/admin/admin-dashboard/admin-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./admin-dashboard.component.css */ "./src/app/admin/admin-dashboard/admin-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"]])
    ], AdminDashboardComponent);
    return AdminDashboardComponent;
}()); //class AdminDashboardComponent end



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "./src/app/admin/admin-dashboard/admin-dashboard.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _user_cal_user_cal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-cal/user-cal.component */ "./src/app/admin/user-cal/user-cal.component.ts");







//calenser module





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"], _user_cal_user_cal_component__WEBPACK_IMPORTED_MODULE_11__["UserCalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(),
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    { path: 'aDashboard', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] },
                    { path: 'userCal/:userId/:fullName', component: _user_cal_user_cal_component__WEBPACK_IMPORTED_MODULE_11__["UserCalComponent"] }
                ])
            ],
            exports: [
                _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/user-cal/user-cal.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/user-cal/user-cal.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    margin: 0 0 10px;\n  }\n  \n  pre {\n    background-color: #f5f5f5;\n    padding: 15px;\n  }\n  \n  hr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n  \n  hr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n  \n  hr.star-light {\n    border-color: #fff;\n}\n  \n  hr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdXNlci1jYWwvdXNlci1jYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixhQUFhO0VBQ2Y7O0VBRUY7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztFQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztFQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItY2FsL3VzZXItY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgfVxuICBcbiAgcHJlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/admin/user-cal/user-cal.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/user-cal/user-cal.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"row\">\n              <div class=\"col-lg-12 text-center\">\n                  <h2>{{calUserName}} Calender</h2>\n                  <hr class=\"star-primary\">\n              </div>\n          </div>\n      </div>\n      <div class=\"col-md-12\" id=\"calenderDiv\">\n        <ng-template #modalContent let-close=\"close\">\n          <div class=\"modal-body\">\n              <div>\n                  Meeting Title:\n                  <pre>{{ modalData?.event.title }}</pre>\n                </div>\n                <div>\n                  Details:\n                  <table>\n                    <tr>\n                      <th>Purpose:</th>\n                      <td>{{ modalData?.event.purpose }}</td>\n                    </tr>\n                    <tr>\n                      <th>Where:</th>\n                      <td>{{ modalData?.event.where }}</td>\n                    </tr>\n                    <tr>\n                        <th>Start:</th>\n                        <td>Date :{{ modalData?.event.startDate }} &amp; Time:{{ modalData?.event.startTime }} </td>\n                    </tr>\n                    <tr>\n                        <th>End:</th>\n                        <td>Date :{{ modalData?.event.endDate }} &amp; Time:{{ modalData?.event.endTime }} </td>\n                    </tr>\n                  </table>\n                </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n          </div>\n        </ng-template>\n        <div class=\"row text-center\">\n          <div class=\"col-md-4\">\n            <div class=\"btn-group\">\n              <div\n                class=\"btn btn-primary\"\n                mwlCalendarPreviousView\n                [view]=\"view\"\n                [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Previous\n              </div>\n              <div\n                class=\"btn btn-outline-secondary\"\n                mwlCalendarToday\n                [(viewDate)]=\"viewDate\">\n                Today\n              </div>\n              <div\n                class=\"btn btn-primary\"\n                mwlCalendarNextView\n                [view]=\"view\"\n                [(viewDate)]=\"viewDate\"\n                (viewDateChange)=\"activeDayIsOpen = false\">\n                Next\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4\">\n            <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n          </div>\n          <div class=\"col-md-4\">\n            <div class=\"btn-group\">\n              <div\n                class=\"btn btn-primary\"\n                (click)=\"view = CalendarView.Month\"\n                [class.active]=\"view === CalendarView.Month\">\n                Month\n              </div>\n              <div\n                class=\"btn btn-primary\"\n                (click)=\"view = CalendarView.Week\"\n                [class.active]=\"view === CalendarView.Week\">\n                Week\n              </div>\n              <div\n                class=\"btn btn-primary\"\n                (click)=\"view = CalendarView.Day\"\n                [class.active]=\"view === CalendarView.Day\">\n                Day\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div [ngSwitch]=\"view\">\n          <mwl-calendar-month-view\n            *ngSwitchCase=\"CalendarView.Month\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            [activeDayIsOpen]=\"activeDayIsOpen\"\n            (dayClicked)=\"dayClicked($event.day)\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\">\n          </mwl-calendar-month-view>\n          <mwl-calendar-week-view\n            *ngSwitchCase=\"CalendarView.Week\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\">\n          </mwl-calendar-week-view>\n          <mwl-calendar-day-view\n            *ngSwitchCase=\"CalendarView.Day\"\n            [viewDate]=\"viewDate\"\n            [events]=\"events\"\n            [refresh]=\"refresh\"\n            (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n            (eventTimesChanged)=\"eventTimesChanged($event)\">\n          </mwl-calendar-day-view>\n        </div>\n        \n        <br><br><br>\n        <button type=\"submit\" id=\"createMeetinButton\" (click)=\"createMeetingView()\" style=\"margin:10px auto;\" class=\"btn btn-success\">Create Meeting</button>\n        <div id=\"addMeetingToList\" style=\"background-color:aqua;padding: 10px;border-radius: 6px;display: none;\">\n            <form #createBlogForm=\"ngForm\" (ngSubmit)=\"addMeeting()\">\n                <h3 class=\"text-center\">Add Meeting</h3>\n              <div class=\"form-group\">\n                    <label>Title</label>\n                    <input type=\"text\" class=\"form-control\" #titleVal=\"ngModel\" name=\"title\" [(ngModel)]=\"title\" (keyup)=\"refresh.next()\" placeholder=\"Enter Title\" required>\n                </div>\n                <div [hidden]=\"titleVal.valid || titleVal.pristine\" class=\"alert alert-danger\">\n                    Title is required \n                </div>\n          \n                <div class=\"form-group\">\n                    <label>Purpose</label>\n                    <input type=\"text\" class=\"form-control\" #purposeVal=\"ngModel\" name=\"purpose\" [(ngModel)]=\"purpose\" (keyup)=\"refresh.next()\" placeholder=\"Enter Purpose\" required>\n                </div>\n                <div [hidden]=\"purposeVal.valid || purposeVal.pristine\" class=\"alert alert-danger\">\n                    Purpose is Required \n                </div>\n      \n                <div class=\"form-group\">\n                    <label>Where</label>\n                    <input type=\"text\" class=\"form-control\" #whereVal=\"ngModel\" name=\"where\" [(ngModel)]=\"where\" (keyup)=\"refresh.next()\" placeholder=\"Enter Location of Meeting\" required>\n                </div>\n                <div [hidden]=\"whereVal.valid || whereVal.pristine\" class=\"alert alert-danger\">\n                    Enter Location of Meeting\n                </div>\n      \n                <div class=\"form-group\">\n                  <label>Start Date</label>\n                  <input class=\"form-control\" type=\"text\" mwlFlatpickr name=\"startDate\" [(ngModel)]=\"startDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet Start Date & time\" required/>\n                </div>\n          \n                <div class=\"form-group\">\n                    <label>End Date</label>\n                    <input class=\"form-control\" type=\"text\" mwlFlatpickr name=\"endDate\" [(ngModel)]=\"endDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet End Date & time\" required/>\n                </div>\n          \n                <div class=\"form-group\">\n                    <label>Color:</label>\n                    <input type=\"color\" name=\"color\" [(ngModel)]=\"color\" (change)=\"refresh.next()\">\n                </div>\n          \n                <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!createBlogForm.form.valid\">Add Meeting</button>\n               \n              </form>\n        </div>\n        \n        <div id=\"updateMeetingList\" style=\"background-color:lightgray;padding: 10px;border-radius: 6px;display: none;\">\n            <form #createUpdateForm=\"ngForm\" (ngSubmit)=\"updateMeeting()\">\n                <input type=\"hidden\" name=\"meetingId\" id=\"meeting-id\">\n                <h3 class=\"text-center\">Update Meeting</h3>\n              <div class=\"form-group\">\n                    <label>Title</label>\n                    <input type=\"text\" class=\"form-control\" #titleVal=\"ngModel\" id=\"ud-title\" name=\"title\" [(ngModel)]=\"title\" (keyup)=\"refresh.next()\" placeholder=\"Enter Title\" autofocus required>\n                </div>\n                <div [hidden]=\"titleVal.valid || titleVal.pristine\" class=\"alert alert-danger\">\n                    Title is required \n                </div>\n          \n                <div class=\"form-group\">\n                    <label>Purpose</label>\n                    <input type=\"text\" class=\"form-control\" #purposeVal=\"ngModel\" id=\"ud-purpose\" name=\"purpose\" [(ngModel)]=\"purpose\" (keyup)=\"refresh.next()\" placeholder=\"Enter Purpose\" required>\n                </div>\n                <div [hidden]=\"purposeVal.valid || purposeVal.pristine\" class=\"alert alert-danger\">\n                    Purpose is Required \n                </div>\n      \n                <div class=\"form-group\">\n                    <label>Where</label>\n                    <input type=\"text\" class=\"form-control\" #whereVal=\"ngModel\" id=\"ud-where\" name=\"where\" [(ngModel)]=\"where\" (keyup)=\"refresh.next()\" placeholder=\"Enter Location of Meeting\" required>\n                </div>\n                <div [hidden]=\"whereVal.valid || whereVal.pristine\" class=\"alert alert-danger\">\n                    Enter Location of Meeting\n                </div>\n      \n                <div class=\"form-group\">\n                  <label>Start Date</label>\n                  <input class=\"form-control\" type=\"type\" mwlFlatpickr id=\"ud-starts\" name=\"startDate\" [(ngModel)]=\"startDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet New Start Date & time\" required/>\n                </div>\n          \n                <div class=\"form-group\">\n                    <label>End Date</label>\n                    <input class=\"form-control\" type=\"text\" mwlFlatpickr id=\"ud-ends\" name=\"endDate\" [(ngModel)]=\"endDate\" (ngModelChange)=\"refresh.next()\" [altInput]=\"true\" [convertModelValue]=\"true\" [enableTime]=\"true\" dateFormat=\"Y-m-dTH:i\" altFormat=\"F j, Y H:i\" placeholder=\"Selet New End Date & time\" required/>\n                </div>\n          \n                <div class=\"form-group\">\n                    <label>Color:</label>\n                    <input type=\"color\" id=\"ud-color\" name=\"color\" [(ngModel)]=\"color\" (change)=\"refresh.next()\">\n                </div>\n          \n                <button type=\"submit\" class=\"btn btn-primary\">Update Meeting</button>\n               \n              </form>\n        </div>\n      \n        <br><br><br>\n        <h3>\n            {{calUserName}} Meeting List\n            <div class=\"clearfix\"></div>\n          </h3>\n        <div class=\"table-responsive\">\n        <table class=\"table table-bordered\">\n          \n            <thead>\n              <tr>\n                <th>Sr.No.</th>\n                <th>Meeting Title</th>\n                <th>Purpose</th>\n                <th>Where</th>\n                <th>Starts</th>\n                <th>Ends</th>\n                <th>Set By</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n          \n            <tbody>\n              <tr *ngFor=\"let event of eventList; let index = index\">\n                <td>\n                  {{index+1}}\n                </td>\n                <td>\n                  {{event.title}}\n                </td>\n                <td>\n                  {{event.purpose}}\n                </td>\n                <td>\n                  {{event.where}}\n                </td>\n                <td>\n                  {{event.startDate}}<br>{{event.startTime}}\n                </td>\n                <td>\n                  {{event.endDate}}<br>{{event.endTime}}\n                </td>\n                <td>\n                  {{event.setBy}}\n                </td>\n                <td>\n                  <button class=\"btn btn-primary\" (click)=\"updateMeetView(event)\">Update</button><button class=\"btn btn-danger\" (click)=\"deleteMeet(event.meetId,index)\">Delete</button>\n                </td>\n              </tr>\n            </tbody>\n          \n          </table>\n          </div>\n      </div>\n    </div>\n     <br><br><br> \n  </div>\n  "

/***/ }),

/***/ "./src/app/admin/user-cal/user-cal.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/user-cal/user-cal.component.ts ***!
  \******************************************************/
/*! exports provided: UserCalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserCalComponent", function() { return UserCalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);











var colors = {
    red: {
        primary: '#ad2121'
    },
    blue: {
        primary: '#1e90ff'
    },
    yellow: {
        primary: '#e3bc08'
    }
};
var UserCalComponent = /** @class */ (function () {
    function UserCalComponent(modal, activeRoute, toastr, Router, appService) {
        var _this = this;
        this.modal = modal;
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this.Router = Router;
        this.appService = appService;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_6__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [
            {
                label: '<i class="fa fa-fw fa-pencil"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    console.log(">>>", event);
                    _this.handleEvent('Edited', event);
                }
            },
            {
                label: '<i class="fa fa-fw fa-times"></i>',
                onClick: function (_a) {
                    var event = _a.event;
                    _this.events = _this.events.filter(function (iEvent) { return iEvent !== event; });
                    _this.handleEvent('Deleted', event);
                }
            }
        ];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        this.calUserName = "";
        this.userId = "";
        this.eventList = [];
        this.meetSetTo = "all";
    }
    UserCalComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    UserCalComponent.prototype.eventTimesChanged = function (_a) {
        var event = _a.event, newStart = _a.newStart, newEnd = _a.newEnd;
        event.start = newStart;
        event.end = newEnd;
        this.handleEvent('Dropped or resized', event);
        this.refresh.next();
    };
    UserCalComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        console.log(">>", this.modalData);
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    UserCalComponent.prototype.createMeetingView = function () {
        jquery__WEBPACK_IMPORTED_MODULE_9__("#addMeetingToList").css({ "display": "block" });
        jquery__WEBPACK_IMPORTED_MODULE_9__("#createMeetinButton").css({ "display": "none" });
        jquery__WEBPACK_IMPORTED_MODULE_9__("#updateMeetingList").css({ "display": "none" });
    };
    UserCalComponent.prototype.updateMeetView = function (data) {
        console.log("update=>>", data);
        jquery__WEBPACK_IMPORTED_MODULE_9__("#createMeetinButton").css({ "display": "block" });
        jquery__WEBPACK_IMPORTED_MODULE_9__("#addMeetingToList").css({ 'display': 'none' });
        jquery__WEBPACK_IMPORTED_MODULE_9__("#updateMeetingList").css({ 'display': 'block' });
        jquery__WEBPACK_IMPORTED_MODULE_9__("#meeting-id").val(data.meetId);
        jquery__WEBPACK_IMPORTED_MODULE_9__("#ud-title").val(data.title);
        jquery__WEBPACK_IMPORTED_MODULE_9__("#ud-title").trigger("change");
        jquery__WEBPACK_IMPORTED_MODULE_9__("#ud-purpose").val(data.purpose);
        jquery__WEBPACK_IMPORTED_MODULE_9__("#ud-where").val(data.where);
        jquery__WEBPACK_IMPORTED_MODULE_9__("#ud-color").val(data.color.primary);
    };
    UserCalComponent.prototype.deleteMeet = function (id, index) {
        var _this = this;
        console.log(id, index);
        if (id) {
            this.appService.deleteMeeting(id).subscribe(function (apiResponse) {
                console.log(apiResponse);
                if (apiResponse.status === 200) {
                    _this.toastr.success("Meeting Deleted Successfull");
                    _this.eventList.splice(index, 1);
                    _this.refresh.next();
                    // location.reload();
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
        else {
            this.toastr.warning("Error In Deleting Meeting");
        }
    };
    UserCalComponent.prototype.addMeeting = function () {
        var _this = this;
        if (!this.title) {
            this.toastr.warning("Enter Title");
        }
        else if (!this.purpose) {
            this.toastr.warning("Enter Purpose");
        }
        else if (!this.where) {
            this.toastr.warning("Enter Location");
        }
        else if (!this.startDate) {
            this.toastr.warning("Enter Start Date and Time");
        }
        else if (!this.endDate) {
            this.toastr.warning("Enter End Date and Time");
        }
        else if (!this.color) {
            this.toastr.warning("Enter Color");
        }
        else {
            var meetData = {
                title: this.title,
                purpose: this.purpose,
                where: this.where,
                startDate: this.startDate,
                endDate: this.endDate,
                color: this.color,
                setTo: this.userId
            };
            console.log("addusermeet->", meetData);
            this.appService.saveMeeting(meetData).subscribe(function (apiResponse) {
                console.log("<<=", apiResponse);
                if (apiResponse.status === 200) {
                    _this.toastr.success("Meeting Added Successfull");
                    _this.meetSetTo = "all";
                    _this.refresh.next();
                    setTimeout(function () {
                        location.reload();
                    }, 2000);
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
    };
    UserCalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var urlUserId = this.activeRoute.snapshot.paramMap.get('userId');
        this.userId = urlUserId;
        var urlFullName = this.activeRoute.snapshot.paramMap.get('fullName');
        this.calUserName = urlFullName;
        console.log("userid", this.userId);
        this.appService.getUserMeeting(urlUserId).subscribe(function (apiResponse) {
            console.log(apiResponse);
            if (apiResponse.status === 200) {
                var meetArray = apiResponse.data;
                for (var i = 0; i < meetArray.length; i++) {
                    console.log("i", i);
                    _this.eventList.push({
                        setBy: meetArray[i].setBy,
                        meetId: meetArray[i].meetId,
                        title: meetArray[i].title,
                        where: meetArray[i].where,
                        color: { primary: meetArray[i].color, secondary: "#FAE3E3" },
                        purpose: meetArray[i].purpose,
                        start: new Date(meetArray[i].start),
                        end: new Date(meetArray[i].end),
                        startDate: new Date(meetArray[i].start).toLocaleDateString(),
                        startTime: new Date(meetArray[i].start).toLocaleTimeString(),
                        endDate: new Date(meetArray[i].end).toLocaleDateString(),
                        endTime: new Date(meetArray[i].end).toLocaleTimeString()
                    });
                    _this.refresh.next();
                }
                _this.events = _this.eventList;
            }
            else {
                _this.toastr.error(apiResponse.message);
            }
        }, function (err) {
            _this.toastr.error('Some error occured');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["TemplateRef"])
    ], UserCalComponent.prototype, "modalContent", void 0);
    UserCalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-cal',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./user-cal.component.html */ "./src/app/admin/user-cal/user-cal.component.html"),
            styles: [__webpack_require__(/*! ./user-cal.component.css */ "./src/app/admin/user-cal/user-cal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]])
    ], UserCalComponent);
    return UserCalComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainhead{\n    background-color: black;\n    color: azure;\n    font-size: 35px;\n    text-align: center;\n    padding: 10px;\n}\n.logoimg{\n    height: 70px;\n    width: 120px;\n}\n.navbar .nav-item:hover{\n   \n    border-bottom: 5px solid blue;\n    border-top: 5px solid blue;\n    color: blue;\n}\n.nav-item{\n    padding: 20px;\n}\n.disable{\n    display: none;\n}\n@media (min-width: 320px) and (max-width: 480px) {\n    .navbar-brand{\n        display: none !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTs7SUFFSSw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLFdBQVc7QUFDZjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBO0lBQ0k7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5oZWFke1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiBhenVyZTtcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ubG9nb2ltZ3tcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgd2lkdGg6IDEyMHB4O1xufVxuLm5hdmJhciAubmF2LWl0ZW06aG92ZXJ7XG4gICBcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmx1ZTtcbiAgICBib3JkZXItdG9wOiA1cHggc29saWQgYmx1ZTtcbiAgICBjb2xvcjogYmx1ZTtcbn1cblxuLm5hdi1pdGVte1xuICAgIHBhZGRpbmc6IDIwcHg7XG59XG4uZGlzYWJsZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5uYXZiYXItYnJhbmR7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<nav class=\"navbar navbar-expand-md bg-dark navbar-dark\" style=\"\npadding-bottom: 0px;\npadding-top: 0px;\n\">\n  <img class=\"logoimg\" src=\"./../favicon.ico\" alt=\"Logo Error\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"margin:0px 50px;\">Meeting Planner</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"/contact\">Contact Us</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/signup\">Sign up</a>\n      </li>   \n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\"><span class=\"glyphicon glyphicon-log-in\"></span>\n            <a class=\"nav-link\" *ngIf=\"islogin\" href=\"\"  (click)=\"logout()\">Logout</a>\n        </li>\n      </ul>\n  </div>  \n</nav>\n<br>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(appService, toastr, router) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.router = router;
        this.title = 'meetplan';
        this.islogin = false;
        this.logout = function () {
            _this.appService.logout()
                .subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('authtoken');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('firstName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('lastName');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('role');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('userId');
                    ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].delete('email');
                }
                else {
                    _this.toastr.error(apiResponse.message);
                } // end condition
            }, function (err) {
                _this.toastr.error('some error occured');
            });
        }; // end logout
    }
    AppComponent.prototype.ngOnInit = function () {
        var authtoken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get("authtoken");
        if (authtoken != null) {
            this.islogin = true;
        }
        else if (authtoken) {
            this.islogin = false;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _user_user_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/user.module */ "./src/app/user/user.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _forget_forget_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./forget/forget.component */ "./src/app/forget/forget.component.ts");
/* harmony import */ var _member_member_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./member/member.module */ "./src/app/member/member.module.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _error_view_error_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./error-view/error-view.component */ "./src/app/error-view/error-view.component.ts");












// form module

//toastr




//calenser module





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _forget_forget_component__WEBPACK_IMPORTED_MODULE_14__["ForgetComponent"],
                _error_view_error_view_component__WEBPACK_IMPORTED_MODULE_21__["ErrorViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _user_user_module__WEBPACK_IMPORTED_MODULE_5__["UserModule"],
                _member_member_module__WEBPACK_IMPORTED_MODULE_15__["MemberModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_16__["AdminModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__["NgbModalModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_17__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_18__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_18__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_19__["adapterFactory"]
                }),
                ngx_toastr__WEBPACK_IMPORTED_MODULE_13__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"] },
                    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"] },
                    { path: 'forget', component: _forget_forget_component__WEBPACK_IMPORTED_MODULE_14__["ForgetComponent"] },
                    { path: 'signin', component: _user_signin_signin_component__WEBPACK_IMPORTED_MODULE_7__["SigninComponent"], pathMatch: 'full' },
                    { path: '', redirectTo: 'signin', pathMatch: 'full' },
                    { path: '*', component: _error_view_error_view_component__WEBPACK_IMPORTED_MODULE_21__["ErrorViewComponent"] },
                    { path: '**', component: _error_view_error_view_component__WEBPACK_IMPORTED_MODULE_21__["ErrorViewComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);


//observable




var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
        this.url = 'http://www.meetingplanner.tk';
    }
    AppService.prototype.setUserInfoToLocalStorage = function (data) {
        localStorage.setItem('userInfo', JSON.stringify(data));
    }; //setUserInfo end here
    AppService.prototype.getUserInfoFromLocalStorage = function () {
        return JSON.parse(localStorage.getItem('userInfo'));
    }; //end of the GetUserINfo fron local storage
    AppService.prototype.signupFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("firstName", data.firstName)
            .set("lastName", data.lastName)
            .set("email", data.email)
            .set("countyCode", data.countyCode)
            .set("phone", data.phone)
            .set("role", data.role)
            .set("password", data.password);
        return this.http.post(this.url + "/api/v1/users/signup", params);
    }; // end of th e signup function
    AppService.prototype.signinFunction = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("email", data.email)
            .set("password", data.password);
        console.log(params);
        return this.http.post(this.url + "/api/v1/users/login", params);
    }; //login function end here
    AppService.prototype.logout = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'));
        return this.http.post(this.url + "/api/v1/users/logout", params);
    }; // end logout function
    AppService.prototype.getAuthToken = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get('userId'));
        return this.http.post(this.url + "/api/v1/users/auth", params);
    };
    AppService.prototype.saveMeeting = function (data) {
        var fullName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("firstName") + " " + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("lastName");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("setBy", fullName)
            .set("setTo", data.setTo)
            .set("title", data.title)
            .set("purpose", data.purpose)
            .set("where", data.where)
            .set("start", data.startDate)
            .set("end", data.endDate)
            .set("color", data.color)
            .set("email", data.email);
        return this.http.post(this.url + "/api/v1/meeting/save", params);
    }; // end of th e saveMeeitng function
    AppService.prototype.updateMeeting = function (data) {
        var fullName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("firstName") + " " + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("lastName");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("setBy", fullName)
            .set("setTo", data.setTo)
            .set("title", data.title)
            .set("purpose", data.purpose)
            .set("where", data.where)
            .set("start", data.startDate)
            .set("end", data.endDate)
            .set("color", data.color)
            .set("meetId", data.meetId)
            .set("email", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("email"));
        return this.http.post(this.url + "/api/v1/meeting/update", params);
    }; //end of the update meeting
    AppService.prototype.deleteMeeting = function (data) {
        var fullName = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("firstName") + " " + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("lastName");
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("meetId", data.meetId)
            .set("title", data.title)
            .set("setBy", fullName)
            .set("email", ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].get("email"));
        return this.http.post(this.url + "/api/v1/meeting/delete", params);
    };
    AppService.prototype.getMeeting = function () {
        return this.http.get(this.url + "/api/v1/meeting/getall");
    }; // end of th getMeeting function
    AppService.prototype.getUserMeeting = function (userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("userId", userId);
        return this.http.post(this.url + "/api/v1/meeting/getUserMeet", params);
    }; // end of th getUsreMeeting function
    AppService.prototype.sendVerifiEmail = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("email", data.email);
        return this.http.post(this.url + "/api/v1/users/sendVeriCode", params);
    }; //end of sendVerifiEmail 
    AppService.prototype.getVerfiCode = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("email", data.email);
        return this.http.post(this.url + "/api/v1/users/getCode", params);
    }; //end of getVerfiCode Function
    AppService.prototype.updatePassword = function (data) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]()
            .set("email", data.email)
            .set("password", data.password);
        return this.http.post(this.url + "/api/v1/users/updatePass", params);
    }; //end of updatePassword Function
    AppService.prototype.getUserList = function () {
        return this.http.get(this.url + "/api/v1/users/members");
    }; // end of th getMeeting function
    AppService.prototype.handleError = function (err) {
        var errorMessage = '';
        if (err.error instanceof Error) {
            errorMessage = "An error occurred: " + err.error.message;
        }
        else {
            errorMessage = "Server returned code: " + err.status + ", error message is: " + err.message;
        } // end condition *if
        console.error(errorMessage);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errorMessage);
    }; // END handleError
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AppService);
    return AppService;
}()); //End of Class



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n\nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n\nhr.star-light {\n    border-color: #fff;\n}\n\nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Contact Us</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n  <div class=\"col-md-9\">\n  \n    <p>In case you have any questions, suggestions or if you just want to have a general talk with us. You can reach out to us by any of the below means:</p>\n   \n  <div class=\"col-sm-6 left\">\n    <table>\n      <tr>\n         <td>Write to us</td>\n         <td><a href=\"\">vivektesting07@gmail.com</a></td>\n      </tr>\n      <tr>\n         <td>Call us</td>\n         <td>0-8421-64-1721</td>\n      </tr>\n      <tr>\n         <td>Whatsapp us</td>\n         <td>0-8421-64-1721</td>\n      </tr>\n    </table>\n  </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/error-view/error-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-view/error-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    *{\n        padding: 0;\n        margin: 0;\n        font-family: 'Arial';\n        color:#222;\n    }\n    body{\n        background: #ddd;\n    }\n    #error{\n        width:400px;\n        margin: 100px auto;\n        background: #fff;\n        padding: 30px;\n        border-radius: 10px;\n        box-shadow: 0 0 5px rgba(0,0,0,0.3);\n    }\n    #error img{\n        display: block;\n        float: left;\n        margin-right: 30px;\n    }\n    .clr{\n        clear: both;\n    }\n    #error h1{\n        margin-top: 50px;\n    }\n    #error a{\n        display: block;\n        padding: 10px;\n        background: rgb(22, 160, 133);\n        color:#fff;\n        margin-top:100px;\n        text-decoration: none;\n        border-radius: 10px;\n        clear: both;\n        text-align: center;\n        box-shadow: 0 0 10px rgba(0,0,0,0.4);\n    }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3Itdmlldy9lcnJvci12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtJQUNJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7UUFDVCxvQkFBb0I7UUFDcEIsVUFBVTtJQUNkO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsbUNBQW1DO0lBQ3ZDO0lBQ0E7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxhQUFhO1FBQ2IsNkJBQTZCO1FBQzdCLFVBQVU7UUFDVixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLG9DQUFvQztJQUN4QyIsImZpbGUiOiJzcmMvYXBwL2Vycm9yLXZpZXcvZXJyb3Itdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKntcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcbiAgICAgICAgY29sb3I6IzIyMjtcbiAgICB9XG4gICAgYm9keXtcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZDtcbiAgICB9XG4gICAgI2Vycm9ye1xuICAgICAgICB3aWR0aDo0MDBweDtcbiAgICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB9XG4gICAgI2Vycm9yIGltZ3tcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgfVxuICAgIC5jbHJ7XG4gICAgICAgIGNsZWFyOiBib3RoO1xuICAgIH1cbiAgICAjZXJyb3IgaDF7XG4gICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgfVxuICAgICNlcnJvciBhe1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiKDIyLCAxNjAsIDEzMyk7XG4gICAgICAgIGNvbG9yOiNmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6MTAwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLDAsMCwwLjQpO1xuICAgIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/error-view/error-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-view/error-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"error\">\n<img src=\"./../../assets/404.jpeg\"/>\n<h1>Ohh No!</h1>\n<p>The page <!--#echo var=\"REQUEST_URI\" --></p>\n<p>Does not exist</p>\n<a href=\"/signin\">Go to Main Page</a>\n<div class=\"clr\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/error-view/error-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-view/error-view.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorViewComponent", function() { return ErrorViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorViewComponent = /** @class */ (function () {
    function ErrorViewComponent() {
    }
    ErrorViewComponent.prototype.ngOnInit = function () {
    };
    ErrorViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error-view',
            template: __webpack_require__(/*! ./error-view.component.html */ "./src/app/error-view/error-view.component.html"),
            styles: [__webpack_require__(/*! ./error-view.component.css */ "./src/app/error-view/error-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorViewComponent);
    return ErrorViewComponent;
}());



/***/ }),

/***/ "./src/app/forget/forget.component.css":
/*!*********************************************!*\
  !*** ./src/app/forget/forget.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n\nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n\nhr.star-light {\n    border-color: #fff;\n}\n\nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n\n.input-group{\n\tmargin-bottom:10px;\n}\n\n.msg{\n\tcolor:#e74c3c;\n\tdisplay:none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFNBQVM7SUFDVCxxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBQ0E7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtBQUNiIiwiZmlsZSI6InNyYy9hcHAvZm9yZ2V0L2ZvcmdldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59XG5cbi5pbnB1dC1ncm91cHtcblx0bWFyZ2luLWJvdHRvbToxMHB4O1xufVxuLm1zZ3tcblx0Y29sb3I6I2U3NGMzYztcblx0ZGlzcGxheTpub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/forget/forget.component.html":
/*!**********************************************!*\
  !*** ./src/app/forget/forget.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Change Password</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n    <div class=\"col-md-12\"></div>\n    <div class=\"col-md-12\">\n      <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" id=\"Capa_1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 19.704 19.704\" style=\"enable-background:new 0 0 19.704 19.704;display:block;margin:auto;\" xml:space=\"preserve\" width=\"100px\" height=\"100px\"><g><g><path d=\"M16.062,5.904l-0.096,0.429h-0.181c0.158,0.264,0.248,0.58,0.248,0.926    c0,1.082-0.816,1.898-1.898,1.898c-0.958,0-1.68-0.732-1.68-1.705c0-0.498,0.176-0.945,0.468-1.285l0.07-0.624    c0.012-0.112,0.024-0.225,0.037-0.325c0.066-0.45,0.219-0.872,0.466-1.296c-1.088-0.498-2.329-0.757-3.645-0.757    c-4.303,0-7.804,2.762-7.804,7.658s3.501,8.881,7.804,8.881c4.304,0,7.806-3.984,7.806-8.881    C17.658,8.807,17.061,7.152,16.062,5.904z M9.852,18.499c-3.724,0-6.744-3.434-6.744-7.674h2.328l3.055-2.272l-1.223,2.292    c0,0,6.05,1.26,9.327-0.02C16.595,15.065,13.578,18.499,9.852,18.499z\" fill=\"#fa8e97\"/><path d=\"M8.304,13.501c0-0.563-0.455-1.018-1.016-1.018c-0.563,0-1.019,0.455-1.019,1.018    s0.456,1.02,1.019,1.02C7.849,14.52,8.304,14.063,8.304,13.501z M7.494,14.149c-0.288,0-0.521-0.234-0.521-0.521    c0-0.289,0.232-0.523,0.521-0.523s0.524,0.234,0.524,0.523C8.019,13.915,7.783,14.149,7.494,14.149z\" fill=\"#fa8e97\"/><path d=\"M12.519,12.483c-0.562,0-1.018,0.455-1.018,1.018s0.456,1.02,1.018,1.02    c0.563,0,1.02-0.457,1.02-1.02S13.082,12.483,12.519,12.483z M12.31,14.149c-0.288,0-0.522-0.234-0.522-0.521    c0-0.289,0.234-0.523,0.522-0.523c0.289,0,0.523,0.234,0.523,0.523C12.833,13.915,12.599,14.149,12.31,14.149z\" fill=\"#fa8e97\"/><path d=\"M15.082,1.406c0.557,0.013,0.715,0.267,0.715,0.583c0,0.424-0.497,0.824-0.97,1.345    c-0.667,0.715-0.994,1.309-1.091,1.963c-0.012,0.097-0.024,0.206-0.036,0.314h1.696c0.024-0.109,0.036-0.193,0.061-0.291    c0.109-0.545,0.34-0.921,0.813-1.394c0.69-0.69,1.333-1.309,1.333-2.277C17.603,0.655,16.754,0,15.591,0    c-0.909,0-1.601,0.243-2.048,0.522l0.229,1.223C14.099,1.54,14.547,1.406,15.082,1.406z\" fill=\"#fa8e97\"/><path d=\"M13.166,7.443c0,0.569,0.388,0.994,0.969,0.994c0.691,0,1.188-0.497,1.188-1.188    c0-0.594-0.399-1.019-0.993-1.019C13.638,6.23,13.166,6.8,13.166,7.443z\" fill=\"#fa8e97\"/><path d=\"M10.743,15.608c-1.26-0.334-3,1.234-3.073,1.301l0.355,0.393c0.442-0.402,1.771-1.395,2.582-1.182    c0.297,0.08,0.508,0.32,0.643,0.736l0.503-0.162C11.561,16.1,11.221,15.737,10.743,15.608z\" fill=\"#fa8e97\"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n      <h3 style=\"text-align: center;\">Forgot Password?</h3>\n      <p style=\"text-align: center;\">No worries let's reset it in seconds</p>\n      <!-- <div style=\"background: #efefef;border-radius: 5px;box-shadow: 0 3px 5px rgba(0,0,0,0.2);padding: 10px;\">\n      <div id=\"form\">\n            <form #createBlogForm=\"ngForm\" (ngSubmit)=\"addMeeting()\"></form>\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon1\" ><i class=\"fa fa-mobile\"></i></span>\n          <input id=\"inp-phone\" type=\"text\" class=\"form-control\" placeholder=\"Register Email Address\" aria-describedby=\"basic-addon1\">\n      </div>\n      <p class=\"msg\" id=\"msg-phone\">Enter your registered phone number</p>\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon2\"><i class=\"fa fa-lock\"></i></span>\n          <input id=\"inp-password\" type=\"password\" class=\"form-control\" placeholder=\"New Password\" aria-describedby=\"basic-addon2\">\n      </div>\n      <p class=\"msg\" id=\"msg-password\">Password shold be minimum 4 letters/digits.</p>\n      \n      <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon3\"><i class=\"fa fa-lock\"></i></span>\n          <input  id=\"inp-repassword\" type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" aria-describedby=\"basic-addon3\">\n      </div>\n      \n      <p class=\"msg\" id=\"msg-repassword\">Password did not match.</p>\n      \n      <button style=\"display: block;margin:10px auto;\" class=\"btn btn-success\" onclick=\"proceed()\">Send Verification Code</button>\n      </div>\n      <div id=\"form-otp\" style=\"\">\n      <div class=\"input-group\">\n          <span class=\"input-group-addon\" id=\"basic-addon4\" ><i class=\"fa fa-lock\"></i></span>\n          <input id=\"inp-otp\" type=\"text\" class=\"form-control\" placeholder=\"OTP\" aria-describedby=\"basic-addon4\">\n      </div>\n      <p class=\"msg\" id=\"msg-otp\">OTP did not match.</p>\n      <button style=\"display: block;margin:10px auto;\" class=\"btn btn-success\" onclick=\"verify()\">Verify</button>\n      \n      </div>\n      <div id=\"div-success\" style=\"display: none;\">\n        <svg style=\"display:block;margin:10px auto;width:100px;height:100px;\" version=\"1.1\" id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\t viewBox=\"0 0 504.12 504.12\" style=\"enable-background:new 0 0 504.12 504.12;\" xml:space=\"preserve\"><circle style=\"fill:#3DB39E;\" cx=\"252.06\" cy=\"252.06\" r=\"252.06\"/><path style=\"fill:#37A18E;\" d=\"M463.163,114.609L240.246,345.403l0.394,24.812h10.24l241.428-194.56\tC485.218,153.994,475.372,133.12,463.163,114.609z\"/><path style=\"fill:#F2F1EF;\" d=\"M499.397,103.582l-44.505-44.111c-5.908-5.908-15.754-5.908-22.055,0L242.609,256l-82.314-81.132\tc-5.908-5.908-15.754-5.908-22.055,0l-39.385,38.991c-5.908,5.908-5.908,15.754,0,21.662L230.4,365.883\tc3.545,3.545,8.271,4.726,12.997,4.332c4.726,0.394,9.452-0.788,12.997-4.332l243.003-240.246\tC505.305,119.335,505.305,109.489,499.397,103.582z\"/><path style=\"fill:#E6E5E3;\" d=\"M256.394,365.883l243.003-240.246c5.908-5.908,5.908-15.754,0-21.662l-7.089-6.695L243.003,342.252\tL105.157,207.951l-5.908,5.908c-5.908,5.908-5.908,15.754,0,21.662l131.545,130.363c3.545,3.545,8.271,4.726,12.997,4.332\tC248.123,370.609,252.849,369.428,256.394,365.883z\"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>\n        <h3 style=\"text-align: center;\">Password has been reset.</h3>\n      </div>\n      <span id=\"loading\" style=\"display:none;\"><svg style=\"display:block;margin:auto;\" width=\"40px\" height=\"40px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-facebook\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"#eee\" class=\"bk\"></rect><g transform=\"translate(20 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.6\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g><g transform=\"translate(50 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.8\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0.1s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g><g transform=\"translate(80 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.9\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0.2s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g></svg></span>\n      </div> -->\n    </div>\n\n    <div  style=\"background-color:lightgray;padding: 10px;border-radius: 6px;\">\n            <form id=\"forgetPassword\" #forgetPassForm=\"ngForm\" (ngSubmit)=\"sendEmail()\">\n                \n              <div class=\"form-group\">\n                    <label>Email Id</label>\n                    <input type=\"email\" class=\"form-control\" #titleVal=\"ngModel\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter Register Email Address\" required>\n                </div>\n            \n                <div class=\"form-group\">\n                  <label>Password</label>\n                  <input class=\"form-control\" type=\"text\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter New Password\"  pattern=\"^[A-Za-z0-9]\\w{7,}$\" #valPassword=\"ngModel\" required/>\n                </div>\n                <div *ngIf=\"valPassword.invalid && (valPassword.dirty || valPassword.touched)\" class=\"alert alert-danger\">\n                    <div *ngIf=\"valPassword.errors.required\">\n                          Password is Required\n                    </div>\n                    <div *ngIf=\"valPassword.errors.pattern\">\n                            Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter\n                    </div>\n                </div>\n\n                <div class=\"form-group\">\n                    <label>Confirm Password</label>\n                    <input class=\"form-control\" type=\"text\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\" required/>\n                </div>\n                \n                <button type=\"submit\" style=\"display: block;margin:10px auto;\" class=\"btn btn-success\">Send Verification Code</button>\n                \n            </form>\n            <form style=\"display:none;\" id=\"verificationCode\" (ngSubmit)=\"verify()\">\n                    \n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" name=\"veriCode\" [(ngModel)]=\"veriCode\" placeholder=\"Verification Code\" required>\n                    </div>\n                    <button type=\"submit\" style=\"display: block;margin:10px auto;\" class=\"btn btn-success\">Verify</button> \n            </form>\n            \n            <span id=\"loading\" style=\"display:none;\"><svg style=\"display:block;margin:auto;\" width=\"40px\" height=\"40px\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid\" class=\"uil-facebook\"><rect x=\"0\" y=\"0\" width=\"100\" height=\"100\" fill=\"#eee\" class=\"bk\"></rect><g transform=\"translate(20 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.6\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g><g transform=\"translate(50 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.8\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0.1s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g><g transform=\"translate(80 50)\"><rect x=\"-10\" y=\"-30\" width=\"20\" height=\"60\" fill=\"#2980b9\" opacity=\"0.9\"><animateTransform attributeName=\"transform\" type=\"scale\" from=\"2\" to=\"1\" begin=\"0.2s\" repeatCount=\"indefinite\" dur=\"1s\" calcMode=\"spline\" keySplines=\"0.1 0.9 0.4 1\" keyTimes=\"0;1\" values=\"2;1\"></animateTransform></rect></g></svg></span>\n        </div>\n          \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/forget/forget.component.ts":
/*!********************************************!*\
  !*** ./src/app/forget/forget.component.ts ***!
  \********************************************/
/*! exports provided: ForgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetComponent", function() { return ForgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



//import { $ } from 'protractor';




var ForgetComponent = /** @class */ (function () {
    function ForgetComponent(toastr, appService, router) {
        this.toastr = toastr;
        this.appService = appService;
        this.router = router;
    }
    ForgetComponent.prototype.sendEmail = function () {
        var _this = this;
        if (!this.email) {
            this.toastr.warning("Enter Email Address");
        }
        else if (!this.password) {
            this.toastr.warning("Enter Password");
        }
        else if (!this.confirmPassword) {
            this.toastr.warning("Enter Confirm Password");
        }
        else if (this.password != this.confirmPassword) {
            this.toastr.warning("Password don't match");
        }
        else {
            var data = {
                email: this.email,
                userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get("userId")
            };
            jquery__WEBPACK_IMPORTED_MODULE_3__("#loading").css({ 'display': 'block' });
            this.appService.sendVerifiEmail(data).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#loading").css({ 'display': 'none' });
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#forgetPassword").css({ 'display': 'none' });
                    _this.toastr.success("Verification Code Send to your Mail");
                    jquery__WEBPACK_IMPORTED_MODULE_3__("#verificationCode").css({ 'display': 'block' });
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        } //if loop end here
    }; //send mail fuction end here
    ForgetComponent.prototype.verify = function () {
        var _this = this;
        if (!this.veriCode) {
            this.toastr.warning("Enter Verification Code");
        }
        else {
            var data = {
                email: this.email
            };
            jquery__WEBPACK_IMPORTED_MODULE_3__("#loading").css({ 'display': 'block' });
            this.appService.getVerfiCode(data).subscribe(function (apiResponse) {
                jquery__WEBPACK_IMPORTED_MODULE_3__("#loading").css({ 'display': 'none' });
                if (apiResponse.status === 200) {
                    if (apiResponse.data.verifiCode == _this.veriCode) {
                        _this.appService.updatePassword({ email: _this.email, password: _this.password }).subscribe(function (apiResponse) {
                            if (apiResponse.status === 200) {
                                _this.toastr.success("Your Password Updated Successfully");
                                setTimeout(function () {
                                    _this.router.navigate(['/signin']);
                                    location.reload();
                                }, 3000);
                            }
                            else {
                                _this.toastr.error(apiResponse.message);
                            }
                        }, function (err) {
                            _this.toastr.error('Some error occured');
                        });
                    }
                    else {
                        _this.toastr.error('Enter Correct Verification Code');
                    }
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        }
    };
    ForgetComponent.prototype.ngOnInit = function () {
    };
    ForgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forget',
            template: __webpack_require__(/*! ./forget.component.html */ "./src/app/forget/forget.component.html"),
            styles: [__webpack_require__(/*! ./forget.component.css */ "./src/app/forget/forget.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ForgetComponent);
    return ForgetComponent;
}());



/***/ }),

/***/ "./src/app/member/member-dashboard/member-dashboard.component.css":
/*!************************************************************************!*\
  !*** ./src/app/member/member-dashboard/member-dashboard.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    margin: 0 0 10px;\n  }\n  \n  pre {\n    background-color: #f5f5f5;\n    padding: 15px;\n  }\n  \n  hr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\n  \n  hr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\n  \n  hr.star-light {\n    border-color: #fff;\n}\n  \n  hr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL21lbWJlci1kYXNoYm9hcmQvbWVtYmVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLGFBQWE7RUFDZjs7RUFFQTs7SUFFRSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0Qjs7RUFFQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsd0JBQXdCO0lBQ3hCLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0VBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL21lbWJlci1kYXNoYm9hcmQvbWVtYmVyLWRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDMge1xuICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gIH1cbiAgXG4gIHByZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/member/member-dashboard/member-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/member/member-dashboard/member-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Member Dashboard</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n  <ng-template #modalContent let-close=\"close\">\n    <div class=\"modal-body\">\n        <div>\n            Meeting Title:\n            <pre>{{ modalData?.event.title }}</pre>\n          </div>\n          <div>\n            Details:\n            <table>\n              <tr>\n                <th>Purpose:</th>\n                <td>{{ modalData?.event.purpose }}</td>\n              </tr>\n              <tr>\n                <th>Where:</th>\n                <td>{{ modalData?.event.where }}</td>\n              </tr>\n              <tr>\n                  <th>Start:</th>\n                  <td>Date :{{ modalData?.event.startDate }} &amp; Time:{{ modalData?.event.startTime }} </td>\n              </tr>\n              <tr>\n                  <th>End:</th>\n                  <td>Date :{{ modalData?.event.endDate }} &amp; Time:{{ modalData?.event.endTime }} </td>\n              </tr>\n              <tr>\n                <th>Set By</th>\n                <td>\n                    {{ modalData?.event.setBy }}\n                </td>\n              </tr>\n            </table>\n          </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"close()\">OK</button>\n    </div>\n  </ng-template>\n  <div class=\"row text-center\">\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarPreviousView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"activeDayIsOpen = false\">\n          Previous\n        </div>\n        <div\n          class=\"btn btn-outline-secondary\"\n          mwlCalendarToday\n          [(viewDate)]=\"viewDate\">\n          Today\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          mwlCalendarNextView\n          [view]=\"view\"\n          [(viewDate)]=\"viewDate\"\n          (viewDateChange)=\"activeDayIsOpen = false\">\n          Next\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-4\">\n      <h3>{{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}</h3>\n    </div>\n    <div class=\"col-md-4\">\n      <div class=\"btn-group\">\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = CalendarView.Month\"\n          [class.active]=\"view === CalendarView.Month\">\n          Month\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = CalendarView.Week\"\n          [class.active]=\"view === CalendarView.Week\">\n          Week\n        </div>\n        <div\n          class=\"btn btn-primary\"\n          (click)=\"view = CalendarView.Day\"\n          [class.active]=\"view === CalendarView.Day\">\n          Day\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div [ngSwitch]=\"view\">\n    <mwl-calendar-month-view\n      *ngSwitchCase=\"CalendarView.Month\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      [activeDayIsOpen]=\"activeDayIsOpen\"\n      (dayClicked)=\"dayClicked($event.day)\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-month-view>\n    <mwl-calendar-week-view\n      *ngSwitchCase=\"CalendarView.Week\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-week-view>\n    <mwl-calendar-day-view\n      *ngSwitchCase=\"CalendarView.Day\"\n      [viewDate]=\"viewDate\"\n      [events]=\"events\"\n      [refresh]=\"refresh\"\n      (eventClicked)=\"handleEvent('Clicked', $event.event)\"\n      (eventTimesChanged)=\"eventTimesChanged($event)\">\n    </mwl-calendar-day-view>\n  </div>\n  \n  <br><br><br>\n  <!-- \n  <h3>\n      {{calUserName}} Meeting List\n      <div class=\"clearfix\"></div>\n    </h3>\n  <div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    \n      <thead>\n        <tr>\n          <th>Sr.No.</th>\n          <th>Meeting Title</th>\n          <th>Purpose</th>\n          <th>Where</th>\n          <th>Starts</th>\n          <th>Ends</th>\n          <th>Set By</th>\n        </tr>\n      </thead>\n    \n      <tbody>\n        <tr *ngFor=\"let event of eventList; let index = index\">\n          <td>\n            {{index+1}}\n          </td>\n          <td>\n            {{event.title}}\n          </td>\n          <td>\n            {{event.purpose}}\n          </td>\n          <td>\n            {{event.where}}\n          </td>\n          <td>\n            {{event.startDate}}<br>{{event.startTime}}\n          </td>\n          <td>\n            {{event.endDate}}<br>{{event.endTime}}\n          </td>\n          <td>\n            {{event.setBy}}\n          </td>\n        </tr>\n      </tbody>\n    \n    </table>\n    </div> -->\n</div>\n"

/***/ }),

/***/ "./src/app/member/member-dashboard/member-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/member/member-dashboard/member-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: MemberDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberDashboardComponent", function() { return MemberDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");










var colors = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};
var MemberDashboardComponent = /** @class */ (function () {
    function MemberDashboardComponent(modal, Router, appService, toastr) {
        var _this = this;
        this.modal = modal;
        this.Router = Router;
        this.appService = appService;
        this.toastr = toastr;
        this.view = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"].Month;
        this.CalendarView = angular_calendar__WEBPACK_IMPORTED_MODULE_5__["CalendarView"];
        this.viewDate = new Date();
        this.actions = [];
        this.refresh = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.events = [];
        this.activeDayIsOpen = true;
        this.eventList = [];
        var getMeeting = function () {
            var userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("userId");
            _this.appService.getUserMeeting(userId).subscribe(function (apiResponse) {
                if (apiResponse.status === 200) {
                    var meetArray = apiResponse.data;
                    for (var i = 0; i < meetArray.length; i++) {
                        _this.eventList.push({
                            setBy: meetArray[i].setBy,
                            setTo: meetArray[i].setTo,
                            meetId: meetArray[i].meetId,
                            title: meetArray[i].title,
                            where: meetArray[i].where,
                            actions: _this.actions,
                            color: { primary: meetArray[i].color, secondary: "#FAE3E3" },
                            purpose: meetArray[i].purpose,
                            start: new Date(meetArray[i].start),
                            end: new Date(meetArray[i].end),
                            startDate: new Date(meetArray[i].start).toLocaleDateString(),
                            startTime: new Date(meetArray[i].start).toLocaleTimeString(),
                            endDate: new Date(meetArray[i].end).toLocaleDateString(),
                            endTime: new Date(meetArray[i].end).toLocaleTimeString()
                        });
                        _this.refresh.next();
                    }
                    _this.events = _this.eventList;
                }
                else {
                    _this.toastr.error(apiResponse.message);
                }
            }, function (err) {
                _this.toastr.error('Some error occured');
            });
        };
        getMeeting();
    }
    MemberDashboardComponent.prototype.dayClicked = function (_a) {
        var date = _a.date, events = _a.events;
        if (Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameMonth"])(date, this.viewDate)) {
            this.viewDate = date;
            if ((Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["isSameDay"])(this.viewDate, date) && this.activeDayIsOpen === true) || events.length === 0) {
                this.activeDayIsOpen = false;
            }
            else {
                this.activeDayIsOpen = true;
            }
        }
    };
    MemberDashboardComponent.prototype.handleEvent = function (action, event) {
        this.modalData = { event: event, action: action };
        this.modal.open(this.modalContent, { size: 'lg' });
    };
    MemberDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var getUserInfoFromLocalStorage = function () {
            var role = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("role");
            var authToken = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_7__["Cookie"].get("authtoken");
            if (role == "admin") {
                _this.Router.navigate(['/aDashboard']);
            }
            else if (authToken == null) {
                _this.Router.navigate(['/']);
            }
        };
        getUserInfoFromLocalStorage();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('modalContent'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], MemberDashboardComponent.prototype, "modalContent", void 0);
    MemberDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-member-dashboard',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: __webpack_require__(/*! ./member-dashboard.component.html */ "./src/app/member/member-dashboard/member-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./member-dashboard.component.css */ "./src/app/member/member-dashboard/member-dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_app_service__WEBPACK_IMPORTED_MODULE_8__["AppService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], MemberDashboardComponent);
    return MemberDashboardComponent;
}());



/***/ }),

/***/ "./src/app/member/member.module.ts":
/*!*****************************************!*\
  !*** ./src/app/member/member.module.ts ***!
  \*****************************************/
/*! exports provided: MemberModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberModule", function() { return MemberModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _member_dashboard_member_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./member-dashboard/member-dashboard.component */ "./src/app/member/member-dashboard/member-dashboard.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-calendar/date-adapters/date-fns */ "./node_modules/angular-calendar/date-adapters/date-fns/index.js");
/* harmony import */ var angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-flatpickr */ "./node_modules/angularx-flatpickr/fesm5/angularx-flatpickr.js");






// form module

//calenser module



var MemberModule = /** @class */ (function () {
    function MemberModule() {
    }
    MemberModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_member_dashboard_member_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MemberDashboardComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                angularx_flatpickr__WEBPACK_IMPORTED_MODULE_9__["FlatpickrModule"].forRoot(),
                angular_calendar__WEBPACK_IMPORTED_MODULE_7__["CalendarModule"].forRoot({
                    provide: angular_calendar__WEBPACK_IMPORTED_MODULE_7__["DateAdapter"],
                    useFactory: angular_calendar_date_adapters_date_fns__WEBPACK_IMPORTED_MODULE_8__["adapterFactory"]
                }),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    { path: 'mDashboard', component: _member_dashboard_member_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MemberDashboardComponent"] }
                ])
            ],
            exports: [
                _member_dashboard_member_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["MemberDashboardComponent"]
            ]
        })
    ], MemberModule);
    return MemberModule;
}());



/***/ }),

/***/ "./src/app/user/signin/signin.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signin/signin.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2,input{\n    margin-bottom: 30px;\n}\nbutton{\n    width: 100%;\n    background-color: #FFC312;\n    color: black;\n    font-size: 20px;\n    border-color: #FFC312;\n}\nhr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\nhr.star-light {\n    border-color: #fff;\n}\nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvdXNlci9zaWduaW4vc2lnbmluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMixpbnB1dHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuYnV0dG9ue1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkMzMTI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBib3JkZXItY29sb3I6ICNGRkMzMTI7XG59XG5cbmhyLnN0YXItbGlnaHQsXG5oci5zdGFyLXByaW1hcnkge1xuICAgIG1hcmdpbjogMjVweCBhdXRvIDMwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItdG9wOiBzb2xpZCA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5oci5zdGFyLWxpZ2h0OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcZjAwNVwiO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtLjhlbTtcbiAgICBwYWRkaW5nOiAwIC4yNWVtO1xuICAgIGZvbnQtZmFtaWx5OiBGb250QXdlc29tZTtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuaHIuc3Rhci1saWdodCB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xufVxuXG5oci5zdGFyLWxpZ2h0OmFmdGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMThiYzljO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/user/signin/signin.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signin/signin.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Sign In</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n  <div class=\"col-md-6\" style=\"margin:auto;\">\n  \n    <label for=\"inp-email\">Email:</label>\n    <input type=\"email\" id=\"inp-email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email\" email required #game=\"ngModel\">\n    <div *ngIf=\"game.invalid && game.dirty\" class=\"alert alert-danger\">\n        <div *ngIf=\"game.errors.required\">Email is Required</div>\n        <div *ngIf=\"game.errors.email\">Email must be valid</div>\n    </div>\n\n    <label for=\"inp-password\">Password:</label>\n    <input type=\"password\" id=\"inp-password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password\">\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signinFunction()\" style=\"margin-bottom:20px;\">Login</button>\n    \n    <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n            Don't have an account? &nbsp; <a href=\"/signup\">Sign Up</a>\n          </div>\n        <div class=\"d-flex justify-content-center\">\n            <a href=\"/forget\">Forgot your password?</a>\n          </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user/signin/signin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signin/signin.component.ts ***!
  \*************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-cookies/ng2-cookies */ "./node_modules/ng2-cookies/ng2-cookies.js");
/* harmony import */ var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//toaster sevices




var SigninComponent = /** @class */ (function () {
    function SigninComponent(toastr, appService, Router) {
        var _this = this;
        this.toastr = toastr;
        this.appService = appService;
        this.Router = Router;
        this.signinFunction = function () {
            if (!_this.email) {
                _this.toastr.warning('Enter Correct Email Id');
            }
            else if (!_this.password) {
                _this.toastr.warning('Enter password');
            }
            else {
                var signinData = {
                    email: _this.email,
                    password: _this.password
                };
                console.log(signinData);
                _this.appService.signinFunction(signinData).subscribe(function (apiResponse) {
                    console.log("apires=>>", apiResponse);
                    if (apiResponse.status === 200) {
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('authtoken', apiResponse.data.authToken); //it is jwt token
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', apiResponse.data.userDetails.userId);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('firstName', apiResponse.data.userDetails.firstName);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('lastName', apiResponse.data.userDetails.lastName);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('role', apiResponse.data.userDetails.role);
                        ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('email', apiResponse.data.userDetails.email);
                        _this.appService.setUserInfoToLocalStorage(apiResponse.data.userDetails);
                        location.reload();
                        if (apiResponse.data.userDetails.role == "Admin") {
                            _this.Router.navigate(['/aDashboard']);
                        }
                        else {
                            _this.Router.navigate(['/mDashboard']);
                        }
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error(err);
                });
            }
        };
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/user/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/user/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/user/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/user/signup/signup.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2,input,#sel-role{\n    margin-bottom: 30px;\n}\nbutton{\n    width: 100%;\n    background-color: #FFC312;\n    color: black;\n    font-size: 20px;\n    border-color: #FFC312;\n}\nhr.star-light,\nhr.star-primary {\n    margin: 25px auto 30px;\n    padding: 0;\n    max-width: 250px;\n    border: 0;\n    border-top: solid 5px;\n    text-align: center;\n}\nhr.star-light:after {\n    content: \"\\f005\";\n    display: inline-block;\n    position: relative;\n    top: -.8em;\n    padding: 0 .25em;\n    font-family: FontAwesome;\n    font-size: 2em;\n}\nhr.star-light {\n    border-color: #fff;\n}\nhr.star-light:after {\n    color: #fff;\n    background-color: #18bc9c;\n}\n.card-footer{\n    margin-bottom: 30px;\n}\n/* // workaround */\n.intl-tel-input {\n  display: table-cell;\n}\n.intl-tel-input .selected-flag {\n  z-index: 4;\n}\n.intl-tel-input .country-list {\n  z-index: 5;\n}\n.input-group .intl-tel-input .form-control {\n  border-radius: 5px;\n}\n.icon {\n    padding: 10px;\n    color: black;\n    max-width: 60px;\n    text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7QUFDekI7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIsaW5wdXQsI3NlbC1yb2xle1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5idXR0b257XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQzMxMjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGJvcmRlci1jb2xvcjogI0ZGQzMxMjtcbn1cblxuaHIuc3Rhci1saWdodCxcbmhyLnN0YXItcHJpbWFyeSB7XG4gICAgbWFyZ2luOiAyNXB4IGF1dG8gMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1heC13aWR0aDogMjUwcHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci10b3A6IHNvbGlkIDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXFxmMDA1XCI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0uOGVtO1xuICAgIHBhZGRpbmc6IDAgLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6IEZvbnRBd2Vzb21lO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG5oci5zdGFyLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XG59XG5cbmhyLnN0YXItbGlnaHQ6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOGJjOWM7XG59XG5cbi5jYXJkLWZvb3RlcntcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4vKiAvLyB3b3JrYXJvdW5kICovXG4uaW50bC10ZWwtaW5wdXQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuLmludGwtdGVsLWlucHV0IC5zZWxlY3RlZC1mbGFnIHtcbiAgei1pbmRleDogNDtcbn1cbi5pbnRsLXRlbC1pbnB1dCAuY291bnRyeS1saXN0IHtcbiAgei1pbmRleDogNTtcbn1cbi5pbnB1dC1ncm91cCAuaW50bC10ZWwtaW5wdXQgLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmljb24ge1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1heC13aWR0aDogNjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/user/signup/signup.component.html":
/*!***************************************************!*\
  !*** ./src/app/user/signup/signup.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-lg-12 text-center\">\n            <h2>Sign Up</h2>\n            <hr class=\"star-primary\">\n        </div>\n    </div>\n  <div class=\"col-md-6\" style=\"margin:auto;\">\n    <!-- signup form start here -->\n    <label for=\"inp-firstName\">First Name:</label>\n    <input type=\"text\" id=\"inp-firstName\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"firstName\" placeholder=\"Enter First Name\" firstName required #valFirstName=\"ngModel\" minlength=\"3\" autocomplete=\"off\" pattern=\"\">\n    <div *ngIf=\"valFirstName.invalid && (valFirstName.dirty || valFirstName.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"valFirstName.errors.required\">\n        FirstName is Required\n      </div>\n      <div *ngIf=\"valFirstName.errors.minlength\">\n        Name must be at least 3 characters long.\n      </div>\n      <div *ngIf=\"valFirstName.errors.pattern\">\n        Name Must be a char\n      </div>\n    </div>\n    \n    <label for=\"inp-lastName\">Last Name:</label>\n    <input type=\"text\" id=\"inp-lastName\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"lastName\" placeholder=\"Enter Last Name\">\n\n    <label for=\"inp-email\">Email:</label>\n    <input type=\"email\" id=\"inp-email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Enter email\" email required #valEmail=\"ngModel\" autocomplete=\"off\">\n    <div *ngIf=\"valEmail.invalid && valEmail.dirty\" class=\"alert alert-danger\">\n      <div *ngIf=\"valEmail.errors.required\">Email is Required</div>\n      <div *ngIf=\"valEmail.errors.email\">Email must be valid</div>\n    </div>\n    \n    <label for=\"inp-phone\">Moblie Number:</label>\n    <div class=\"input-group mb-3\">\n    <!-- countery code -->\n    <select [(ngModel)]=\"countyCode\" name=\"countyCode\" class=\"form-control icon\" id=\"category\" required>\n        <option *ngFor=\"let category of allCountryCode | keyvalue\" [value]=\"category.value\">{{category.value}}</option>\n    </select>\n    <input type=\"tel\" id=\"phone\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"phone\" placeholder=\"Enter Mobile Number\" phone required #valPhone=\"ngModel\" autocomplete=\"off\" pattern=\"^(\\+\\d{1,3}[- ]?)?\\d{10}$\">\n  </div>\n  <div *ngIf=\"valPhone.invalid && (valPhone.dirty || valPhone.touched)\" class=\"alert alert-danger\">\n      <div *ngIf=\"valPhone.errors.required\">\n        Phone Number is Required\n      </div>\n      <div *ngIf=\"valPhone.errors.pattern\">\n        Phone Number must be valid\n      </div>\n  </div>\n\n    <label for=\"selRole\">Select Type:</label>\n      <select class=\"form-control\" id=\"selRole\" name=\"role\" [(ngModel)]=\"role\" role required #valRole=\"ngModel\">\n        <option value=\"select\" selected>Select</option>\n        <option value=\"user\">User</option>\n        <option value=\"admin\">Admin</option>\n      </select>\n      <div *ngIf=\"valRole.invalid && (valRole.dirty || valRole.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"valRole.errors.required\">\n            Role is Required\n          </div>\n           <div *ngIf=\"valRole.errors.pattern\">\n            Phone Number must be valid\n          </div> \n      </div>\n      \n      \n          <!-- <label for=\"selRole\">Select Type:</label>\n          <select class=\"form-control\" id=\"selRole\" name=\"role\" [(ngModel)]=\"role\" role required #valRole=\"ngModel\" >\n              <option value=\"\" selected>Select</option>\n              <option value=\"user\">User</option>\n              <option value=\"admin\">Admin</option>\n          </select> -->\n        \n\n\n    <label for=\"inp-password\">Password:</label>\n    <input type=\"password\" id=\"inp-password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Enter password\" pattern=\"^[A-Za-z0-9]\\w{7,}$\" #valPassword=\"ngModel\" required>\n    <div *ngIf=\"valPassword.invalid && (valPassword.dirty || valPassword.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"valPassword.errors.required\">\n          Password is Required\n        </div>\n        <div *ngIf=\"valPassword.errors.pattern\">\n            Minimum 8 characters which contain only characters,numeric digits, underscore and first character must be a letter\n        </div>\n    </div>\n    <label for=\"inp-confirm-password\">Confirm Password:</label>\n    <input type=\"password\" id=\"inp-confirm-password\" class=\"form-control\" name=\"passConf\" [(ngModel)]=\"passConf\" placeholder=\"Confirm Password\">\n\n    <button type=\"submit\" class=\"btn btn-primary\" (click)=\"signupFunction()\" style=\"margin-bottom:20px;\">Sign Up</button>\n    <!-- signup form end here -->\n    <div class=\"card-footer\">\n        <div class=\"d-flex justify-content-center links\">\n            If you have an account? &nbsp; <a href=\"/signin\">Sign In</a>\n          </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/user/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var src_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


//toaster sevices



var SignupComponent = /** @class */ (function () {
    //public allCountryCode=["one","two","three"];
    function SignupComponent(appService, toastr, Router) {
        var _this = this;
        this.appService = appService;
        this.toastr = toastr;
        this.Router = Router;
        this.role = ["user", "admin"];
        this.allCountryCode = { "IN": "91", "BD": "880", "BE": "32", "BF": "226", "BG": "359", "BA": "387", "BB": "+1-246", "WF": "681", "BL": "590", "BM": "+1-441", "BN": "673", "BO": "591", "BH": "973", "BI": "257", "BJ": "229", "BT": "975", "JM": "+1-876", "BV": "", "BW": "267", "WS": "685", "BQ": "599", "BR": "55", "BS": "+1-242", "JE": "+44-1534", "BY": "375", "BZ": "501", "RU": "7", "RW": "250", "RS": "381", "TL": "670", "RE": "262", "TM": "993", "TJ": "992", "RO": "40", "TK": "690", "GW": "245", "GU": "+1-671", "GT": "502", "GS": "", "GR": "30", "GQ": "240", "GP": "590", "JP": "81", "GY": "592", "GG": "+44-1481", "GF": "594", "GE": "995", "GD": "+1-473", "GB": "44", "GA": "241", "SV": "503", "GN": "224", "GM": "220", "GL": "299", "GI": "350", "GH": "233", "OM": "968", "TN": "216", "JO": "962", "HR": "385", "HT": "509", "HU": "36", "HK": "852", "HN": "504", "HM": " ", "VE": "58", "PR": "+1-787 and 1-939", "PS": "970", "PW": "680", "PT": "351", "SJ": "47", "PY": "595", "IQ": "964", "PA": "507", "PF": "689", "PG": "675", "PE": "51", "PK": "92", "PH": "63", "PN": "870", "PL": "48", "PM": "508", "ZM": "260", "EH": "212", "EE": "372", "EG": "20", "ZA": "27", "EC": "593", "IT": "39", "VN": "84", "SB": "677", "ET": "251", "SO": "252", "ZW": "263", "SA": "966", "ES": "34", "ER": "291", "ME": "382", "MD": "373", "MG": "261", "MF": "590", "MA": "212", "MC": "377", "UZ": "998", "MM": "95", "ML": "223", "MO": "853", "MN": "976", "MH": "692", "MK": "389", "MU": "230", "MT": "356", "MW": "265", "MV": "960", "MQ": "596", "MP": "+1-670", "MS": "+1-664", "MR": "222", "IM": "+44-1624", "UG": "256", "TZ": "255", "MY": "60", "MX": "52", "IL": "972", "FR": "33", "IO": "246", "SH": "290", "FI": "358", "FJ": "679", "FK": "500", "FM": "691", "FO": "298", "NI": "505", "NL": "31", "NO": "47", "NA": "264", "VU": "678", "NC": "687", "NE": "227", "NF": "672", "NG": "234", "NZ": "64", "NP": "977", "NR": "674", "NU": "683", "CK": "682", "XK": "", "CI": "225", "CH": "41", "CO": "57", "CN": "86", "CM": "237", "CL": "56", "CC": "61", "CA": "1", "CG": "242", "CF": "236", "CD": "243", "CZ": "420", "CY": "357", "CX": "61", "CR": "506", "CW": "599", "CV": "238", "CU": "53", "SZ": "268", "SY": "963", "SX": "599", "KG": "996", "KE": "254", "SS": "211", "SR": "597", "KI": "686", "KH": "855", "KN": "+1-869", "KM": "269", "ST": "239", "SK": "421", "KR": "82", "SI": "386", "KP": "850", "KW": "965", "SN": "221", "SM": "378", "SL": "232", "SC": "248", "KZ": "7", "KY": "+1-345", "SG": "65", "SE": "46", "SD": "249", "DO": "+1-809 and 1-829", "DM": "+1-767", "DJ": "253", "DK": "45", "VG": "+1-284", "DE": "49", "YE": "967", "DZ": "213", "US": "1", "UY": "598", "YT": "262", "UM": "1", "LB": "961", "LC": "+1-758", "LA": "856", "TV": "688", "TW": "886", "TT": "+1-868", "TR": "90", "LK": "94", "LI": "423", "LV": "371", "TO": "676", "LT": "370", "LU": "352", "LR": "231", "LS": "266", "TH": "66", "TF": "", "TG": "228", "TD": "235", "TC": "+1-649", "LY": "218", "VA": "379", "VC": "+1-784", "AE": "971", "AD": "376", "AG": "+1-268", "AF": "93", "AI": "+1-264", "VI": "+1-340", "IS": "354", "IR": "98", "AM": "374", "AL": "355", "AO": "244", "AQ": "", "AS": "+1-684", "AR": "54", "AU": "61", "AT": "43", "AW": "297", "AX": "+358-18", "AZ": "994", "IE": "353", "ID": "62", "UA": "380", "QA": "974", "MZ": "258" };
        this.signupFunction = function () {
            if (!_this.firstName) {
                _this.toastr.warning("Enter First Name");
            }
            else if (!_this.lastName) {
                _this.toastr.warning("Enter Last Name");
            }
            else if (!_this.email) {
                _this.toastr.warning("Enter Email");
            }
            else if (!_this.phone) {
                _this.toastr.warning("Enter Phone Number");
            }
            else if (!_this.role) {
                _this.toastr.warning("Select Role");
            }
            else if (!_this.password) {
                _this.toastr.warning("Enter Password");
            }
            else if (!_this.passConf) {
                _this.toastr.warning("Enter Confirm Password");
            }
            else if (_this.password != _this.passConf) {
                _this.toastr.warning("Password Doesn't Match");
            }
            else {
                var signupData = {
                    firstName: _this.firstName,
                    lastName: _this.lastName,
                    email: _this.email,
                    countyCode: _this.countyCode,
                    phone: _this.phone,
                    role: _this.role,
                    password: _this.password,
                    passConf: _this.passConf,
                };
                console.log(signupData);
                //handling observable
                _this.appService.signupFunction(signupData).subscribe(function (apiResponse) {
                    console.log(apiResponse);
                    if (apiResponse.status === 200) {
                        _this.toastr.success("Signup Successfull");
                        setTimeout(function () {
                            _this.Router.navigate(['/signin']);
                        }, 2000);
                    }
                    else {
                        _this.toastr.error(apiResponse.message);
                    }
                }, function (err) {
                    _this.toastr.error('Some error occured');
                });
            } //end of else condition
        }; //signup function end here
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/user/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/user/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user/user.module.ts":
/*!*************************************!*\
  !*** ./src/app/user/user.module.ts ***!
  \*************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/user/signin/signin.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/user/signup/signup.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");







// form module

//toastr

var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    { path: 'signin', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"] },
                    { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"] },
                ])
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vivek/my/meetplan/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
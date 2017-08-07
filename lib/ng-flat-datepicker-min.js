!function(){"use strict";function e(e,a,t,n){return{restrict:"A",require:"ngModel",scope:{config:"=datepickerConfig"},link:function(s,r,i,o){function c(e){u===e.target||u[0].contains(e.target)||e.target===r[0]||(t.off("click",c),s.$apply(function(){s.calendarCursor=g||p,s.pickerDisplayed=s.showMonthsList=s.showYearsList=!1}))}function l(){r.wrap('<div class="ng-flat-datepicker-wrapper"></div>'),a(u)(s),r.after(u),angular.isDefined(o.$modelValue)&&moment.isDate(o.$modelValue)&&(s.calendarCursor=o.$modelValue)}function d(e){var a=[],e=moment.utc(e),t=moment(e).date(1),n=moment(e).date(e.daysInMonth()),r=moment(t),i=moment(n);r=0===t.weekday()?r:r.weekday(0),i=6===n.weekday()?i:i.weekday(6);for(var o=[],c=moment(r);c.isBefore(moment(i).add(1,"days"));c.add(1,"days")){var l=!s.config.minDate||c.isAfter(s.config.minDate,"day"),d=!s.config.maxDate||c.isBefore(s.config.maxDate,"day"),m=c.isAfter(p),u=s.config.allowFuture||!m,f={date:moment(c).toDate(),isToday:c.isSame(p,"day"),isInMonth:c.isSame(t,"month"),isSelected:c.isSame(g,"day"),isSelectable:l&&d&&u};o.push(f),6!==c.weekday()&&c!==i||(a.push(o),o=[])}return a}function m(){s.currentWeeks.forEach(function(e,a){e.forEach(function(e,t){s.currentWeeks[a][t].isSelected=!1})})}var u=angular.element(e.get("datepicker.html")),g="",p=moment.utc(),f={allowFuture:!0,dateFormat:null,minDate:null,maxDate:null};s.config=angular.extend(f,s.config),angular.isDefined(s.config.minDate)&&moment.utc(s.config.minDate).subtract(1,"day"),angular.isDefined(s.config.maxDate)&&moment.utc(s.config.maxDate).add(1,"day"),s.calendarCursor=p,s.currentWeeks=[],s.daysNameList=n.getDaysNames(),s.monthsList=moment.months(),s.yearsList=n.getYearsList(),s.pickerDisplayed=!1,s.$watch(function(){return o.$modelValue},function(e){e&&(g=s.calendarCursor=moment.utc(e,s.config.dateFormat))}),s.$watch("calendarCursor",function(e){s.currentWeeks=d(e)}),r.bind("click",function(e){s.$apply(function(){s.pickerDisplayed=!0,t.on("click",c)})}),l(),s.prevMonth=function(){s.calendarCursor=moment(s.calendarCursor).subtract(1,"months")},s.nextMonth=function e(){s.calendarCursor=moment(s.calendarCursor).add(1,"months")},s.selectMonth=function e(a){s.showMonthsList=!1,s.calendarCursor=moment(s.calendarCursor).month(a)},s.selectYear=function e(a){s.showYearsList=!1,s.calendarCursor=moment(s.calendarCursor).year(a)},s.selectDay=function(e){(e.isSelectable&&!e.isFuture||s.config.allowFuture&&e.isFuture)&&(m(),e.isSelected=!0,o.$setViewValue(moment.utc(e.date).format(s.config.dateFormat)),o.$render(),s.pickerDisplayed=!1)}}}}angular.module("ngFlatDatepicker",[]).directive("ngFlatDatepicker",e),e.$inject=["$templateCache","$compile","$document","datesCalculator"]}(),function(){"use strict";function e(){function e(){for(var e=[],a=2005;a<=moment().year();a++)e.push(a);return e}function a(){for(var e=[],a=0;a<7;a++)e.push(moment().weekday(a).format("ddd"));return e}return{getYearsList:e,getDaysNames:a}}angular.module("ngFlatDatepicker").factory("datesCalculator",e)}(),angular.module("ngFlatDatepicker").run(["$templateCache",function(e){e.put("datepicker.html",'<div class="ng-flat-datepicker" ng-show="pickerDisplayed">\n    <div class="ng-flat-datepicker-table-header-bckgrnd"></div>\n    <table>\n        <caption>\n            <div class="ng-flat-datepicker-header-wrapper">\n                <span class="ng-flat-datepicker-arrow ng-flat-datepicker-arrow-left" ng-click="prevMonth()">\n                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="50" y="50" viewBox="0 0 100 100" xml:space="preserve">\n                        <polygon points="64.8,36.2 35.2,6.5 22.3,19.4 51.9,49.1 22.3,78.8 35.2,91.7 77.7,49.1" />\n                    </svg>\n                </span>\n                <div class="ng-flat-datepicker-header-year">\n                                       <div class="ng-flat-datepicker-custom-select-box" outside-click="showYearsList = false">\n                        <span class="ng-flat-datepicker-custom-select-title" ng-click="showYearsList = !showYearsList; showMonthsList = false" ng-class="{selected: showYearsList }">{{ calendarCursor.isValid() ? calendarCursor.format(\'YYYY\') : "" }}</span>\n                        <div class="ng-flat-datepicker-custom-select" ng-show="showYearsList">\n                            <span ng-repeat="yearNumber in yearsList" ng-click="selectYear(yearNumber)">{{ yearNumber }}</span>\n                        </div>\n                    </div>\n  <div class="ml10 ng-flat-datepicker-custom-select-box" outside-click="showMonthsList = false">\n                        <span class="ng-flat-datepicker-custom-select-title ng-flat-datepicker-month-name" ng-click="showMonthsList = !showMonthsList; showYearsList = false" ng-class="{selected: showMonthsList }">{{ calendarCursor.isValid() ? calendarCursor.format(\'MMMM\') : "" }}</span>\n                        <div class="ng-flat-datepicker-custom-select" ng-show="showMonthsList">\n                            <span ng-repeat="monthName in monthsList" ng-click="selectMonth(monthName); showMonthsList = false">{{ monthName }}</span>\n                        </div>\n                    </div>\n               </div>\n                <span class="ng-flat-datepicker-arrow ng-flat-datepicker-arrow-right" ng-click="nextMonth()">\n                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="50" y="50" viewBox="0 0 100 100" xml:space="preserve">\n                        <polygon points="64.8,36.2 35.2,6.5 22.3,19.4 51.9,49.1 22.3,78.8 35.2,91.7 77.7,49.1" />\n                    </svg>\n                </span>\n            </div>\n        </caption>\n        <tbody>\n            <tr class="days-head">\n                <td class="day-head" ng-repeat="dayName in daysNameList">{{ dayName }}</td>\n            </tr>\n            <tr class="days" ng-repeat="week in currentWeeks">\n                <td ng-repeat="day in week" ng-click="selectDay(day)" ng-class="[\'day-item\', { \'isToday\': day.isToday, \'isInMonth\': day.isInMonth, \'isDisabled\': !day.isSelectable, \'isSelected\': day.isSelected }]">{{ day.date | date:\'dd\' }}</td>\n            </tr>\n        </tbody>\n    </table>\n</div>\n')}]);
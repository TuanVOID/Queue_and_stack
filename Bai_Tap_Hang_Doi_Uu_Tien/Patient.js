"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient() {
        this.data = [];
    }
    Patient.prototype.enqueue = function (item, code) {
        this.data.push([code, item]);
        this.data.sort(function (a, b) {
            if (b > a) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    Patient.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return null;
        }
        else {
            var patientOut = this.data[0];
            this.data.splice(0, 1);
            return patientOut;
        }
    };
    Patient.prototype.size = function () {
        return this.data.length;
    };
    Patient.prototype.isEmpty = function () {
        return this.data.length === 0;
    };
    return Patient;
}());
exports.Patient = Patient;

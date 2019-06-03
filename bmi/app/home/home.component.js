"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.textFieldValue = "";
    }
    HomeComponent.prototype.onButtonTap = function (weight, feet, inches) {
        this.bmi = 0;
        var newinches = Number((feet) * 12) + Number(inches);
        var meters = Number(newinches * 0.0254);
        var heightsquared = meters * meters;
        if (feet != null && inches != null && weight != null) {
            if (heightsquared != 0) {
                this.bmi = Number(weight) / heightsquared;
            }
            else {
                alert("your entered values are incorrect");
            }
            if (this.bmi > 30) {
                this.category = "obese";
            }
            else if (this.bmi > 25 && this.bmi < 29.99) {
                this.category = "overweight";
            }
            else if (this.bmi > 18.5 && this.bmi < 24.99) {
                this.category = "healthy";
            }
            else if (this.bmi < 18.5) {
                this.category = "underweight";
            }
            alert(this.category);
        }
        else {
            alert("Please fill the fields");
        }
        console.log("Button was pressed");
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ["./home.component.css"]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQVNsRDtJQW1DSTtRQWxDQSxtQkFBYyxHQUFXLEVBQUUsQ0FBQztJQW1DNUIsQ0FBQztJQS9CRCxtQ0FBVyxHQUFYLFVBQVksTUFBYyxFQUFFLElBQVksRUFBRSxNQUFjO1FBQ3BELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDeEMsSUFBSSxhQUFhLEdBQUcsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNwQyxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLElBQUksSUFBSSxNQUFNLElBQUUsSUFBSSxFQUFFO1lBQ2hELElBQUksYUFBYSxJQUFJLENBQUMsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsYUFBYSxDQUFDO2FBQzdDO2lCQUFNO2dCQUNILEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO2FBQzdDO1lBQ0QsSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLEVBQUUsRUFBRTtnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQzthQUMzQjtpQkFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFO2dCQUMxQyxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQzthQUNoQztpQkFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQzthQUM3QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQzthQUNqQztZQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7U0FDdkI7YUFBTTtZQUNILEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1NBQ25DO1FBR0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFNRCxnQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQXZDUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztTQUN0QyxDQUFDOztPQUNXLGFBQWEsQ0F3Q3pCO0lBQUQsb0JBQUM7Q0FBQSxBQXhDRCxJQXdDQztBQXhDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEdyaWRMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9ncmlkLWxheW91dFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vaG9tZS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHRleHRGaWVsZFZhbHVlOiBzdHJpbmcgPSBcIlwiO1xuICAgIGJtaTogbnVtYmVyO1xuICAgIGNhdGVnb3J5OiBzdHJpbmc7XG5cbiAgICBvbkJ1dHRvblRhcCh3ZWlnaHQ6IG51bWJlciwgZmVldDogbnVtYmVyLCBpbmNoZXM6IG51bWJlcik6IHZvaWQge1xuICAgICAgICB0aGlzLmJtaSA9IDA7XG4gICAgICAgIGxldCBuZXdpbmNoZXMgPSBOdW1iZXIoKGZlZXQpICogMTIpICsgTnVtYmVyKGluY2hlcyk7XG4gICAgICAgIGxldCBtZXRlcnMgPSBOdW1iZXIobmV3aW5jaGVzICogMC4wMjU0KTtcbiAgICAgICAgbGV0IGhlaWdodHNxdWFyZWQgPSBtZXRlcnMgKiBtZXRlcnM7XG4gICAgICAgIGlmIChmZWV0ICE9IG51bGwgJiYgaW5jaGVzICE9IG51bGwgJiYgd2VpZ2h0IT1udWxsKSB7XG4gICAgICAgICAgICBpZiAoaGVpZ2h0c3F1YXJlZCAhPSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ibWkgPSBOdW1iZXIod2VpZ2h0KSAvIGhlaWdodHNxdWFyZWQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwieW91ciBlbnRlcmVkIHZhbHVlcyBhcmUgaW5jb3JyZWN0XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ibWkgPiAzMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIm9iZXNlXCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm1pID4gMjUgJiYgdGhpcy5ibWkgPCAyOS45OSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcIm92ZXJ3ZWlnaHRcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5ibWkgPiAxOC41ICYmIHRoaXMuYm1pIDwgMjQuOTkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5ID0gXCJoZWFsdGh5XCI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYm1pIDwgMTguNSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBcInVuZGVyd2VpZ2h0XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydCh0aGlzLmNhdGVnb3J5KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJQbGVhc2UgZmlsbCB0aGUgZmllbGRzXCIpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgcHJlc3NlZFwiKTtcbiAgICB9XG5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIH1cbn1cbiJdfQ==
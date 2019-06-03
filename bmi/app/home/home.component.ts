import { Component, OnInit } from "@angular/core";
import { GridLayout } from "ui/layouts/grid-layout";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    textFieldValue: string = "";
    bmi: number;
    category: string;

    onButtonTap(weight: number, feet: number, inches: number): void {
        this.bmi = 0;
        let newinches = Number((feet) * 12) + Number(inches);
        let meters = Number(newinches * 0.0254);
        let heightsquared = meters * meters;
        if (feet != null && inches != null && weight!=null) {
            if (heightsquared != 0) {
                this.bmi = Number(weight) / heightsquared;
            } else {
                alert("your entered values are incorrect")
            }
            if (this.bmi > 30) {
                this.category = "obese";
            } else if (this.bmi > 25 && this.bmi < 29.99) {
                this.category = "overweight";
            } else if (this.bmi > 18.5 && this.bmi < 24.99) {
                this.category = "healthy";
            } else if (this.bmi < 18.5) {
                this.category = "underweight";
            }
            alert(this.category)
        } else {
            alert("Please fill the fields");
        }


        console.log("Button was pressed");
    }


    constructor() {
    }

    ngOnInit(): void {
    }
}

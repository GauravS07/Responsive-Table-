import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-table-accordion',
  templateUrl: './table-accordion.component.html',
  styleUrls: ['./table-accordion.component.css']
})
export class TableAccordionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // $(function () {
    //   $(".fold-table tr.view").on("click", function (event) {
    //     alert("hey");
    //     $(this).toggleClass("open").next(".fold").toggleClass("open");
    //   });
    // });
  }
  openAccordin(event: any){
    $(event.currentTarget).toggleClass("open").next(".fold").toggleClass("open");

  }



}


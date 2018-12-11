import { Input, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { InputType } from "../enums/xp.input.types";

export class InputBase implements OnInit {


  private static _idCounter: number = 0;

  protected Id: string;

  @Input('Title')
  public Title: string = '';

  @Input('Name')
  public Name: string = '';


  @Input('Type')
  public Type: InputType = InputType.Text;

  constructor(protected Form: NgForm) {

  }

  ngOnInit(): void {

    if (!this.Name || !this.Name.trim())
      throw new Error("Input name is reuqired");

    if (!this.Form)
      throw new Error("Text Input must be placed inside form parent");


    this.Id = `xpc_${this.Name}_${++InputBase._idCounter}`;
  }

}

import { Component, Input, ViewContainerRef, Host, OnInit, Output, EventEmitter, SimpleChanges, ViewChild } from '@angular/core';
import { InputBase } from '../../shared/bases/InputBase';
import { NgForm, AbstractControl, NgModel } from '@angular/forms';
import { InputType } from '../../shared/enums/xp.input.types';

import { v4 as uuid } from 'uuid';
@Component({
  selector: 'XP-TextInput',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss']
})
export class TextInputComponent extends InputBase implements OnInit {




  @Input('Placeholder')
  public Placeholder: string;

  @Input('MaxLength')
  public MaxLength: string;

  @Input('MinLength')
  public MinLength: string;

  @Input('Value')
  public Value: any = '';
  @Output('Value')
  public ValueChange = new EventEmitter();

  @ViewChild("Model")
  public Model: NgModel;


  constructor(@Host() Form: NgForm) {
    super(Form);


  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngOnInit(): void {


   // attach this control to parent control
    this.Form.addControl(this.Model);

    super.ngOnInit();

  }


}

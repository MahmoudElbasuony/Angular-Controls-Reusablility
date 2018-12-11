export class RadioOption {

  constructor(public Value: any, public Label: string) {


  }
}

export class RadioOptions  {

  public Options: RadioOption[] = [];


  constructor(public Name: string, public Value: any) {

  }
}



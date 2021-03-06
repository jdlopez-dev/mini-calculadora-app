import { ICalculator } from './ICalculator';

export class Calculator implements ICalculator {
  public presentValue: number = 0;
  public storedValue: number = 0;

  public operator: string | undefined;
  public screenValue: number | string = 0;
  public needReset: boolean = false;

  public getScreenLength(): number {
    if (typeof this.screenValue === 'string') {
      return this.screenValue.length;
    }
    return this.screenValue.toString().length;
  }
}

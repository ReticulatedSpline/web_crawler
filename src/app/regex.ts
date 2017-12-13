export class Regex {
  readonly name: string;
  readonly expr: string;
  found: string [];

  constructor(name: string, expr: string) {
    this.name = name;
    this.expr = expr;
    this.found = [];
  }
}

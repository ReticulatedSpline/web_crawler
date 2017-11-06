export class Regex {
  name: string;
  expr: string;
  found: string[];

  constructor(name: string, expr: string) {
    this.name = name;
    this.expr = expr;
  }
}

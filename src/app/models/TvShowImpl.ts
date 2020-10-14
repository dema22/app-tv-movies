export class TvShowImpl {
  // Remember to use typescript convention (_ for prrivate properties, and getters and setters with the name of the property)
  constructor(
    private _name?: string,
    private _genre?: string,
    private _productionCompany?: string
  ) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name= name;
  }

  get genre(): string {
    return this._genre;
  }

  set genre(genre: string) {
    this._genre = genre;
  }

  get productionCompany(): string {
    return this._productionCompany;
  }

  set productionCompany (productionCompany: string) {
    this._productionCompany = productionCompany;
  }
}

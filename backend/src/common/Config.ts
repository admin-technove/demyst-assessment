export class Config {
  public port: number;
  public apiUrl: string;

  constructor() {
    console.log(process.env)
    this.port = parseInt(process.env.PORT || '5000', 10);
    this.apiUrl =
      process.env.API_URL ||
      'http://localhost:3000/api.xro/2.0';
  }
}

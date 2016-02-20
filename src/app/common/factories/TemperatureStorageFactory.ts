export class TemperatureStorageFactory {
  public cityName: string;
  public temperature: number;

  constructor(cityName: string, temperature: number) {
    this.cityName = cityName;
    this.temperature = temperature;
  }
}
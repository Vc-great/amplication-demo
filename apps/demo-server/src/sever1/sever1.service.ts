import { Injectable } from "@nestjs/common";

@Injectable()
export class Sever1Service {
  constructor() {}
  async User(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}

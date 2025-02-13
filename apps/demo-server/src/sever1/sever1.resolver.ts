import * as graphql from "@nestjs/graphql";
import { Sever1Service } from "./sever1.service";

export class Sever1Resolver {
  constructor(protected readonly service: Sever1Service) {}

  @graphql.Query(() => String)
  async User(
    @graphql.Args("args")
    args: string
  ): Promise<string> {
    return this.service.User(args);
  }
}

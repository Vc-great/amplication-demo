import { Module } from "@nestjs/common";
import { Sever1Service } from "./sever1.service";
import { Sever1Controller } from "./sever1.controller";
import { Sever1Resolver } from "./sever1.resolver";

@Module({
  controllers: [Sever1Controller],
  providers: [Sever1Service, Sever1Resolver],
  exports: [Sever1Service],
})
export class Sever1Module {}

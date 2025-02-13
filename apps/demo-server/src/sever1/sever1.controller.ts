import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { Sever1Service } from "./sever1.service";

@swagger.ApiTags("sever1s")
@common.Controller("sever1s")
export class Sever1Controller {
  constructor(protected readonly service: Sever1Service) {}

  @common.Get("/:id/user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async User(
    @common.Query()
    query: string
  ): Promise<string> {
        return this.service.User(query);
      }
}

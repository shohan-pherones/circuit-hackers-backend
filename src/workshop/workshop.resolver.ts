import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Workshop } from '@prisma/client';
import { CreateWorkshopInput } from './dto/create-workshop.input';
import { WorkshopGQL } from './workshop.model';
import { WorkshopService } from './workshop.service';

@Resolver(() => WorkshopGQL)
export class WorkshopResolver {
  constructor(private workshopService: WorkshopService) {}

  @Query(() => [WorkshopGQL])
  async workshops(): Promise<Workshop[]> {
    return this.workshopService.findAllWorkshops();
  }

  @Mutation(() => WorkshopGQL)
  async createWorkshop(
    @Args('data') data: CreateWorkshopInput,
  ): Promise<Workshop> {
    return this.workshopService.createWorkshop(data);
  }

  @Query(() => WorkshopGQL, { nullable: true })
  async workshop(@Args('id') id: string): Promise<Workshop | null> {
    return this.workshopService.findWorkshopById(id);
  }
}

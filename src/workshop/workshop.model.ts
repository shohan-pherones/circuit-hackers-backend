import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class WorkshopGQL {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  image: string;

  @Field()
  date: string;

  @Field()
  location: string;

  @Field()
  maxAttendees: number;

  @Field()
  fees: number;

  @Field(() => [String])
  activities: string[];

  @Field()
  host: string;

  @Field(() => [String])
  instructors: string[];

  @Field()
  createdAt: Date;
}

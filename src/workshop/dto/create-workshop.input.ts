import { Field, InputType } from '@nestjs/graphql';
import {
  ArrayMinSize,
  IsArray,
  IsISO8601,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Min,
} from 'class-validator';

@InputType()
export class CreateWorkshopInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description: string;

  @Field()
  @IsUrl()
  @IsNotEmpty()
  image: string;

  @Field()
  @IsISO8601()
  @IsNotEmpty()
  date: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  location: string;

  @Field()
  @IsInt()
  @IsPositive()
  maxAttendees: number;

  @Field()
  @IsNumber()
  @Min(0)
  fees: number;

  @Field(() => [String])
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  activities: string[];

  @Field()
  @IsString()
  @IsNotEmpty()
  host: string;

  @Field(() => [String])
  @IsArray()
  @ArrayMinSize(1)
  @IsString({ each: true })
  instructors: string[];
}

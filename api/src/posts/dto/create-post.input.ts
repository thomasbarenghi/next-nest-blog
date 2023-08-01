import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePostInput {
  @Field()
  title: string;
  @Field()
  shortDescription: string;
  @Field()
  description: string;
  @Field(() => Int)
  price: number;
  @Field()
  image: string;
  @Field()
  authorId: string;
}

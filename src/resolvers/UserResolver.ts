import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { UserEntity } from "../entity/User";

@Resolver()
export class UserResolver {
  @Query(() => [UserEntity])
  async users() {
    return await UserEntity.find();
  }

  @Mutation(() => UserEntity)
  async createUser(
    @Arg("username") username: string,
    @Arg("email") email: string
  ): Promise<UserEntity> {
    const user = UserEntity.create({ username, email });
    await user.save();
    return user;
  }

  @Mutation(() => UserEntity, { nullable: true })
  async updateUser(
    // @Arg("id") id: number,
    @Arg("username", { nullable: true }) username: string,
    @Arg("email", { nullable: true }) email: string
  ): Promise<UserEntity | null> {
    const user = await UserEntity.findOneBy({ username});
    if (!user) {
      return null;
    }

    if (username !== undefined) {
      user.username = username;
    }
    if (email !== undefined) {
      user.email = email;
    }

    await user.save();
    return user;
  }
  
}

import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { connectionSource } from "../config/typeorm";
import { Post } from "../../post/entities/post.entity";

export class PostSeeder1722521818882 implements Seeder {
    track = false;

    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
        const repository = connectionSource.getRepository(Post);
        await repository.insert([
            {
                id: 1,
                title: 'this is 1',
                userId: 1
            },
            {
                id: 1,
                title: 'this is 1',
                userId: 2
            },
            {
                id: 1,
                title: 'this is 1',
                userId: 1
            },
        ]);
    }
}

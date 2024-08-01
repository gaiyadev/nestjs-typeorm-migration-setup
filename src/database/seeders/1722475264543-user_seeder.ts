import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../../user/entities/user.entity';
import { connectionSource } from '../config/typeorm';

export class UserSeeder1722475264543 implements Seeder {
  track = false;

  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = connectionSource.getRepository(User);
    await repository.insert([
      {
        id: 1,
        name: 'Caleb',
      },
      {
        id: 2,
        name: 'Doe',
      },
      {
        id: 3,
        name: 'john',
      },
    ]);
  }
}

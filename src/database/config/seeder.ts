import { runSeeders } from 'typeorm-extension';
import { connectionSource } from './typeorm';

export const db = connectionSource
  .initialize()
  .then(async () => {
    await connectionSource.synchronize(false);
    await runSeeders(connectionSource);
    process.exit();
  })
  .catch((err) => console.log(err));

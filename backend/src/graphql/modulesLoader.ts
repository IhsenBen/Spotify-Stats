import { createApplication } from 'graphql-modules';
import { usersModule } from './modules/user/users';
import { albumModule } from './modules/album/album';
import { artistModule } from './modules/artist/artist';

export const application = createApplication({
  modules: [usersModule, albumModule, artistModule],
});
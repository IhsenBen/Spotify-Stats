import { createApplication } from 'graphql-modules';
import { usersModule } from './modules/user/users';
import { albumModule } from './modules/album/album';
import { artistModule } from './modules/artist/artist';
import { trackModule } from './modules/track/track';

export const application = createApplication({
  modules: [usersModule, albumModule, artistModule, trackModule],
});

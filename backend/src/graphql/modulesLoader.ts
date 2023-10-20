import { createApplication } from 'graphql-modules';
import { usersModule } from './modules/user/users';

export const application = createApplication({
  modules: [usersModule],
});
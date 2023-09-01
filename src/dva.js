import { create } from 'dva-core';
import models from "./models";

export default function configStore() {
  const app = create({
      onError(e) {
          console.error('出错了:' + e.message);
      }
  });
  models.forEach((model) => {
      app.model(model);
  });
  app.start();
  return app._store;
}
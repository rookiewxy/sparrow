/*
 * @Description: 
 * @Autor: wxy
 * @Date: 2022-09-27 20:17:23
 * @LastEditors: wxy
 * @LastEditTime: 2022-10-16 16:35:29
 */
import { Application } from 'midway-mirror';

export default (app: Application) => {
  const { controller } = app.io;

  const { material, home } = controller;
  const logger = app.getLogger();

  const routers: [string, () => {}][] = [
    ['home.project.list', home.project.list],
    ['material.index.getBlocks', material.index.getBlocks],

    ['home.setting.workFolder', home.setting.getWorkFolder],
    ['home.setting.setWorkFolderBySub', home.setting.setWorkFolderBySub],

    ['home.index.init', home.index.init]
  ];

  routers.forEach(([eventName, handle]) => {
    app.io.route(eventName, async function(this: any) {
      const { args } = this;
      const params = args[0];
      const callback = args[args.length - 1];
      try {
        this.args = params;
        const data = await handle.call(this);
        logger.info(eventName);
        callback(null, data);
      } catch (error) {
        logger.error(error);
        callback({
          code: error.code,
          message: error.message,
        });
      }
    });
  });
};

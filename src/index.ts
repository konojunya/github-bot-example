import { Application } from "probot"; // eslint-disable-line no-unused-vars

export = (app: Application) => {
  app.on("issues.opened", async context => {
    const issueComment = context.issue({
      body:
        "かしこま！\n![](https://stat.ameba.jp/user_images/20150620/16/s620810/d2/69/j/o0500028113342675152.jpg?caw=800)"
    });
    await context.github.issues.createComment(issueComment);
  });
};

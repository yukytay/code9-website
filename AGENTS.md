# Code9 publishing

After completing and validating any Code9 website change:

1. Publish the validated Sites source to the configured ChatGPT Sites project.
2. Sync the equivalent user-facing change to `yukytay/code9-website` on GitHub `main`.
3. Preserve the GitHub repository's Vercel bootstrap and static-export structure; do not force-push or replace its history with the Sites history.
4. Confirm that Vercel automatically created a successful production deployment from the new GitHub commit.

Do not finish a website-change task after updating only one hosting destination unless the user explicitly requests that.

Docs:
https://vitejs.dev/
https://www.jenkins.io/

WORKFLOW

nvm ls-remote 
nvm install v16.18.1
nvm alias default 16.18.1 node v16.16.0 -->v16.17.1
pnpm -v 7.14.1 -->7.14.2
# npm install pnpm -g ? for upgrade ?
curl -fsSL https://get.pnpm.io/install.sh | sh -  OK for upgrade
pnpm create vite TapeScriptDemoSite --template vanilla-ts
pnpm install
pnpm install -D eslint
pnpm run dev --host 192.168.1.200

#DEPLOYMENT
pnpm run build && scp -r dist k3sclient10:/tmp && ssh k3sclient10 "sudo rm -rf /mnt/demosite/dist/*"  && ssh k3sclient10 "sudo cp -a /tmp/dist/* /mnt/demosite/dist/" \
kubectl rollout restart deployment edgecenter-ml-depl -n webs-dev

Deployment by jenkins tag 

git tag -a prod0.0.2 -m "prod0.0.2" && git push origin --tags
git tag -a v0.0.34 -m "v0.0.34" && git push origin --tags

tags
+refs/tags/v*’:’refs/remotes/origin/tags/v*
*/tags/*

main (original)
+refs/heads/*:refs/remotes/origin/*

new server http://144.21.36.80:32000/  tags


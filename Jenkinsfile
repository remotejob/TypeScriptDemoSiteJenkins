containerTemplate(yaml: '''

apiVersion: v1
kind: Pod
metadata:
  name: node
  labels:
    app: node
spec:
 
  containers:
  - image: node:latest
    command:
      - "sleep"
      - "604800"
    imagePullPolicy: IfNotPresent
    name: ubuntu
    volumeMounts:
    - name: volv
      mountPath: /longhorndisk
  volumes: 
  - name: volv
    persistentVolumeClaim:
      claimName: longhorn-demoite-pvc

  restartPolicy: Always

    '''
  ) {

    node(POD_LABEL) {

        stage('Get a Node project') {
            git url: 'https://github.com/remotejob/TypeScriptDemoSiteJenkins.git', branch: 'main'
            container('node') {
                stage('Build a Node project') {
                    sh '''                    
                    pwd                    
                    curl -fsSL https://get.pnpm.io/install.sh | bash -
                    export PNPM_HOME="/root/.local/share/pnpm"
                    export PATH="$PNPM_HOME:$PATH"
                    /root/.local/share/pnpm/pnpm install
                    /root/.local/share/pnpm/pnpm build

                    ls -trl
                    ls /

 
                    '''
                }
            }
        }

    }
}


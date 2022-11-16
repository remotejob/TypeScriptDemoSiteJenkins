podTemplate(containers: [
    containerTemplate(name: 'node', image: 'node', command: 'sleep', args: '99d')
  ]) {

    node(POD_LABEL) {

        stage('Get a Node project') {
            git url: 'https://github.com/remotejob/TypeScriptDemoSiteJenkins.git', branch: 'main'
            container('node') {
                stage('Build a Node project') {
                    sh '''
                    
                    pwd
                    ls -trl
                    curl -fsSL https://get.pnpm.io/install.sh | bash -
                    export PNPM_HOME="/root/.local/share/pnpm"
                    export PATH="$PNPM_HOME:$PATH"
                    /root/.local/share/pnpm/pnpm install
                    /root/.local/share/pnpm/pnpm build

 
                    '''
                }
            }
        }

    }
}


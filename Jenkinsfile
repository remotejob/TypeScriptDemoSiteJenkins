podTemplate(containers: [
    containerTemplate(name: 'node', image: 'node', command: 'sleep', args: '99d')
  ]) {

    node(POD_LABEL) {

        stage('Get a Node project') {
            git url: 'https://github.com/remotejob/TypeScriptDemoSiteJenkins.git', branch: 'main'
            container('node') {
                stage('Build a Node project') {
                    sh '''

                    ls -trl
 
                    '''
                }
            }
        }

    }
}


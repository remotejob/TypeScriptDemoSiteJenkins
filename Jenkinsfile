pipeline {

    // agent {
    //     any
    //     // docker {
    //     //     image 'node:latest'
    //     //     args '-u root'
    //     // }
    // }

    // environment {
    //     TAG_NAME = sh(returnStdout: true, script: "git describe --tags").trim()

    // }

    // stages {
    //     stage('Build') {
    //         steps {
    //             echo 'Building...'
    //             sh 'curl -fsSL https://get.pnpm.io/install.sh | bash -'
    //             sh 'export PNPM_HOME="/root/.local/share/pnpm"'
    //             sh 'export PATH="$PNPM_HOME:$PATH"'
    //             sh '/root/.local/share/pnpm/pnpm install'
    //             sh '/root/.local/share/pnpm/pnpm build'
                
    //         }
    //     }
        stage('Deploy') {

            // when { tag "v*"} 
            steps {
               
                echo 'Deploying Staging'
                echo env.TAG_NAME
                // sh 'ls -trl dist' 
                            
                sshagent(credentials: ['k3s']) {
                    
                    sh '''
                    [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                    ssh-keyscan -t rsa,dsa 129.151.192.192 >> ~/.ssh/known_hosts                   
                    ssh ubuntu@129.151.192.192 'ls -trl'
                    '''

                }                
                 
            }
        }
         stage('DeployProd') {
            when { tag "prod*"}
            steps {

                echo 'Deploying Production'
                echo env.TAG_NAME

            }


         }

    }



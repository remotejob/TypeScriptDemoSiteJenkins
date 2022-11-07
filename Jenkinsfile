pipeline {

    agent {
        docker {
            image 'node:latest'
            args '-u root'
        }
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'curl -fsSL https://get.pnpm.io/install.sh | bash -'
                sh 'export PNPM_HOME="/root/.local/share/pnpm"'
                sh 'export PATH="$PNPM_HOME:$PATH"'
                sh '/root/.local/share/pnpm/pnpm install'
                sh '/root/.local/share/pnpm/pnpm build'
                
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
                sh 'ls -trl'               
                sshagent(credentials: ['k3s']) {
                    
                    sh '''
                    [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                    ssh-keyscan -t rsa,dsa 129.151.192.192 >> ~/.ssh/known_hosts                   
                    ssh ubuntu@129.151.192.192 'ls -trl'

                    '''

                } 
                
                 
            }
        }
    }
}


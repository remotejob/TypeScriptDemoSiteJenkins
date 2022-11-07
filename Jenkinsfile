pipeline {

    agent {
        docker {
            image 'node'
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
                sh 'pnpm install'
                sh 'pnpm build'
                
            }
        }
    }
}


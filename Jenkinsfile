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
                sh 'source /root/.bashrc'
                sh 'pnpm install'
                sh 'pnpm build'
                
            }
        }
    }
}


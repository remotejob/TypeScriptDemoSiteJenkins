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
            }
        }
    }
}

